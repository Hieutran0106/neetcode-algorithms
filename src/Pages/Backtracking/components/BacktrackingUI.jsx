import { useState } from "react";
import {
  ArrowDown,
  Code2,
  GitBranch,
  Lightbulb,
  Undo2,
  CircleAlert,
  Zap,
  Clock3,
  Target,
} from "lucide-react";

const languageOrder = ["C", "Java", "Python"];

export function CodeBlock({ code = "", examples, label = "C" }) {
  const availableLanguages = languageOrder.filter((language) =>
    Boolean(examples?.[language]),
  );
  const [activeLanguage, setActiveLanguage] =
    useState(availableLanguages[0] ?? "C");
  const activeCode = examples
    ? (examples[activeLanguage] ?? examples[availableLanguages[0]] ?? "")
    : code;

  return (
    <div className="my-6 overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 shadow-lg shadow-slate-200/30">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 bg-slate-900 px-4 py-3">
        <div className="flex items-center gap-2" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
        </div>
        {examples ? (
          <div
            className="flex flex-wrap items-center gap-1"
            role="tablist"
            aria-label="Chọn ngôn ngữ"
          >
            {availableLanguages.map((language) => (
              <button
                key={language}
                type="button"
                role="tab"
                aria-selected={activeLanguage === language}
                onClick={() => setActiveLanguage(language)}
                className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                  activeLanguage === language
                    ? "bg-amber-300 text-slate-950"
                    : "text-slate-400 hover:bg-white/10 hover:text-white"
                }`}
              >
                {language}
              </button>
            ))}
          </div>
        ) : (
          <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
            <Code2 size={14} />
            {label}
          </div>
        )}
      </div>
      <div className="overflow-x-auto p-5">
        <pre className="font-mono text-[13px] leading-7 text-slate-300 sm:text-sm">
          <code>{activeCode}</code>
        </pre>
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

export function InfoBox({ type = "info", title, children }) {
  const config = {
    info: {
      wrapper: "border-sky-200 bg-sky-50",
      icon: "bg-sky-100 text-sky-700",
      Icon: CircleAlert,
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
          <Target size={15} />
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

export function StepCard({ number, title, children }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <div className="flex gap-4">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-900 font-mono text-xs font-bold text-white">
          {number}
        </div>
        <div className="min-w-0">
          <h3 className="font-semibold text-slate-900">{title}</h3>
          <div className="mt-2 text-sm leading-7 text-slate-600">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

function DecisionNode({ value, active = false }) {
  return (
    <div
      className={`flex h-12 min-w-12 items-center justify-center rounded-xl border-2 px-3 font-mono font-bold ${active ? "border-emerald-300 bg-emerald-50 text-emerald-700" : "border-slate-200 bg-white text-slate-900"}`}
    >
      {value}
    </div>
  );
}

export function SubsetTreeDiagram() {
  return (
    <div className="my-8 overflow-x-auto rounded-3xl border border-slate-200 bg-white p-6">
      <div className="mx-auto min-w-[680px]">
        <div className="flex justify-center">
          <DecisionNode value="[]" active />
        </div>
        <div className="my-3 flex justify-center">
          <ArrowDown size={18} className="text-slate-400" />
        </div>
        <div className="flex justify-center gap-16">
          <div className="relative pt-4">
            <div className="absolute left-1/2 top-0 h-px w-32 -translate-x-1/2 bg-slate-300" />
            <div className="absolute left-1/2 top-0 h-4 w-px -translate-x-1/2 bg-slate-300" />
            <DecisionNode value="[1]" active />
          </div>
          <div className="relative pt-4">
            <div className="absolute left-1/2 top-0 h-px w-32 -translate-x-1/2 bg-slate-300" />
            <div className="absolute left-1/2 top-0 h-4 w-px -translate-x-1/2 bg-slate-300" />
            <DecisionNode value="[]" />
          </div>
        </div>
        <div className="my-6 grid grid-cols-4 justify-items-center gap-6">
          {["[1,2]", "[1]", "[2]", "[]"].map((value, index) => (
            <div
              key={`${value}-${index}`}
              className="flex flex-col items-center"
            >
              <DecisionNode value={value} active={index === 0 || index === 2} />
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-sm leading-6 text-slate-500">
          Mỗi Node của cây quyết định đại diện cho một trạng thái của subset.
          Mỗi phần tử tạo ra hai lựa chọn: <strong>chọn</strong> hoặc{" "}
          <strong>không chọn</strong>.
        </p>
      </div>
    </div>
  );
}

export function ChooseUndoDiagram() {
  return (
    <div className="my-7 grid gap-4 md:grid-cols-3">
      <div className="rounded-2xl border border-sky-200 bg-sky-50 p-5">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-100 text-sky-700">
          <GitBranch size={18} />
        </div>
        <h3 className="mt-4 font-bold text-slate-900">Choose</h3>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Chọn một giá trị và đưa nó vào path hiện tại.
        </p>
        <p className="mt-4 rounded-xl bg-white/70 p-3 font-mono text-sm">
          path.push(x)
        </p>
      </div>
      <div className="rounded-2xl border border-violet-200 bg-violet-50 p-5">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100 text-violet-700">
          <ArrowDown size={18} />
        </div>
        <h3 className="mt-4 font-bold text-slate-900">Explore</h3>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Gọi recursion để khám phá các lựa chọn tiếp theo.
        </p>
        <p className="mt-4 rounded-xl bg-white/70 p-3 font-mono text-sm">
          backtrack(i + 1)
        </p>
      </div>
      <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
          <Undo2 size={18} />
        </div>
        <h3 className="mt-4 font-bold text-slate-900">Undo</h3>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Xóa lựa chọn vừa thêm để thử nhánh khác.
        </p>
        <p className="mt-4 rounded-xl bg-white/70 p-3 font-mono text-sm">
          path.pop()
        </p>
      </div>
    </div>
  );
}
