import React from "react";
import { ArrowDown, ArrowRight, CheckCircle2, Target } from "lucide-react";
import { CodeBlock, SectionTitle } from "../components/StackUI";
import { stackOperationsCode } from "../data/stackData";

export default function OperationsSection() {
  return (
    <section id="operations" className="scroll-mt-24">
      <SectionTitle
        number="02"
        title="Các thao tác của Stack"
        description="Stack về cơ bản chỉ xoay quanh một vài thao tác rất đơn giản."
      />

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
            <ArrowDown size={19} />
          </div>

          <h3 className="mt-4 text-lg font-bold">Push</h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Thêm một phần tử vào <strong>đỉnh Stack</strong>.
          </p>

          <p className="mt-4 rounded-xl bg-slate-50 p-4 font-mono text-sm">
            push(10)
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
            <ArrowRight size={19} />
          </div>

          <h3 className="mt-4 text-lg font-bold">Pop</h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Lấy và xóa phần tử ở <strong>đỉnh Stack</strong>.
          </p>

          <p className="mt-4 rounded-xl bg-slate-50 p-4 font-mono text-sm">
            pop()
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
            <Target size={19} />
          </div>

          <h3 className="mt-4 text-lg font-bold">Peek</h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Xem phần tử ở đỉnh nhưng <strong>không xóa</strong> nó.
          </p>

          <p className="mt-4 rounded-xl bg-slate-50 p-4 font-mono text-sm">
            peek()
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
            <CheckCircle2 size={19} />
          </div>

          <h3 className="mt-4 text-lg font-bold">isEmpty</h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Kiểm tra Stack có đang rỗng hay không.
          </p>

          <p className="mt-4 rounded-xl bg-slate-50 p-4 font-mono text-sm">
            isEmpty()
          </p>
        </div>
      </div>

      <h3 className="mt-10 text-xl font-bold">
        Hãy hình dung Stack như sau
      </h3>

      <div className="my-7 flex justify-center">
        <div className="w-56">
          <div className="mb-3 rounded-xl border-2 border-slate-900 bg-slate-900 p-3 text-center text-xs font-bold uppercase tracking-wider text-white">
            TOP
          </div>

          {["30", "20", "10"].map((value) => (
            <div
              key={value}
              className="mb-2 rounded-xl border border-slate-200 bg-white p-4 text-center font-mono font-bold"
            >
              {value}
            </div>
          ))}
        </div>
      </div>

      <p className="text-center text-sm text-slate-500">
        Mọi thao tác quan trọng đều xảy ra ở phía TOP.
      </p>

      <CodeBlock code={stackOperationsCode} />
    </section>
  );
}
