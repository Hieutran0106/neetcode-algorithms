import React from "react";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Clock3,
  Layers,
  Target,
} from "lucide-react";
import { SectionTitle, InfoBox } from "../components/StackUI";
import { Link } from "react-router-dom";

export default function SummarySection() {
  return (
    <section id="summary" className="scroll-mt-24">
      <SectionTitle
        number="13"
        title="Tổng kết Stack"
        description="Nếu chỉ nhớ một vài điều sau trang này, hãy nhớ những điều dưới đây."
      />

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
            <Layers size={20} />
          </div>

          <h3 className="mt-4 text-lg font-bold">LIFO</h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Last In, First Out. Phần tử vào sau cùng được xử lý trước.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
            <ArrowDown size={20} />
          </div>

          <h3 className="mt-4 text-lg font-bold">TOP</h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Push, Pop và Peek đều làm việc tại TOP.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
            <Clock3 size={20} />
          </div>

          <h3 className="mt-4 text-lg font-bold">O(1)</h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Push, Pop, Peek đều có thể thực hiện trong O(1).
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
            <Target size={20} />
          </div>

          <h3 className="mt-4 text-lg font-bold">Matching</h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Cặp mở/đóng và nested structure là dấu hiệu rất mạnh để nghĩ tới
            Stack.
          </p>
        </div>
      </div>

      <h3 className="mt-10 text-xl font-bold">Pattern của Valid Parentheses</h3>

      <div className="my-6 grid gap-3 sm:grid-cols-4">
        {[
          ["1", "Gặp mở", "Push"],
          ["2", "Gặp đóng", "Peek / Pop"],
          ["3", "Không match", "False"],
          ["4", "Kết thúc", "Stack rỗng"],
        ].map(([number, title, action]) => (
          <div
            key={number}
            className="rounded-2xl border border-slate-200 bg-white p-5"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 font-mono text-xs font-bold text-white">
              {number}
            </div>

            <p className="mt-3 font-semibold text-slate-900">{title}</p>

            <p className="mt-1 font-mono text-sm text-slate-500">{action}</p>
          </div>
        ))}
      </div>

      <InfoBox
        type="important"
        title="Điều quan trọng nhất cần mang sang bài khác"
      >
        Khi gặp một bài toán, đừng hỏi ngay:
        <strong> "Đây có phải bài Stack không?"</strong>
        <br />
        <br />
        Hãy hỏi:
        <br />
        <strong>
          "Tôi có cần xử lý phần tử gần nhất chưa được xử lý trước không?"
        </strong>
        <br />
        <br />
        Nếu câu trả lời là có, Stack có thể là một ứng viên rất mạnh.
      </InfoBox>

      <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white sm:p-8">
        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
            <Layers size={20} />
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Mental model
            </p>

            <h3 className="mt-2 text-xl font-bold">
              Ghi nhớ Stack bằng một câu
            </h3>

            <p className="mt-4 text-base leading-8 text-slate-300">
              <strong className="text-white">
                "Thứ gì mới nhất mà tôi chưa xử lý?"
              </strong>
            </p>
          </div>
        </div>

        <div className="mt-7 rounded-2xl border border-white/10 bg-white/5 p-5 font-mono text-sm leading-8 text-slate-300">
          push(open)
          <br />
          ↓
          <br />
          gặp close
          <br />
          ↓
          <br />
          lấy open gần nhất
          <br />
          ↓
          <br />
          kiểm tra match
          <br />
          ↓
          <br />
          Stack rỗng = valid
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <Link
          to="/algorithms/array-hashing"
          className="group flex flex-1 items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-slate-300 hover:shadow-lg"
        >
          <div className="flex items-center gap-3">
            <ArrowLeft
              size={18}
              className="text-slate-400 transition-transform group-hover:-translate-x-1"
            />

            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Previous
              </p>

              <p className="mt-1 font-semibold">Array & Hashing</p>
            </div>
          </div>
        </Link>

        <Link
          to="/algorithms/two-pointer"
          className="group flex flex-1 items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-slate-300 hover:shadow-lg"
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Next
            </p>

            <p className="mt-1 font-semibold">Two Pointer</p>
          </div>

          <ArrowRight
            size={18}
            className="text-slate-400 transition-transform group-hover:translate-x-1"
          />
        </Link>
      </div>
    </section>
  );
}
