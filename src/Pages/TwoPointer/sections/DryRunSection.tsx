import React from "react";
import { CheckCircle2 } from "lucide-react";
import { SectionTitle } from "../components/TwoPointerUI";

export default function DryRunSection() {
  return (
<section id="dry-run" className="scroll-mt-24">
            <SectionTitle
              number="10"
              title="Dry Run"
              description="Chạy bằng tay là cách tốt nhất để hiểu hai pointer di chuyển như thế nào."
            />

            <h3 className="text-xl font-bold">
              Ví dụ: "A man, a plan, a canal: Panama"
            </h3>

            <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
              <table className="w-full min-w-[760px] text-sm">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="border-b border-slate-200 px-4 py-4 text-left">
                      Bước
                    </th>

                    <th className="border-b border-slate-200 px-4 py-4 text-left">
                      Left
                    </th>

                    <th className="border-b border-slate-200 px-4 py-4 text-left">
                      Right
                    </th>

                    <th className="border-b border-slate-200 px-4 py-4 text-left">
                      So sánh
                    </th>

                    <th className="border-b border-slate-200 px-4 py-4 text-left">
                      Hành động
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {[
                    ["1", "A", "a", "a == a", "left++, right--"],
                    ["2", "m", "m", "m == m", "left++, right--"],
                    ["3", "a", "a", "a == a", "left++, right--"],
                    ["4", "n", "n", "n == n", "left++, right--"],
                    ["5", "a", "a", "a == a", "left++, right--"],
                  ].map(([step, left, right, compare, action]) => (
                    <tr key={step}>
                      <td className="border-b border-slate-100 px-4 py-4 font-mono font-bold">
                        {step}
                      </td>

                      <td className="border-b border-slate-100 px-4 py-4 font-mono">
                        {left}
                      </td>

                      <td className="border-b border-slate-100 px-4 py-4 font-mono">
                        {right}
                      </td>

                      <td className="border-b border-slate-100 px-4 py-4 font-mono text-emerald-700">
                        {compare}
                      </td>

                      <td className="border-b border-slate-100 px-4 py-4 text-slate-600">
                        {action}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <div className="flex items-center gap-3">
                <CheckCircle2 size={19} className="text-emerald-600" />

                <p className="text-sm font-semibold text-emerald-800">
                  Không có cặp nào mismatch → chuỗi là Palindrome.
                </p>
              </div>
            </div>

            <h3 className="mt-10 text-xl font-bold">Ví dụ sai: "race a car"</h3>

            <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
              <table className="w-full min-w-[700px] text-sm">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="border-b border-slate-200 px-4 py-4 text-left">
                      Bước
                    </th>

                    <th className="border-b border-slate-200 px-4 py-4 text-left">
                      Left
                    </th>

                    <th className="border-b border-slate-200 px-4 py-4 text-left">
                      Right
                    </th>

                    <th className="border-b border-slate-200 px-4 py-4 text-left">
                      Kết quả
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td className="border-b border-slate-100 px-4 py-4">1</td>

                    <td className="border-b border-slate-100 px-4 py-4 font-mono">
                      r
                    </td>

                    <td className="border-b border-slate-100 px-4 py-4 font-mono">
                      r
                    </td>

                    <td className="border-b border-slate-100 px-4 py-4 text-emerald-700">
                      Match
                    </td>
                  </tr>

                  <tr>
                    <td className="border-b border-slate-100 px-4 py-4">2</td>

                    <td className="border-b border-slate-100 px-4 py-4 font-mono">
                      a
                    </td>

                    <td className="border-b border-slate-100 px-4 py-4 font-mono">
                      a
                    </td>

                    <td className="border-b border-slate-100 px-4 py-4 text-emerald-700">
                      Match
                    </td>
                  </tr>

                  <tr>
                    <td className="px-4 py-4">3</td>

                    <td className="px-4 py-4 font-mono">c</td>

                    <td className="px-4 py-4 font-mono">c</td>

                    <td className="px-4 py-4 text-emerald-700">Match</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-5 text-sm leading-7 text-slate-600">
              Đối với ví dụ này, sau khi bỏ khoảng trắng, chuỗi trở thành{" "}
              <code>raceacar</code>. Khi hai pointer tiến vào giữa, cuối cùng sẽ
              gặp một cặp không giống nhau và trả về <code>false</code>.
            </p>
          </section>
  );
}
