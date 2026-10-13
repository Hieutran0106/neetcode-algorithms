import React from "react";
import { SectionTitle, InfoBox, StepCard } from "../components/TwoPointerUI";

export default function WhenToUseSection() {
  return (
<section id="when-to-use" className="scroll-mt-24">
            <SectionTitle
              number="05"
              title="Khi nào nên nghĩ tới Two Pointer?"
              description="Học cách nhận diện pattern quan trọng hơn việc học thuộc tên bài."
            />

            <div className="grid gap-4 md:grid-cols-2">
              <StepCard number="01" title="So sánh hai đầu">
                Bài toán có thể kiểm tra phần tử đầu và cuối cùng lúc.
              </StepCard>

              <StepCard number="02" title="Palindrome">
                Cần kiểm tra chuỗi từ hai phía tiến vào giữa.
              </StepCard>

              <StepCard number="03" title="Sorted Array">
                Array đã sắp xếp thường mở ra khả năng điều khiển pointer dựa
                trên giá trị hiện tại.
              </StepCard>

              <StepCard number="04" title="Loại bỏ / thu hẹp">
                Mỗi bước có thể loại bỏ một phần không còn cần xét.
              </StepCard>
            </div>

            <InfoBox type="important" title="Một dấu hiệu rất đáng chú ý">
              Nếu bạn đang làm brute force bằng cách thử{" "}
              <strong>mọi cặp phần tử</strong>, hãy dừng lại và tự hỏi:
              <br />
              <br />
              <strong>
                "Có thể dùng hai pointer để loại bỏ hàng loạt trường hợp không
                cần thiết không?"
              </strong>
            </InfoBox>
          </section>
  );
}
