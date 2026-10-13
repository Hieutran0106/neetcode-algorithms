import React from "react";
import {
  ChevronRight,
  Code2,
  GitBranch,
  List,
  MoveHorizontal,
  Zap,
} from "lucide-react";
import { toc } from "./data/twoPointerData";

import IntroductionSection from "./sections/IntroductionSection";
import PointerSection from "./sections/PointerSection";
import TwoPointersSection from "./sections/TwoPointersSection";
import OppositeDirectionSection from "./sections/OppositeDirectionSection";
import SameDirectionSection from "./sections/SameDirectionSection";
import WhenToUseSection from "./sections/WhenToUseSection";
import ValidPalindromeSection from "./sections/ValidPalindromeSection";
import ProblemSection from "./sections/ProblemSection";
import PatternSection from "./sections/PatternSection";
import DryRunSection from "./sections/DryRunSection";
import SolutionSection from "./sections/SolutionSection";
import ExplainCodeSection from "./sections/ExplainCodeSection";
import EdgeCasesSection from "./sections/EdgeCasesSection";
import MistakesSection from "./sections/MistakesSection";
import SummarySection from "./sections/SummarySection";
import BruteForceSection from "./sections/BruteForceSection";
export default function TwoPointer() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-900">
      {/* Hero */}{" "}
      <section className="border-b border-slate-200 bg-white">
        {" "}
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          {" "}
          <div className="max-w-4xl">
            {" "}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs font-bold tracking-wider text-slate-600">
              {" "}
              <GitBranch size={14} />
              NEETCODE · TWO POINTER{" "}
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Two Pointer
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
              Two Pointer là một kỹ thuật giải thuật dùng hai biến để theo dõi
              hai vị trí khác nhau trong dữ liệu. Kỹ thuật này đặc biệt mạnh khi
              hai con trỏ có thể cùng nhau thay thế cho việc thử mọi cặp phần
              tử.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-600">
                <MoveHorizontal size={16} />
                Left / Right
              </div>

              <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-600">
                <Zap size={16} />
                O(n)
              </div>

              <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-600">
                <Code2 size={16} />C
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:px-8">
        {/* Sidebar */}
        <aside className="hidden lg:block">
          <div className="sticky top-24">
            <div className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400">
              <List size={14} />
              Nội dung
            </div>

            <nav className="max-h-[calc(100vh-130px)] space-y-1 overflow-y-auto pr-3">
              {toc.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="group flex items-center gap-2 rounded-lg px-3 py-2.5 text-xs leading-5 text-slate-500 transition hover:bg-white hover:text-slate-900"
                >
                  <ChevronRight
                    size={12}
                    className="shrink-0 opacity-0 transition group-hover:opacity-100"
                  />

                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        <main className="min-w-0">
          <IntroductionSection />

          <div className="my-16 h-px bg-slate-200" />

          <PointerSection />

          <div className="my-16 h-px bg-slate-200" />

          <TwoPointersSection />

          <div className="my-16 h-px bg-slate-200" />

          <OppositeDirectionSection />

          <div className="my-16 h-px bg-slate-200" />

          <SameDirectionSection />

          <div className="my-16 h-px bg-slate-200" />

          <WhenToUseSection />

          <div className="my-16 h-px bg-slate-200" />

          <ValidPalindromeSection />

          <div className="my-16 h-px bg-slate-200" />

          <ProblemSection />

          <div className="my-16 h-px bg-slate-200" />

          <BruteForceSection />

          <div className="my-16 h-px bg-slate-200" />

          <PatternSection />

          <div className="my-16 h-px bg-slate-200" />

          <DryRunSection />

          <div className="my-16 h-px bg-slate-200" />

          <SolutionSection />

          <div className="my-16 h-px bg-slate-200" />

          <ExplainCodeSection />

          <div className="my-16 h-px bg-slate-200" />

          <EdgeCasesSection />

          <div className="my-16 h-px bg-slate-200" />

          <MistakesSection />

          <div className="my-16 h-px bg-slate-200" />

          <SummarySection />
        </main>
      </div>
      {/* Mobile TOC */}
      <section className="border-t border-slate-200 bg-white lg:hidden">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
          <div className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400">
            <List size={14} />
            Nội dung
          </div>

          <div className="grid gap-2 sm:grid-cols-2">
            {toc.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600 transition hover:border-slate-300 hover:bg-white hover:text-slate-900"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </section>
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <span>Algorithm Learning Lab</span>
          <span>Two Pointer · Valid Palindrome</span>
        </div>
      </footer>
    </div>
  );
}
