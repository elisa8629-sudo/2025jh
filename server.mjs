import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { execFile } from "node:child_process";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL(".", import.meta.url));
const publicDir = join(root, "public");
const preferredPort = Number(process.env.PORT || 4173);
const host = process.env.HOST || "127.0.0.1";

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml"
};

function json(res, status, body) {
  res.writeHead(status, { "Content-Type": "application/json; charset=utf-8" });
  res.end(JSON.stringify(body));
}

async function readJson(req) {
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  return JSON.parse(Buffer.concat(chunks).toString("utf8") || "{}");
}

function buildClaudePrompt(payload) {
  if (payload.formPrompt) {
    const tone = payload.action === "formal" ? "更正式" : payload.action === "concise" ? "更精簡" : payload.action === "compliance" ? "進行行政與內控檢核" : "草擬正式文件";
    return [
      "你是台北市大安區金華國小家長會的行政公文助理。",
      "請使用繁體中文，語氣正式清楚，輸出可供家長會行政流程使用的文字。",
      `任務：${tone}`,
      "",
      payload.formPrompt,
      payload.draft ? `\n既有草稿：\n${payload.draft}` : ""
    ].join("\n");
  }

  const lines = payload.items
    .map((item, index) => `${index + 1}. ${item.name}，數量 ${item.qty}，單價 ${item.price}，小計 ${item.qty * item.price}`)
    .join("\n");

  const base = [
    "你是台北市大安區金華國小家長會的行政公文助理。",
    "請使用繁體中文，產出正式、清楚、可簽核的請購單暨請款公文草稿。",
    "不可捏造法條；法規檢核時請以一般內控、憑證、預算科目、簽核流程風險提示為主。",
    "",
    `申請單位：${payload.unit}`,
    `請款人帳號：${payload.account || "未填"}`,
    `活動日期：${payload.eventDate || "未填"}`,
    `申請日期：${payload.requestDate || "未填"}`,
    `活動說明：${payload.description || "未填"}`,
    "請款明細：",
    lines || "未填",
    `合計金額：${payload.total}`,
    ""
  ];

  if (payload.action === "formal") return `${base.join("\n")}請將下列草稿改寫得更正式，保留事實與金額：\n${payload.draft}`;
  if (payload.action === "concise") return `${base.join("\n")}請將下列草稿改寫得更精簡，保留簽核必要資訊：\n${payload.draft}`;
  if (payload.action === "compliance") return `${base.join("\n")}請對下列草稿做法規與內控檢核，列出可補強項目與建議修正：\n${payload.draft}`;

  return `${base.join("\n")}請輸出公文草稿，格式包含：主旨、說明、擬辦、請款摘要、簽核提醒。`;
}

async function callClaude(payload) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    const error = new Error("ANTHROPIC_API_KEY is not set");
    error.status = 503;
    throw error;
  }

  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01"
    },
    body: JSON.stringify({
      model: process.env.CLAUDE_MODEL || "claude-3-5-sonnet-latest",
      max_tokens: 1400,
      temperature: 0.2,
      messages: [{ role: "user", content: buildClaudePrompt(payload) }]
    })
  });

  const data = await response.json();
  if (!response.ok) {
    const error = new Error(data?.error?.message || "Claude API request failed");
    error.status = response.status;
    throw error;
  }

  return data.content?.map((part) => part.text || "").join("\n").trim();
}

async function serveFile(req, res) {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const requested = url.pathname === "/" ? "/index.html" : url.pathname;
  const safePath = normalize(decodeURIComponent(requested)).replace(/^(\.\.[/\\])+/, "");
  const filePath = join(publicDir, safePath);

  try {
    const body = await readFile(filePath);
    res.writeHead(200, { "Content-Type": mimeTypes[extname(filePath)] || "application/octet-stream" });
    res.end(body);
  } catch {
    const fallback = await readFile(join(publicDir, "index.html"));
    res.writeHead(200, { "Content-Type": mimeTypes[".html"] });
    res.end(fallback);
  }
}

const server = createServer(async (req, res) => {
  if (req.method === "POST" && req.url === "/api/claude") {
    try {
      const payload = await readJson(req);
      const text = await callClaude(payload);
      return json(res, 200, { text, provider: "claude" });
    } catch (error) {
      return json(res, error.status || 500, {
        error: error.message || "Claude request failed",
        provider: "unavailable"
      });
    }
  }

  if (req.method === "HEAD") {
    res.writeHead(200, { "Content-Type": mimeTypes[".html"] });
    return res.end();
  }

  if (req.method !== "GET") return json(res, 405, { error: "Method not allowed" });
  return serveFile(req, res);
});

function listen(port, attempts = 0) {
  server.once("error", (error) => {
    if (error.code === "EADDRINUSE" && attempts < 20) {
      listen(port + 1, attempts + 1);
      return;
    }
    throw error;
  });

  server.listen(port, host, () => {
    const url = `http://localhost:${port}`;
    console.log(`Prototype running at ${url}`);
    if (process.env.OPEN_BROWSER === "1") {
      execFile("open", [url], () => {});
    }
  });
}

listen(preferredPort);
