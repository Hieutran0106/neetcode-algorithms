import React, { useState } from "react";
import {
  ArrowDown, ArrowRight, Check, CheckCircle2, CircleAlert, Clock3, Code2,
  GitBranch, Lightbulb, Network, Search, Target, TreePine, X, Zap
} from "lucide-react";
import * as CodeExamples from "../data/trieExamples.js";

export function CodeBlock({ code, label = "Code minh họa" }) {
  const languageTabs = [
    { id: "c", label: "C" },
    { id: "java", label: "Java" },
    { id: "python", label: "Python" },
  ];
  const isMultilingual = code && typeof code === "object";
  const availableTabs = isMultilingual
    ? languageTabs.filter((item) => typeof code[item.id] === "string" && code[item.id].trim())
    : [{ id: "single", label }];
  const [activeLanguage, setActiveLanguage] = useState(isMultilingual ? "c" : "single");
  const safeActiveLanguage = availableTabs.some((item) => item.id === activeLanguage)
    ? activeLanguage
    : availableTabs[0]?.id;
  const visibleCode = isMultilingual ? code[safeActiveLanguage] : code;

  return (
    <div className="my-6 overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 shadow-lg shadow-slate-200/30">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 bg-slate-900 px-4 py-3">
        <div className="flex items-center gap-2" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
        </div>
        {isMultilingual ? (
          <div className="flex items-center gap-1 rounded-lg border border-white/10 bg-slate-950 p-1" role="tablist" aria-label="Chọn ngôn ngữ lập trình">
            {availableTabs.map((item) => {
              const active = safeActiveLanguage === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setActiveLanguage(item.id)}
                  className={`rounded-md px-3 py-1.5 text-xs font-semibold transition-colors ${active ? "bg-slate-100 text-slate-950" : "text-slate-400 hover:bg-white/10 hover:text-white"}`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        ) : (
          <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
            <Code2 size={14} />
            {label}
          </div>
        )}
      </div>
      <div className="overflow-x-auto p-5">
        <pre className="font-mono text-[13px] leading-7 text-slate-300 sm:text-sm">
          <code>{visibleCode}</code>
        </pre>
      </div>
    </div>
  );
}
export function SectionTitle({ number, title, description }) {
  return <div className="mb-8"><div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-400"><span>{number}</span><span className="h-px w-8 bg-slate-200"/></div><h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">{title}</h2>{description && <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">{description}</p>}</div>;
}
export function InfoBox({ type = "info", title, children }) {
  const cfg={info:{wrapper:"border-sky-200 bg-sky-50",icon:"bg-sky-100 text-sky-700",Icon:CircleAlert},tip:{wrapper:"border-amber-200 bg-amber-50",icon:"bg-amber-100 text-amber-700",Icon:Lightbulb},important:{wrapper:"border-violet-200 bg-violet-50",icon:"bg-violet-100 text-violet-700",Icon:Zap}};
  const item=cfg[type]||cfg.info; const Icon=item.Icon;
  return <div className={`my-6 rounded-2xl border p-5 ${item.wrapper}`}><div className="flex gap-4"><div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${item.icon}`}><Icon size={17}/></div><div><h4 className="font-semibold text-slate-900">{title}</h4><div className="mt-2 text-sm leading-7 text-slate-700">{children}</div></div></div></div>;
}
export function Complexity({ time, space, timeDescription, spaceDescription }) {
  return <div className="my-6 grid gap-4 sm:grid-cols-2"><div className="rounded-2xl border border-slate-200 bg-white p-5"><div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400"><Clock3 size={15}/>Time Complexity</div><p className="mt-3 font-mono text-2xl font-bold text-slate-900">{time}</p>{timeDescription&&<p className="mt-2 text-sm leading-6 text-slate-500">{timeDescription}</p>}</div><div className="rounded-2xl border border-slate-200 bg-white p-5"><div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400"><Target size={15}/>Space Complexity</div><p className="mt-3 font-mono text-2xl font-bold text-slate-900">{space}</p>{spaceDescription&&<p className="mt-2 text-sm leading-6 text-slate-500">{spaceDescription}</p>}</div></div>;
}
export function StepCard({ number, title, children }) { return <div className="rounded-2xl border border-slate-200 bg-white p-5"><div className="flex gap-4"><div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-900 font-mono text-xs font-bold text-white">{number}</div><div className="min-w-0"><h3 className="font-semibold text-slate-900">{title}</h3><div className="mt-2 text-sm leading-7 text-slate-600">{children}</div></div></div></div>; }
export function TriePath({ letters = [], terminal = [] }) { return <div className="my-8 overflow-x-auto rounded-3xl border border-slate-200 bg-white p-6"><div className="flex min-w-[420px] items-center justify-center gap-2">{letters.map((letter,i)=><React.Fragment key={`${letter}-${i}`}><div className="relative"><div className={`flex h-14 w-14 items-center justify-center rounded-xl border-2 font-mono text-lg font-bold ${terminal.includes(i)?"border-emerald-300 bg-emerald-50 text-emerald-700":"border-slate-200 bg-slate-50 text-slate-900"}`}>{letter}</div>{terminal.includes(i)&&<span className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-bold uppercase tracking-wider text-emerald-600">word</span>}</div>{i!==letters.length-1&&<ArrowRight size={18} className="shrink-0 text-slate-400"/>}</React.Fragment>)}</div></div>; }
export function TrieStructureDiagram() { return <div className="my-8 overflow-x-auto rounded-3xl border border-slate-200 bg-white p-6"><div className="mx-auto min-w-[500px] max-w-3xl"><div className="flex justify-center"><div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-slate-400 bg-slate-50 font-mono text-[10px] font-bold">root</div></div><div className="my-4 flex justify-center"><ArrowDown size={19} className="text-slate-400"/></div><div className="flex justify-center gap-16"><div className="flex flex-col items-center"><div className="flex h-11 w-11 items-center justify-center rounded-xl border-2 border-slate-300 bg-white font-mono font-bold">c</div><ArrowDown size={17} className="my-2 text-slate-400"/><div className="flex h-11 w-11 items-center justify-center rounded-xl border-2 border-slate-300 bg-white font-mono font-bold">a</div><ArrowDown size={17} className="my-2 text-slate-400"/><div className="flex gap-5"><div className="flex h-11 w-11 items-center justify-center rounded-xl border-2 border-emerald-300 bg-emerald-50 font-mono font-bold text-emerald-700">t</div><div className="flex h-11 w-11 items-center justify-center rounded-xl border-2 border-emerald-300 bg-emerald-50 font-mono font-bold text-emerald-700">r</div></div></div><div className="flex flex-col items-center"><div className="flex h-11 w-11 items-center justify-center rounded-xl border-2 border-slate-300 bg-white font-mono font-bold">d</div><ArrowDown size={17} className="my-2 text-slate-400"/><div className="flex h-11 w-11 items-center justify-center rounded-xl border-2 border-slate-300 bg-white font-mono font-bold">o</div><ArrowDown size={17} className="my-2 text-slate-400"/><div className="flex h-11 w-11 items-center justify-center rounded-xl border-2 border-emerald-300 bg-emerald-50 font-mono font-bold text-emerald-700">g</div></div></div><p className="mt-7 text-center text-sm leading-6 text-slate-500">Những Node màu xanh là các Node đánh dấu kết thúc một từ hoàn chỉnh.</p></div></div>; }
export function PrefixDiagram() { return <div className="my-8 grid gap-4 md:grid-cols-3">{[{prefix:"c",words:"cat, car, care",description:"Prefix chung."},{prefix:"ca",words:"cat, car, care",description:"Prefix dài hơn."},{prefix:"car",words:"car, care",description:"Vẫn còn là prefix."}].map(x=><div key={x.prefix} className="rounded-2xl border border-slate-200 bg-white p-5"><div className="text-xs font-bold uppercase tracking-wider text-slate-400">Prefix</div><div className="mt-3 font-mono text-2xl font-bold text-slate-900">{x.prefix}</div><p className="mt-2 font-mono text-sm text-slate-600">{x.words}</p><p className="mt-3 text-sm leading-6 text-slate-500">{x.description}</p></div>)}</div>; }
export function SearchState({ title, description, success = false }) { return <div className={`rounded-2xl border p-5 ${success?"border-emerald-200 bg-emerald-50":"border-red-200 bg-red-50"}`}><div className="flex items-start gap-4">{success?<CheckCircle2 size={20} className="mt-0.5 shrink-0 text-emerald-600"/>:<X size={20} className="mt-0.5 shrink-0 text-red-500"/>}<div><h3 className={`font-semibold ${success?"text-emerald-900":"text-red-900"}`}>{title}</h3><p className="mt-2 text-sm leading-7 text-slate-600">{description}</p></div></div></div>; }
function BoardGrid() { const letters=["o","a","a","n","e","t","a","e","i","h","k","r","i","f","l","v"]; return <div className="my-6 overflow-x-auto rounded-2xl border border-slate-200 bg-slate-50 p-5"><div className="mx-auto grid min-w-[250px] max-w-xs grid-cols-4 gap-2">{letters.map((ch,i)=><div key={`${ch}-${i}`} className="flex aspect-square items-center justify-center rounded-xl border border-slate-200 bg-white font-mono text-lg font-bold">{ch}</div>)}</div></div>; }
function Visual({ name, block }) { if(name==="trie-structure") return <TrieStructureDiagram/>; if(name==="root") return <div className="my-7 flex flex-col items-center"><div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-slate-400 bg-slate-50 font-mono text-xs font-bold">root</div><ArrowDown size={19} className="my-3 text-slate-400"/><div className="flex gap-6">{["a","b","c"].map(x=><div key={x} className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-300 bg-white font-mono font-bold">{x}</div>)}</div></div>; if(name==="board") return <BoardGrid/>; return null; }
const CODE_EXAMPLE_GROUPS = {
  trieNodeCode: { c: "trieNodeCode", java: "trieNodeJavaCode", python: "trieNodePythonCode" },
  createNodeCode: { c: "createNodeCode", java: "createNodeJavaCode", python: "createNodePythonCode" },
  charIndexCode: { c: "charIndexCode", java: "charIndexJavaCode", python: "charIndexPythonCode" },
  insertCode: { c: "insertCode", java: "insertJavaCode", python: "insertPythonCode" },
  searchCode: { c: "searchCode", java: "searchJavaCode", python: "searchPythonCode" },
  startsWithCode: { c: "startsWithCode", java: "startsWithJavaCode", python: "startsWithPythonCode" },
  trieFullCode: { c: "trieFullCode", java: "trieFullJavaCode", python: "trieFullPythonCode" },
  dictionaryNodeCode: { c: "dictionaryNodeCode", java: "dictionaryNodeJavaCode", python: "dictionaryNodePythonCode" },
  dictionarySearchCode: { c: "dictionarySearchCode", java: "dictionarySearchJavaCode", python: "dictionarySearchPythonCode" },
  dictionaryFullCode: { c: "dictionaryFullCode", java: "dictionaryFullJavaCode", python: "dictionaryFullPythonCode" },
  wordSearchTrieCode: { c: "wordSearchTrieCode", java: "wordSearchTrieJavaCode", python: "wordSearchTriePythonCode" },
  wordSearchDfsCode: { c: "wordSearchDfsCode", java: "wordSearchDfsJavaCode", python: "wordSearchDfsPythonCode" },
  wordSearchFullCode: { c: "wordSearchFullCode", java: "wordSearchFullJavaCode", python: "wordSearchFullPythonCode" },
};
const CODE_VARIANT_KEYS = new Set(
  Object.values(CODE_EXAMPLE_GROUPS).flatMap((group) => [group.java, group.python]),
);

export function LessonSection({ section }) {
  const codeBank = CodeExamples;
  return <section id={section.id} className="scroll-mt-24"><SectionTitle number={section.number} title={section.title} description={section.description}/><div className="space-y-6">{section.blocks.map((b,i)=>{
    if(b.type==="p") return <p key={i} className="text-sm leading-7 text-slate-600 sm:text-base">{b.text}</p>;
    if(b.type==="heading") return <h3 key={i} className="mt-8 text-xl font-bold text-slate-900">{b.text}</h3>;
    if(b.type==="formula") return <div key={i} className="my-5 overflow-x-auto rounded-2xl bg-slate-950 p-5 text-center font-mono text-sm leading-7 text-white">{b.text}</div>;
    if (b.type === "code") {
      if (CODE_VARIANT_KEYS.has(b.key)) return null;
      const group = CODE_EXAMPLE_GROUPS[b.key];
      const code = group
        ? { c: codeBank[group.c], java: codeBank[group.java], python: codeBank[group.python] }
        : codeBank[b.key];
      return <CodeBlock key={i} code={code} label={b.label || "Code minh họa"} />;
    }
    if(b.type==="callout") return <InfoBox key={i} type={b.variant||"info"} title={b.title}>{b.text}</InfoBox>;
    if(b.type==="trie-path") return <TriePath key={i} letters={b.letters} terminal={b.terminal}/>;
    if(b.type==="prefix-diagram") return <PrefixDiagram key={i}/>;
    if(b.type==="visual") return <Visual key={i} name={b.name} block={b}/>;
    if(b.type==="steps") return <div key={i} className="space-y-4">{b.items.map((x,j)=><StepCard key={j} number={String(j+1).padStart(2,"0")} title={x.title}>{x.text}</StepCard>)}</div>;
    if(b.type==="cards") return <div key={i} className={`grid gap-4 ${b.items.length===3?"md:grid-cols-3":b.items.length===2?"md:grid-cols-2":"sm:grid-cols-2"}`}>{b.items.map((x,j)=><div key={j} className="rounded-2xl border border-slate-200 bg-white p-5"><h3 className="font-semibold text-slate-900">{x.title}</h3><p className="mt-2 whitespace-pre-line text-sm leading-7 text-slate-600">{x.text}</p></div>)}</div>;
    if(b.type==="table") return <div key={i} className="my-5 overflow-x-auto rounded-2xl border border-slate-200 bg-white"><table className="w-full min-w-[680px] text-sm"><thead className="bg-slate-50"><tr>{b.headers.map((h,j)=><th key={j} className="border-b border-slate-200 px-5 py-4 text-left">{h}</th>)}</tr></thead><tbody>{b.rows.map((row,j)=><tr key={j}>{row.map((cell,k)=><td key={k} className="border-b border-slate-100 px-5 py-4 text-slate-600">{cell}</td>)}</tr>)}</tbody></table></div>;
    if(b.type==="complexity") return <Complexity key={i} {...b}/>;
    return null;
  })}</div></section>;
}
