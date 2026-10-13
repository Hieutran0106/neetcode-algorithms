import React from "react";
import { ArrowDown, ChevronRight, Code2, Layers, List } from "lucide-react";
import { toc } from "./data/stackData";
import IntroductionSection from "./sections/IntroductionSection";
import LifoSection from "./sections/LifoSection";
import OperationsSection from "./sections/OperationsSection";
import ArrayImplementationSection from "./sections/ArrayImplementationSection";
import ComplexitySection from "./sections/ComplexitySection";
import WhenToUseSection from "./sections/WhenToUseSection";
import ValidParenthesesSection from "./sections/ValidParenthesesSection";
import ProblemUnderstandingSection from "./sections/ProblemUnderstandingSection";
import BruteForceSection from "./sections/BruteForceSection";
import StackSolutionSection from "./sections/StackSolutionSection";
import DryRunSection from "./sections/DryRunSection";
import SolutionCodeSection from "./sections/SolutionCodeSection";
import CommonMistakesSection from "./sections/CommonMistakesSection";
import SummarySection from "./sections/SummarySection";

export default function Stack() {
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
              <Layers size={14} />
              NEETCODE · STACK{" "}
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Stack
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
              Stack là một cấu trúc dữ liệu rất đơn giản nhưng xuất hiện trong
              rất nhiều bài toán thuật toán. Điều quan trọng nhất cần nhớ là
              nguyên tắc <strong>LIFO</strong>: phần tử được thêm vào sau cùng
              sẽ là phần tử được lấy ra đầu tiên.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-600">
                <Layers size={16} />
                LIFO
              </div>

              <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-600">
                <ArrowDown size={16} />
                Push / Pop
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
          {/* Introduction */}
          <IntroductionSection />

          <div className="my-16 h-px bg-slate-200" />

          {/* LIFO */}
          <LifoSection />

          <div className="my-16 h-px bg-slate-200" />

          {/* Operations */}
          <OperationsSection />

          <div className="my-16 h-px bg-slate-200" />

          {/* Array Implementation */}
          <ArrayImplementationSection />

          <div className="my-16 h-px bg-slate-200" />

          {/* Complexity */}
          <ComplexitySection />

          <div className="my-16 h-px bg-slate-200" />

          {/* When to use */}
          <WhenToUseSection />

          <div className="my-16 h-px bg-slate-200" />

          {/* Valid Parentheses */}
          <ValidParenthesesSection />

          <div className="my-16 h-px bg-slate-200" />

          {/* Problem Understanding */}
          <ProblemUnderstandingSection />

          <div className="my-16 h-px bg-slate-200" />

          {/* Brute Force */}
          <BruteForceSection />

          <div className="my-16 h-px bg-slate-200" />

          {/* Stack Solution */}
          <StackSolutionSection />

          <div className="my-16 h-px bg-slate-200" />

          {/* Dry Run */}
          <DryRunSection />

          <div className="my-16 h-px bg-slate-200" />

          {/* Solution Code */}
          <SolutionCodeSection />

          <div className="my-16 h-px bg-slate-200" />

          {/* Common Mistakes */}
          <CommonMistakesSection />

          <div className="my-16 h-px bg-slate-200" />

          {/* Summary */}
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
          <span>Stack · Valid Parentheses</span>
        </div>
      </footer>
    </div>
  );
}
