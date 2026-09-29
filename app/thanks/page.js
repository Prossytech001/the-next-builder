import { LINKS } from '../../lib/config';
export const metadata = { title: 'Application received · The Next Builder' };
export default function Thanks() { return (
<main className="dark done"><div><h1 style={{ fontSize: 'clamp(36px,7vw,64px)' }}>Application received 🎉</h1>
<p className="lead" style={{ margin: '16px auto 0' }}>Thank you for applying to The Next Builder. We&apos;ll review your application and contact eligible applicants using the details you provided. Stay connected with ProxAfrica for updates.</p>
<div className="row"><a className="btn ghost" href={LINKS.whatsapp}>WhatsApp</a><a className="btn ghost" href={LINKS.website}>Website</a></div></div></main>); }
