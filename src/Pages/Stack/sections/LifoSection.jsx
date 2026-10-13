import React from "react";
import { ArrowRight } from "lucide-react";
import { SectionTitle, InfoBox } from "../components/StackUI";

export default function LifoSection() {
  return (
    <section id="lifo" className="scroll-mt-24">
      <SectionTitle
        number="01"
        title="LIFO là gì?"
        description="Đây là khái niệm quan trọng nhất của toàn bộ Stack."
      />

      <p className="text-sm leading-7 text-slate-600 sm:text-base">
        LIFO viết tắt của:
      </p>

      <div className="my-6 rounded-3xl border border-slate-200 bg-slate-950 p-7 text-center text-white">
        <p className="font-mono text-2xl font-bold">
          Last In → First Out
        </p>

        <p className="mt-3 text-sm text-slate-400">Vào sau → Ra trước</p>
      </div>

      <h3 className="text-xl font-bold">Ví dụ</h3>

      <div className="my-6 space-y-3">
        {[
          ["Push A", "A"],
          ["Push B", "B, A"],
          ["Push C", "C, B, A"],
        ].map(([action, state]) => (
          <div
            key={action}
            className="grid gap-3 rounded-2xl border border-slate-200 bg-white p-4 sm:grid-cols-[160px_1fr]"
          >
            <span className="font-mono text-sm font-semibold">
              {action}
            </span>

            <span className="font-mono text-sm text-slate-600">
              {state}
            </span>
          </div>
        ))}
      </div>

      <p className="text-sm leading-7 text-slate-600">
        Sau khi Push A, B, C thì C nằm trên cùng. Nếu Pop một lần:
      </p>

      <div className="my-5 flex items-center justify-center gap-3">
        <div className="rounded-xl bg-slate-900 px-5 py-3 font-mono text-sm text-white">
          C
        </div>

        <ArrowRight size={17} className="text-slate-400" />

        <div className="rounded-xl border border-slate-200 bg-white px-5 py-3 font-mono text-sm">
          removed
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-5">
        <p className="text-sm text-slate-500">Stack còn lại:</p>

        <p className="mt-2 font-mono text-lg font-bold">B, A</p>
      </div>

      <InfoBox type="tip" title="Đừng nhầm LIFO với FIFO">
        <strong>LIFO:</strong> vào sau ra trước → Stack.
        <br />
        <strong>FIFO:</strong> vào trước ra trước → Queue.
      </InfoBox>
    </section>
  );
}
