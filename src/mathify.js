import katex from "katex";

/* Turns plain-text / unicode maths ("∠ABC = 90°", "x² + (a+1)/(b−1)", "√(2n)") into LaTeX
   and renders it with KaTeX. Text that already contains $...$ or $$...$$ is rendered as written. */

const SUPC = "⁰¹²³⁴⁵⁶⁷⁸⁹ⁿ⁺⁻", SUPV = "0123456789n+-";
const SUBC = "₀₁₂₃₄₅₆₇₈₉ₙᵢⱼ₊₋", SUBV = "0123456789nij+-";
const TEX = {
  "−": "-", "·": "\\cdot ", "×": "\\times ", "÷": "\\div ", "≤": "\\le ", "≥": "\\ge ", "≠": "\\ne ",
  "≈": "\\approx ", "≡": "\\equiv ", "≅": "\\cong ", "∼": "\\sim ", "±": "\\pm ", "∈": "\\in ",
  "∉": "\\notin ", "⊂": "\\subset ", "⊆": "\\subseteq ", "∪": "\\cup ", "∩": "\\cap ", "∅": "\\varnothing ",
  "∠": "\\angle ", "∥": "\\parallel ", "⟂": "\\perp ", "⊥": "\\perp ", "△": "\\triangle ", "∆": "\\Delta ",
  "Δ": "\\Delta ", "Σ": "\\sum ", "∑": "\\sum ", "∏": "\\prod ", "⌊": "\\lfloor ", "⌋": "\\rfloor ",
  "⌈": "\\lceil ", "⌉": "\\rceil ", "∞": "\\infty ", "π": "\\pi ", "…": "\\ldots ", "⋯": "\\cdots ",
  "→": "\\to ", "⇒": "\\Rightarrow ", "∴": "\\therefore ", "∤": "\\nmid ", "°": "^\\circ ", "′": "'",
  "ℓ": "\\ell ", "½": "\\frac12 ", "α": "\\alpha ", "β": "\\beta ", "γ": "\\gamma ", "δ": "\\delta ",
  "ε": "\\varepsilon ", "θ": "\\theta ", "λ": "\\lambda ", "μ": "\\mu ", "ω": "\\omega ", "σ": "\\sigma ",
  "φ": "\\varphi ", "Γ": "\\Gamma ", "Ω": "\\Omega ", "Θ": "\\Theta ", "Φ": "\\Phi ",
};
const KEYS = Object.keys(TEX).join("");
const SYMRE = new RegExp(`[${KEYS}]`, "g");
const MATHCHAR = new RegExp(`[${KEYS}=<>+*^_{}|√${SUPC}${SUBC}\u0304]`);
const OPONLY = new RegExp(`^[=<>+*/${KEYS.replace(/[πℓ½αβγδεθλμωσφΓΩΘΦ∠∑Σ∏⌊⌋⌈⌉△∆Δ°′]/g, "")}]+$`);
const STOP = new Set("RMO AM GM HM QM LHS RHS BIG IDEA NOTE CASE QED IMO PYQ AMC INMO CRMO OK TRUE FALSE YES NO AND OR IF THE".split(" "));
const EN = new Set("is are be or of to in on if so we as at by no it the and for has can but not one two any all its may let then thus hence that this with from have each here also even odd sum say see now when who how why was were had did do does get got use set per via than into onto over both half twice more less most least some such only same else next last".split(" "));
const FS = new Set(" +−=,;:<>≤≥≠≈≡∈→∪∩±".split(""));

const cnt = (s, c) => s.split(c).length - 1;
function matchParen(t, open) {
  let d = 0;
  for (let i = open; i < t.length; i++) {
    if (t[i] === "(") d++;
    else if (t[i] === ")" && --d === 0) return i;
  }
  return -1;
}
const unwrap = x => (x[0] === "(" && matchParen(x, 0) === x.length - 1 ? x.slice(1, -1) : x);

function fr(t) {
  for (let guard = 0; guard < 40; guard++) {
    const i = t.indexOf("/");
    if (i < 0) break;
    const sl = t[i - 1] === " ", sr = t[i + 1] === " ";
    const a = sl ? i - 1 : i;
    let s = a, d = 0;
    while (s > 0) {
      const c = t[s - 1];
      if (")}]".includes(c)) d++;
      else if ("({[".includes(c)) { if (d === 0) break; d--; }
      else if (d === 0 && (sl ? c === " " : FS.has(c))) break;
      s--;
    }
    const b = sr ? i + 2 : i + 1;
    let e = b; d = 0;
    while (e < t.length) {
      const c = t[e];
      if ("({[".includes(c)) d++;
      else if (")}]".includes(c)) { if (d === 0) break; d--; }
      else if (d === 0 && (sr ? c === " " : FS.has(c))) break;
      e++;
    }
    const num = t.slice(s, a).trim(), den = t.slice(b, e).trim();
    if (!num || !den) { t = t.slice(0, i) + "\u0002" + t.slice(i + 1); continue; }
    t = t.slice(0, s) + "\\frac{" + fr(unwrap(num)) + "}{" + fr(unwrap(den)) + "}" + t.slice(e);
  }
  return t;
}

export function toTex(src) {
  let t = src.replace(/([{}%&#])/g, "\\$1").replace(/([…⋯]\s*[,+]\s*)([A-Za-z])([nk])(?![A-Za-z])/g, "$1$2_{$3}").replace(/·{3}/g, "⋯").replace(/(.)\u0304/g, "\\overline{$1}")
    .replace(new RegExp(`[${SUPC}]+`, "g"), m => "^{" + [...m].map(c => SUPV[SUPC.indexOf(c)]).join("") + "}")
    .replace(new RegExp(`[${SUBC}]+`, "g"), m => "_{" + [...m].map(c => SUBV[SUBC.indexOf(c)]).join("") + "}");
  for (let g = 0; g < 50; g++) { // x^(2k), a_(n-1)  ->  x^{2k}, a_{n-1}
    const m = /[\^_]\(/.exec(t);
    if (!m) break;
    const o = m.index + 1, c = matchParen(t, o);
    if (c < 0) { t = t.slice(0, o) + "{(}" + t.slice(o + 1); break; }
    t = t.slice(0, o) + "{" + t.slice(o + 1, c) + "}" + t.slice(c + 1);
  }
  t = t.replace(/_([A-Za-z0-9]{2,})/g, "_{$1}")
    .replace(/\bmod\b/g, "\\,\\mathrm{mod}\\,")
    .replace(/\b(gcd|lcm|sin|cos|tan|cot|log|ln|max|min|deg)\b/g, m => (m === "lcm" ? "\\operatorname{lcm}" : "\\" + m));
  for (let g = 0; g < 50; g++) {
    const i = t.indexOf("√");
    if (i < 0) break;
    if (t[i + 1] === "(") {
      const c = matchParen(t, i + 1);
      if (c > 0) { t = t.slice(0, i) + "\\sqrt{" + t.slice(i + 2, c) + "}" + t.slice(c + 1); continue; }
    }
    const m = /^[A-Za-z0-9.]+(?:[\^_]\{[^}]*\})?/.exec(t.slice(i + 1));
    t = m ? t.slice(0, i) + "\\sqrt{" + m[0] + "}" + t.slice(i + 1 + m[0].length) : t.slice(0, i) + "\\surd " + t.slice(i + 1);
  }
  const sub = x => x.replace(/(^|[^A-Za-z\\^_{.])([A-Za-zΓΩαβγθλω])(\d{1,2})(?!\d)/g, "$1$2_{$3}");
  t = sub(sub(sub(t)));
  return fr(t).replace(/\u0002/g, "/").replace(SYMRE, c => TEX[c]).replace(/\s+/g, " ").trim();
}

/* ---- decide which words of a line are maths ---- */
function kindOf(s, i, prev) {
  if (i === 0 && /^\((?:[a-z]|i{1,3}|iv|v)\)[.,:;]?$/.test(s)) return "P"; // list labels (a) (ii)
  if (/^[-–:()\[\]]$/.test(s)) return "B";
  const core = s.replace(/^[(\[{"“]+/, "").replace(/[)\]}.,;:?"”]+$/, "");
  if (!core) return "P";
  if (OPONLY.test(core)) return "O";
  if (MATHCHAR.test(core)) return "M";
  if (core.includes("/")) return /^[a-z]{3,}\/[a-z]{3,}$/.test(core) ? "P" : "M";
  if (/^\d+([.,]\d+)?%?$/.test(core)) return "N";
  if (core.length === 1) {
    if (core === "a") return "a?";
    if (core === "A") return i === 0 || /[.!?:]$/.test(prev) ? "P" : "M";
    return /[A-Za-z]/.test(core) ? "M" : "P";
  }
  if ((/^\d+[A-Za-z]{1,4}$/.test(core) && !/^\d+(st|nd|rd|th)$/.test(core)) || /^[A-Za-z0-9]+(,[A-Za-z0-9]+)+$/.test(core) || /^([A-Za-z]\d{1,2}){1,}$/.test(core) || /^[A-Za-z]'+$/.test(core)) return "M";
  if (/^(?:[A-Za-z]{1,2}\d*|\d+(?:\.|[A-Za-z]{0,4}))\(/.test(core) || /\)[A-Za-z0-9(]/.test(core)) return "M";
  if (/^[A-Za-z][0-9']?\(/.test(core) || /^(gcd|lcm|sin|cos|tan|cot|log|ln|max|min|deg)\(/.test(core) || core === "mod") return "M";
  if (/^[A-Z]{2,5}$/.test(core) && !STOP.has(core)) return "M";
  return "P";
}

function lineSegments(line) {
  line = line.replace(/[Σ∑]\s*\(\s*([^()=]+?)\s*=\s*([^()]+?)\s+to\s+([^()]+?)\s*\)/g,
    (_, v, a, b) => `Σ_(${v.replace(/\s+/g, "")}=${a.replace(/\s+/g, "")})^(${b.replace(/\s+/g, "")})`);
  const items = line.match(/\S+|\s+/g) || [];
  const toks = [], ws = [];
  let lead = "";
  items.forEach((it, k) => { if (/^\s/.test(it)) { if (k === 0) lead = it; else ws[toks.length - 1] = it; } else { toks.push(it); ws.push(""); } });
  const K = toks.map((s, i) => kindOf(s, i, toks[i - 1] || ""));
  K.forEach((k, i) => { if (k === "a?") K[i] = /[,;]$/.test(toks[i]) || K[i - 1] === "O" || K[i + 1] === "O" ? "M" : "P"; });
  K.forEach((k, i) => {
    const w = toks[i].replace(/^[(\[{]+/, "").replace(/[)\]}.,;:?]+$/, "");
    if (k === "P" && /^[a-z]{2,4}$/.test(w) && !EN.has(w) && (K[i - 1] === "O" || K[i + 1] === "O")) K[i] = "m";
  });
  K.forEach((k, i) => { if (k === "O" || k === "m") K[i] = "M"; });
  for (let i = 1; i < K.length; i++) if ((K[i] === "N" || K[i] === "B") && K[i - 1] === "M") K[i] = "M";
  for (let i = K.length - 2; i >= 0; i--) if ((K[i] === "N" || K[i] === "B") && K[i + 1] === "M") K[i] = "M";
  const out = [];
  let buf = lead;
  for (let t = 0; t < toks.length;) {
    if (K[t] !== "M") { buf += toks[t] + ws[t]; t++; continue; }
    let u = t;
    let bal = cnt(toks[t], "(") - cnt(toks[t], ")");
    while (u + 1 < toks.length && K[u + 1] === "M" && !/[.?]$/.test(toks[u]) && bal >= 0) { u++; bal += cnt(toks[u], "(") - cnt(toks[u], ")"); }
    let r = "";
    for (let k = t; k <= u; k++) r += toks[k] + (k < u ? ws[k] : "");
    let before = "", after = "";
    for (let ch = true; ch;) {
      ch = false;
      const m = r.match(/[.,;:?]+$/);
      if (m) { after = m[0] + after; r = r.slice(0, -m[0].length); ch = true; }
      if (r.endsWith(")") && cnt(r, ")") > cnt(r, "(")) { after = ")" + after; r = r.slice(0, -1); ch = true; }
      if (r.startsWith("(") && cnt(r, "(") > cnt(r, ")")) { before += "("; r = r.slice(1); ch = true; }
    }
    if (!r) { buf += toks[t] + ws[t]; t++; continue; }
    const whole = t === 0 && u === toks.length - 1 && !lead.trim() && !before && /^[.,;:]*$/.test(after);
    buf += before;
    if (buf) out.push({ text: buf });
    out.push({ tex: toTex(r), display: whole && (/\/|[Σ∑]/.test(r) || r.length > 45) });
    buf = after + ws[u];
    t = u + 1;
  }
  if (buf) out.push({ text: buf });
  return out;
}

const esc = s => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const kx = (tex, display) => katex.renderToString(tex, { displayMode: display, throwOnError: false, strict: "ignore" });

export function mathToHtml(text) {
  if (text.includes("$")) // explicit LaTeX
    return text.split(/(\$\$[\s\S]+?\$\$|\$[^$\n]+?\$)/).map(p =>
      p.startsWith("$$") ? kx(p.slice(2, -2), true) : p.startsWith("$") && p.length > 1 ? kx(p.slice(1, -1), false) : esc(p)).join("");
  return text.split("\n").map(l => lineSegments(l).map(s => ("tex" in s ? kx(s.tex, s.display) : esc(s.text))).join("")).join("\n");
}
export const _kx = (tex) => katex.renderToString(tex, { throwOnError: true, strict: "ignore" });
export { lineSegments };
