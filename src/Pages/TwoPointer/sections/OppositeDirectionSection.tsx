import React from "react";
import {
  CodeBlock,
  SectionTitle,
  InfoBox,
  Complexity,
} from "../components/TwoPointerUI";
import { oppositeDirectionCode } from "../data/twoPointerData";

export default function OppositeDirectionSection() {
  return (
    <section id="opposite-direction" className="scroll-mt-24">
      <SectionTitle
        number="03"
        title="Hai Pointer từ hai đầu"
        description="Đây là dạng Two Pointer nổi tiếng nhất và cũng là dạng được dùng trong Valid Palindrome."
      />

      <p className="text-sm leading-7 text-slate-600">Ta đặt:</p>

      <div className="my-5 rounded-2xl bg-slate-950 p-6 text-center font-mono text-base text-white">
        left = 0<span className="mx-4 text-slate-500">|</span>
        right = n - 1
      </div>

      <div className="my-8 overflow-x-auto">
        <div className="mx-auto flex min-w-[650px] max-w-3xl gap-2">
          {[10, 20, 30, 40, 50, 60, 70].map((number, index) => (
            <div key={number} className="relative flex-1">
              <div className="rounded-xl border border-slate-200 bg-white p-4 text-center font-mono font-bold">
                {number}
              </div>

              {index === 0 && (
                <div className="mt-2 text-center text-xs font-semibold text-sky-600">
                  ↑ left
                </div>
              )}

              {index === 6 && (
                <div className="mt-2 text-center text-xs font-semibold text-violet-600">
                  ↑ right
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <p className="text-sm leading-7 text-slate-600">Sau khi xử lý hai đầu:</p>

      <CodeBlock code={oppositeDirectionCode} />

      <p className="text-sm leading-7 text-slate-600">Ta thu hẹp phạm vi:</p>

      <div className="my-7 flex items-center justify-center">
        <div className="flex items-center gap-4">
          <div className="rounded-xl bg-sky-100 px-4 py-3 font-mono text-sm font-bold text-sky-800">
            left++
          </div>

          <div className="text-slate-400">và</div>

          <div className="rounded-xl bg-violet-100 px-4 py-3 font-mono text-sm font-bold text-violet-800">
            right--
          </div>
        </div>
      </div>

      <InfoBox type="important" title="Tại sao làm như vậy lại nhanh?">
        Mỗi pointer chỉ đi theo một hướng và không quay lại vị trí cũ.
        <br />
        <br />
        Vì vậy dù có hai pointer, tổng số lần di chuyển vẫn chỉ tỷ lệ với
        <strong> n</strong>, chứ không phải n × n.
      </InfoBox>

      <Complexity
        time="O(n)"
        space="O(1)"
        timeDescription="left và right di chuyển vào trong, mỗi phần tử được xử lý nhiều nhất một lần."
        spaceDescription="Chỉ cần thêm hai biến chỉ số."
      />
    </section>
  );
}
