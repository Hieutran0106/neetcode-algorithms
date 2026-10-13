import React from "react";
import { SectionTitle, InfoBox, Complexity } from "../components/StackUI";

export default function ComplexitySection() {
  return (
    <section id="complexity" className="scroll-mt-24">
      <SectionTitle
        number="04"
        title="Complexity của Stack"
        description="Các thao tác cơ bản của Stack đều rất nhanh."
      />

      <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
        <table className="w-full min-w-[620px] text-sm">
          <thead className="bg-slate-50">
            <tr>
              <th className="border-b border-slate-200 px-5 py-4 text-left">
                Operation
              </th>

              <th className="border-b border-slate-200 px-5 py-4 text-left">
                Time
              </th>

              <th className="border-b border-slate-200 px-5 py-4 text-left">
                Ý nghĩa
              </th>
            </tr>
          </thead>

          <tbody>
            {[
              ["Push", "O(1)", "Thêm vào TOP"],
              ["Pop", "O(1)", "Xóa khỏi TOP"],
              ["Peek", "O(1)", "Xem TOP"],
              ["isEmpty", "O(1)", "Kiểm tra rỗng"],
            ].map(([operation, time, meaning]) => (
              <tr key={operation}>
                <td className="border-b border-slate-100 px-5 py-4 font-mono font-semibold">
                  {operation}
                </td>

                <td className="border-b border-slate-100 px-5 py-4 font-mono">
                  {time}
                </td>

                <td className="border-b border-slate-100 px-5 py-4 text-slate-600">
                  {meaning}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Complexity
        time="O(1)"
        space="O(n)"
        timeDescription="Các thao tác cơ bản chỉ làm việc với TOP."
        spaceDescription="Trong trường hợp xấu nhất Stack chứa n phần tử."
      />

      <InfoBox type="tip" title="Tại sao Push và Pop là O(1)?">
        Vì chúng ta không cần di chuyển tất cả phần tử. Chỉ cần thay đổi
        <strong> top</strong> và đọc hoặc ghi đúng một vị trí.
      </InfoBox>
    </section>
  );
}
