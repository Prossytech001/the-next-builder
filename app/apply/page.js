'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
const Sel = ({ id, label, opts }) => (<div><label htmlFor={id}>{label}</label><select id={id} name={id}>{opts.map(o => <option key={o}>{o}</option>)}</select></div>);
const lvl = ['Beginner', 'Some experience', 'Advanced'];
export default function ApplyPage() {
  const router = useRouter();
  const [err, setErr] = useState(''); const [busy, setBusy] = useState(false);
  async function submit(e) {
    e.preventDefault(); setErr(''); setBusy(true);
    const d = Object.fromEntries(new FormData(e.target)); d.commit = e.target.commit.checked;
    try {
      const r = await fetch('/api/apply', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(d) });
      const j = await r.json(); if (!r.ok) throw new Error(j.error);
      router.push('/thanks');
    } catch (x) { setErr(x.message || 'Something went wrong. Check your connection and try again.'); setBusy(false); }
  }
  return (<>
    <nav><div className="wrap"><Link href="/" style={{ textDecoration: 'none' }}>← The Next Builder</Link><span>Cohort 01</span></div></nav>
    <main className="form"><h1 style={{ fontSize: 'clamp(32px,6vw,52px)' }}>Cohort application</h1>
    <p className="lead" style={{ marginTop: 10 }}>Takes about five minutes. Fields marked * are required.</p>
    <form onSubmit={submit}>
      <fieldset><legend>Personal information</legend>
        <label htmlFor="fullName">Full name *</label><input id="fullName" name="fullName" required autoComplete="name" />
        <div className="two"><div><label htmlFor="email">Email address *</label><input id="email" name="email" type="email" required autoComplete="email" /></div>
        <div><label htmlFor="phone">Whatsapp Number so we will be able to add you up in the community *</label><input id="phone" name="phone" type="tel" required autoComplete="tel" /></div></div>
        <div className="two"><div><label htmlFor="location">Location *</label><input id="location" name="location" required placeholder="City, State" /></div>
        <div><label htmlFor="age">Age *</label><input id="age" name="age" type="number" min="10" max="99" required /></div></div></fieldset>
      <fieldset><legend>About you</legend>
        <Sel id="student" label="Are you currently a student?" opts={['Yes', 'No']} />
        <label htmlFor="occupation">What do you currently do?</label><input id="occupation" name="occupation" />
        <Sel id="coded" label="Have you written code before?" opts={['No', 'A little', 'Yes, regularly']} />
        <label htmlFor="interest">What made you interested in web development?</label><textarea id="interest" name="interest" /></fieldset>
      <fieldset><legend>Experience</legend>
        <div className="two"><Sel id="html" label="HTML" opts={lvl} /><Sel id="css" label="CSS" opts={lvl} /></div>
        <Sel id="js" label="JavaScript" opts={lvl} /></fieldset>
      <fieldset><legend>Your motivation</legend>
        <label htmlFor="motivation">Why do you want to join The Next Builder? *</label><textarea id="motivation" name="motivation" required /></fieldset>
      <fieldset><legend>Availability and commitment</legend>
        <Sel id="hours" label="How many hours per week can you dedicate to the cohort?" opts={['Under 5', '5–10', '10–20', '20+']} />
        <label className="chk"><input type="checkbox" name="commit" required /><span>I&apos;m willing to actively participate and complete assigned projects. I understand The Next Builder is a sponsored cohort and that applying does not automatically guarantee selection. *</span></label></fieldset>
      <div className="err" role="alert">{err}</div>
      <button className="btn" type="submit" disabled={busy}>{busy ? 'Sending…' : 'Submit application'}</button>
    </form></main></>);
}
