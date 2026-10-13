import React from "react";
import { ArrowRight } from "lucide-react";
import { CodeBlock, SectionTitle } from "../components/TwoPointerUI";
import { pointerBasicCode } from "../data/twoPointerData";

export default function PointerSection() {
  return (
    <section id="pointer" className="scroll-mt-24">
      <SectionTitle
        number="01"
        title="Pointer là gì?"
        description="Đầu tiên cần hiểu chính xác từ pointer trong ngữ cảnh của thuật toán."
      />

      <p className="text-sm leading-7 text-slate-600 sm:text-base">
        Trong ngữ cảnh Two Pointer, khi nói đến "pointer", chúng ta thường chỉ
        đơn giản là <strong>một biến lưu vị trí hoặc index</strong> của phần tử
        mà chúng ta đang quan tâm.
      </p>

      <p className="mt-4 text-sm leading-7 text-slate-600">Ví dụ:</p>

      <CodeBlock code={pointerBasicCode} />

      <p className="text-sm leading-7 text-slate-600">Ở đây:</p>

      <div className="my-5 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-sky-200 bg-sky-50 p-5">
          <p className="font-mono font-bold text-sky-800">left = 0</p>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Đang quan tâm phần tử đầu tiên.
          </p>
        </div>

        <div className="rounded-2xl border border-violet-200 bg-violet-50 p-5">
          <p className="font-mono font-bold text-violet-800">right = 4</p>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Đang quan tâm phần tử cuối cùng.
          </p>
        </div>
      </div>

      <p className="text-sm leading-7 text-slate-600">
        Khi học Two Pointer, bạn có thể tạm thời hiểu pointer là{" "}
        <strong>một ngón tay đang chỉ vào một vị trí</strong>.
      </p>

      <div className="my-7 flex items-center justify-center gap-3">
        <div className="rounded-xl bg-sky-100 px-5 py-3 font-mono text-sm font-bold text-sky-800">
          left
        </div>

        <ArrowRight size={18} className="text-slate-400" />

        <div className="rounded-xl border border-slate-200 bg-white px-5 py-3 font-mono text-sm">
          vị trí đang xét
        </div>
      </div>
    </section>
  );
}
