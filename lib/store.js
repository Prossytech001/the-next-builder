import fs from 'fs/promises'; import path from 'path';
const DB = path.join(process.cwd(), 'data', 'applications.json');
export async function readAll() { try { return JSON.parse(await fs.readFile(DB, 'utf8')); } catch { return []; } }
export async function save(rec) {
  if (process.env.SHEET_WEBHOOK_URL) { // Google Sheets mode
    const r = await fetch(process.env.SHEET_WEBHOOK_URL, { method: 'POST', body: JSON.stringify(rec) });
    if (!r.ok) throw new Error('Could not save your application. Please try again.');
    return;
  }
  const rows = await readAll();
  if (rows.some(r => r.email.toLowerCase() === rec.email.toLowerCase())) throw new Error('This email has already applied');
  rows.push({ id: rows.length + 1, ...rec });
  await fs.mkdir(path.dirname(DB), { recursive: true }); await fs.writeFile(DB, JSON.stringify(rows, null, 2));
}
