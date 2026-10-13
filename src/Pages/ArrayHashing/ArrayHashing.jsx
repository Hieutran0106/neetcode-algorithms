import { CheckCircle2, ChevronRight, Code2, Hash, List } from "lucide-react";
import { toc } from "./data/arrayHashingData";
import { IntroductionSection } from "./sections/IntroductionSection";
import { ArraySection } from "./sections/ArraySection";
import { HashingSection } from "./sections/HashingSection";
import { HashSetSection } from "./sections/HashSetSection";
import { HashMapSection } from "./sections/HashMapSection";
import { ContainsDuplicateSection } from "./sections/ContainsDuplicateSection";
import { ValidAnagramSection } from "./sections/ValidAnagramSection";
import { TwoSumSection } from "./sections/TwoSumSection";
import { SummarySection } from "./sections/SummarySection";

export default function ArrayHashing() {
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
              <Code2 size={14} />
              NEETCODE · ARRAY & HASHING{" "}
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Array & Hashing
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
              Đây là chương đầu tiên và cũng là nền tảng của rất nhiều bài toán
              Data Structures & Algorithms. Chúng ta sẽ đi từ Array cơ bản, hiểu
              Hashing, Hash Set, Hash Map, sau đó áp dụng chúng vào đúng ba bài
              toán quan trọng: Contains Duplicate, Valid Anagram và Two Sum.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-600">
                <CheckCircle2 size={16} className="text-emerald-600" />3 bài
                toán
              </div>

              <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-600">
                <Hash size={16} />
                Hashing
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

          {/* Array */}
          <ArraySection />

          <div className="my-16 h-px bg-slate-200" />

          {/* Hashing */}
          <HashingSection />

          <div className="my-16 h-px bg-slate-200" />

          {/* Hash Set */}
          <HashSetSection />

          <div className="my-16 h-px bg-slate-200" />

          {/* Hash Map */}
          <HashMapSection />

          <div className="my-16 h-px bg-slate-200" />

          {/* Contains Duplicate */}
          <ContainsDuplicateSection />

          <div className="my-16 h-px bg-slate-200" />

          {/* Valid Anagram */}
          <ValidAnagramSection />

          <div className="my-16 h-px bg-slate-200" />

          {/* Two Sum */}
          <TwoSumSection />

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
          <span>Array & Hashing</span>
        </div>
      </footer>
    </div>
  );
}
