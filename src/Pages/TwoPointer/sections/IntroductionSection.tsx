import React from "react";
import { SectionTitle, InfoBox } from "../components/TwoPointerUI";

export default function IntroductionSection() {
  return (
<section id="introduction" className="scroll-mt-24">
            <SectionTitle
              number="00"
              title="Two Pointer là gì?"
              description="Hãy bỏ qua code trong vài phút đầu và hiểu ý tưởng trước."
            />

            <p className="text-sm leading-7 text-slate-600 sm:text-base">
              Two Pointer nghĩa đơn giản là{" "}
              <strong>
                dùng hai biến để theo dõi hai vị trí trong dữ liệu
              </strong>
              .
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              Ví dụ với một Array:
            </p>

            <div className="my-6 overflow-x-auto rounded-2xl border border-slate-200 bg-white p-5">
              <div className="flex min-w-[600px] gap-2">
                {[10, 20, 30, 40, 50, 60].map((number, index) => (
                  <div
                    key={index}
                    className="relative flex-1 rounded-xl border border-slate-200 bg-slate-50 p-4 text-center font-mono font-bold"
                  >
                    {number}

                    {index === 0 && (
                      <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-[11px] font-sans font-semibold text-sky-600">
                        left
                      </span>
                    )}

                    {index === 5 && (
                      <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-[11px] font-sans font-semibold text-violet-600">
                        right
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-10 text-sm leading-7 text-slate-600 sm:text-base">
              Hai biến <code>left</code> và <code>right</code> đang chỉ vào hai
              vị trí khác nhau. Sau mỗi bước, chúng ta quyết định con trỏ nào
              cần di chuyển.
            </p>

            <InfoBox type="important" title="Điều cần nhớ ngay từ đầu">
              Two Pointer <strong>không phải là một Data Structure</strong>.
              <br />
              <br />
              Nó là một <strong>problem-solving technique</strong> — một cách tổ
              chức việc duyệt dữ liệu để tránh phải thử quá nhiều trường hợp.
            </InfoBox>
          </section>
  );
}
