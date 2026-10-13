import React from "react";
import { SectionTitle, InfoBox, StepCard } from "../components/StackUI";

export default function WhenToUseSection() {
  return (
    <section id="when-to-use" className="scroll-mt-24">
      <SectionTitle
        number="05"
        title="Khi nào nên nghĩ tới Stack?"
        description="Đây mới là kỹ năng quan trọng khi làm bài thuật toán."
      />

      <p className="text-sm leading-7 text-slate-600 sm:text-base">
        Đừng cố học thuộc rằng "bài này dùng Stack". Hãy học cách nhận
        diện tình huống.
      </p>

      <div className="mt-7 grid gap-4 md:grid-cols-2">
        <StepCard number="01" title="Cặp mở / đóng">
          Ví dụ: <code>() [] {"{}"}</code>. Một phần tử mở cần được ghép
          với phần tử đóng đúng loại.
        </StepCard>

        <StepCard number="02" title="Undo / History">
          Thao tác mới nhất thường cần được hoàn tác trước.
        </StepCard>

        <StepCard number="03" title="Nested structure">
          Các cấu trúc lồng nhau thường có tính chất LIFO.
        </StepCard>

        <StepCard number="04" title="Monotonic Stack">
          Cần tìm phần tử lớn hơn hoặc nhỏ hơn gần nhất phía trước hoặc
          phía sau.
        </StepCard>
      </div>

      <InfoBox type="tip" title="Một dấu hiệu rất mạnh">
        Nếu đề bài có cấu trúc kiểu:
        <br />
        <br />
        <strong>"Phần tử gần nhất chưa được xử lý..."</strong>
        <br />
        <strong>"Ghép cặp mở và đóng..."</strong>
        <br />
        <strong>"Xử lý phần tử mới nhất trước..."</strong>
        <br />
        <br />
        hãy thử nghĩ tới Stack.
      </InfoBox>
    </section>
  );
}
