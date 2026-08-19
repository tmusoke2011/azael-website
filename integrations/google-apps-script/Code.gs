"use strict";

const SUBMISSIONS_SHEET = "Submissions";
const TIME_ZONE = "Africa/Kampala";

function jsonResponse(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(ContentService.MimeType.JSON);
}

function clean(value, maxLength) {
  return String(value || "").trim().slice(0, maxLength || 1600);
}

function safeCell(value, maxLength) {
  const cleaned = clean(value, maxLength);
  return /^[=+\-@]/.test(cleaned) ? `'${cleaned}` : cleaned;
}

function doPost(event) {
  const properties = PropertiesService.getScriptProperties();
  const expectedSecret = properties.getProperty("WEBHOOK_SECRET");
  const spreadsheetId = properties.getProperty("SPREADSHEET_ID");

  if (!expectedSecret || !spreadsheetId) {
    return jsonResponse({ ok: false, error: "not_configured" });
  }

  let payload;
  try {
    payload = JSON.parse(event.postData.contents);
  } catch (error) {
    return jsonResponse({ ok: false, error: "invalid_json" });
  }

  if (payload.secret !== expectedSecret) {
    return jsonResponse({ ok: false, error: "unauthorized" });
  }

  const required = [
    "contactName",
    "workEmail",
    "role",
    "businessName",
    "country",
    "sector",
    "activeSales",
    "businessToday",
    "intendedTransition",
    "capitalPurpose",
  ];

  if (required.some(function (field) { return !clean(payload[field]); })) {
    return jsonResponse({ ok: false, error: "missing_fields" });
  }

  const now = new Date();
  const submissionId = [
    "ED",
    Utilities.formatDate(now, TIME_ZONE, "yyyyMMdd-HHmmss"),
    Utilities.getUuid().slice(0, 8).toUpperCase(),
  ].join("-");

  const row = [
    submissionId,
    now,
    "New",
    "",
    safeCell(payload.contactName, 120),
    safeCell(payload.role, 120),
    safeCell(payload.workEmail, 180),
    safeCell(payload.phone, 60),
    safeCell(payload.businessName, 160),
    safeCell(payload.country, 100),
    safeCell(payload.sector, 120),
    safeCell(payload.website, 240),
    payload.activeSales === "Yes" ? "Yes" : "No",
    safeCell(payload.businessToday, 1200),
    safeCell(payload.intendedTransition, 1200),
    safeCell(payload.capitalPurpose, 1200),
    safeCell(payload.capitalRange, 120),
    safeCell(payload.capitalTiming, 120),
    payload.consentConfirmed === "Yes" ? "Yes" : "No",
    "",
    "",
  ];

  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(10000);
    const spreadsheet = SpreadsheetApp.openById(spreadsheetId);
    const sheet = spreadsheet.getSheetByName(SUBMISSIONS_SHEET);
    if (!sheet) {
      return jsonResponse({ ok: false, error: "sheet_not_found" });
    }

    const nextRow = Math.max(sheet.getLastRow() + 1, 5);
    sheet.getRange(nextRow, 1, 1, row.length).setValues([row]);
    sheet.getRange(nextRow, 2).setNumberFormat("yyyy-mm-dd hh:mm");
    return jsonResponse({ ok: true, submissionId: submissionId });
  } catch (error) {
    return jsonResponse({ ok: false, error: "write_failed" });
  } finally {
    lock.releaseLock();
  }
}
