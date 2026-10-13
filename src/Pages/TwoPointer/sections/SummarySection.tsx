import React from "react";
import { ArrowLeft, ArrowRight, Clock3, GitBranch, MoveHorizontal, Zap } from "lucide-react";
import { SectionTitle, InfoBox } from "../components/TwoPointerUI";
import { Link } from "react-router-dom";

export default function SummarySection() {
  return (
<section id="summary" className="scroll-mt-24">
            <SectionTitle
              number="15"
              title="Tổng kết Two Pointer"
              description="Nếu chỉ nhớ một vài điều sau trang này, hãy nhớ những điều dưới đây."
            />

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                  <GitBranch size={20} />
                </div>

                <h3 className="mt-4 text-lg font-bold">Đây là technique</h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Two Pointer là kỹ thuật giải bài, không phải một Data
                  Structure.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                  <MoveHorizontal size={20} />
                </div>

                <h3 className="mt-4 text-lg font-bold">Left / Right</h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Đây là dạng phổ biến nhất: hai pointer từ hai đầu tiến vào
                  giữa.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                  <Zap size={20} />
                </div>

                <h3 className="mt-4 text-lg font-bold">
                  Loại bỏ trường hợp thừa
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Thay vì thử mọi cặp, mỗi bước loại bỏ một phần dữ liệu không
                  còn cần xét.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                  <Clock3 size={20} />
                </div>

                <h3 className="mt-4 text-lg font-bold">O(n)</h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Nếu mỗi pointer chỉ di chuyển một chiều, tổng số bước thường
                  là tuyến tính.
                </p>
              </div>
            </div>

            <h3 className="mt-10 text-xl font-bold">
              Pattern của Valid Palindrome
            </h3>

            <div className="mt-5 grid gap-3 sm:grid-cols-4">
              {[
                ["1", "left", "Đầu chuỗi"],
                ["2", "right", "Cuối chuỗi"],
                ["3", "compare", "So sánh"],
                ["4", "move", "Tiến vào giữa"],
              ].map(([number, title, description]) => (
                <div
                  key={number}
                  className="rounded-2xl border border-slate-200 bg-white p-5"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 font-mono text-xs font-bold text-white">
                    {number}
                  </div>

                  <p className="mt-3 font-mono font-bold">{title}</p>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    {description}
                  </p>
                </div>
              ))}
            </div>

            <InfoBox type="important" title="Một câu để nhớ Two Pointer">
              Khi dữ liệu có thể được xử lý từ{" "}
              <strong>hai vị trí khác nhau</strong>, và sau mỗi bước ta có thể
              thu hẹp phạm vi cần xét, hãy thử nghĩ tới:
              <br />
              <br />
              <strong>Two Pointer.</strong>
            </InfoBox>

            <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white sm:p-8">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Mental model
              </p>

              <h3 className="mt-3 text-2xl font-bold">Valid Palindrome</h3>

              <div className="mt-7 space-y-2 font-mono text-sm leading-8 text-slate-300">
                <div>
                  <span className="text-sky-300">left</span>
                  <span> → đầu chuỗi</span>
                </div>

                <div>
                  <span className="text-violet-300">right</span>
                  <span> → cuối chuỗi</span>
                </div>

                <div>
                  <span className="text-slate-500">↓</span>
                </div>

                <div>so sánh hai ký tự</div>

                <div>
                  <span className="text-emerald-300">match</span>
                  <span> → left++, right--</span>
                </div>

                <div>
                  <span className="text-red-300">mismatch</span>
                  <span> → false</span>
                </div>

                <div>
                  <span className="text-slate-500">↓</span>
                </div>

                <div>
                  hết chuỗi → <span className="text-emerald-300">true</span>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/algorithms/stack"
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

                    <p className="mt-1 font-semibold">Stack</p>
                  </div>
                </div>
              </Link>

              <Link
                to="/algorithms/binary-search"
                className="group flex flex-1 items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-slate-300 hover:shadow-lg"
              >
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Next
                  </p>

                  <p className="mt-1 font-semibold">Binary Search</p>
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
