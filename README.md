# The Next Builder · Cohort 01 (Next.js)

## Run locally (Node 18+)
    npm install
    cp .env.example .env.local     # set ADMIN_KEY
    npm run dev                    # http://localhost:3000
Applications: /admin?key=YOUR_ADMIN_KEY (saved to data/applications.json)

Edit social links in lib/config.js.

## Deploy
- VPS / Render / Railway: `npm install && npm run build && npm start`. Local file storage works.
- Vercel: file storage does NOT persist, so use Google Sheets mode:
  1. Create a Google Sheet. Extensions > Apps Script. Paste:
     function doPost(e){var d=JSON.parse(e.postData.contents);var s=SpreadsheetApp.getActiveSheet();
     if(s.getLastRow()==0)s.appendRow(Object.keys(d));s.appendRow(Object.values(d));return ContentService.createTextOutput('ok');}
  2. Deploy > New deployment > Web app > Execute as: Me, Access: Anyone. Copy the URL.
  3. Set SHEET_WEBHOOK_URL to that URL in your Vercel env vars (plus ADMIN_KEY).
