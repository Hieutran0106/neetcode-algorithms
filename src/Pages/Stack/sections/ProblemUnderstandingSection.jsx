import React from "react";
import { ArrowRight, CheckCircle2, X } from "lucide-react";
import { SectionTitle, StepCard } from "../components/StackUI";

export default function ProblemUnderstandingSection() {
  return (
    <section id="problem-understanding" className="scroll-mt-24">
      <SectionTitle
        number="07"
        title="Hiểu đề bài thật kỹ"
        description="Trước khi nghĩ tới Stack, chúng ta phải hiểu thế nào là một chuỗi ngoặc hợp lệ."
      />

      <h3 className="text-xl font-bold">Ba loại ngoặc</h3>

      <div className="my-6 grid gap-3 sm:grid-cols-3">
        {[
          ["(", ")", "Parentheses"],
          ["[", "]", "Brackets"],
          ["{", "}", "Braces"],
        ].map(([open, close, name]) => (
          <div
            key={name}
            className="rounded-2xl border border-slate-200 bg-white p-5 text-center"
          >
            <div className="flex items-center justify-center gap-3 font-mono text-2xl font-bold">
              <span>{open}</span>

              <ArrowRight size={17} className="text-slate-400" />

              <span>{close}</span>
            </div>

            <p className="mt-3 text-xs text-slate-500">{name}</p>
          </div>
        ))}
      </div>

      <h3 className="mt-8 text-xl font-bold">
        Khi nào một chuỗi hợp lệ?
      </h3>

      <p className="mt-3 text-sm leading-7 text-slate-600">
        Có ba nguyên tắc cần thỏa mãn:
      </p>

      <div className="mt-5 space-y-3">
        <StepCard number="01" title="Phải có cặp tương ứng">
          Mỗi ngoặc mở phải có một ngoặc đóng cùng loại.
        </StepCard>

        <StepCard number="02" title="Đúng thứ tự">
          Nếu mở <code>(</code> thì phải đóng bằng <code>)</code>, không
          thể đóng bằng <code>]</code>.
        </StepCard>

        <StepCard number="03" title="Đúng thứ tự lồng nhau">
          Nếu mở <code>([</code> thì phải đóng <code>])</code>, không phải
          <code>)]</code>.
        </StepCard>
      </div>

      <h3 className="mt-8 text-xl font-bold">Ví dụ hợp lệ</h3>

      <div className="my-5 grid gap-3 sm:grid-cols-2">
        {[
          ["()", true],
          ["()[]{}", true],
          ["{[]}", true],
          ["([])", true],
        ].map(([value]) => (
          <div
            key={value}
            className="flex items-center justify-between rounded-xl border border-emerald-200 bg-emerald-50 p-4"
          >
            <span className="font-mono text-lg font-bold">{value}</span>

            <div className="flex items-center gap-2 text-sm font-semibold text-emerald-700">
              <CheckCircle2 size={17} />
              Valid
            </div>
          </div>
        ))}
      </div>

      <h3 className="mt-8 text-xl font-bold">Ví dụ không hợp lệ</h3>

      <div className="my-5 grid gap-3 sm:grid-cols-2">
        {[
          ["(]", "Sai loại ngoặc"],
          ["([)]", "Sai thứ tự đóng"],
          ["{", "Thiếu ngoặc đóng"],
          ["]", "Không có ngoặc mở tương ứng"],
        ].map(([value, reason]) => (
          <div
            key={value}
            className="flex items-start justify-between gap-4 rounded-xl border border-red-200 bg-red-50 p-4"
          >
            <div>
              <p className="font-mono text-lg font-bold">{value}</p>

              <p className="mt-1 text-xs text-red-700">{reason}</p>
            </div>

            <X size={19} className="shrink-0 text-red-500" />
          </div>
        ))}
      </div>
    </section>
  );
}
