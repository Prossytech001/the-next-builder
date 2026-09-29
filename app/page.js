import Link from 'next/link';
const learn = [['HTML','Learn how websites are structured and build the foundation of web pages.'],['CSS','Styling, layouts, responsive design, and modern interfaces.'],['JavaScript','Programming fundamentals, plus the functionality and interactivity that make sites come alive.'],['Responsive design','Build websites that work across phones, tablets, and desktops.'],['Project development','Turn what you\'ve learned into practical projects.'],['Deployment','Take your website off your computer and put it online.']];
const build = ['🛠️ Build alongside the ProxAfrica environment','👀 See how real projects are planned and developed','💻 Work with development tools and technologies','🤝 Collaborate with other builders','🚀 Apply your skills to practical projects','🧠 Develop problem-solving skills','🌍 Understand what happens beyond writing code'];
const who = ['Complete beginners','Students interested in technology','People looking to start coding','Aspiring developers','Anyone willing to learn and build'];
const steps = [['Apply','Submit your application.'],['Eligibility','Applications are reviewed and eligible participants are selected.'],['Learn','Go through the structured beginner web-development training.'],['Build','Apply your knowledge through practical projects.'],['Deploy','Take your projects from code to the web.']];
const Apply = ({ cls = '' }) => <Link className={'btn ' + cls} href="/apply">Apply now</Link>;
export default function Home() { return (<>
<nav><div className="wrap"><img
        src="/logo.png"
        alt="Proxboxy"
        className="logo"
      /><Link className="btn sm" href="/apply">Apply for the cohort</Link></div></nav>
<header className="dark hero"><div className="wrap">
<h1>The Next Builder</h1><div className="tag">Build. Learn. Deploy.</div>
<p>A sponsored beginner web-development cohort by ProxAfrica. Learn the fundamentals, build real projects, and understand how modern digital products are made.</p>
<div className="row"><Link className="btn" href="/apply">Apply for the cohort</Link><a className="btn ghost" href="#program">Explore the program ↓</a></div>
<small>Cohort 01 · Sponsored · Beginner friendly · Limited eligibility</small>
<div className="code" aria-hidden="true"><b>&lt;h1&gt;</b>Hello, world.<b>&lt;/h1&gt;</b><br />&lt;p&gt;My first deployed site<span className="cur"></span></div>
</div></header>
<section id="program"><div className="wrap"><h2>What is The Next Builder?</h2><p className="lead">The Next Builder is a sponsored beginner web-development cohort created by ProxAfrica for people who want to start their journey into technology through practical web development. You start with the fundamentals and move step by step into building and deploying real projects. No previous professional experience required.</p></div></section>
<section className="soft"><div className="wrap"><h2>What you&apos;ll learn</h2><div className="grid">
{learn.map(([t, d], i) => <div className="card" key={t}><span className="n">0{i + 1}</span><h3>{t}</h3><p>{d}</p></div>)}
</div></div></section>
<section className="dark"><div className="wrap"><h2>You won&apos;t just learn. You&apos;ll build.</h2><p className="lead">As an eligible cohort member, you&apos;ll get exposure to how projects are actually developed.</p>
<ul className="list">{build.map(b => <li key={b}>{b}</li>)}</ul><div className="big">Learn the skills. Understand the process. Build something real.</div></div></section>
<section><div className="wrap"><h2>Who should apply?</h2><div className="pills">{who.map(w => <span key={w}>{w}</span>)}</div><p className="lead">You don&apos;t need to be an expert. You need to be willing to learn.</p></div></section>
<section className="soft"><div className="wrap"><h2>Your journey</h2><div className="steps">{steps.map(([t, d]) => <div key={t}><h3>{t}</h3><p>{d}</p></div>)}</div></div></section>
<section className="spons"><div className="wrap"><h2>100% sponsored.</h2><p>You are not paying for the cohort. The Next Builder is sponsored by ProxAfrica to give selected eligible participants a chance to begin learning and building in web development. Eligibility applies.</p><Apply /></div></section>
<section className="dark cta"><div className="wrap"><h2>Ready to become a Next Builder?</h2><p className="lead">Applications for the upcoming cohort are now open.</p><Apply /><small>Applications are subject to eligibility and selection.</small></div></section>
<footer><div className="wrap">© ProxAfrica · The Next Builder Cohort 01</div></footer>
</>); }
