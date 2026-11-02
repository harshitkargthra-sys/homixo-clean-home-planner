/**
 * Homixo Clean Home Planner - Google Apps Script starter
 *
 * 1. Create a Google Sheet named "Homixo Clean Home Registrations".
 * 2. Add a tab named "Registrations".
 * 3. In Extensions > Apps Script, paste this code.
 * 4. Set SHEET_ID below to the ID from the Sheet URL.
 * 5. Deploy > New deployment > Web app.
 * 6. Execute as: Me. Access: Anyone.
 * 7. Copy the deployment URL into config.js as registrationEndpoint.
 *
 * IMPORTANT:
 * This basic endpoint is a starter, not robust identity verification.
 * Anyone can submit a form. Do not store passwords, OTPs, payment details,
 * or expose the Sheet itself publicly. Add abuse controls and a clear privacy
 * and deletion process before collecting real customer data at scale.
 */
const SHEET_ID = "PASTE_GOOGLE_SHEET_ID_HERE";
const TAB_NAME = "Registrations";
const HEADERS = ["Registered At","Marketplace","Order ID","Customer Name","Mobile","Consent","Consent Version"];

function doPost(e) {
  try {
    const data = JSON.parse((e && e.postData && e.postData.contents) || "{}");
    const marketplace = clean(data.marketplace, 30);
    const orderId = clean(data.orderId, 80);
    const name = clean(data.name, 80);
    const phone = clean(data.phone, 10);
    if (!marketplace || !orderId || !name || !/^[6-9]\d{9}$/.test(phone) || data.consent !== true) {
      return json({ok:false, message:"Invalid registration details"});
    }
    const ss = SpreadsheetApp.openById(SHEET_ID);
    let sheet = ss.getSheetByName(TAB_NAME);
    if (!sheet) sheet = ss.insertSheet(TAB_NAME);
    if (sheet.getLastRow() === 0) sheet.appendRow(HEADERS);
    const values = sheet.getDataRange().getValues();
    const duplicate = values.slice(1).some(row => String(row[2]).trim().toLowerCase() === orderId.toLowerCase());
    if (duplicate) return json({ok:false, message:"Order ID already registered"});
    sheet.appendRow([new Date(), marketplace, orderId, name, phone, "Yes", clean(data.consentVersion, 20)]);
    return json({ok:true});
  } catch (err) {
    return json({ok:false, message:"Registration could not be processed"});
  }
}
function clean(value, max) {
  return String(value || "").replace(/[<>]/g, "").trim().slice(0, max);
}
function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
