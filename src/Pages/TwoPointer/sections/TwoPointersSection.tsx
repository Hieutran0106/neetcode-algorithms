import React from "react";
import { SectionTitle, InfoBox } from "../components/TwoPointerUI";

export default function TwoPointersSection() {
  return (
<section id="two-pointers" className="scroll-mt-24">
            <SectionTitle
              number="02"
              title="Vì sao cần hai Pointer?"
              description="Một pointer thường đủ để duyệt Array. Nhưng có những bài toán cần nhìn hai vị trí cùng lúc."
            />

            <p className="text-sm leading-7 text-slate-600 sm:text-base">
              Giả sử chúng ta có:
            </p>

            <div className="my-6 flex justify-center">
              <div className="grid grid-cols-6 gap-2">
                {[1, 2, 3, 4, 5, 6].map((number) => (
                  <div
                    key={number}
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-white font-mono font-bold"
                  >
                    {number}
                  </div>
                ))}
              </div>
            </div>

            <p className="text-sm leading-7 text-slate-600">
              Một số bài toán không hỏi:
            </p>

            <div className="my-4 rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-600">
              "Phần tử này là gì?"
            </div>

            <p className="text-sm leading-7 text-slate-600">mà hỏi:</p>

            <div className="my-4 rounded-xl border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-900">
              "Phần tử đầu và phần tử cuối có quan hệ gì với nhau?"
            </div>

            <p className="mt-5 text-sm leading-7 text-slate-600">
              Khi đó một pointer ở đầu và một pointer ở cuối sẽ tự nhiên hơn rất
              nhiều.
            </p>

            <InfoBox title="Ý tưởng cốt lõi">
              Thay vì tạo ra tất cả các cặp có thể có, chúng ta chỉ giữ lại{" "}
              <strong>hai vị trí quan trọng tại thời điểm hiện tại</strong>. Sau
              mỗi bước, một hoặc cả hai pointer được di chuyển.
            </InfoBox>
          </section>
  );
}
