import { useState } from "react";
import { Clock3, Code2, Hash, Lightbulb, Search, Zap } from "lucide-react";
import { codeExamplesBySource, normalizeCode } from "../data/arrayHashingData";

export function CodeBlock({ code, label = "C" }) {
  const examples = codeExamplesBySource.get(normalizeCode(code));
  const [selectedLanguage, setSelectedLanguage] = useState("C");
  const displayedCode =
    examples?.find((example) => example.language === selectedLanguage)?.code ??
    code;

  return (
    <div className="my-6 overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 shadow-lg shadow-slate-200/30">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 bg-slate-900 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
        </div>
        {examples ? (
          <div
            className="flex items-center gap-1 rounded-lg bg-slate-950 p-1"
            role="tablist"
            aria-label="Chọn ngôn ngữ lập trình"
          >
            {examples.map((example) => (
              <button
                key={example.language}
                type="button"
                role="tab"
                aria-selected={selectedLanguage === example.language}
                onClick={() => setSelectedLanguage(example.language)}
                className={`rounded-md px-3 py-1.5 text-xs font-semibold transition ${
                  selectedLanguage === example.language
                    ? "bg-slate-700 text-white"
                    : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"
                }`}
              >
                {example.language}
              </button>
            ))}
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
          <code>{displayedCode}</code>
        </pre>
      </div>
    </div>
  );
}

export function Complexity({ time, space, timeDescription, spaceDescription }) {
  return (
    <div className="my-6 grid gap-4 sm:grid-cols-2">
      <div className="rounded-2xl border border-slate-200 bg-white p-5">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
          <Clock3 size={15} />
          Time Complexity
        </div>
        <p className="mt-3 font-mono text-2xl font-bold text-slate-900">
          {time}
        </p>
        {timeDescription && (
          <p className="mt-2 text-sm leading-6 text-slate-500">
            {timeDescription}
          </p>
        )}
      </div>
      <div className="rounded-2xl border border-slate-200 bg-white p-5">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
          <Hash size={15} />
          Space Complexity
        </div>
        <p className="mt-3 font-mono text-2xl font-bold text-slate-900">
          {space}
        </p>
        {spaceDescription && (
          <p className="mt-2 text-sm leading-6 text-slate-500">
            {spaceDescription}
          </p>
        )}
      </div>
    </div>
  );
}

export function InfoBox({ type = "info", title, children }) {
  const config = {
    info: {
      wrapper: "border-sky-200 bg-sky-50",
      icon: "bg-sky-100 text-sky-700",
      Icon: Search,
    },
    tip: {
      wrapper: "border-amber-200 bg-amber-50",
      icon: "bg-amber-100 text-amber-700",
      Icon: Lightbulb,
    },
    important: {
      wrapper: "border-violet-200 bg-violet-50",
      icon: "bg-violet-100 text-violet-700",
      Icon: Zap,
    },
  };
  const current = config[type];
  const Icon = current.Icon;

  return (
    <div className={`my-6 rounded-2xl border p-5 ${current.wrapper}`}>
      <div className="flex gap-4">
        <div
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${current.icon}`}
        >
          <Icon size={17} />
        </div>
        <div>
          <h4 className="font-semibold text-slate-900">{title}</h4>
          <div className="mt-2 text-sm leading-7 text-slate-700">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export function SectionTitle({ number, title, description }) {
  return (
    <div className="mb-8">
      <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
        <span>{number}</span>
        <span className="h-px w-8 bg-slate-200" />
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

export function ProblemHeader({ number, title, difficulty, description }) {
  return (
    <div className="mb-8 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400">
            Problem {number}
          </div>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
            {title}
          </h2>
        </div>
        <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700">
          {difficulty}
        </span>
      </div>
      <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
        {description}
      </p>
    </div>
  );
}
