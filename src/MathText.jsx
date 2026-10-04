import { useMemo } from "react";
import "katex/dist/katex.min.css";
import { mathToHtml } from "./mathify.js";

/* Inline text with LaTeX-quality maths. Plain unicode maths is converted automatically;
   explicit $...$ / $$...$$ is also supported. */
export function MathText({ text, className = "" }) {
  const html = useMemo(() => mathToHtml(text || ""), [text]);
  return <span className={"mt " + className} dangerouslySetInnerHTML={{ __html: html }} />;
}

/* A worked solution: key idea callout, numbered steps, bullet lists, highlighted answer. */
export function Solution({ text }) {
  const blocks = text.trim().split(/\n{2,}/);
  return (
    <div className="sol">
      {blocks.map((b, i) => {
        const idea = b.match(/^BIG IDEA:\s*([\s\S]*)$/);
        if (idea) return <div className="idea" key={i}><b>Key idea</b><MathText text={idea[1]} /></div>;
        const step = b.match(/^(Step|Case)\s+(\w+)\s*[-–—]\s*([^.\n]+)\.?[ \n]*([\s\S]*)$/);
        if (step) return (
          <div className="step" key={i}>
            <span className="n" aria-hidden="true">{step[2]}</span>
            <div>
              <div className="st"><MathText text={step[3]} /></div>
              {step[4] && <Lines text={step[4]} />}
            </div>
          </div>
        );
        if (/^Answer\b/.test(b)) return <div className="answer" key={i}><MathText text={b} /></div>;
        return <Lines key={i} text={b} />;
      })}
    </div>
  );
}

function Lines({ text }) {
  const out = [];
  let list = [];
  const flush = () => { if (list.length) { out.push(<ul key={"u" + out.length}>{list.map((l, j) => <li key={j}><MathText text={l} /></li>)}</ul>); list = []; } };
  text.split("\n").forEach(l => {
    if (/^-\s/.test(l)) list.push(l.slice(2));
    else { flush(); if (l.trim()) out.push(<p key={"p" + out.length}><MathText text={l} /></p>); }
  });
  flush();
  return <>{out}</>;
}
