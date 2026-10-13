import React from "react";
import { SectionTitle, InfoBox, StepCard } from "../components/TwoPointerUI";

export default function PatternSection() {
  return (
<section id="pattern" className="scroll-mt-24">
            <SectionTitle
              number="09"
              title="Nhận diện pattern Two Pointer"
              description="Hãy biến đề bài thành một pattern mà bạn có thể nhận ra trong vài giây."
            />

            <div className="my-6 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                Input
              </p>

              <p className="mt-4 text-center font-mono text-xl font-bold">
                r a c e c a r
              </p>

              <div className="mt-8 flex items-center justify-between">
                <div className="text-center">
                  <div className="rounded-xl bg-sky-100 px-4 py-3 font-mono font-bold text-sky-800">
                    left
                  </div>

                  <p className="mt-2 text-xs text-slate-400">từ đầu</p>
                </div>

                <div className="flex flex-1 items-center justify-center px-5">
                  <div className="h-px w-full bg-slate-200" />
                </div>

                <div className="text-center">
                  <div className="rounded-xl bg-violet-100 px-4 py-3 font-mono font-bold text-violet-800">
                    right
                  </div>

                  <p className="mt-2 text-xs text-slate-400">từ cuối</p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold">Pattern hoàn chỉnh</h3>

            <div className="mt-5 space-y-3">
              <StepCard number="01" title="Đặt left và right">
                <code>left = 0</code> và <code>right = length - 1</code>.
              </StepCard>

              <StepCard number="02" title="Bỏ qua dữ liệu không cần">
                Nếu ký tự tại left hoặc right không phải chữ/số, di chuyển
                pointer tương ứng.
              </StepCard>

              <StepCard number="03" title="So sánh hai đầu">
                Chuyển về cùng kiểu chữ rồi kiểm tra hai giá trị.
              </StepCard>

              <StepCard number="04" title="Mismatch">
                Nếu hai giá trị khác nhau, chắc chắn không phải Palindrome.
              </StepCard>

              <StepCard number="05" title="Match">
                Nếu giống nhau, left tiến vào và right lùi vào.
              </StepCard>
            </div>

            <InfoBox type="tip" title="Tư duy quan trọng">
              Chúng ta không cần biết toàn bộ chuỗi có Palindrome hay không ngay
              lập tức. Chỉ cần phát hiện một cặp đối xứng sai là đủ để kết luận{" "}
              <strong>false</strong>.
            </InfoBox>
          </section>
  );
}
