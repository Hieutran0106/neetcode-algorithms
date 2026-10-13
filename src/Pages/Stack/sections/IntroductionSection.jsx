import React from "react";
import { SectionTitle, InfoBox } from "../components/StackUI";

export default function IntroductionSection() {
  return (
    <section id="introduction" className="scroll-mt-24">
      <SectionTitle
        number="00"
        title="Stack là gì?"
        description="Trước khi viết một dòng code, hãy hình dung Stack trong đời thực."
      />

      <p className="text-sm leading-7 text-slate-600 sm:text-base">
        Hãy tưởng tượng một chồng đĩa.
      </p>

      <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
        Bạn đặt chiếc đĩa đầu tiên xuống bàn. Sau đó đặt chiếc thứ hai lên
        trên. Rồi chiếc thứ ba.
      </p>

      <div className="my-8 flex justify-center">
        <div className="flex w-64 flex-col-reverse gap-2">
          {[
            {
              value: "Đĩa 1",
              width: "w-64",
            },
            {
              value: "Đĩa 2",
              width: "w-56",
            },
            {
              value: "Đĩa 3",
              width: "w-48",
            },
            {
              value: "Đĩa 4",
              width: "w-40",
            },
          ].map((item) => (
            <div
              key={item.value}
              className={`mx-auto ${item.width} rounded-xl border border-slate-300 bg-white px-4 py-3 text-center text-sm font-semibold shadow-sm`}
            >
              {item.value}
            </div>
          ))}
        </div>
      </div>

      <p className="text-sm leading-7 text-slate-600 sm:text-base">
        Nếu muốn lấy một chiếc đĩa ra, bạn sẽ lấy chiếc nào?
      </p>

      <div className="my-5 rounded-2xl border border-slate-200 bg-white p-6 text-center">
        <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
          Câu trả lời
        </p>

        <p className="mt-3 text-2xl font-bold text-slate-900">Đĩa 4</p>

        <p className="mt-2 text-sm text-slate-500">
          Chiếc được đặt vào cuối cùng.
        </p>
      </div>

      <p className="text-sm leading-7 text-slate-600 sm:text-base">
        Đây chính là ý tưởng của Stack.
      </p>

      <InfoBox type="important" title="Định nghĩa đơn giản nhất">
        <strong>
          Stack là cấu trúc dữ liệu hoạt động theo nguyên tắc LIFO.
        </strong>
        <br />
        <br />
        LIFO = <strong>Last In, First Out</strong>.
        <br />
        <br />
        Phần tử đi vào cuối cùng sẽ được lấy ra đầu tiên.
      </InfoBox>
    </section>
  );
}
