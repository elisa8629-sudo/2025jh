const icons = {
  dashboard: `<svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 13h6V4H4v9Zm10 7h6V4h-6v16ZM4 20h6v-3H4v3Z"/></svg>`,
  write: `<svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 20h16"/><path d="m14 4 6 6-9 9H5v-6l9-9Z"/></svg>`,
  inbox: `<svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16v12H4z"/><path d="M4 16l4 4h8l4-4"/><path d="M8 10h8"/></svg>`,
  send: `<svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="2"><path d="m22 2-7 20-4-9-9-4 20-7Z"/><path d="M22 2 11 13"/></svg>`,
  flow: `<svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="2"><circle cx="6" cy="6" r="3"/><circle cx="18" cy="6" r="3"/><circle cx="12" cy="18" r="3"/><path d="M9 6h6M7.5 8.5 10.5 15M16.5 8.5 13.5 15"/></svg>`,
  template: `<svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 3h9l3 3v15H6z"/><path d="M15 3v4h4"/><path d="M9 12h6M9 16h6"/></svg>`,
  plus: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>`,
  print: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 8V3h10v5"/><path d="M7 17H5a3 3 0 0 1-3-3v-3a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3h-2"/><path d="M7 14h10v7H7z"/><path d="M17 12h.01"/></svg>`,
  upload: `<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 16V4"/><path d="m7 9 5-5 5 5"/><path d="M20 16v4H4v-4"/></svg>`,
  trash: `<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18"/><path d="M8 6V4h8v2"/><path d="M6 6l1 15h10l1-15"/><path d="M10 11v6M14 11v6"/></svg>`,
  bell: `<svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 6-3 8h18c0-2-3-1-3-8Z"/><path d="M10 20a2 2 0 0 0 4 0"/></svg>`,
  search: `<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg>`,
  check: `<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2"><path d="m5 12 4 4L19 6"/></svg>`
};

const modules = [
  ["dashboard", "總覽儀表板", icons.dashboard],
  ["writer", "各項表單申請", icons.write],
  ["incoming", "收文管理", icons.inbox],
  ["outgoing", "發文管理", icons.send],
  ["tracking", "簽核追蹤", icons.flow],
  ["templates", "公文範本庫", icons.template]
];

const formTypes = [
  { id: "purchase", label: "活動經費請購單" },
  { id: "teacherReward", label: "教師獎勵金申請" },
  { id: "venue", label: "場地借用申請" },
  { id: "receipt", label: "捐款收據開立" },
  { id: "settlement", label: "經費結算報告" },
  { id: "meeting", label: "委員會議紀錄通知" }
];

const teacherRewardUnits = ["教務處", "學務處", "總務處", "輔導室", "幼兒園", "其他"];
const teacherRewardRanks = ["排序一", "排序二", "排序三", "排序四", "排序五", "排序六", "排序七", "排序八"];
const teacherRewardLevels = {
  "全國性活動": [2000, 1500, 1200, 1000, 1000, 1000, 1000, 1000],
  "全市性活動": [800, 700, 600, 500, 500, 500, 500, 500],
  "臺北市體育類分區活動": [500, 300, 200, 100, 100, 100, 100, 100],
  "其他類官方活動": [500, 300, 200, 100, 100, 100, 100, 100]
};

const state = {
  active: "dashboard",
  activeFormType: "purchase",
  form: {
    unit: "家長會",
    account: "700-1234567-001",
    requestDate: "2026-06-22",
    eventDate: "2026-07-05",
    description: "114 學年度親職教育講座場地佈置、講義印製及講師交通補助。",
    items: [
      { name: "講義印製", qty: 120, price: 12, voucherName: "" },
      { name: "場地佈置用品", qty: 1, price: 2600, voucherName: "" },
      { name: "講師交通補助", qty: 1, price: 1200, voucherName: "" }
    ]
  },
  forms: {
    venue: {
      applicant: "家長會",
      place: "視聽教室",
      slot: "2026-07-12 09:00-12:00",
      purpose: "辦理親職教育講座與志工行前說明。"
    },
    receipt: {
      donor: "王小明",
      amount: 3000,
      purpose: "指定捐助故事團共讀材料。"
    },
    settlement: {
      period: "2026-06-01 至 2026-06-30",
      income: 38000,
      expense: 31540,
      note: "六月活動收入與親職講座、故事團材料支出彙整。"
    },
    meeting: {
      time: "2026-07-03 19:00",
      place: "金華國小會議室",
      topics: "1. 暑期活動支援\n2. 導護志工排班\n3. 經費使用追蹤"
    },
    teacherReward: {
      unit: "教務處",
      requestDate: "2026-07-06",
      activityDescription: "依學生家長會獎勵教師指導學生參與校外競賽實施辦法提出申請。",
      checklist: {
        application: true,
        registration: false,
        awardProof: false,
        other: false
      },
      needsResign: false,
      reviewMessage: "後台可更正金額、排序或刪除重複申請；已進入簽核後若內容異動，需重新送簽並重新上傳簽名檔。",
      awards: [
        {
          contestName: "臺北市語文學藝競賽",
          nature: "個人",
          groupSize: 1,
          level: "全市性活動",
          rank: "排序一",
          teacher: "王老師",
          amount: 800
        }
      ]
    }
  },
  nextRequestNo: 29,
  nextIncomingNo: 620,
  createdRequest: null,
  draft: "",
  draftStatus: "Claude API 尚未呼叫。GitHub Pages 靜態版會使用離線草稿；本機 Node 預覽服務可連 Claude API。",
  incomingFilter: { agency: "全部", keyword: "" },
  incomingMessage: "",
  outgoingFilter: "全部",
  selectedDocId: "DOC-114-0618",
  admin: {
    username: "admin",
    password: "pa123456",
    isLoggedIn: false,
    role: "guest",
    displayName: "訪客",
    showPanel: false,
    loginUser: "",
    loginPassword: "",
    newUserName: "",
    newUserPassword: "",
    users: [
      { username: "user01", password: "user1234", displayName: "一般使用者" }
    ],
    defaultCloudPath: "雲端硬碟/家長會文件",
    selectedIncomingIds: [],
    message: "管理者預設帳號 admin，密碼 pa123456"
  },
  templates: [
    {
      title: "親職講座請款",
      category: "活動費用",
      body: "親職教育講座相關講義印製、場地佈置與講師交通補助。",
      used: "昨日使用"
    },
    {
      title: "故事團材料採購",
      category: "團務採購",
      body: "故事團入班共讀活動所需繪本、手作材料與收納用品。",
      used: "本週使用"
    },
    {
      title: "綠手指植栽維護",
      category: "校園維護",
      body: "校園植栽補土、肥料、灑水器材與志工活動耗材。",
      used: "上月使用"
    }
  ]
};

const incomingDocs = [
  { id: "IN-0619", agency: "臺北市政府教育局", title: "114 學年度校園安全維護計畫調查", date: "2026-06-19", status: "待回覆", handler: "秘書組" },
  { id: "IN-0616", agency: "臺北市政府教育局", title: "家長會財務表件電子化作業提醒", date: "2026-06-16", status: "處理中", handler: "財務組" },
  { id: "IN-0618", agency: "金華國小總務處", title: "暑期校舍施工動線協調會議通知", date: "2026-06-18", status: "已分派", handler: "導護" },
  { id: "IN-0614", agency: "金華國小學務處", title: "交通導護志工排班更新", date: "2026-06-14", status: "已歸檔", handler: "導護" },
  { id: "IN-0612", agency: "臺北市家長會聯合會", title: "年度研習與會長交流會報名", date: "2026-06-12", status: "待簽核", handler: "會長" }
];

const signerOptions = {
  2: ["王財務", "陳副會長", "林財務委員"],
  3: ["林會長", "黃代理會長", "王小明"],
  4: ["張出納", "吳出納", "李幹事"],
  5: ["陳會計", "劉會計", "周財務委員"]
};

const incomingStatuses = ["待回覆", "處理中", "已分派", "待簽核"];

const outgoingDocs = [
  { id: "DOC-114-0618", title: "親職教育講座請購單", unit: "家長會", amount: 5240, status: "財務副會長簽核中", current: 2, date: "2026-06-18" },
  { id: "DOC-114-0615", title: "故事團共讀材料請款", unit: "故事團", amount: 3860, status: "會長簽核中", current: 3, date: "2026-06-15" },
  { id: "DOC-114-0611", title: "導護背心更新採購", unit: "導護", amount: 12800, status: "出納付款中", current: 4, date: "2026-06-11" },
  { id: "DOC-114-0608", title: "綠手指植栽耗材", unit: "綠手指", amount: 2190, status: "已領款", current: 6, date: "2026-06-08" },
  { id: "DOC-114-0603", title: "課輔團點心費用", unit: "課輔團", amount: 4480, status: "會計入帳", current: 5, date: "2026-06-03" }
];

const app = document.querySelector("#app");

function money(value) {
  return Number(value || 0).toLocaleString("zh-TW");
}

function total() {
  return state.form.items.reduce((sum, item) => sum + Number(item.qty || 0) * Number(item.price || 0), 0);
}

function activeFormLabel() {
  return formTypes.find((form) => form.id === state.activeFormType)?.label || "活動經費請購單";
}

function updateGenericForm(formId, key, value) {
  if (!state.forms[formId]) return;
  state.forms[formId][key] = ["amount", "income", "expense"].includes(key) ? Number(value || 0) : value;
  state.createdRequest = null;
  render();
}

function updateTeacherChecklist(key, checked) {
  state.forms.teacherReward.checklist[key] = checked;
  state.createdRequest = null;
  render();
}

function updateTeacherAward(index, key, value, manualAdminEdit = false) {
  const form = state.forms.teacherReward;
  const award = form.awards[index];
  if (!award) return;
  const nextAward = { ...award };

  if (key === "groupSize") nextAward[key] = Math.max(nextAward.nature === "團體" ? 3 : 1, Number(value || 0));
  else if (key === "amount") nextAward[key] = Number(value || 0);
  else nextAward[key] = value;

  if (key !== "amount") form.awards[index] = normalizeTeacherAward(nextAward);
  else form.awards[index] = nextAward;

  if (manualAdminEdit && isAdmin()) {
    form.needsResign = true;
    form.reviewMessage = "後台已更正申請資料；若本案已進入簽核，需重新送簽並重新上傳簽名檔。";
  }

  state.createdRequest = null;
  render();
}

function addTeacherAward() {
  state.forms.teacherReward.awards.push(normalizeTeacherAward({
    contestName: "",
    nature: "個人",
    groupSize: 1,
    level: "全市性活動",
    rank: "排序一",
    teacher: "",
    amount: 0
  }));
  state.createdRequest = null;
  render();
}

function removeTeacherAward(index, manualAdminEdit = false) {
  const form = state.forms.teacherReward;
  if (form.awards.length <= 1) {
    state.draftStatus = "教師獎勵金申請至少需保留一筆明細。";
    render();
    return;
  }
  form.awards.splice(index, 1);
  if (manualAdminEdit && isAdmin()) {
    form.needsResign = true;
    form.reviewMessage = "後台已刪除重複申請項目；若本案已進入簽核，需重新送簽並重新上傳簽名檔。";
  }
  state.createdRequest = null;
  render();
}

function teacherRewardExportRows() {
  const form = state.forms.teacherReward;
  return form.awards.map((award, index) => ({
    "序號": index + 1,
    "申請單位": form.unit,
    "申請日期": form.requestDate,
    "競賽項目／名稱": award.contestName,
    "競賽性質": award.nature,
    "團體人數": award.nature === "團體" ? award.groupSize : "",
    "競賽層級": award.level,
    "獲獎排序": award.rank,
    "指導老師": award.teacher,
    "獎勵金額": award.amount
  }));
}

function exportTeacherRewardsExcel() {
  const rows = teacherRewardExportRows();
  const headers = Object.keys(rows[0] || {});
  const summary = rows.reduce((acc, row) => {
    const key = `${row["指導老師"] || "未填"} / ${row["競賽層級"]}`;
    acc[key] = (acc[key] || 0) + Number(row["獎勵金額"] || 0);
    return acc;
  }, {});
  const tableRows = rows.map((row) => `<tr>${headers.map((header) => `<td>${row[header] ?? ""}</td>`).join("")}</tr>`).join("");
  const summaryRows = Object.entries(summary).map(([label, amount]) => `<tr><td>${label}</td><td>${amount}</td></tr>`).join("");
  const html = `
    <html><head><meta charset="UTF-8"></head><body>
      <table border="1">
        <caption>教師獎勵金申請明細</caption>
        <thead><tr>${headers.map((header) => `<th>${header}</th>`).join("")}</tr></thead>
        <tbody>${tableRows}</tbody>
      </table>
      <br>
      <table border="1">
        <caption>統計分析摘要</caption>
        <thead><tr><th>指導老師／層級</th><th>獎勵金額合計</th></tr></thead>
        <tbody>${summaryRows}</tbody>
      </table>
    </body></html>
  `;
  const blob = new Blob(["\ufeff", html], { type: "application/vnd.ms-excel;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "教師獎勵金申請統計.xls";
  link.click();
  URL.revokeObjectURL(url);
}

function settlementBalance() {
  const form = state.forms.settlement;
  return Number(form.income || 0) - Number(form.expense || 0);
}

function teacherRewardTotal() {
  return state.forms.teacherReward.awards.reduce((sum, award) => sum + Number(award.amount || 0), 0);
}

function calculateTeacherRewardAmount(award) {
  const levelAmounts = teacherRewardLevels[award.level] || teacherRewardLevels["其他類官方活動"];
  const rankIndex = Math.max(0, teacherRewardRanks.indexOf(award.rank));
  const baseAmount = levelAmounts[rankIndex] || levelAmounts[3];
  return award.nature === "團體" && Number(award.groupSize || 0) >= 3 ? baseAmount * 2 : baseAmount;
}

function normalizeTeacherAward(award) {
  const nextAward = { ...award };
  if (nextAward.nature === "團體" && Number(nextAward.groupSize || 0) < 3) nextAward.groupSize = 3;
  if (nextAward.nature === "個人") nextAward.groupSize = 1;
  nextAward.amount = calculateTeacherRewardAmount(nextAward);
  return nextAward;
}

function formSummary(formId = state.activeFormType) {
  if (formId === "purchase") {
    return {
      applicant: state.form.unit,
      title: `活動經費請購單 - ${state.form.description.slice(0, 16) || state.form.unit}`,
      detail: `申請金額 NT$ ${money(total())}，活動日期 ${state.form.eventDate || "未填"}`
    };
  }

  const form = state.forms[formId];
  if (formId === "venue") return { applicant: form.applicant, title: `場地借用申請 - ${form.place}`, detail: `${form.slot}；${form.purpose}` };
  if (formId === "receipt") return { applicant: form.donor, title: `捐款收據開立 - ${form.donor}`, detail: `捐款金額 NT$ ${money(form.amount)}；用途：${form.purpose}` };
  if (formId === "teacherReward") return { applicant: form.unit, title: `教師獎勵金申請 - ${form.unit}`, detail: `申請 ${form.awards.length} 筆，總金額 NT$ ${money(teacherRewardTotal())}` };
  if (formId === "settlement") return { applicant: "財務組", title: `經費結算報告 - ${form.period}`, detail: `收入 NT$ ${money(form.income)}，支出 NT$ ${money(form.expense)}，結餘 NT$ ${money(settlementBalance())}` };
  return { applicant: "秘書組", title: `委員會議紀錄通知 - ${form.time}`, detail: `${form.place}；${form.topics.split("\n")[0] || "會議事項"}` };
}

function fallbackDraft(action = "draft") {
  if (state.activeFormType !== "purchase") return fallbackFormDraft(action);

  const heading = action === "compliance" ? "法規與內控檢核" : "請購單暨請款公文草稿";
  const itemLines = state.form.items
    .map((item, index) => `${index + 1}. ${item.name}：${item.qty} x ${money(item.price)} 元，小計 ${money(Number(item.qty) * Number(item.price))} 元`)
    .join("\n");

  if (action === "compliance") {
    return `【${heading}】\n1. 憑證檢核：請確認發票或收據張數、日期、買受人及品項與請款明細相符。\n2. 預算檢核：請補列預算科目，並確認本案是否屬指定捐款支應。\n3. 簽核檢核：本案應依 申請人、財務副會長、會長、出納、會計、領款人 順序完成簽核。\n4. 付款檢核：若採匯款，請確認請款人帳號 ${state.form.account || "未填"} 與領款人資料一致。\n5. 建議：請於領款日期欄位留待付款時填寫，避免簽核前誤植。`;
  }

  return `【${heading}】\n主旨：擬請核准 ${state.form.unit} 辦理「${state.form.description.slice(0, 24)}」相關費用，合計新臺幣 ${money(total())} 元整。\n\n說明：\n一、活動日期：${state.form.eventDate || "未填"}；申請日期：${state.form.requestDate || "未填"}。\n二、活動說明：${state.form.description || "未填"}\n三、請款明細如下：\n${itemLines || "無"}\n\n擬辦：\n一、請財務副會長、會長依序審核本案預算與用途。\n二、核准後請出納依請款人帳號 ${state.form.account || "未填"} 辦理付款，並由會計完成入帳與憑證歸檔。\n\n簽核提醒：請檢附發票或收據，並確認單據編號、預算科目、付款方式與實際金額。`;
}

function fallbackFormDraft(action = "draft") {
  const type = state.activeFormType;
  const label = activeFormLabel();
  const summary = formSummary(type);
  const prefix = action === "formal" ? "正式版" : action === "concise" ? "精簡版" : action === "compliance" ? "檢核版" : "草稿";

  if (type === "venue") {
    const form = state.forms.venue;
    return `【${label}${prefix}】\n主旨：申請借用${form.place}辦理${form.purpose.slice(0, 18)}相關活動。\n\n說明：\n一、申請單位：${form.applicant}。\n二、借用時段：${form.slot}。\n三、用途說明：${form.purpose}\n\n擬辦：請核准場地借用，並請相關單位協助開放場地、設備與使用後復原檢查。`;
  }

  if (type === "receipt") {
    const form = state.forms.receipt;
    return `【${label}${prefix}】\n收據內容：茲收到 ${form.donor} 捐款新臺幣 ${money(form.amount)} 元整，用途為「${form.purpose}」。\n\n感謝文字：感謝您支持金華國小家長會推動校園與學生學習活動，本會將依指定用途妥善運用並完成後續入帳備查。`;
  }

  if (type === "teacherReward") {
    const form = state.forms.teacherReward;
    const awardLines = form.awards.map((award, index) => `${index + 1}. ${award.contestName || "未填競賽"}，${award.nature}${award.nature === "團體" ? ` ${award.groupSize} 人` : ""}，${award.level}，${award.rank}，指導老師：${award.teacher || "未填"}，獎勵金 NT$ ${money(award.amount)}`).join("\n");
    const checklist = [
      ["申請表", form.checklist.application],
      ["代表本校參賽之公文或報名文件", form.checklist.registration],
      ["得獎公文、獎狀或成績證明影本", form.checklist.awardProof],
      ["其他文件，如指導證明", form.checklist.other]
    ].map(([label, checked]) => `${checked ? "已備" : "待補"}：${label}`).join("\n");
    return `【${label}${prefix}】\n主旨：檢送${form.unit}教師指導學生參與校外競賽獎勵金申請，請審查。\n\n說明：\n一、申請日期：${form.requestDate || "未填"}。\n二、競賽活動說明：${form.activityDescription || "未填"}\n三、依家長會獎勵辦法，排序五至排序八等同排序四；團體三人以上以表列金額二倍核算。\n\n申請明細：\n${awardLines || "尚無申請明細"}\n\n申請總金額：新臺幣 ${money(teacherRewardTotal())} 元整。\n\n應檢附資料檢核：\n${checklist}\n\n後台控管：若審核中更正金額、排序或刪除重複申請，已進入簽核流程者需重新送簽並重新上傳簽名檔。`;
  }

  if (type === "settlement") {
    const form = state.forms.settlement;
    return `【${label}${prefix}】\n主旨：檢送 ${form.period} 經費結算報告。\n\n結算摘要：\n一、收入合計：新臺幣 ${money(form.income)} 元。\n二、支出合計：新臺幣 ${money(form.expense)} 元。\n三、結餘：新臺幣 ${money(settlementBalance())} 元。\n\n說明：${form.note}\n\n擬辦：請財務副會長與會長核閱後，交由會計備查。`;
  }

  const form = state.forms.meeting;
  return `【${label}${prefix}】\n主旨：通知召開委員會議，請相關委員準時出席。\n\n會議資訊：\n一、時間：${form.time}。\n二、地點：${form.place}。\n三、討論事項：\n${form.topics}\n\n擬辦：請秘書組發送通知並彙整出席回覆，會後完成會議紀錄歸檔。`;
}

function setActive(active) {
  if (!canAccessModule(active)) {
    state.active = "writer";
    render();
    return;
  }
  state.active = active;
  render();
}

function isAdmin() {
  return state.admin.isLoggedIn && state.admin.role === "admin";
}

function isRegularUser() {
  return state.admin.isLoggedIn && state.admin.role === "user";
}

function visibleModules() {
  if (isRegularUser()) return modules.filter(([id]) => ["writer", "templates", "tracking"].includes(id));
  return modules;
}

function canAccessModule(id) {
  return visibleModules().some(([moduleId]) => moduleId === id);
}

function updateForm(key, value) {
  state.form[key] = value;
  render();
}

function updateItem(index, key, value) {
  state.form.items[index][key] = key === "name" ? value : Number(value);
  state.createdRequest = null;
  render();
}

function addItem() {
  state.form.items.push({ name: "新增項目", qty: 1, price: 0, voucherName: "" });
  state.createdRequest = null;
  render();
}

function removeItem(index) {
  state.form.items.splice(index, 1);
  state.createdRequest = null;
  render();
}

function updateVoucher(index, file) {
  if (!file) {
    state.form.items[index].voucherName = "";
    state.form.items[index].voucherSize = 0;
    state.createdRequest = null;
    render();
    return;
  }

  const maxSize = 10 * 1024 * 1024;
  if (file.size > maxSize) {
    state.draftStatus = `「${file.name}」超過 10MB，請重新上傳較小的申請單據。`;
    render();
    return;
  }

  state.form.items[index].voucherName = file.name;
  state.form.items[index].voucherSize = file.size;
  state.createdRequest = null;
  render();
}

function formatFileSize(size = 0) {
  if (!size) return "";
  if (size < 1024 * 1024) return `${Math.ceil(size / 1024)}KB`;
  return `${(size / 1024 / 1024).toFixed(1)}MB`;
}

function snapshotForm() {
  return {
    ...state.form,
    items: state.form.items.map((item) => ({ ...item })),
    total: total()
  };
}

function createPurchaseRequest(renderAfter = true) {
  const id = `PR114000${String(state.nextRequestNo).padStart(2, "0")}`;
  state.nextRequestNo += 1;
  const record = {
    id,
    title: `${state.form.unit}${state.form.description.slice(0, 12)}請購單`,
    unit: state.form.unit,
    amount: total(),
    status: "申請人新增",
    current: 1,
    date: state.form.requestDate,
    signers: defaultSigners(),
    approvals: {},
    archived: false,
    cloudPath: "",
    form: snapshotForm()
  };

  state.createdRequest = record;
  outgoingDocs.unshift(record);
  state.selectedDocId = id;
  state.draftStatus = `已新增 ${id}，可套印請購單或送出簽核。`;
  if (renderAfter) render();
}

function defaultSigners() {
  return {
    2: signerOptions[2][0],
    3: signerOptions[3][0],
    4: signerOptions[4][0],
    5: signerOptions[5][0]
  };
}

function ensureDocWorkflow(doc) {
  if (!doc.signers) doc.signers = defaultSigners();
  if (!doc.approvals) doc.approvals = {};
  if (typeof doc.archived !== "boolean") doc.archived = doc.current >= 6;
  if (!doc.cloudPath && doc.archived) doc.cloudPath = `雲端備存/114學年度/${doc.id}.pdf`;
  return doc;
}

function updateSigner(docId, step, signer) {
  const doc = outgoingDocs.find((item) => item.id === docId);
  if (!doc) return;
  ensureDocWorkflow(doc).signers[step] = signer;
  render();
}

function approveCurrentStep(docId) {
  const doc = outgoingDocs.find((item) => item.id === docId);
  if (!doc) return;
  ensureDocWorkflow(doc);

  if (doc.archived) return;

  const stepNames = ["申請人", "財務副會長", "會長", "出納", "會計", "領款人"];
  const currentStep = Math.max(1, Math.min(doc.current, 6));
  doc.approvals[currentStep] = {
    signer: doc.signers[currentStep] || (currentStep === 1 ? doc.unit : "領款人"),
    time: new Date().toLocaleString("zh-TW", { hour12: false }),
    note: "已簽核"
  };

  if (currentStep >= 6 || currentStep === 5) {
    doc.current = 6;
    doc.status = "已歸檔";
    doc.archived = true;
    doc.cloudPath = `雲端備存/114學年度/${doc.id}.pdf`;
  } else {
    doc.current = currentStep + 1;
    doc.status = `${stepNames[doc.current - 1]}簽核中`;
  }

  render();
}

function updateIncomingDoc(id, field, value) {
  const doc = incomingDocs.find((item) => item.id === id);
  if (!doc) return;
  doc[field] = value;
  render();
}

function setActiveFormType(formId) {
  state.activeFormType = formId;
  state.createdRequest = null;
  state.draft = "";
  state.draftStatus = `${activeFormLabel()} 已切換，可填寫後草擬或儲存。`;
  render();
}

function saveCurrentForm() {
  const formId = state.activeFormType;
  const summary = formSummary(formId);
  const id = `APP-${String(state.nextIncomingNo).padStart(4, "0")}`;
  state.nextIncomingNo += 1;

  const record = {
    id,
    agency: "家長會各項表單申請",
    title: summary.title,
    date: new Date().toISOString().slice(0, 10),
    status: "待簽核",
    handler: summary.applicant,
    applicant: summary.applicant,
    formType: activeFormLabel(),
    detail: summary.detail,
    archived: false,
    cloudPath: ""
  };

  incomingDocs.unshift(record);
  state.draftStatus = `已儲存 ${id} 到收文管理。`;

  if (formId === "purchase") {
    createPurchaseRequest(false);
  }

  render();
}

function updateIncomingCloud(id, value) {
  const doc = incomingDocs.find((item) => item.id === id);
  if (!doc) return;
  doc.cloudPath = value;
}

function updateDefaultCloudPath(value) {
  state.admin.defaultCloudPath = value;
}

function toggleIncomingArchive(id) {
  const doc = incomingDocs.find((item) => item.id === id);
  if (!doc) return;
  doc.archived = !doc.archived;
  if (doc.archived && !doc.cloudPath) {
    doc.cloudPath = `${state.admin.defaultCloudPath}/${doc.id}.pdf`;
  }
  if (doc.archived && doc.status === "已歸檔") {
    doc.status = "處理中";
  }
  render();
}

function toggleAdminPanel() {
  state.admin.showPanel = !state.admin.showPanel;
  render();
}

function updateAdminField(field, value) {
  state.admin[field] = value;
}

function loginAdmin() {
  if (state.admin.loginUser === state.admin.username && state.admin.loginPassword === state.admin.password) {
    state.admin.isLoggedIn = true;
    state.admin.role = "admin";
    state.admin.displayName = "管理者";
    state.admin.showPanel = false;
    state.admin.message = "已登入管理者模式";
    render();
    return;
  }

  const user = state.admin.users.find((item) => item.username === state.admin.loginUser && item.password === state.admin.loginPassword);
  if (user) {
    state.admin.isLoggedIn = true;
    state.admin.role = "user";
    state.admin.displayName = user.displayName || user.username;
    state.admin.showPanel = false;
    state.admin.message = `已登入一般使用者：${state.admin.displayName}`;
    if (!canAccessModule(state.active)) state.active = "writer";
  } else {
    state.admin.message = "帳號或密碼不正確";
  }

  render();
}

function loginWithDefaultAdmin() {
  state.admin.loginUser = state.admin.username;
  state.admin.loginPassword = state.admin.password;
  loginAdmin();
}

function loginWithDefaultUser() {
  const user = state.admin.users[0];
  if (!user) return;
  state.admin.loginUser = user.username;
  state.admin.loginPassword = user.password;
  loginAdmin();
}

function logoutAdmin() {
  state.admin.isLoggedIn = false;
  state.admin.role = "guest";
  state.admin.displayName = "訪客";
  state.admin.loginPassword = "";
  state.admin.message = "已登出管理者模式";
  render();
}

function saveAdminCredentials() {
  if (!state.admin.username.trim() || !state.admin.password.trim()) {
    state.admin.message = "帳號與密碼不可空白";
    render();
    return;
  }
  state.admin.message = "管理者帳密已更新";
  render();
}

function addUserAccount() {
  const username = state.admin.newUserName.trim();
  const password = state.admin.newUserPassword.trim();
  if (!username || !password) {
    state.admin.message = "新增使用者需填寫帳號與密碼";
    render();
    return;
  }
  if (username === state.admin.username || state.admin.users.some((user) => user.username === username)) {
    state.admin.message = "此帳號已存在";
    render();
    return;
  }
  state.admin.users.push({ username, password, displayName: username });
  state.admin.newUserName = "";
  state.admin.newUserPassword = "";
  state.admin.message = `已新增一般使用者：${username}`;
  render();
}

function toggleIncomingSelection(id) {
  const selected = new Set(state.admin.selectedIncomingIds);
  if (selected.has(id)) selected.delete(id);
  else selected.add(id);
  state.admin.selectedIncomingIds = [...selected];
  render();
}

function deleteSelectedIncomingDocs() {
  if (!isAdmin()) return;
  const selected = new Set(state.admin.selectedIncomingIds);
  if (!selected.size) {
    state.incomingMessage = "請先勾選要刪除的文件";
    render();
    return;
  }
  for (let index = incomingDocs.length - 1; index >= 0; index -= 1) {
    if (selected.has(incomingDocs[index].id)) incomingDocs.splice(index, 1);
  }
  state.admin.selectedIncomingIds = [];
  state.incomingMessage = `已刪除 ${selected.size} 份文件`;
  state.admin.message = state.incomingMessage;
  render();
}

function deleteIncomingDoc(id) {
  if (!isAdmin()) return;
  const index = incomingDocs.findIndex((doc) => doc.id === id);
  if (index < 0) return;
  incomingDocs.splice(index, 1);
  state.admin.selectedIncomingIds = state.admin.selectedIncomingIds.filter((selectedId) => selectedId !== id);
  state.incomingMessage = `已刪除文件 ${id}`;
  state.admin.message = state.incomingMessage;
  render();
}

function printPurchaseRequest() {
  if (!state.createdRequest) {
    createPurchaseRequest(false);
    render();
  }
  setTimeout(() => window.print(), 0);
}

function canUseClaudeApi() {
  return ["localhost", "127.0.0.1"].includes(window.location.hostname);
}

function useOfflineDraft(action) {
  state.draft = fallbackDraft(action);
  state.draftStatus = "靜態版已使用離線草稿。若需真實 Claude API，請改用本機 Node 預覽服務。";
  render();
}

async function callAi(action = "draft") {
  if (!canUseClaudeApi()) {
    useOfflineDraft(action);
    return;
  }

  state.draftStatus = "正在呼叫 Claude API...";
  render();

  const payload = state.activeFormType === "purchase"
    ? {
        ...state.form,
        action,
        total: total(),
        draft: state.draft
      }
    : {
        action,
        draft: state.draft,
        formType: activeFormLabel(),
        formPrompt: `${activeFormLabel()}\n申請摘要：${formSummary().detail}\n表單資料：${JSON.stringify(state.forms[state.activeFormType], null, 2)}`
      };

  try {
    const response = await fetch("/api/claude", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload)
    });
    const contentType = response.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) throw new Error("Claude API 尚未啟用");
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "Claude API 暫時無法回應");
    state.draft = data.text;
    state.draftStatus = "已由 Claude API 生成。";
  } catch (error) {
    state.draft = fallbackDraft(action);
    state.draftStatus = "靜態版已使用離線草稿。若需真實 Claude API，請改用本機 Node 預覽服務。";
  }

  render();
}

function statusBadge(status) {
  if (status.includes("已")) return "green";
  if (status.includes("待")) return "amber";
  if (status.includes("中")) return "blue";
  return "gray";
}

function renderShell(inner) {
  const navModules = visibleModules();
  app.innerHTML = `
    <div class="app-shell">
      <aside class="sidebar">
        <div class="brand-mini">
          <div class="brand-mark">金</div>
          <div class="brand-title">金華國小<br>家長會公文</div>
        </div>
        <nav class="nav">
          ${navModules.map(([id, label, icon]) => `
            <button class="nav-button ${state.active === id ? "active" : ""}" data-nav="${id}" title="${label}">
              <span class="nav-icon">${icon}</span>
              <span class="nav-label">${label}</span>
            </button>
          `).join("")}
        </nav>
        <div class="sidebar-footer">
          <button class="nav-button" data-nav="writer" title="新增申請">
            <span class="nav-icon">${icons.plus}</span><span class="nav-label">新增申請</span>
          </button>
        </div>
      </aside>
      <main class="main">
        <header class="topbar">
          <div class="system-title"><span class="small-icon">${modules.find((m) => m[0] === state.active)?.[2]}</span>${modules.find((m) => m[0] === state.active)?.[1]}</div>
          <div class="header-actions">
            <span>114 學年度</span>
            <span class="notification">${icons.bell}</span>
            <button class="user-chip admin-entry" id="adminToggle">
              <span class="avatar">${isAdmin() ? "管" : isRegularUser() ? "用" : "登"}</span>
              ${state.admin.isLoggedIn ? state.admin.displayName : "登入"}
            </button>
          </div>
        </header>
        ${state.admin.showPanel ? renderAdminPanel() : ""}
        <section class="content">${inner}</section>
      </main>
    </div>
  `;

  document.querySelectorAll("[data-nav]").forEach((button) => {
    button.addEventListener("click", () => setActive(button.dataset.nav));
  });
  document.querySelector("#adminToggle")?.addEventListener("click", toggleAdminPanel);
}

function renderAdminPanel() {
  return `
    <div class="admin-panel">
      <div class="panel-header">
        <h2 class="panel-title">${isAdmin() ? "管理者設定" : state.admin.isLoggedIn ? "使用者資訊" : "帳號登入"}</h2>
        <span class="badge ${state.admin.isLoggedIn ? "green" : "amber"}">${state.admin.isLoggedIn ? state.admin.displayName : "未登入"}</span>
      </div>
      ${isAdmin() ? `
        <div class="admin-grid">
          <label class="field"><span>管理帳號</span><input id="adminUsername" value="${state.admin.username}"></label>
          <label class="field"><span>管理密碼</span><input id="adminPassword" type="password" value="${state.admin.password}"></label>
          <button class="primary-button" id="saveAdminCredentials">${icons.check} 儲存帳密</button>
          <button class="ghost-button" id="logoutAdmin">登出</button>
        </div>
        <div class="admin-section">
          <div class="approval-control-title">文件管理設定</div>
          <div class="admin-grid cloud-setting-grid">
            <label class="field"><span>預設雲端硬碟儲存位置</span><input id="defaultCloudPath" value="${state.admin.defaultCloudPath}"></label>
          </div>
        </div>
        <div class="admin-section">
          <div class="approval-control-title">新增一般使用者</div>
          <div class="admin-grid">
            <label class="field"><span>使用者帳號</span><input id="newUserName" value="${state.admin.newUserName}" placeholder="例如 parent01"></label>
            <label class="field"><span>使用者密碼</span><input id="newUserPassword" type="password" value="${state.admin.newUserPassword}" placeholder="設定密碼"></label>
            <button class="primary-button" id="addUserAccount">${icons.plus} 新增使用者</button>
          </div>
          <div class="user-list">
            ${state.admin.users.map((user) => `<span class="badge gray">${user.username}</span>`).join("")}
          </div>
        </div>
      ` : state.admin.isLoggedIn ? `
        <div class="admin-grid">
          <div class="role-note">
            <strong>${state.admin.displayName}</strong>
            <span>一般使用者可使用各項表單申請、公文範本，並查看簽核追蹤進度。</span>
          </div>
          <button class="ghost-button" id="logoutAdmin">登出</button>
        </div>
      ` : `
        <div class="admin-grid">
          <label class="field"><span>帳號</span><input id="adminLoginUser" value="${state.admin.loginUser}" placeholder="admin"></label>
          <label class="field"><span>密碼</span><input id="adminLoginPassword" type="password" value="${state.admin.loginPassword}" placeholder="pa123456"></label>
          <button class="primary-button" id="loginAdmin">${icons.check} 登入管理</button>
          <button class="ghost-button" id="loginDefaultAdmin">使用預設帳密</button>
          <button class="ghost-button" id="loginDefaultUser">使用一般帳號</button>
        </div>
      `}
      <div class="draft-status">${state.admin.message}</div>
    </div>
  `;
}

function dashboard() {
  const pending = outgoingDocs.filter((doc) => doc.current < 6).length + incomingDocs.filter((doc) => doc.status.includes("待")).length;
  return `
    <h1 class="page-title">總覽儀表板</h1>
    <div class="grid dashboard-grid">
      <div class="grid">
        <div class="grid stats">
          ${metric("待辦數量", pending, "件", "較上週 -2")}
          ${metric("本月發文", 18, "件", "完成率 82%")}
          ${metric("AI 節省時間", 42, "小時", "草擬 31 份")}
          ${metric("待簽核", 7, "件", "2 件逾 3 日")}
        </div>
        <div class="panel">
          <div class="panel-header">
            <h2 class="panel-title">近期公文</h2>
            <button class="ghost-button" data-nav="tracking">${icons.flow} 查看簽核</button>
          </div>
          ${docTable(outgoingDocs.slice(0, 5))}
        </div>
      </div>
      <div class="grid">
        <div class="panel donut-card">
          <div class="donut"><div class="donut-center">本月<br>37 件</div></div>
          <div class="legend">
            <span style="color: var(--blue)">發文 18 件</span>
            <span style="color: var(--amber)">待簽核 7 件</span>
            <span style="color: #e46f74">收文待回覆 5 件</span>
            <span style="color: var(--green)">已歸檔 7 件</span>
          </div>
        </div>
        <div class="panel quick-actions">
          <div class="panel-header"><h2 class="panel-title">快速處理</h2></div>
          <button class="primary-button" data-nav="writer">${icons.write} 各項表單申請</button>
          <button class="ghost-button" data-nav="incoming">${icons.inbox} 檢視待回覆收文</button>
          <button class="ghost-button" data-nav="templates">${icons.template} 套用常用範本</button>
        </div>
      </div>
    </div>
  `;
}

function metric(label, value, unit, delta) {
  return `
    <div class="metric">
      <label>${label}</label>
      <div class="metric-main"><strong>${value}</strong><span>${unit}</span></div>
      <div class="delta">${delta}</div>
    </div>
  `;
}

function docTable(rows) {
  return `
    <div class="table-wrap">
      <table>
        <thead><tr><th>文號</th><th>公文名稱</th><th>申請單位</th><th>金額</th><th>簽核狀態</th><th>日期</th></tr></thead>
        <tbody>
          ${rows.map((doc) => `
            <tr>
              <td>${doc.id}</td>
              <td>${doc.title}</td>
              <td>${doc.unit}</td>
              <td>${money(doc.amount)}</td>
              <td><span class="badge ${statusBadge(doc.status)}">${doc.status}</span></td>
              <td>${doc.date}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `;
}

function writer() {
  const printRecord = state.createdRequest && state.activeFormType === "purchase" ? printSheet(state.createdRequest) : "";
  return `
    <h1 class="page-title">各項表單申請</h1>
    <div class="form-tabs">
      ${formTypes.map((form) => `
        <button class="form-tab ${state.activeFormType === form.id ? "active" : ""}" data-form-type="${form.id}">${form.label}</button>
      `).join("")}
      <button class="form-tab add-format" type="button">${icons.plus} 新增表單格式</button>
    </div>
    <div class="two-column">
      <div class="panel">
        ${state.activeFormType === "purchase" ? renderPurchaseForm() : renderGenericForm()}
      </div>

      <div class="panel draft-panel">
        <div class="panel-header">
          <h2 class="panel-title">AI 草擬內容</h2>
          <div class="draft-toolbar">
            <button class="ghost-button" data-ai="formal">更正式</button>
            <button class="ghost-button" data-ai="concise">更精簡</button>
            <button class="ghost-button" data-ai="compliance">${icons.check} 法規檢核</button>
          </div>
        </div>
        <div class="draft-output">${state.draft || `按下「AI 草擬」後，這裡會產生${activeFormLabel()}內容。`}</div>
        <div class="draft-status">${state.draftStatus}</div>
      </div>
    </div>
    ${printRecord}
  `;
}

function renderPurchaseForm() {
  return `
    <div class="panel-header">
      <h2 class="panel-title">活動經費請購單</h2>
      <span class="badge green">沿用官方表單視覺化預覽</span>
    </div>
    <div class="form-grid">
      <div class="field full">
        <label>申請單位</label>
        <div class="unit-options">
          ${["家長會", "故事團", "課輔團", "導護", "綠手指", "其他"].map((unit) => `
            <label class="unit-option">
              <input type="radio" name="unit" value="${unit}" ${state.form.unit === unit ? "checked" : ""}>
              <span>${unit}</span>
            </label>
          `).join("")}
        </div>
      </div>
      <div class="field">
        <label>申請日期</label>
        <input type="date" data-form="requestDate" value="${state.form.requestDate}">
      </div>
      <div class="field">
        <label>活動日期</label>
        <input type="date" data-form="eventDate" value="${state.form.eventDate}">
      </div>
      <div class="field full">
        <label>請款人帳號</label>
        <input data-form="account" value="${state.form.account}" placeholder="郵局或銀行帳號">
      </div>
      <div class="field full">
        <label>活動說明</label>
        <textarea data-form="description">${state.form.description}</textarea>
      </div>
    </div>

    <div class="panel-header" style="margin-top: 16px;">
      <h2 class="panel-title">請款明細</h2>
      <button class="ghost-button" id="addItem">${icons.plus} 新增項目</button>
    </div>
    <div class="item-editor">
      <div class="item-row item-head">
        <span>項目</span><span>數量</span><span>單價</span><span>小計</span><span>上傳單據</span><span></span>
      </div>
      ${state.form.items.map((item, index) => `
        <div class="item-row">
          <input data-item="${index}" data-key="name" value="${item.name}">
          <input type="number" min="0" data-item="${index}" data-key="qty" value="${item.qty}">
          <input type="number" min="0" data-item="${index}" data-key="price" value="${item.price}">
          <strong>${money(Number(item.qty) * Number(item.price))}</strong>
          <div>
            <label class="receipt-upload">
              ${icons.upload}
              <span>${item.voucherName ? "更換" : "上傳"}</span>
              <input type="file" data-voucher="${index}" accept="image/*,.pdf">
            </label>
            <div class="receipt-name">${item.voucherName ? `${item.voucherName} ${formatFileSize(item.voucherSize)}` : "10MB 以內"}</div>
          </div>
          <button class="icon-button" title="刪除" data-remove="${index}">${icons.trash}</button>
        </div>
      `).join("")}
    </div>
    <div class="amount-line"><span>申請金額</span><span class="amount">NT$ ${money(total())}</span></div>
    <div class="writer-actions">
      <button class="primary-button" id="draftButton">${icons.write} AI 草擬</button>
      <button class="ghost-button" id="saveForm">${icons.plus} 儲存申請單</button>
      <button class="ghost-button" id="printRequest" ${state.createdRequest ? "" : "disabled"}>${icons.print} 套印請購單</button>
    </div>
    ${state.createdRequest ? `
      <div class="created-notice">
        <strong>${state.createdRequest.id} 可套印</strong>
        <span>此活動經費請購單也已送入收文管理。</span>
      </div>
    ` : ""}
  `;
}

function renderTeacherRewardForm() {
  const form = state.forms.teacherReward;
  const checklistItems = [
    ["application", "申請表（附件一）"],
    ["registration", "代表本校參賽之公文或比賽報名文件（報名表、賽事簡章規則等）"],
    ["awardProof", "參賽得獎之公文、獎狀或成績證明影本"],
    ["other", "其他文件，如指導證明等"]
  ];

  return `
    <div class="panel-header">
      <h2 class="panel-title">教師獎勵金申請</h2>
      <span class="badge green">依 PDF 辦法附件一</span>
    </div>
    <div class="form-grid">
      <div class="field">
        <label>申請單位</label>
        <select data-generic-form="teacherReward" data-key="unit">
          ${teacherRewardUnits.map((unit) => `<option value="${unit}" ${form.unit === unit ? "selected" : ""}>${unit}</option>`).join("")}
        </select>
      </div>
      <div class="field">
        <label>申請日期</label>
        <input type="date" data-generic-form="teacherReward" data-key="requestDate" value="${form.requestDate}">
      </div>
      <div class="field full">
        <label>競賽活動說明</label>
        <textarea data-generic-form="teacherReward" data-key="activityDescription">${form.activityDescription}</textarea>
      </div>
    </div>

    <div class="checklist-box">
      <strong>應檢附資料</strong>
      <div class="checklist-grid">
        ${checklistItems.map(([key, label]) => `
          <label class="check-item">
            <input type="checkbox" data-teacher-check="${key}" ${form.checklist[key] ? "checked" : ""}>
            <span>${label}</span>
          </label>
        `).join("")}
      </div>
    </div>

    <div class="panel-header reward-header">
      <h2 class="panel-title">申請明細</h2>
      <button class="ghost-button" id="addTeacherAward" ${form.awards.length >= 8 ? "disabled" : ""}>${icons.plus} 新增一筆</button>
    </div>
    <div class="reward-table">
      <div class="reward-row reward-head">
        <span>競賽項目／名稱</span><span>性質</span><span>人數</span><span>競賽層級</span><span>獲獎排序</span><span>指導老師</span><span>獎勵金額</span><span></span>
      </div>
      ${form.awards.map((award, index) => `
        <div class="reward-row">
          <input data-teacher-award="${index}" data-key="contestName" value="${award.contestName}" placeholder="競賽名稱">
          <select data-teacher-award="${index}" data-key="nature">
            ${["個人", "團體"].map((nature) => `<option value="${nature}" ${award.nature === nature ? "selected" : ""}>${nature}</option>`).join("")}
          </select>
          <input type="number" min="${award.nature === "團體" ? "3" : "1"}" step="1" data-teacher-award="${index}" data-key="groupSize" value="${award.groupSize}" ${award.nature === "個人" ? "disabled" : ""}>
          <select data-teacher-award="${index}" data-key="level">
            ${Object.keys(teacherRewardLevels).map((level) => `<option value="${level}" ${award.level === level ? "selected" : ""}>${level}</option>`).join("")}
          </select>
          <select data-teacher-award="${index}" data-key="rank">
            ${teacherRewardRanks.map((rank) => `<option value="${rank}" ${award.rank === rank ? "selected" : ""}>${rank}</option>`).join("")}
          </select>
          <input data-teacher-award="${index}" data-key="teacher" value="${award.teacher}" placeholder="指導老師">
          <input type="number" min="0" step="100" data-teacher-award="${index}" data-key="amount" data-admin-edit="true" value="${award.amount}" ${isAdmin() ? "" : "readonly"}>
          <button class="icon-button" title="刪除" data-remove-teacher-award="${index}" ${form.awards.length <= 1 ? "disabled" : ""}>${icons.trash}</button>
        </div>
      `).join("")}
    </div>
    <div class="amount-line"><span>申請總金額</span><span class="amount">NT$ ${money(teacherRewardTotal())}</span></div>
    <div class="rule-note">
      <strong>辦法提醒</strong>
      <span>排序五至排序八之獎勵額度等同排序四；團體組三人（含）以上以表列金額 2 倍核算；網路型且無法證明學生獨立參賽者不予請領。</span>
    </div>
    ${isAdmin() ? `
      <div class="admin-review-box">
        <div>
          <strong>後台審核工具</strong>
          <span>${form.reviewMessage}</span>
          ${form.needsResign ? `<span class="badge amber">需重新送簽與重新上傳簽名檔</span>` : ""}
        </div>
        <button class="ghost-button" id="exportTeacherRewards">${icons.send} 匯出 Excel 統計</button>
      </div>
    ` : `
      <div class="rule-note">
        <strong>簽核提醒</strong>
        <span>送出後若後台更正金額、排序或刪除重複項目，已進入簽核流程者需重新送簽並重新上傳簽名檔。</span>
      </div>
    `}
    <div class="writer-actions">
      <button class="primary-button" id="draftButton">${icons.write} AI 草擬</button>
      <button class="ghost-button" id="saveForm">${icons.plus} 儲存到收文管理</button>
      ${isAdmin() ? `<button class="ghost-button" id="exportTeacherRewardsFooter">${icons.send} 匯出 Excel</button>` : ""}
    </div>
  `;
}

function renderGenericForm() {
  const id = state.activeFormType;
  const form = state.forms[id];
  if (id === "teacherReward") return renderTeacherRewardForm();
  const fields = {
    venue: `
      <div class="field"><label>申請單位</label><input data-generic-form="venue" data-key="applicant" value="${form.applicant}"></div>
      <div class="field"><label>場地</label><input data-generic-form="venue" data-key="place" value="${form.place}"></div>
      <div class="field full"><label>時段</label><input data-generic-form="venue" data-key="slot" value="${form.slot}"></div>
      <div class="field full"><label>用途說明</label><textarea data-generic-form="venue" data-key="purpose">${form.purpose}</textarea></div>
    `,
    receipt: `
      <div class="field"><label>捐款人</label><input data-generic-form="receipt" data-key="donor" value="${form.donor}"></div>
      <div class="field"><label>金額</label><input type="number" min="0" data-generic-form="receipt" data-key="amount" value="${form.amount}"></div>
      <div class="field full"><label>用途</label><textarea data-generic-form="receipt" data-key="purpose">${form.purpose}</textarea></div>
    `,
    settlement: `
      <div class="field full"><label>結算期間</label><input data-generic-form="settlement" data-key="period" value="${form.period}"></div>
      <div class="field"><label>收入</label><input type="number" min="0" data-generic-form="settlement" data-key="income" value="${form.income}"></div>
      <div class="field"><label>支出</label><input type="number" min="0" data-generic-form="settlement" data-key="expense" value="${form.expense}"></div>
      <div class="field full"><label>補充說明</label><textarea data-generic-form="settlement" data-key="note">${form.note}</textarea></div>
      <div class="amount-line field full"><span>自動結餘</span><span class="amount">NT$ ${money(settlementBalance())}</span></div>
    `,
    meeting: `
      <div class="field"><label>會議時間</label><input data-generic-form="meeting" data-key="time" value="${form.time}"></div>
      <div class="field"><label>會議地點</label><input data-generic-form="meeting" data-key="place" value="${form.place}"></div>
      <div class="field full"><label>討論事項</label><textarea data-generic-form="meeting" data-key="topics">${form.topics}</textarea></div>
    `
  };

  return `
    <div class="panel-header">
      <h2 class="panel-title">${activeFormLabel()}</h2>
      <span class="badge blue">AI 草擬申請文件</span>
    </div>
    <div class="form-grid">${fields[id]}</div>
    <div class="writer-actions">
      <button class="primary-button" id="draftButton">${icons.write} AI 草擬</button>
      <button class="ghost-button" id="saveForm">${icons.plus} 儲存到收文管理</button>
    </div>
  `;
}

function printSheet(record) {
  const form = record.form;
  return `
    <section class="print-sheet" aria-label="套印請購單">
      <div class="print-title">
        <strong>台北市大安區金華國民小學家長會</strong>
        <span>請購單暨黏貼憑證 114 學年度 NO. ${record.id}</span>
      </div>
      <div class="print-grid">
        <div><b>申請單位</b><span>${form.unit}</span></div>
        <div><b>申請日期</b><span>${form.requestDate || "　年　月　日"}</span></div>
        <div><b>活動日期</b><span>${form.eventDate || "　年　月　日"}</span></div>
        <div><b>請款人帳號</b><span>${form.account || "未填"}</span></div>
        <div class="wide"><b>活動說明</b><span>${form.description || "未填"}</span></div>
      </div>
      <table class="print-table">
        <thead><tr><th>項次</th><th>請款明細</th><th>數量</th><th>單價</th><th>小計</th></tr></thead>
        <tbody>
          ${form.items.map((item, index) => `
            <tr>
              <td>${index + 1}</td>
              <td>${item.name}</td>
              <td>${item.qty}</td>
              <td>${money(item.price)}</td>
              <td>${money(Number(item.qty) * Number(item.price))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
      <div class="print-total">
        <strong>申請金額：新臺幣 ${money(form.total)} 元整</strong>
      </div>
      <div class="signature-grid">
        <div>申請人<br><span>①</span></div>
        <div>財務副會長<br><span>②</span></div>
        <div>會長<br><span>③</span></div>
        <div>出納<br><span>④</span></div>
        <div>領款人<br><span>⑤</span></div>
        <div>會計<br><span>⑥</span></div>
      </div>
      <div class="voucher-area">憑　證　黏　貼　區</div>
    </section>
  `;
}

function incoming() {
  const agencies = ["全部", ...new Set(incomingDocs.map((doc) => doc.agency))];
  const filtered = incomingDocs.filter((doc) => {
    const agencyMatch = state.incomingFilter.agency === "全部" || doc.agency === state.incomingFilter.agency;
    const keyword = state.incomingFilter.keyword.trim();
    const keywordMatch = !keyword || `${doc.title}${doc.handler}${doc.applicant || ""}${doc.status}${doc.formType || ""}`.includes(keyword);
    return agencyMatch && keywordMatch;
  });
  const groups = agencies.filter((agency) => agency !== "全部").map((agency) => ({
    agency,
    docs: filtered.filter((doc) => doc.agency === agency)
  })).filter((group) => group.docs.length);

  return `
    <h1 class="page-title">收文管理</h1>
    <div class="panel">
      <div class="panel-header">
        <h2 class="panel-title">依來文機關分組</h2>
        <div class="filters">
          <select id="agencyFilter">${agencies.map((agency) => `<option ${agency === state.incomingFilter.agency ? "selected" : ""}>${agency}</option>`).join("")}</select>
          <input id="incomingKeyword" value="${state.incomingFilter.keyword}" placeholder="搜尋主旨、填寫人、狀態">
        </div>
      </div>
      ${isAdmin() ? `
        <div class="document-actionbar">
          <button class="ghost-button danger-button" id="deleteIncomingDocs" type="button">${icons.trash} 刪除文件</button>
          <label class="cloud-default-field">
            <span>雲端硬碟儲存位置</span>
            <input id="incomingDefaultCloudPath" value="${state.admin.defaultCloudPath}">
          </label>
          <span class="document-message">${state.incomingMessage}</span>
        </div>
      ` : ""}
      <div class="group-list">
        ${groups.length ? groups.map((group) => `
          <section class="agency-group">
            <div class="agency-title"><span>${group.agency}</span><span>${group.docs.length} 件</span></div>
            <div class="table-wrap">
              <table class="incoming-table">
                <thead><tr>${isAdmin() ? "<th>選取</th>" : ""}<th>收文號</th><th>主旨 / 表單類型</th><th>來文機關</th><th>日期</th><th>狀態</th><th>申請單填寫人</th><th>文件管理</th></tr></thead>
                <tbody>
                  ${group.docs.map((doc) => `
                    <tr>
                      ${isAdmin() ? `<td><input type="checkbox" data-select-incoming="${doc.id}" ${state.admin.selectedIncomingIds.includes(doc.id) ? "checked" : ""}></td>` : ""}
                      <td>${doc.id}</td>
                      <td>
                        <input class="inline-edit" data-incoming="${doc.id}" data-field="title" value="${doc.title}">
                        <div class="table-sub">${doc.formType || "一般收文"}${doc.archived || doc.status === "已歸檔" ? " · 已歸檔" : ""}</div>
                      </td>
                      <td><input class="inline-edit" data-incoming="${doc.id}" data-field="agency" value="${doc.agency}"></td>
                      <td>${doc.date}</td>
                      <td>
                        <select class="inline-edit" data-incoming="${doc.id}" data-field="status">
                          ${incomingStatuses.map((status) => `<option value="${status}" ${doc.status === status ? "selected" : ""}>${status}</option>`).join("")}
                        </select>
                      </td>
                      <td><input class="inline-edit" data-incoming="${doc.id}" data-field="handler" value="${doc.handler || doc.applicant || ""}"></td>
                      <td>
                        <div class="document-tools">
                          <input class="inline-edit" data-cloud="${doc.id}" value="${doc.cloudPath || ""}" placeholder="${state.admin.defaultCloudPath}/${doc.id}.pdf">
                          <div class="table-sub">雲端硬碟路徑可編輯</div>
                          <button class="ghost-button" data-archive-incoming="${doc.id}">${doc.archived || doc.status === "已歸檔" ? "取消歸檔" : "歸檔到雲端"}</button>
                          ${isAdmin() ? `<button class="ghost-button danger-button" data-delete-incoming="${doc.id}" type="button" onclick="window.deleteIncomingDoc?.('${doc.id}')">${icons.trash} 刪除</button>` : ""}
                        </div>
                      </td>
                    </tr>
                  `).join("")}
                </tbody>
              </table>
            </div>
          </section>
        `).join("") : `<div class="empty-note">沒有符合條件的收文。</div>`}
      </div>
    </div>
  `;
}

function outgoing() {
  const statuses = ["全部", "簽核中", "已完成"];
  const rows = outgoingDocs.filter((doc) => {
    if (state.outgoingFilter === "全部") return true;
    if (state.outgoingFilter === "已完成") return doc.current >= 6;
    return doc.current < 6;
  });

  return `
    <h1 class="page-title">發文管理</h1>
    <div class="panel">
      <div class="panel-header">
        <h2 class="panel-title">已發文紀錄與簽核狀態</h2>
        <div class="segmented">
          ${statuses.map((status) => `<button class="tab ${state.outgoingFilter === status ? "active" : ""}" data-outgoing="${status}">${status}</button>`).join("")}
        </div>
      </div>
      ${docTable(rows)}
    </div>
  `;
}

function tracking() {
  const selected = ensureDocWorkflow(outgoingDocs.find((doc) => doc.id === state.selectedDocId) || outgoingDocs[0]);
  const steps = ["申請人", "財務副會長", "會長", "出納", "會計", "領款人"];
  return `
    <h1 class="page-title">簽核追蹤</h1>
    <div class="approval-layout">
      <div class="panel">
        <div class="panel-header"><h2 class="panel-title">選擇公文</h2></div>
        <div class="doc-list">
          ${outgoingDocs.map((doc) => `
            <button class="doc-card ${selected.id === doc.id ? "active" : ""}" data-doc="${doc.id}">
              <strong>${doc.title}</strong>
              <span>${doc.id} · ${doc.unit} · NT$ ${money(doc.amount)}</span>
            </button>
          `).join("")}
        </div>
      </div>
      <div class="panel">
        <div class="panel-header">
          <h2 class="panel-title">${selected.title}</h2>
          <span class="badge ${statusBadge(selected.status)}">${selected.status}</span>
        </div>
        <div class="archive-strip ${selected.archived ? "archived" : ""}">
          <strong>${selected.archived ? "已完成簽核並歸檔" : "簽核進行中"}</strong>
          <span>${selected.archived ? `雲端備存位置：${selected.cloudPath}` : "簽核完畢後會自動歸檔到雲端備存。"}</span>
        </div>
        <div class="flow">
          ${steps.map((name, index) => {
            const stepNo = index + 1;
            const klass = stepNo < selected.current ? "done" : stepNo === selected.current ? "current" : "";
            const signer = selected.signers[stepNo] || (stepNo === 1 ? selected.unit : stepNo === 6 ? "領款人" : name);
            const note = selected.archived && stepNo <= selected.current ? "已歸檔" : stepNo < selected.current ? "已完成" : stepNo === selected.current ? "目前節點" : "待處理";
            return `<div class="step ${klass}"><div class="step-num">${stepNo}</div><strong>${name}</strong><small>${signer}<br>${note}</small></div>`;
          }).join("")}
        </div>
        <div class="approval-controls">
          <div class="approval-control-title">簽核人員設定</div>
          ${[2, 3, 4, 5].map((step) => `
            <label class="approval-select">
              <span>${steps[step - 1]}</span>
              <select data-signer="${step}" data-signer-doc="${selected.id}">
                ${signerOptions[step].map((name) => `<option value="${name}" ${selected.signers[step] === name ? "selected" : ""}>${name}</option>`).join("")}
              </select>
            </label>
          `).join("")}
          <button class="primary-button" data-approve="${selected.id}" ${selected.archived ? "disabled" : ""}>${icons.check} ${selected.archived ? "已歸檔" : "完成目前簽核"}</button>
        </div>
        <div class="table-wrap">
          <table>
            <thead><tr><th>節點</th><th>處理人</th><th>時間</th><th>備註</th></tr></thead>
            <tbody>
              ${steps.map((name, index) => {
                const stepNo = index + 1;
                const approval = selected.approvals[stepNo];
                const signer = selected.signers[stepNo] || (stepNo === 1 ? selected.unit : stepNo === 6 ? "領款人" : name);
                return `
                <tr>
                  <td>${stepNo}. ${name}</td>
                  <td>${signer}</td>
                  <td>${approval?.time || (stepNo === selected.current && !selected.archived ? "等待中" : "-")}</td>
                  <td>${approval?.note || (stepNo === selected.current && !selected.archived ? "待簽核提醒已送出" : selected.archived && stepNo <= selected.current ? "已歸檔備存" : "尚未送達")}</td>
                </tr>
              `}).join("")}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

function templates() {
  return `
    <h1 class="page-title">公文範本庫</h1>
    <div class="panel">
      <div class="panel-header"><h2 class="panel-title">新增範本</h2></div>
      <div class="template-form">
        <input id="templateTitle" placeholder="範本名稱">
        <input id="templateBody" placeholder="範本內容摘要">
        <button class="primary-button" id="addTemplate">${icons.plus} 新增</button>
      </div>
      <div class="grid template-grid">
        ${state.templates.map((template, index) => `
          <article class="template-card">
            <strong>${template.title}</strong>
            <p>${template.body}</p>
            <div class="template-meta"><span>${template.category}</span><span>${template.used}</span></div>
            <button class="ghost-button" data-template="${index}">${icons.write} 套用範本</button>
          </article>
        `).join("")}
      </div>
    </div>
  `;
}

function bindEvents() {
  document.querySelector("#adminLoginUser")?.addEventListener("input", (event) => updateAdminField("loginUser", event.target.value));
  document.querySelector("#adminLoginPassword")?.addEventListener("input", (event) => updateAdminField("loginPassword", event.target.value));
  document.querySelector("#loginAdmin")?.addEventListener("click", loginAdmin);
  document.querySelector("#loginDefaultAdmin")?.addEventListener("click", loginWithDefaultAdmin);
  document.querySelector("#loginDefaultUser")?.addEventListener("click", loginWithDefaultUser);
  document.querySelector("#adminUsername")?.addEventListener("input", (event) => updateAdminField("username", event.target.value));
  document.querySelector("#adminPassword")?.addEventListener("input", (event) => updateAdminField("password", event.target.value));
  document.querySelector("#saveAdminCredentials")?.addEventListener("click", saveAdminCredentials);
  document.querySelector("#defaultCloudPath")?.addEventListener("input", (event) => updateDefaultCloudPath(event.target.value));
  document.querySelector("#incomingDefaultCloudPath")?.addEventListener("input", (event) => updateDefaultCloudPath(event.target.value));
  document.querySelector("#newUserName")?.addEventListener("input", (event) => updateAdminField("newUserName", event.target.value));
  document.querySelector("#newUserPassword")?.addEventListener("input", (event) => updateAdminField("newUserPassword", event.target.value));
  document.querySelector("#addUserAccount")?.addEventListener("click", addUserAccount);
  document.querySelector("#logoutAdmin")?.addEventListener("click", logoutAdmin);
  document.querySelectorAll("[name='unit']").forEach((input) => {
    input.addEventListener("change", () => updateForm("unit", input.value));
  });
  document.querySelectorAll("[data-form]").forEach((input) => {
    input.addEventListener("input", () => updateForm(input.dataset.form, input.value));
  });
  document.querySelectorAll("[data-item]").forEach((input) => {
    input.addEventListener("input", () => updateItem(Number(input.dataset.item), input.dataset.key, input.value));
  });
  document.querySelectorAll("[data-remove]").forEach((button) => {
    button.addEventListener("click", () => removeItem(Number(button.dataset.remove)));
  });
  document.querySelectorAll("[data-voucher]").forEach((input) => {
    input.addEventListener("change", () => updateVoucher(Number(input.dataset.voucher), input.files?.[0] || null));
  });
  document.querySelectorAll("[data-form-type]").forEach((button) => {
    button.addEventListener("click", () => setActiveFormType(button.dataset.formType));
  });
  document.querySelectorAll("[data-generic-form]").forEach((input) => {
    const update = () => updateGenericForm(input.dataset.genericForm, input.dataset.key, input.value);
    input.addEventListener("input", update);
    input.addEventListener("change", update);
  });
  document.querySelectorAll("[data-teacher-check]").forEach((input) => {
    input.addEventListener("change", () => updateTeacherChecklist(input.dataset.teacherCheck, input.checked));
  });
  document.querySelectorAll("[data-teacher-award]").forEach((input) => {
    const update = () => updateTeacherAward(Number(input.dataset.teacherAward), input.dataset.key, input.value, isAdmin());
    input.addEventListener("input", update);
    input.addEventListener("change", update);
  });
  document.querySelectorAll("[data-remove-teacher-award]").forEach((button) => {
    button.addEventListener("click", () => removeTeacherAward(Number(button.dataset.removeTeacherAward), isAdmin()));
  });
  document.querySelector("#addTeacherAward")?.addEventListener("click", addTeacherAward);
  document.querySelector("#exportTeacherRewards")?.addEventListener("click", exportTeacherRewardsExcel);
  document.querySelector("#exportTeacherRewardsFooter")?.addEventListener("click", exportTeacherRewardsExcel);
  document.querySelector("#addItem")?.addEventListener("click", addItem);
  document.querySelector("#draftButton")?.addEventListener("click", () => callAi("draft"));
  document.querySelector("#saveForm")?.addEventListener("click", saveCurrentForm);
  document.querySelector("#printRequest")?.addEventListener("click", printPurchaseRequest);
  document.querySelectorAll("[data-ai]").forEach((button) => {
    button.addEventListener("click", () => callAi(button.dataset.ai));
  });
  document.querySelector("#agencyFilter")?.addEventListener("change", (event) => {
    state.incomingFilter.agency = event.target.value;
    render();
  });
  document.querySelector("#incomingKeyword")?.addEventListener("input", (event) => {
    state.incomingFilter.keyword = event.target.value;
    render();
  });
  document.querySelectorAll("[data-incoming]").forEach((input) => {
    input.addEventListener("change", () => updateIncomingDoc(input.dataset.incoming, input.dataset.field, input.value));
    if (input.tagName === "INPUT") {
      input.addEventListener("input", () => {
        const doc = incomingDocs.find((item) => item.id === input.dataset.incoming);
        if (doc) doc[input.dataset.field] = input.value;
      });
    }
  });
  document.querySelectorAll("[data-cloud]").forEach((input) => {
    input.addEventListener("input", () => updateIncomingCloud(input.dataset.cloud, input.value));
  });
  document.querySelectorAll("[data-select-incoming]").forEach((input) => {
    input.addEventListener("change", () => toggleIncomingSelection(input.dataset.selectIncoming));
  });
  document.querySelector("#deleteIncomingDocs")?.addEventListener("click", deleteSelectedIncomingDocs);
  document.querySelectorAll("[data-archive-incoming]").forEach((button) => {
    button.addEventListener("click", () => toggleIncomingArchive(button.dataset.archiveIncoming));
  });
  document.querySelectorAll("[data-delete-incoming]").forEach((button) => {
    button.addEventListener("click", () => deleteIncomingDoc(button.dataset.deleteIncoming));
  });
  document.querySelectorAll("[data-outgoing]").forEach((button) => {
    button.addEventListener("click", () => {
      state.outgoingFilter = button.dataset.outgoing;
      render();
    });
  });
  document.querySelectorAll("[data-doc]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedDocId = button.dataset.doc;
      render();
    });
  });
  document.querySelectorAll("[data-signer]").forEach((select) => {
    select.addEventListener("change", () => updateSigner(select.dataset.signerDoc, Number(select.dataset.signer), select.value));
  });
  document.querySelectorAll("[data-approve]").forEach((button) => {
    button.addEventListener("click", () => approveCurrentStep(button.dataset.approve));
  });
  document.querySelectorAll("[data-template]").forEach((button) => {
    button.addEventListener("click", () => {
      const template = state.templates[Number(button.dataset.template)];
      state.form.description = template.body;
      state.form.unit = template.title.includes("故事") ? "故事團" : template.title.includes("綠") ? "綠手指" : "家長會";
      state.draft = "";
      state.draftStatus = `已套用「${template.title}」，可繼續補明細後草擬。`;
      state.active = "writer";
      render();
    });
  });
  document.querySelector("#addTemplate")?.addEventListener("click", () => {
    const title = document.querySelector("#templateTitle").value.trim();
    const body = document.querySelector("#templateBody").value.trim();
    if (!title || !body) return;
    state.templates.unshift({ title, body, category: "自訂範本", used: "剛新增" });
    render();
  });
}

function render() {
  const views = { dashboard, writer, incoming, outgoing, tracking, templates };
  if (!canAccessModule(state.active)) state.active = "writer";
  renderShell(views[state.active]());
  bindEvents();
}

render();

window.deleteIncomingDoc = deleteIncomingDoc;

document.addEventListener("click", (event) => {
  const deleteButton = event.target.closest("[data-delete-incoming]");
  if (deleteButton) {
    deleteIncomingDoc(deleteButton.dataset.deleteIncoming);
  }
});
