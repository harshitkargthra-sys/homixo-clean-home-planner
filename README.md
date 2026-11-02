# Homixo Clean Home Planner

A static, mobile-friendly HTML/CSS/JavaScript planner designed for GitHub Pages.

## What's included
- Order ID, marketplace, name and mobile registration screen
- 30 unique daily cleaning missions with interactive checkboxes
- Progress dashboard
- Cleaning tips
- Garbage bag usage calculator
- 90-bag stock tracker
- Waste management guide
- Same-browser progress persistence using `localStorage`
- Optional Google Apps Script starter for sending registration records to Google Sheets

## Important behaviour and limitations
- GitHub Pages is static hosting. It does not provide a private database or server-side authentication.
- In this starter, profile and challenge progress are stored in the customer's browser. They remain after closing/reopening the browser on the same device, unless browser site data is cleared.
- This does not sync progress across devices.
- Registration details are not proof that an order is genuine.
- Do not use this public static site to store secrets or Google Sheet credentials.
- The Google Apps Script starter accepts public submissions and is not sufficient by itself for high-volume production or secure identity verification. Review privacy, retention, abuse prevention and duplicate handling before launch.
- The current frontend cannot reliably know whether an Apps Script `no-cors` POST succeeded. Treat the sheet connection as pending verification until tested with a safer response-enabled integration.

## Publish on GitHub Pages
1. Create a **public** repository named `homixo-clean-home-planner`.
2. Upload `index.html`, `styles.css`, `app.js`, and `config.js` to the repository root.
3. Commit the files to the `main` branch.
4. Open repository **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select branch `main`, folder `/ (root)`, and Save.
7. Wait for GitHub Pages to publish. The URL will be:
   `https://YOUR-GITHUB-USERNAME.github.io/homixo-clean-home-planner/`

## Connect Google Sheets (before collecting real customer details)
1. Create a Google Sheet and a tab named `Registrations`.
2. Open **Extensions → Apps Script** and paste `google-apps-script.gs`.
3. Set `SHEET_ID` in the script.
4. Deploy as a Web app, execute as you, and choose access according to your Google account's available options.
5. Copy the deployment URL into `config.js` as `registrationEndpoint`.
6. Test with dummy data first. Verify the row appears and verify duplicate handling.
7. Do not make the Sheet itself public. Only authorised administrators should have access.

## Before printing QR codes
- Publish the site and test the final public URL on Android and iPhone.
- Test form validation, refresh, close/reopen, all challenge ticks, calculator and stock tracker.
- Test the registration-to-Sheets flow using dummy details.
- Add a real Homixo privacy contact and retention/deletion process.
- Generate QR code only from the final working URL.
