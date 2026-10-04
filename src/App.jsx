import { useState, useMemo, useEffect } from "react";
import { PYQS } from "./pyqs.js";
import { BANK } from "./bank.js";
import { PYQ_SOLUTIONS } from "./pyq_solutions.js";
import { MathText, Solution } from "./MathText.jsx";

const UNITS = ["Algebra", "Number Theory", "Geometry", "Combinatorics"];
const BANK_GOAL = 25; // target number of problems per chapter
const YEARS = [...new Set(PYQS.map(p => p.year))].sort();
const NUM = {}; // problem number within its paper, from file order
{ const seen = {}; PYQS.forEach(p => { seen[p.year] = (seen[p.year] || 0) + 1; NUM[p.id] = seen[p.year]; }); }

/* ============ STYLES ============ */
const css = `
@import url('https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,600;0,6..72,700;1,6..72,500&family=Instrument+Sans:wght@400;500;600&family=Lexend:wght@500;600;700&display=swap');
:root{color-scheme:light;--bg:#f2f5fb;--surface:#fff;--ink:#0e1838;--mute:#58627e;--line:#dbe1ee;--soft:#eaeff9;
--navy:#0b1535;--cyan:#5ad1dc;--gold:#f0b73a;--teal:#0b686f;--btn:#0e1838;--btnink:#fff;
--ring:#1f59bd;--c-alg:#1f59bd;--c-nt:#6b3ecc;--c-geo:#08676c;--c-com:#8c4d0d;--r:14px}
[data-theme=dark]{color-scheme:dark;--bg:#090e1d;--surface:#111a2f;--ink:#e8ecf6;--mute:#97a2bf;--line:#25304d;--soft:#18213b;
--navy:#070c1a;--teal:#3cc4c8;--btn:#e8ecf6;--btnink:#090e1d;--ring:#f0b73a;--c-alg:#7aa2ff;--c-nt:#b49bff;--c-geo:#3cc4c8;--c-com:#f0a85c}
[data-unit="Algebra"]{--u:var(--c-alg)}[data-unit="Number Theory"]{--u:var(--c-nt)}
[data-unit="Geometry"]{--u:var(--c-geo)}[data-unit="Combinatorics"]{--u:var(--c-com)}
*{box-sizing:border-box}
html,body,#root{width:100%;max-width:none;min-height:100%;margin:0;padding:0;display:block;text-align:left;place-items:initial}
.app{min-height:100vh;background:var(--bg);color:var(--ink);font:400 15px/1.55 'Instrument Sans',system-ui,sans-serif}
.wrap{width:100%;max-width:1360px;margin:0 auto;padding:0 clamp(16px,4vw,56px)}

/* nav */
.top{background:var(--navy);color:#fff;position:sticky;top:0;z-index:10;border-bottom:1px solid rgba(255,255,255,.08)}
.top .wrap{display:flex;align-items:center;gap:20px;flex-wrap:wrap;min-height:62px}
.brand{display:flex;align-items:center;gap:10px;font:600 19px 'Lexend','Instrument Sans',system-ui,sans-serif;letter-spacing:-.01em;margin-right:auto;padding:10px 0}
.tabs{display:flex;gap:2px}
.tab{border:0;background:none;color:#aeb9da;font:500 14.5px 'Instrument Sans';padding:20px 14px 17px;cursor:pointer;border-bottom:3px solid transparent}
.tab:hover{color:#fff}.tab[aria-selected=true]{color:#fff;border-bottom-color:var(--gold)}
.ctl{display:flex;gap:10px;align-items:center;padding:10px 0}
.seg{display:inline-flex;background:rgba(255,255,255,.1);border-radius:99px;padding:3px}
.seg button{border:0;background:none;color:#cbd5ee;font:600 13px 'Instrument Sans';padding:6px 14px;border-radius:99px;cursor:pointer}
.seg button[aria-checked=true]{background:#fff;color:#0b1535}
.ico{width:36px;height:36px;border-radius:50%;border:1px solid rgba(255,255,255,.25);background:none;color:#fff;cursor:pointer;display:grid;place-items:center}
.ico:hover{background:rgba(255,255,255,.12)}
:is(.tab,.seg button,.ico,.btn,.unit,.pill,.cta,select):focus-visible{outline:3px solid var(--ring);outline-offset:2px}
.top :focus-visible,.hero :focus-visible{outline-color:var(--gold)}

/* hero */
.hero{background-color:var(--navy);color:#fff;overflow:hidden;
background-image:linear-gradient(rgba(255,255,255,.045) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.045) 1px,transparent 1px);background-size:34px 34px}
.hero .wrap{display:grid;grid-template-columns:1.1fr .9fr;gap:32px;align-items:center;padding-top:52px;padding-bottom:92px}
.title{font:600 clamp(32px,4.6vw,54px)/1.14 'Lexend','Instrument Sans',system-ui,sans-serif;letter-spacing:-.025em;margin:0 0 18px}
.hero h1.title{color:#fff}
.lede{color:#b6c2e3;font-size:17.5px;max-width:44ch;margin:0 0 28px}
.ctas{display:flex;gap:12px;flex-wrap:wrap}
.cta{font:600 15px 'Instrument Sans';border-radius:10px;padding:12px 22px;cursor:pointer;border:1.5px solid rgba(255,255,255,.35);background:none;color:#fff}
.cta.main{background:var(--gold);border-color:var(--gold);color:#0b1535}
.cta:hover{filter:brightness(1.08)}.cta:not(.main):hover{background:rgba(255,255,255,.1)}
.fig{width:100%;max-width:520px;justify-self:end}
.fig .ln{fill:none;stroke:var(--cyan);stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round}
.fig .tri{stroke:#fff;stroke-width:2}
.fig .dash{stroke-dasharray:4 6;opacity:.65}
.fig .pt{fill:var(--gold)}.fig text{font:italic 500 18px 'Newsreader',serif;fill:#fff}
@media(prefers-reduced-motion:no-preference){
 .fig .draw{stroke-dasharray:1;stroke-dashoffset:1;animation:draw 1.7s cubic-bezier(.4,0,.2,1) forwards;animation-delay:var(--d,0s)}
 .fig .pt,.fig text{opacity:0;animation:fade .5s forwards;animation-delay:var(--d,0s)}
 @keyframes draw{to{stroke-dashoffset:0}}@keyframes fade{to{opacity:1}}}

/* sheet */
.sheet{background:var(--bg);border-radius:24px 24px 0 0;margin-top:-34px;position:relative;padding:40px 0 64px;min-height:60vh}
.app h2{font:700 32px/1.15 'Newsreader',serif;margin:0 0 6px;letter-spacing:-.01em;color:var(--ink)}
.mute{color:var(--mute);font-size:14px}
.units{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin:24px 0 4px}
.unit{text-align:left;font:inherit;color:inherit;cursor:pointer;background:var(--surface);border:1px solid var(--line);border-radius:var(--r);padding:14px 16px}
.unit[aria-pressed=true]{border-color:var(--u);box-shadow:inset 0 0 0 1px var(--u)}
.unit b{display:block;font:700 28px/1.2 'Newsreader',serif;color:var(--u)}
.unit b small{font:600 15px 'Instrument Sans',sans-serif;color:var(--mute);margin-left:2px}
.bar{height:4px;background:var(--line);border-radius:9px;margin-top:8px;overflow:hidden}.bar i{display:block;height:100%;background:var(--u)}

/* filters */
.pills{display:flex;gap:8px;flex-wrap:wrap;margin:22px 0 14px}
.pill{border:1px solid var(--line);background:var(--surface);color:var(--ink);font:600 13.5px 'Instrument Sans';padding:6px 14px;border-radius:99px;cursor:pointer}
.pill:hover{border-color:var(--mute)}.pill[aria-pressed=true]{background:var(--btn);color:var(--btnink);border-color:var(--btn)}
.filters{display:flex;gap:14px;flex-wrap:wrap;align-items:flex-end;margin:0 0 22px}
.f{display:flex;flex-direction:column;gap:4px;font-size:12.5px;font-weight:600;color:var(--mute)}
select{font:400 14.5px 'Instrument Sans';padding:9px 12px;min-width:170px;border:1px solid var(--line);border-radius:10px;background:var(--surface);color:var(--ink)}
.count{margin-left:auto;align-self:center}

/* problem card */
.card{display:grid;grid-template-columns:96px 1fr;background:var(--surface);border:1px solid var(--line);border-radius:var(--r);margin-bottom:18px;overflow:hidden}
.rail{background:var(--soft);border-right:1px solid var(--line);padding:20px 10px;text-align:center;border-top:4px solid var(--u,var(--gold))}
.rail b{display:block;font:700 28px/1.1 'Newsreader',serif;color:var(--u,var(--ink))}
.rail span{font-size:12.5px;font-weight:600;color:var(--mute)}
.body{padding:20px 26px 22px;min-width:0}
.chips{display:flex;gap:6px;flex-wrap:wrap}
.chip{font-size:12.5px;font-weight:600;padding:2px 10px;border-radius:99px;background:var(--soft);color:var(--mute)}
.chip.u{background:color-mix(in srgb,var(--u) 14%,transparent);color:var(--u)}
.q{font:400 19.5px/1.78 'Newsreader',serif;margin:14px 0 4px;white-space:pre-wrap;max-width:88ch}
.q .katex{font-size:1.06em}
.katex-display{overflow-x:auto;overflow-y:hidden;margin:.7em 0;padding:2px 0}
.btn{cursor:pointer;border:1px solid var(--line);border-radius:9px;padding:8px 16px;font:600 14px 'Instrument Sans';background:transparent;color:var(--ink)}
.btn:hover{background:var(--soft)}
.sbtn{margin-top:14px}
.soln{margin-top:16px;padding:16px 18px;background:var(--soft);border-radius:12px;border-left:4px solid var(--teal)}
.soln>header{display:flex;justify-content:space-between;gap:10px;margin-bottom:10px;font-weight:600;color:var(--teal)}
.soln>header span{font-weight:400;color:var(--mute);font-size:13px}
.sol{font:400 17.5px/1.72 'Newsreader',serif;max-width:88ch}
.sol p{margin:0 0 8px;white-space:pre-wrap}.sol ul{margin:4px 0 10px;padding-left:22px}
.idea{background:var(--surface);border-left:3px solid var(--gold);padding:10px 14px;border-radius:0 8px 8px 0;margin-bottom:14px}
.idea b{display:block;font:600 13px 'Instrument Sans';margin-bottom:2px}
.step{display:grid;grid-template-columns:28px 1fr;gap:12px;margin:14px 0}
.n{width:26px;height:26px;border-radius:50%;background:var(--surface);color:var(--teal);font:600 13px/24px 'Instrument Sans';text-align:center;border:1px solid var(--line)}
.st{font-weight:700;margin-bottom:2px}
.answer{margin-top:14px;padding:10px 14px;background:var(--surface);border:1px solid var(--teal);border-radius:8px;font-weight:600}
.empty{text-align:center;padding:40px 20px;background:var(--surface);border:1px dashed var(--line);border-radius:var(--r)}
.foot{border-top:1px solid var(--line);padding:22px 0 30px;margin-top:32px;color:var(--mute);font-size:13.5px}
@media(prefers-reduced-motion:no-preference){.tab,.btn,.unit,.pill,.cta{transition:background .15s,color .15s,border-color .15s}}
@media(max-width:820px){.hero .wrap{grid-template-columns:1fr;padding-bottom:84px}.fig{max-width:320px;justify-self:start}}
@media(max-width:620px){.card{grid-template-columns:1fr}.rail{display:flex;gap:10px;align-items:baseline;justify-content:flex-start;padding:10px 16px;border-right:0;border-bottom:1px solid var(--line)}
 .body{padding:16px}.q{font-size:18px}.tab{padding:12px 10px 10px}.wrap{padding:0 16px}}
`;

/* ============ HERO FIGURE: a triangle with circumcircle, incircle and bisectors ============ */
const P = { A: [228, 44], B: [118, 236], C: [352, 246] };
const d2 = (p, q) => Math.hypot(p[0] - q[0], p[1] - q[1]);
const [sa, sb, sc] = [d2(P.B, P.C), d2(P.C, P.A), d2(P.A, P.B)], per = sa + sb + sc;
const I = [0, 1].map(k => (sa * P.A[k] + sb * P.B[k] + sc * P.C[k]) / per);
const area = Math.abs((P.B[0] - P.A[0]) * (P.C[1] - P.A[1]) - (P.C[0] - P.A[0]) * (P.B[1] - P.A[1])) / 2;
const rIn = (2 * area) / per;
const circ = (() => { // circumcentre
  const [[ax, ay], [bx, by], [cx, cy]] = [P.A, P.B, P.C];
  const D = 2 * (ax * (by - cy) + bx * (cy - ay) + cx * (ay - by));
  const ux = ((ax * ax + ay * ay) * (by - cy) + (bx * bx + by * by) * (cy - ay) + (cx * cx + cy * cy) * (ay - by)) / D;
  const uy = ((ax * ax + ay * ay) * (cx - bx) + (bx * bx + by * by) * (ax - cx) + (cx * cx + cy * cy) * (bx - ax)) / D;
  return { o: [ux, uy], r: Math.hypot(ax - ux, ay - uy) };
})();

function Figure() {
  const pt = (p, d) => <circle className="pt" cx={p[0]} cy={p[1]} r="4" style={{ "--d": d + "s" }} />;
  const lab = (t, x, y, d) => <text x={x} y={y} style={{ "--d": d + "s" }}>{t}</text>;
  return (
    <svg className="fig" viewBox="0 0 480 340" role="img" aria-label="A triangle with its circumcircle, incircle and angle bisectors">
      <circle className="ln draw" pathLength="1" cx={circ.o[0]} cy={circ.o[1]} r={circ.r} style={{ "--d": ".1s" }} />
      <path className="ln tri draw" pathLength="1" d={`M${P.A}L${P.B}L${P.C}Z`} style={{ "--d": ".7s" }} />
      <circle className="ln draw" pathLength="1" cx={I[0]} cy={I[1]} r={rIn} style={{ "--d": "1.3s" }} />
      {[P.A, P.B, P.C].map((v, i) => <line key={i} className="ln dash" x1={v[0]} y1={v[1]} x2={I[0]} y2={I[1]} />)}
      {pt(P.A, 1.6)}{pt(P.B, 1.7)}{pt(P.C, 1.8)}{pt(I, 2)}
      {lab("A", P.A[0] - 6, P.A[1] - 12, 1.7)}{lab("B", P.B[0] - 24, P.B[1] + 8, 1.8)}{lab("C", P.C[0] + 12, P.C[1] + 8, 1.9)}{lab("I", I[0] + 8, I[1] - 8, 2.1)}
    </svg>
  );
}

/* ============ SMALL PARTS ============ */
const useStored = (key, init) => {
  const [v, setV] = useState(() => { try { return localStorage.getItem(key) || init(); } catch { return init(); } });
  useEffect(() => { try { localStorage.setItem(key, v); } catch { /* storage unavailable */ } }, [key, v]);
  return [v, setV];
};

const Field = ({ label, value, onChange, options }) => (
  <label className="f">{label}
    <select value={value} onChange={e => onChange(e.target.value)}>
      <option>All</option>{options.map(o => <option key={o}>{o}</option>)}
    </select>
  </label>
);

const Pills = ({ label, value, onChange, options }) => (
  <div className="pills" role="group" aria-label={label}>
    {["All", ...options].map(o => <button key={o} className="pill" aria-pressed={value === o} onClick={() => onChange(o)}>{o === "All" ? "All " + label.toLowerCase() : o}</button>)}
  </div>
);

function Problem({ unit, rail, chips, text, solution, teacher }) {
  const [open, setOpen] = useState(false);
  return (
    <article className="card" data-unit={unit}>
      <div className="rail"><b>{rail[0]}</b><span>{rail[1]}</span></div>
      <div className="body">
        <div className="chips">{chips}</div>
        <div className="q"><MathText text={text} /></div>
        {teacher && solution && (
          <>
            <button className="btn sbtn" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? "Hide solution" : "Show solution"}</button>
            {open && (
              <section className="soln">
                <header>Solution{solution.note && <span>{solution.note}</span>}</header>
                <Solution text={solution.text} />
              </section>
            )}
          </>
        )}
        {teacher && !solution && <div className="mute sbtn">Solution not added yet</div>}
      </div>
    </article>
  );
}

/* ============ PYQs ============ */
function Pyqs({ teacher }) {
  const [year, setYear] = useState("All"), [unit, setUnit] = useState("All"), [sub, setSub] = useState("All");
  const subs = [...new Set(PYQS.filter(p => unit === "All" || p.unit === unit).map(p => p.subtopic))];
  const shown = useMemo(() => PYQS.filter(p =>
    (year === "All" || p.year === +year) && (unit === "All" || p.unit === unit) && (sub === "All" || p.subtopic === sub)), [year, unit, sub]);
  const reset = () => { setYear("All"); setUnit("All"); setSub("All"); };
  return (
    <>
      <h2>Previous year questions</h2>
      <div className="mute">{teacher ? "Past papers with worked solutions." : "Past papers to practise on."} Pick a year, then narrow by chapter or subtopic.</div>
      <Pills label="Years" value={year} onChange={setYear} options={YEARS.map(String)} />
      <div className="filters">
        <Field label="Chapter" value={unit} onChange={v => { setUnit(v); setSub("All"); }} options={UNITS} />
        <Field label="Subtopic" value={sub} onChange={setSub} options={subs} />
        <span className="mute count">{shown.length} problems</span>
      </div>
      {shown.length === 0 && <div className="empty">No problems match these filters.<br /><button className="btn sbtn" onClick={reset}>Reset filters</button></div>}
      {shown.map(p => {
        const s = PYQ_SOLUTIONS[p.id];
        return (
          <Problem key={p.id} unit={p.unit} text={p.text} teacher={teacher} rail={[p.year, "Problem " + NUM[p.id]]}
            solution={s && { text: s.text, note: s.src === "video" ? "From video solution" : "Solved by Claude" }}
            chips={<><span className="chip u">{p.unit}</span><span className="chip">{p.subtopic}</span></>} />
        );
      })}
    </>
  );
}

/* ============ QUESTION BANK ============ */
function Bank({ teacher }) {
  const [unit, setUnit] = useState("All"), [level, setLevel] = useState("All");
  const shown = BANK.filter(q => (unit === "All" || q.unit === unit) && (level === "All" || q.level === level));
  return (
    <>
      <h2>Question Bank</h2>
      <div className="mute">Real RMO problems{teacher ? ", each with a worked solution" : ""}. Select a chapter card to filter.</div>
      <div className="units">
        {UNITS.map(u => {
          const n = BANK.filter(i => i.unit === u).length;
          return (
            <button className="unit" data-unit={u} key={u} aria-pressed={unit === u} onClick={() => setUnit(unit === u ? "All" : u)}>
              <span className="mute">{u}</span><b>{n}<small>/{BANK_GOAL}</small></b>
              <div className="bar" role="progressbar" aria-label={u + " problems"} aria-valuemin={0} aria-valuemax={BANK_GOAL} aria-valuenow={n}><i style={{ width: Math.min(100, (n / BANK_GOAL) * 100) + "%" }} /></div>
            </button>
          );
        })}
      </div>
      <Pills label="Levels" value={level} onChange={setLevel} options={["Easy", "Medium", "Hard"]} />
      <div className="filters"><span className="mute count" style={{ marginLeft: 0 }}>{shown.length} problems</span></div>
      {shown.length === 0 && <div className="empty">No problems match these filters.</div>}
      {shown.map(q => (
        <Problem key={q.id} unit={q.unit} text={q.text} teacher={teacher} solution={{ text: q.solution }} rail={["#" + q.id.slice(1), q.level]}
          chips={<><span className="chip u">{q.unit}</span><span className="chip">{q.subtopic}</span></>} />
      ))}
    </>
  );
}

/* ============ APP ============ */
const Sun = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>;
const Moon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>;
const Logo = () => <svg width="26" height="26" viewBox="0 0 32 32" fill="none" strokeWidth="2" strokeLinejoin="round" aria-hidden="true"><circle cx="16" cy="17" r="12" stroke="#5ad1dc"/><path d="M16 5L5 25h22z" stroke="#fff"/><circle cx="16" cy="5" r="2.4" fill="#f0b73a" stroke="none"/></svg>;

export default function App() {
  const [tab, setTab] = useState("pyq");
  const [mode, setMode] = useStored("rmo-mode", () => "student");
  const [theme, setTheme] = useStored("rmo-theme", () => (window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light"));
  useEffect(() => { document.documentElement.dataset.theme = theme; }, [theme]);
  const teacher = mode === "teacher";
  const tabs = [["pyq", "RMO PYQs"], ["bank", "Question Bank"]];
  const go = k => { setTab(k); document.getElementById("sheet")?.scrollIntoView?.({ behavior: "smooth" }); };
  return (
    <div className="app">
      <style>{css}</style>
      <header className="top"><div className="wrap">
        <div className="brand"><Logo />RMO Training Room</div>
        <nav className="tabs" role="tablist" aria-label="Sections">
          {tabs.map(([k, l]) => <button key={k} role="tab" className="tab" aria-selected={tab === k} onClick={() => setTab(k)}>{l}</button>)}
        </nav>
        <div className="ctl">
          <div className="seg" role="radiogroup" aria-label="Mode">
            {[["student", "Student"], ["teacher", "Teacher"]].map(([k, l]) =>
              <button key={k} role="radio" aria-checked={mode === k} onClick={() => setMode(k)}>{l}</button>)}
          </div>
          <button className="ico" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}>
            {theme === "dark" ? <Sun /> : <Moon />}
          </button>
        </div>
      </div></header>
      <section className="hero"><div className="wrap">
        <div>
          <h1 className="title">Train for the RMO, one problem at a time.</h1>
          <p className="lede">{PYQS.length} past-paper problems from RMO {YEARS[0]} to {YEARS[YEARS.length - 1]} and {BANK.length} practice problems, sorted by chapter and level.{teacher ? " Teacher mode is on: worked solutions are available." : " Switch to Teacher mode to see worked solutions."}</p>
          <div className="ctas">
            <button className="cta main" onClick={() => go("pyq")}>Browse past papers</button>
            <button className="cta" onClick={() => go("bank")}>Open the Question Bank</button>
          </div>
        </div>
        <Figure />
      </div></section>
      <main className="sheet" id="sheet"><div className="wrap">
        {tab === "pyq" ? <Pyqs teacher={teacher} /> : <Bank teacher={teacher} />}
        <footer className="foot">RMO Training Room. Mathematics is typeset with KaTeX.</footer>
      </div></main>
    </div>
  );
}