import React from "react";
import { SectionTitle } from "../components/StackUI";

export default function ValidParenthesesSection() {
  return (
    <section id="valid-parentheses" className="scroll-mt-24">
      <SectionTitle
        number="06"
        title="Valid Parentheses"
        description="Đây là bài toán kinh điển nhất để học Stack."
      />

      <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Problem
            </p>

            <h3 className="mt-3 text-2xl font-bold tracking-tight">
              Valid Parentheses
            </h3>
          </div>

          <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700">
            Easy
          </span>
        </div>

        <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
          Cho một chuỗi chỉ gồm các ký tự:
        </p>

        <div className="my-5 flex flex-wrap gap-3">
          {["(", ")", "[", "]", "{", "}"].map((char) => (
            <span
              key={char}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 font-mono text-lg font-bold"
            >
              {char}
            </span>
          ))}
        </div>

        <p className="text-sm leading-7 text-slate-600">
          Kiểm tra xem các dấu ngoặc có được đóng đúng cách hay không.
        </p>
      </div>
    </section>
  );
}
