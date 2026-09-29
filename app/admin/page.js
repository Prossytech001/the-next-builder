import { readAll } from '../../lib/store';
export const dynamic = 'force-dynamic';
export default async function Admin({ searchParams }) {
  if (searchParams.key !== (process.env.ADMIN_KEY || 'change-me')) return <p style={{ padding: 24 }}>Unauthorized</p>;
  const rows = await readAll();
  const H = ['#','Date','Name','Email','Phone','Location','Age','Student','H/C/J','Hours','Motivation'];
  return (<div style={{ padding: 24, fontSize: 14 }}><h2>{rows.length} applications</h2>
    {process.env.SHEET_WEBHOOK_URL && <p>Sheets mode is on. View applications in your Google Sheet.</p>}
    <div style={{ overflow: 'auto' }}><table border="1" cellPadding="6" style={{ borderCollapse: 'collapse' }}><thead><tr>{H.map(h => <th key={h}>{h}</th>)}</tr></thead><tbody>
    {rows.map(r => <tr key={r.id}><td>{r.id}</td><td>{r.submittedAt.slice(0, 10)}</td><td>{r.fullName}</td><td>{r.email}</td><td>{r.phone}</td><td>{r.location}</td><td>{r.age}</td><td>{r.student}</td><td>{r.html}/{r.css}/{r.js}</td><td>{r.hours}</td><td style={{ maxWidth: 420 }}>{r.motivation}</td></tr>)}
    </tbody></table></div></div>);
}
