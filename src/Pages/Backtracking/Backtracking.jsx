import {
  Code2,
  ChevronRight,
  GitBranch,
  List,
  Network,
  RotateCcw,
  Undo2,
} from "lucide-react";
import { toc } from "./data/backtrackingData";
import FoundationsSections from "./sections/FoundationsSections";
import FibonacciSections from "./sections/FibonacciSections";
import SubsetsSections from "./sections/SubsetsSections";
import WrapUpSections from "./sections/WrapUpSections";

export default function Backtracking() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-900">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-4xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs font-bold tracking-wider text-slate-600">
              <GitBranch size={14} />
              NEETCODE · BACKTRACKING
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">Backtracking</h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
              Backtracking là kỹ thuật dùng <strong>Recursion + Decision + Undo</strong> để khám phá nhiều khả năng.
              Bài học đi từ Recursion, cây quyết định, Fibonacci đến bài <strong>Subsets</strong>.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-600"><GitBranch size={16} />Decision Tree</div>
              <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-600"><RotateCcw size={16} />Recursion</div>
              <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-600"><Undo2 size={16} />Backtrack</div>
              <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-600"><Network size={16} />DFS</div>
              <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-600"><Code2 size={16} />C · Java · Python</div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:px-8">
        <aside className="hidden lg:block">
          <div className="sticky top-24">
            <div className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400"><List size={14} />Nội dung</div>
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
          <FoundationsSections />
          <FibonacciSections />
          <SubsetsSections />
          <WrapUpSections />
        </main>
      </div>

      <section className="border-t border-slate-200 bg-white lg:hidden">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
          <div className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400"><List size={14} />Nội dung</div>
          <div className="grid gap-2 sm:grid-cols-2">
            {toc.map((item) => <a key={item.id} href={`#${item.id}`} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600 transition hover:border-slate-300 hover:bg-white hover:text-slate-900">{item.label}</a>)}
          </div>
        </div>
      </section>
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <span>Algorithm Learning Lab</span><span>Backtracking · Fibonacci · Subsets</span>
        </div>
      </footer>
    </div>
  );
}
