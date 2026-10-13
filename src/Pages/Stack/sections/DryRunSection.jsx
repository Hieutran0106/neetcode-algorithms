import React from "react";
import { CheckCircle2 } from "lucide-react";
import { SectionTitle, InfoBox } from "../components/StackUI";

export default function DryRunSection() {
  return (
    <section id="dry-run" className="scroll-mt-24">
      <SectionTitle
        number="10"
        title="Dry Run"
        description="Hãy chạy thuật toán bằng tay trước khi nhìn vào code."
      />

      <h3 className="text-xl font-bold">Ví dụ 1 — {`"{[()]}"`}</h3>

      <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
        <table className="w-full min-w-[700px] text-sm">
          <thead className="bg-slate-50">
            <tr>
              <th className="border-b border-slate-200 px-4 py-4 text-left">
                Char
              </th>

              <th className="border-b border-slate-200 px-4 py-4 text-left">
                Action
              </th>

              <th className="border-b border-slate-200 px-4 py-4 text-left">
                Stack
              </th>

              <th className="border-b border-slate-200 px-4 py-4 text-left">
                Result
              </th>
            </tr>
          </thead>

          <tbody>
            {[
              ["{", "Push", "{", "Continue"],
              ["[", "Push", "{ [", "Continue"],
              ["(", "Push", "{ [ (", "Continue"],
              [")", "Pop (", "{ [", "Match"],
              ["]", "Pop [", "{", "Match"],
              ["}", "Pop {", "Empty", "Match"],
            ].map(([char, action, stack, result]) => (
              <tr key={`${char}-${action}`}>
                <td className="border-b border-slate-100 px-4 py-4 font-mono text-lg font-bold">
                  {char}
                </td>

                <td className="border-b border-slate-100 px-4 py-4 text-slate-600">
                  {action}
                </td>

                <td className="border-b border-slate-100 px-4 py-4 font-mono">
                  {stack}
                </td>

                <td className="border-b border-slate-100 px-4 py-4">
                  <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                    {result}
                  </span>
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
            Stack rỗng → chuỗi hợp lệ.
          </p>
        </div>
      </div>

      <h3 className="mt-10 text-xl font-bold">Ví dụ 2 — {`"([)]"`}</h3>

      <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
        <table className="w-full min-w-[700px] text-sm">
          <thead className="bg-slate-50">
            <tr>
              <th className="border-b border-slate-200 px-4 py-4 text-left">
                Char
              </th>

              <th className="border-b border-slate-200 px-4 py-4 text-left">
                Action
              </th>

              <th className="border-b border-slate-200 px-4 py-4 text-left">
                Stack
              </th>

              <th className="border-b border-slate-200 px-4 py-4 text-left">
                Result
              </th>
            </tr>
          </thead>

          <tbody>
            {[
              ["(", "Push", "(", "Continue"],
              ["[", "Push", "( [", "Continue"],
              [")", "Pop [", "(", "Mismatch"],
            ].map(([char, action, stack, result]) => (
              <tr key={`${char}-${action}`}>
                <td className="border-b border-slate-100 px-4 py-4 font-mono text-lg font-bold">
                  {char}
                </td>

                <td className="border-b border-slate-100 px-4 py-4 text-slate-600">
                  {action}
                </td>

                <td className="border-b border-slate-100 px-4 py-4 font-mono">
                  {stack}
                </td>

                <td className="border-b border-slate-100 px-4 py-4">
                  <span className="rounded-full bg-red-50 px-2.5 py-1 text-xs font-semibold text-red-700">
                    {result}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <InfoBox type="important" title="Sai ở đâu?">
        Khi gặp <code>)</code>, Stack đang có <code>[</code> ở TOP.
        <br />
        <br />
        Nhưng <code>)</code> phải ghép với <code>(</code>.
        <br />
        <br />
        Vì vậy trả về <strong>false</strong> ngay lập tức.
      </InfoBox>
    </section>
  );
}
