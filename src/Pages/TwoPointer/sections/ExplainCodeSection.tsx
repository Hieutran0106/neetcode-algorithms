import React from "react";
import { CodeBlock, SectionTitle, StepCard } from "../components/TwoPointerUI";

export default function ExplainCodeSection() {
  return (
<section id="explain-code" className="scroll-mt-24">
            <SectionTitle
              number="12"
              title="Giải thích từng phần của code"
              description="Đọc code theo từng ý nhỏ thay vì nhìn toàn bộ hàm một lần."
            />

            <StepCard number="01" title="Kiểm tra ký tự chữ hoặc số">
              Hàm <code>isAlphaNumeric</code> trả về true nếu ký tự nằm trong
              các khoảng <code>a-z</code>, <code>A-Z</code> hoặc{" "}
              <code>0-9</code>.
            </StepCard>

            <CodeBlock
              code={`bool isAlphaNumeric(char c) {
return
    (c >= 'a' && c <= 'z') ||
    (c >= 'A' && c <= 'Z') ||
    (c >= '0' && c <= '9');


}`}
            />

            <StepCard number="02" title="Chuyển chữ hoa thành chữ thường">
              Nếu ký tự là chữ hoa, ta chuyển nó sang lowercase để việc so sánh
              không phụ thuộc vào chữ hoa hay chữ thường.
            </StepCard>

            <CodeBlock
              code={`char toLowerCase(char c) {
if (c >= 'A' && c <= 'Z') {
    return c - 'A' + 'a';
}

return c;


}`}
            />

            <StepCard number="03" title="Đặt hai Pointer">
              <code>left</code> ở đầu chuỗi và <code>right</code> ở cuối chuỗi.
            </StepCard>

            <CodeBlock
              code={`int left = 0;


int right = strlen(s) - 1;`}
            />

            <StepCard number="04" title="Trong khi hai Pointer chưa gặp nhau">
              Chúng ta chỉ cần tiếp tục nếu <code>left &lt; right</code>.
            </StepCard>

            <CodeBlock
              code={`while (left < right) {
...


}`}
            />

            <StepCard number="05" title="Bỏ qua ký tự không phải chữ hoặc số">
              Nếu left đang ở dấu cách, dấu phẩy hoặc ký tự đặc biệt thì left
              phải tiếp tục tiến tới. Tương tự với right.
            </StepCard>

            <CodeBlock
              code={`while (
left < right &&
!isAlphaNumeric(s[left])


) {
left++;
}

while (
left < right &&
!isAlphaNumeric(s[right])
) {
right--;
}`}
            />

            <StepCard number="06" title="So sánh hai ký tự">
              Sau khi hai pointer đã đứng ở những ký tự hợp lệ, ta chuyển chúng
              về lowercase rồi so sánh.
            </StepCard>

            <CodeBlock
              code={`if (
toLowerCase(s[left]) !=
toLowerCase(s[right])


) {
return false;
}`}
            />

            <StepCard number="07" title="Hai ký tự giống nhau">
              Nếu match, cặp hiện tại đã được xử lý xong. Hai pointer tiến vào
              phía giữa.
            </StepCard>

            <CodeBlock
              code={`left++;


right--;`}
            />

            <StepCard number="08" title="Duyệt hết mà không mismatch">
              Nếu không tìm thấy bất kỳ cặp nào khác nhau thì chuỗi là
              Palindrome.
            </StepCard>

            <CodeBlock code={`return true;`} />
          </section>
  );
}
