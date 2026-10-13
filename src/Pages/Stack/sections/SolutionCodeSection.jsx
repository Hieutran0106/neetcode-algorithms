import React from "react";
import { CodeBlock, SectionTitle, InfoBox, Complexity } from "../components/StackUI";
import { validParenthesesStackCode, validParenthesesFixedStackCode } from "../data/stackData";

export default function SolutionCodeSection() {
  return (
    <section id="solution-code" className="scroll-mt-24">
      <SectionTitle
        number="11"
        title="Code C hoàn chỉnh"
        description="Đây là cách cài đặt trực tiếp Stack bằng Array để giải Valid Parentheses."
      />

      <CodeBlock code={validParenthesesStackCode} />

      <h3 className="mt-8 text-xl font-bold">Đọc code từng phần</h3>

      <div className="mt-5 space-y-5">
        <div>
          <p className="font-mono text-sm font-bold">int top = -1;</p>

          <p className="mt-2 text-sm leading-7 text-slate-600">
            Stack ban đầu rỗng.
          </p>
        </div>

        <div>
          <p className="font-mono text-sm font-bold">
            {"if (c == '(' || c == '[' || c == '{')"}
          </p>

          <p className="mt-2 text-sm leading-7 text-slate-600">
            Nếu ký tự hiện tại là ngoặc mở, chúng ta chưa thể biết nó sẽ
            được đóng lúc nào nên phải lưu lại.
          </p>
        </div>

        <div>
          <p className="font-mono text-sm font-bold">stack[++top] = c;</p>

          <p className="mt-2 text-sm leading-7 text-slate-600">
            Push ngoặc mở vào TOP.
          </p>
        </div>

        <div>
          <p className="font-mono text-sm font-bold">if (top == -1)</p>

          <p className="mt-2 text-sm leading-7 text-slate-600">
            Nếu gặp ngoặc đóng nhưng Stack rỗng, nghĩa là không có ngoặc
            mở nào để ghép.
          </p>
        </div>

        <div>
          <p className="font-mono text-sm font-bold">
            char open = stack[top--];
          </p>

          <p className="mt-2 text-sm leading-7 text-slate-600">
            Lấy ngoặc mở gần nhất ra khỏi Stack.
          </p>
        </div>

        <div>
          <p className="font-mono text-sm font-bold">
            if ((c == ')' && open != '(') ...)
          </p>

          <p className="mt-2 text-sm leading-7 text-slate-600">
            Kiểm tra ngoặc mở và ngoặc đóng có cùng loại hay không.
          </p>
        </div>

        <div>
          <p className="font-mono text-sm font-bold">
            bool result = (top == -1);
          </p>

          <p className="mt-2 text-sm leading-7 text-slate-600">
            Nếu duyệt hết chuỗi mà Stack vẫn còn phần tử, nghĩa là còn
            ngoặc mở chưa được đóng.
          </p>
        </div>
      </div>

      <h3 className="mt-10 text-xl font-bold">
        Một phiên bản code dễ đọc hơn
      </h3>

      <p className="mt-3 text-sm leading-7 text-slate-600">
        Khi học, bạn có thể ưu tiên viết code rõ ràng trước rồi sau đó mới
        rút gọn.
      </p>

      <CodeBlock code={validParenthesesFixedStackCode} />

      <Complexity
        time="O(n)"
        space="O(n)"
        timeDescription="Mỗi ký tự chỉ được duyệt đúng một lần."
        spaceDescription="Trong trường hợp xấu nhất toàn bộ n ký tự là ngoặc mở."
      />

      <InfoBox type="tip" title="Điểm tối ưu quan trọng">
        Ngay khi phát hiện một cặp không hợp lệ, chúng ta{" "}
        <strong>return false ngay</strong>. Không cần duyệt tiếp phần còn
        lại.
      </InfoBox>
    </section>
  );
}
