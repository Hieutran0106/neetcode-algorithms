import React from "react";
import { CodeBlock, SectionTitle, InfoBox } from "../components/TwoPointerUI";
import { sameDirectionCode } from "../data/twoPointerData";

export default function SameDirectionSection() {
  return (
    <section id="same-direction" className="scroll-mt-24">
      <SectionTitle
        number="04"
        title="Hai Pointer cùng chiều"
        description="Không phải Two Pointer nào cũng đi từ hai đầu."
      />

      <p className="text-sm leading-7 text-slate-600">
        Một dạng khác là cả hai pointer đều bắt đầu từ đầu Array nhưng có tốc độ
        hoặc nhiệm vụ khác nhau.
      </p>

      <CodeBlock code={sameDirectionCode} />

      <p className="text-sm leading-7 text-slate-600">
        Ví dụ kinh điển của dạng này là:
      </p>

      <div className="my-5 grid gap-3 sm:grid-cols-3">
        {["Fast / Slow Pointer", "Remove Duplicates", "Partition Array"].map(
          (item) => (
            <div
              key={item}
              className="rounded-2xl border border-slate-200 bg-white p-5"
            >
              <p className="text-sm font-semibold text-slate-900">{item}</p>
            </div>
          ),
        )}
      </div>

      <InfoBox type="tip" title="Hai dạng lớn cần nhớ">
        <strong>Dạng 1:</strong> left ↔ right, đi từ hai đầu vào giữa.
        <br />
        <strong>Dạng 2:</strong> fast → chậm hoặc hai pointer cùng chiều.
      </InfoBox>
    </section>
  );
}
