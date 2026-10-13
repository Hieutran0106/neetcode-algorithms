import React from "react";
import { SectionTitle } from "../components/TwoPointerUI";

export default function ValidPalindromeSection() {
  return (
<section id="valid-palindrome" className="scroll-mt-24">
            <SectionTitle
              number="06"
              title="Valid Palindrome"
              description="Đây là bài toán kinh điển nhất để học Two Pointer từ hai đầu."
            />

            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Problem
                  </p>

                  <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-950">
                    Valid Palindrome
                  </h3>
                </div>

                <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700">
                  Easy
                </span>
              </div>

              <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
                Cho một chuỗi. Kiểm tra xem chuỗi có phải là Palindrome hay
                không sau khi bỏ qua các ký tự không phải chữ hoặc số và không
                phân biệt chữ hoa/chữ thường.
              </p>
            </div>
          </section>
  );
}
