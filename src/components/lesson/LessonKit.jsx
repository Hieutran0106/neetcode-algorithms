import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronRight,
  CircleAlert,
  Clock3,
  Code2,
  Lightbulb,
  List,
  Target,
  Zap,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

const languageOrder = ["C", "Java", "Python"];

/* ---------- Code ---------- */
export function CodeBlock({ code = "", examples, label = "Code" }) {
  const available = languageOrder.filter((l) => Boolean(examples?.[l]));
  const [active, setActive] = useState(available[0] ?? "C");
  const text = examples ? (examples[active] ?? examples[available[0]] ?? "") : code;

  return (
    <div className="my-6 overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 shadow-lg shadow-slate-200/30">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 bg-slate-900 px-4 py-3">
        <div className="flex items-center gap-2" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
        </div>
        {examples ? (
          <div className="flex flex-wrap items-center gap-1" role="tablist" aria-label="Chọn ngôn ngữ">
            {available.map((l) => (
              <button
                key={l}
                type="button"
                role="tab"
                aria-selected={active === l}
                onClick={() => setActive(l)}
                className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                  active === l ? "bg-amber-300 text-slate-950" : "text-slate-400 hover:bg-white/10 hover:text-white"
                }`}
              >
                {l}
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
          <code>{text}</code>
        </pre>
      </div>
    </div>
  );
}

/* ---------- Typography blocks ---------- */
export function SectionTitle({ number, title, description }) {
  return (
    <div className="mb-8">
      <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
        <span>{number}</span>
        <span className="h-px w-8 bg-slate-200" />
      </div>
      <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">{title}</h2>
      {description && (
        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">{description}</p>
      )}
    </div>
  );
}

const infoConfig = {
  info: { wrapper: "border-sky-200 bg-sky-50", icon: "bg-sky-100 text-sky-700", Icon: CircleAlert },
  tip: { wrapper: "border-amber-200 bg-amber-50", icon: "bg-amber-100 text-amber-700", Icon: Lightbulb },
  important: { wrapper: "border-violet-200 bg-violet-50", icon: "bg-violet-100 text-violet-700", Icon: Zap },
};

export function InfoBox({ type = "info", title, children }) {
  const c = infoConfig[type] ?? infoConfig.info;
  const Icon = c.Icon;
  return (
    <div className={`my-6 rounded-2xl border p-5 ${c.wrapper}`}>
      <div className="flex gap-4">
        <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${c.icon}`}>
          <Icon size={17} />
        </div>
        <div className="min-w-0">
          <h4 className="font-semibold text-slate-900">{title}</h4>
          <div className="mt-2 text-sm leading-7 text-slate-700">{children}</div>
        </div>
      </div>
    </div>
  );
}

export function Complexity({ time, space, timeDescription, spaceDescription }) {
  const Card = ({ icon: I, label, value, desc }) => (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
        <I size={15} />
        {label}
      </div>
      <p className="mt-3 font-mono text-2xl font-bold text-slate-900">{value}</p>
      {desc && <p className="mt-2 text-sm leading-6 text-slate-500">{desc}</p>}
    </div>
  );
  return (
    <div className="my-6 grid gap-4 sm:grid-cols-2">
      <Card icon={Clock3} label="Time Complexity" value={time} desc={timeDescription} />
      <Card icon={Target} label="Space Complexity" value={space} desc={spaceDescription} />
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
          <div className="mt-2 text-sm leading-7 text-slate-600">{children}</div>
        </div>
      </div>
    </div>
  );
}

const diffColor = {
  Easy: "border-emerald-200 bg-emerald-50 text-emerald-700",
  Medium: "border-amber-200 bg-amber-50 text-amber-700",
  Hard: "border-rose-200 bg-rose-50 text-rose-700",
};

export function ProblemHeader({ title, difficulty, description, link }) {
  return (
    <div className="my-6 rounded-2xl border border-slate-200 bg-white p-5">
      <div className="flex flex-wrap items-center gap-3">
        <span className={`rounded-lg border px-2.5 py-1 text-xs font-bold ${diffColor[difficulty] ?? diffColor.Medium}`}>
          {difficulty}
        </span>
        <h3 className="text-lg font-bold text-slate-900">{title}</h3>
        {link && (
          <a href={link} target="_blank" rel="noreferrer" className="ml-auto text-xs font-semibold text-slate-500 underline-offset-2 hover:text-slate-900 hover:underline">
            Mở trên NeetCode →
          </a>
        )}
      </div>
      {description && <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>}
    </div>
  );
}

/* ---------- Data-driven section renderer ----------
   Block types: p, html(strong via **), steps, code, info, complexity, table, list, formula, problem
*/
function Rich({ text }) {
  // **bold** and `code` inline markup
  const parts = String(text).split(/(\*\*[^*]+\*\*|`[^`]+`)/g);
  return parts.map((p, i) => {
    if (p.startsWith("**")) return <strong key={i}>{p.slice(2, -2)}</strong>;
    if (p.startsWith("`"))
      return (
        <code key={i} className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-[0.85em] text-slate-800">
          {p.slice(1, -1)}
        </code>
      );
    return <span key={i}>{p}</span>;
  });
}

function Block({ b }) {
  switch (b.type) {
    case "p":
      return (
        <p className="my-4 text-sm leading-7 text-slate-600 sm:text-base">
          <Rich text={b.text} />
        </p>
      );
    case "list":
      return (
        <ul className="my-4 space-y-2 text-sm leading-7 text-slate-600 sm:text-base">
          {b.items.map((it, i) => (
            <li key={i} className="flex gap-3">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
              <span>
                <Rich text={it} />
              </span>
            </li>
          ))}
        </ul>
      );
    case "formula":
      return (
        <div className="my-5 rounded-2xl bg-slate-950 p-6 text-center font-mono text-base font-bold text-white sm:text-lg">
          {b.text}
        </div>
      );
    case "steps":
      return (
        <div className="my-6 space-y-3">
          {b.items.map((s, i) => (
            <StepCard key={i} number={String(i + 1).padStart(2, "0")} title={s.title}>
              <Rich text={s.text} />
            </StepCard>
          ))}
        </div>
      );
    case "code":
      return <CodeBlock code={b.code} examples={b.examples} label={b.label} />;
    case "info":
      return (
        <InfoBox type={b.kind ?? "info"} title={b.title}>
          <Rich text={b.text} />
        </InfoBox>
      );
    case "complexity":
      return <Complexity {...b} />;
    case "problem":
      return <ProblemHeader {...b} />;
    case "table":
      return (
        <div className="my-6 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
          <table className="w-full min-w-[480px] text-left text-sm">
            <thead className="bg-slate-50 text-xs uppercase tracking-wider text-slate-500">
              <tr>
                {b.head.map((h) => (
                  <th key={h} className="px-4 py-3 font-semibold">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-600">
              {b.rows.map((r, i) => (
                <tr key={i}>
                  {r.map((c, j) => (
                    <td key={j} className={`px-4 py-3 ${j === 0 ? "font-semibold text-slate-900" : ""}`}>
                      <Rich text={c} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "cards":
      return (
        <div className="my-6 grid gap-4 md:grid-cols-3">
          {b.items.map((c, i) => (
            <div key={i} className="rounded-2xl border border-slate-200 bg-white p-5">
              <h4 className="font-bold text-slate-900">{c.title}</h4>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                <Rich text={c.text} />
              </p>
              {c.mono && <p className="mt-4 rounded-xl bg-slate-50 p-3 font-mono text-xs text-slate-700">{c.mono}</p>}
            </div>
          ))}
        </div>
      );
    default:
      return null;
  }
}

export function Sections({ sections }) {
  return sections.map((s, idx) => (
    <div key={s.id}>
      <section id={s.id} className="scroll-mt-24">
        <SectionTitle number={String(idx).padStart(2, "0")} title={s.title} description={s.description} />
        {s.blocks.map((b, i) => (
          <Block key={i} b={b} />
        ))}
      </section>
      {idx < sections.length - 1 && <div className="my-16 h-px bg-slate-200" />}
    </div>
  ));
}

/* ---------- Page layout (hero + TOC + footer + prev/next) ---------- */
export function LessonLayout({ badge, icon: Icon, title, intro, chips = [], sections, prev, next }) {
  const toc = sections.map((s, i) => ({ id: s.id, label: `${i}. ${s.title}` }));
  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-900">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-4xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs font-bold tracking-wider text-slate-600">
              <Icon size={14} />
              {badge}
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">{title}</h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
              <Rich text={intro} />
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {chips.map(([ChipIcon, label]) => (
                <div key={label} className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-600">
                  <ChipIcon size={16} />
                  {label}
                </div>
              ))}
              <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-600">
                <Code2 size={16} />C · Java · Python
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:px-8">
        <aside className="hidden lg:block">
          <div className="sticky top-24">
            <div className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400">
              <List size={14} />
              Nội dung
            </div>
            <nav className="max-h-[calc(100vh-130px)] space-y-1 overflow-y-auto pr-3">
              {toc.map((item) => (
                <a key={item.id} href={`#${item.id}`} className="group flex items-center gap-2 rounded-lg px-3 py-2.5 text-xs leading-5 text-slate-500 transition hover:bg-white hover:text-slate-900">
                  <ChevronRight size={12} className="shrink-0 opacity-0 transition group-hover:opacity-100" />
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        <main className="min-w-0">
          <Sections sections={sections} />
          <div className="mt-16 flex flex-wrap justify-between gap-3 border-t border-slate-200 pt-8">
            {prev ? (
              <Link to={prev.path} className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50">
                <ArrowLeft size={16} />
                {prev.label}
              </Link>
            ) : (
              <span />
            )}
            {next && (
              <Link to={next.path} className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800">
                {next.label}
                <ArrowRight size={16} />
              </Link>
            )}
          </div>
        </main>
      </div>

      <section className="border-t border-slate-200 bg-white lg:hidden">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
          <div className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400">
            <List size={14} />
            Nội dung
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            {toc.map((item) => (
              <a key={item.id} href={`#${item.id}`} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600 transition hover:border-slate-300 hover:bg-white hover:text-slate-900">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <span>Algorithm Learning Lab</span>
          <span>{badge}</span>
        </div>
      </footer>
    </div>
  );
}
