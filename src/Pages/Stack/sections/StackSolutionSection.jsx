import React from "react";
import { SectionTitle, InfoBox, StepCard } from "../components/StackUI";

export default function StackSolutionSection() {
  return (
    <section id="stack-solution" className="scroll-mt-24">
      <SectionTitle
        number="09"
        title="Tại sao Stack giải quyết được bài này?"
        description="Hãy xem chính cấu trúc của bài toán đang yêu cầu điều gì."
      />

      <p className="text-sm leading-7 text-slate-600 sm:text-base">
        Xét chuỗi:
      </p>

      <div className="my-5 rounded-2xl border border-slate-200 bg-white p-6 text-center font-mono text-2xl font-bold">
        ([{"{"}
        {"}"}])
      </div>

      <p className="text-sm leading-7 text-slate-600">
        Khi đi từ trái sang phải:
      </p>

      <div className="my-7 space-y-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <p className="font-mono text-lg font-bold">(</p>

          <p className="mt-2 text-sm text-slate-500">
            Đây là ngoặc mở → lưu lại.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <p className="font-mono text-lg font-bold">[</p>

          <p className="mt-2 text-sm text-slate-500">
            Ngoặc mở → tiếp tục lưu.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <p className="font-mono text-lg font-bold">{"{"}</p>

          <p className="mt-2 text-sm text-slate-500">
            Ngoặc mở → tiếp tục lưu.
          </p>
        </div>

        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
          <p className="font-mono text-lg font-bold">{"}"}</p>

          <p className="mt-2 text-sm text-emerald-700">
            Ngoặc đóng → phải khớp với ngoặc mở gần nhất.
          </p>
        </div>
      </div>

      <p className="text-sm leading-7 text-slate-600">
        Ngoặc mở gần nhất chính là:
      </p>

      <div className="my-5 rounded-2xl bg-slate-950 p-6 text-center font-mono text-lg text-white">
        {"{"}
      </div>

      <p className="text-sm leading-7 text-slate-600">
        Đây chính xác là phần tử ở <strong>TOP của Stack</strong>.
      </p>

      <InfoBox type="important" title="Đây chính là lý do chọn Stack">
        Bài toán yêu cầu:
        <br />
        <br />
        <strong>
          "Mỗi ngoặc đóng phải khớp với ngoặc mở gần nhất chưa được xử
          lý."
        </strong>
        <br />
        <br />
        "Gần nhất" + "chưa xử lý" tạo ra thứ tự LIFO.
      </InfoBox>

      <h3 className="mt-8 text-xl font-bold">Quy tắc của thuật toán</h3>

      <div className="mt-5 space-y-3">
        <StepCard number="01" title="Gặp ngoặc mở">
          Push nó vào Stack.
        </StepCard>

        <StepCard number="02" title="Gặp ngoặc đóng">
          Nếu Stack rỗng → không hợp lệ.
        </StepCard>

        <StepCard number="03" title="Lấy TOP">
          Pop ngoặc mở gần nhất.
        </StepCard>

        <StepCard number="04" title="So sánh">
          Nếu không đúng loại ngoặc → không hợp lệ.
        </StepCard>

        <StepCard number="05" title="Kết thúc">
          Stack phải rỗng. Nếu còn ngoặc mở → không hợp lệ.
        </StepCard>
      </div>
    </section>
  );
}
