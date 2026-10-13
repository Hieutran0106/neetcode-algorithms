import React from "react";
import {
  CodeBlock,
  SectionTitle,
  InfoBox,
  Complexity,
} from "../components/TwoPointerUI";
import { validPalindromeCode } from "../data/twoPointerData";

export default function SolutionSection() {
  return (
    <section id="solution" className="scroll-mt-24">
      <SectionTitle
        number="11"
        title="Code C hoàn chỉnh"
        description="Đây là lời giải Two Pointer từ hai đầu cho Valid Palindrome."
      />

      <CodeBlock code={validPalindromeCode} />

      <Complexity
        time="O(n)"
        space="O(1)"
        timeDescription="Mỗi pointer chỉ tiến về phía giữa và không quay lại."
        spaceDescription="Chỉ dùng left, right và một vài biến phụ."
      />

      <InfoBox
        type="important"
        title="Tại sao là O(n) dù có hai while bên trong?"
      >
        Đây là chỗ người mới rất dễ nhầm.
        <br />
        <br />
        Hai vòng <code>while</code> để bỏ qua ký tự không hợp lệ không có nghĩa
        là O(n²). <strong>left chỉ tăng</strong> và{" "}
        <strong>right chỉ giảm</strong>.
        <br />
        <br />
        Một ký tự sau khi bị bỏ qua sẽ không được pointer quay lại. Tổng số lần
        di chuyển của cả hai pointer vẫn tuyến tính theo n.
      </InfoBox>
    </section>
  );
}
