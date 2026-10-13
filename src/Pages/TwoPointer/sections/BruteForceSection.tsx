import React from "react";
import {
  CodeBlock,
  SectionTitle,
  InfoBox,
  Complexity,
  StepCard,
} from "../components/TwoPointerUI";
import {
  palindromeBruteForceCode,
  palindromeStackCode,
} from "../data/twoPointerData";

export default function BruteForceSection() {
  return (
    <section id="brute-force" className="scroll-mt-24">
      <SectionTitle
        number="08"
        title="Cách giải đơn giản nhất"
        description="Biết cách giải brute force giúp chúng ta hiểu tại sao Two Pointer tốt hơn."
      />

      <h3 className="text-xl font-bold">Cách 1 — Tạo chuỗi đã làm sạch</h3>

      <p className="mt-3 text-sm leading-7 text-slate-600">Ta có thể:</p>

      <div className="my-5 grid gap-3 sm:grid-cols-2">
        {[
          "Lọc các ký tự không phải chữ/số.",
          "Chuyển tất cả về lowercase.",
          "Tạo một chuỗi mới.",
          "Đảo ngược chuỗi và so sánh.",
        ].map((item, index) => (
          <StepCard key={item} number={index + 1} title={item}>
            Thực hiện bước này trước khi kiểm tra Palindrome.
          </StepCard>
        ))}
      </div>

      <CodeBlock code={palindromeBruteForceCode} />

      <p className="text-sm leading-7 text-slate-600">
        Cách này hoàn toàn hợp lý về mặt tư duy, nhưng chúng ta đang tạo ra dữ
        liệu phụ.
      </p>

      <Complexity
        time="O(n)"
        space="O(n)"
        timeDescription="Duyệt chuỗi để lọc và kiểm tra."
        spaceDescription="Cần chuỗi mới sau khi lọc và/hoặc chuỗi đảo."
      />

      <h3 className="mt-8 text-xl font-bold">Cách 2 — Dùng Stack</h3>

      <p className="mt-3 text-sm leading-7 text-slate-600">
        Stack có thể giúp đảo thứ tự:
      </p>

      <CodeBlock code={palindromeStackCode} />

      <p className="text-sm leading-7 text-slate-600">
        Nhưng đây vẫn là dùng thêm O(n) bộ nhớ. Bài toán không thực sự cần phải
        đảo toàn bộ chuỗi.
      </p>

      <InfoBox type="important" title="Một câu hỏi tốt hơn">
        Chúng ta có thể lấy ngay ký tự đầu và ký tự cuối mà không cần tạo ra cấu
        trúc dữ liệu mới không?
        <br />
        <br />
        <strong>Có.</strong>
        <br />
        Đây chính là lúc Two Pointer xuất hiện.
      </InfoBox>
    </section>
  );
}
