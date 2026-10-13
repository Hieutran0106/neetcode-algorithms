import React, { useState } from "react";
import { ArrowDown, CircleAlert, Clock3, Code2, Lightbulb, List, Target, Zap } from "lucide-react";

const CODE_LANGUAGES = [
  { id: "c", label: "C" },
  { id: "java", label: "Java" },
  { id: "python", label: "Python" },
];

export function CodeBlock({ code, codes, title = "Code minh họa", label = "C" }) {
  // `code` keeps compatibility with any older one-language call site.
  const languageKey = label.toLowerCase() === "python" ? "python" : label.toLowerCase() === "java" ? "java" : "c";
  const examples = codes || (typeof code === "string" ? { [languageKey]: code } : {});
  const availableLanguages = CODE_LANGUAGES.filter(
    (language) => typeof examples[language.id] === "string" && examples[language.id].trim().length > 0,
  );
  const [activeLanguage, setActiveLanguage] = useState(availableLanguages[0]?.id || "c");
  const currentLanguage = availableLanguages.some((language) => language.id === activeLanguage)
    ? activeLanguage
    : availableLanguages[0]?.id;

  if (!currentLanguage) return null;

  return (
    <div className="my-6 overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 shadow-lg shadow-slate-200/30">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 bg-slate-900 px-4 py-3">
        <div className="flex items-center gap-2 text-xs font-medium text-slate-300">
          <Code2 size={14} />
          <span>{title}</span>
        </div>
        <div className="flex items-center gap-1 rounded-lg border border-white/10 bg-slate-950/70 p-1" role="tablist" aria-label="Chọn ngôn ngữ lập trình">
          {availableLanguages.map((language) => {
            const isActive = currentLanguage === language.id;
            return (
              <button
                key={language.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveLanguage(language.id)}
                className={`rounded-md px-3 py-1.5 text-xs font-semibold transition-colors ${
                  isActive
                    ? "bg-slate-200 text-slate-950"
                    : "text-slate-400 hover:bg-white/10 hover:text-white"
                }`}
              >
                {language.label}
              </button>
            );
          })}
        </div>
      </div>
      <div className="overflow-x-auto p-5">
        <pre className="font-mono text-[13px] leading-7 text-slate-300 sm:text-sm">
          <code>{examples[currentLanguage]}</code>
        </pre>
      </div>
    </div>
  );
}

export function SectionTitle({ number, title, description }) {
  return (
    <div className="mb-8">
      <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
        <span>{number}</span> <span className="h-px w-8 bg-slate-200" />
      </div>
      <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}

export function InfoBox({ type = "info", title, children }) {
  const config = {
    info: { wrapper: "border-sky-200 bg-sky-50", icon: "bg-sky-100 text-sky-700", Icon: CircleAlert },
    tip: { wrapper: "border-amber-200 bg-amber-50", icon: "bg-amber-100 text-amber-700", Icon: Lightbulb },
    important: { wrapper: "border-violet-200 bg-violet-50", icon: "bg-violet-100 text-violet-700", Icon: Zap },
  };
  const current = config[type];
  const Icon = current.Icon;
  return (
    <div className={`my-6 rounded-2xl border p-5 ${current.wrapper}`}>
      <div className="flex gap-4">
        <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${current.icon}`}>
          <Icon size={17} />
        </div>
        <div>
          <h4 className="font-semibold text-slate-900">{title}</h4>
          <div className="mt-2 text-sm leading-7 text-slate-700">{children}</div>
        </div>
      </div>
    </div>
  );
}

export function Complexity({ time, space, timeDescription, spaceDescription }) {
  return (
    <div className="my-6 grid gap-4 sm:grid-cols-2">
      <div className="rounded-2xl border border-slate-200 bg-white p-5">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
          <Clock3 size={15} /> Time Complexity
        </div>
        <p className="mt-3 font-mono text-2xl font-bold text-slate-900">{time}</p>
        {timeDescription && <p className="mt-2 text-sm leading-6 text-slate-500">{timeDescription}</p>}
      </div>
      <div className="rounded-2xl border border-slate-200 bg-white p-5">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
          <Target size={15} /> Space Complexity
        </div>
        <p className="mt-3 font-mono text-2xl font-bold text-slate-900">{space}</p>
        {spaceDescription && <p className="mt-2 text-sm leading-6 text-slate-500">{spaceDescription}</p>}
      </div>
    </div>
  );
}

export function StepCard({ number, title, children }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <div className="flex gap-4">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-900 font-mono text-xs font-bold text-white">{number}</div>
        <div className="min-w-0">
          <h3 className="font-semibold text-slate-900">{title}</h3>
          <div className="mt-2 text-sm leading-7 text-slate-600">{children}</div>
        </div>
      </div>
    </div>
  );
}

export function TreeNode({ value, left = null, right = null, highlighted = false }) {
  return (
    <div className="flex flex-col items-center">
      <div className={`flex h-12 min-w-12 items-center justify-center rounded-full border-2 px-3 font-mono font-bold shadow-sm ${highlighted ? "border-emerald-300 bg-emerald-50 text-emerald-700" : "border-slate-300 bg-white text-slate-900"}`}>
        {value}
      </div>
      {(left || right) && (
        <>
          <div className="mt-2 h-6 w-px bg-slate-300" />
          <div className="relative flex items-start gap-10 sm:gap-16">
            <div className="absolute left-1/2 top-0 h-px w-[88%] -translate-x-1/2 bg-slate-300" />
            <div className="relative pt-4">{left}</div>
            <div className="relative pt-4">{right}</div>
          </div>
        </>
      )}
    </div>
  );
}

export function BinaryTreeDiagram({ rootValue = "4", leftValue = "2", rightValue = "7", leftLeftValue = "1", leftRightValue = "3", rightLeftValue = "6", rightRightValue = "9" }) {
  return (
    <div className="my-8 overflow-x-auto rounded-3xl border border-slate-200 bg-white p-6">
      <div className="flex min-w-[600px] justify-center py-3">
        <TreeNode value={rootValue} left={<TreeNode value={leftValue} left={<TreeNode value={leftLeftValue} />} right={<TreeNode value={leftRightValue} />} />} right={<TreeNode value={rightValue} left={<TreeNode value={rightLeftValue} />} right={<TreeNode value={rightRightValue} />} />} />
      </div>
    </div>
  );
}

export function SimpleGeneralTreeDiagram() {
  return (
    <div className="my-8 overflow-x-auto rounded-3xl border border-slate-200 bg-white p-6">
      <div className="flex min-w-[620px] justify-center py-3">
        <div className="flex flex-col items-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-slate-300 bg-slate-50 font-bold">A</div>
          <div className="mt-2 h-7 w-px bg-slate-300" />
          <div className="relative flex gap-8 sm:gap-12">
            <div className="absolute left-1/2 top-0 h-px w-[88%] -translate-x-1/2 bg-slate-300" />
            {["B", "C", "D"].map((value) => (
              <div key={value} className="relative pt-4">
                <div className="absolute left-1/2 top-0 h-4 w-px -translate-x-1/2 bg-slate-300" />
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white font-bold">{value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className="mt-6 text-center text-sm leading-6 text-slate-500">A có 3 child là B, C và D. Đây là Tree tổng quát, không phải Binary Tree.</p>
    </div>
  );
}

export function SkewedTreeDiagram() {
  return (
    <div className="my-8 overflow-x-auto rounded-3xl border border-slate-200 bg-white p-6">
      <div className="flex min-w-[400px] justify-center">
        <div className="flex flex-col items-center">
          {["1", "2", "3", "4", "5"].map((value, index) => (
            <React.Fragment key={value}>
              <div className={`flex h-12 w-12 items-center justify-center rounded-full border-2 font-mono font-bold ${index === 0 ? "border-slate-400 bg-slate-50" : "border-slate-300 bg-white"}`}>{value}</div>
              {index < 4 && <ArrowDown size={18} className="my-2 text-slate-400" />}
            </React.Fragment>
          ))}
        </div>
      </div>
      <p className="mt-5 text-center text-sm leading-6 text-slate-500">Cây bị lệch hoàn toàn về một phía và bắt đầu giống Linked List.</p>
    </div>
  );
}
