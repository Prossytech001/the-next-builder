import { save } from '../../../lib/store';
const FIELDS = ['fullName','email','phone','location','age','student','occupation','coded','interest','html','css','js','motivation','hours'];
export async function POST(req) {
  try {
    const d = await req.json();
    for (const f of ['fullName','email','phone','location','age','motivation']) if (!String(d[f] || '').trim()) throw new Error('Please fill in all required fields');
    if (!/^\S+@\S+\.\S+$/.test(d.email)) throw new Error('Enter a valid email address');
    if (d.commit !== true) throw new Error('Please accept the commitment box');
    const rec = { submittedAt: new Date().toISOString() };
    FIELDS.forEach(f => rec[f] = String(d[f] ?? '').trim().slice(0, 2000));
    await save(rec);
    return Response.json({ ok: true });
  } catch (e) { return Response.json({ error: e.message }, { status: 400 }); }
}
