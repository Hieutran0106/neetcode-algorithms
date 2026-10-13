import React from "react";
import { CodeBlock, SectionTitle, InfoBox } from "../components/StackUI";
import { stackBasicCode } from "../data/stackData";

export default function ArrayImplementationSection() {
  return (
    <section id="array-implementation" className="scroll-mt-24">
      <SectionTitle
        number="03"
        title="Stack được xây dựng bằng Array như thế nào?"
        description="Đây là phần rất quan trọng nếu bạn muốn hiểu Stack thực sự hoạt động ra sao thay vì chỉ gọi push() và pop()."
      />

      <p className="text-sm leading-7 text-slate-600">
        Trong C, chúng ta có thể dùng một Array để lưu các phần tử của
        Stack.
      </p>

      <p className="mt-4 text-sm leading-7 text-slate-600">
        Nhưng Array chỉ lưu dữ liệu. Chúng ta cần biết:
        <strong> đâu là phần tử trên cùng?</strong>
      </p>

      <p className="mt-4 text-sm leading-7 text-slate-600">
        Vì vậy chúng ta cần một biến:
      </p>

      <div className="my-5 rounded-2xl border border-slate-200 bg-white p-6">
        <p className="font-mono text-xl font-bold">top</p>

        <p className="mt-2 text-sm leading-6 text-slate-500">
          Lưu index của phần tử hiện tại ở trên cùng.
        </p>
      </div>

      <h3 className="text-xl font-bold">Khi Stack rỗng</h3>

      <div className="my-5 rounded-2xl bg-slate-950 p-6 text-center font-mono text-lg text-white">
        top = -1
      </div>

      <p className="text-sm leading-7 text-slate-600">
        Tại sao là <code>-1</code>?
      </p>

      <p className="mt-3 text-sm leading-7 text-slate-600">
        Vì index nhỏ nhất của Array là 0. Nếu <code>top = -1</code>, điều
        đó có nghĩa là chưa có phần tử nào.
      </p>

      <h3 className="mt-8 text-xl font-bold">Push</h3>

      <p className="mt-3 text-sm leading-7 text-slate-600">
        Khi Push một phần tử:
      </p>

      <div className="my-5 space-y-2">
        {["Tăng top lên 1.", "Lưu phần tử vào stack[top]."].map(
          (item, index) => (
            <div
              key={item}
              className="flex gap-3 rounded-xl border border-slate-200 bg-white p-4"
            >
              <span className="font-mono font-bold">{index + 1}.</span>

              <span className="text-sm text-slate-600">{item}</span>
            </div>
          ),
        )}
      </div>

      <CodeBlock code={`stack[++top] = value;`} />

      <h3 className="mt-8 text-xl font-bold">Pop</h3>

      <p className="mt-3 text-sm leading-7 text-slate-600">Khi Pop:</p>

      <div className="my-5 space-y-2">
        {["Đọc stack[top].", "Giảm top xuống 1."].map((item, index) => (
          <div
            key={item}
            className="flex gap-3 rounded-xl border border-slate-200 bg-white p-4"
          >
            <span className="font-mono font-bold">{index + 1}.</span>

            <span className="text-sm text-slate-600">{item}</span>
          </div>
        ))}
      </div>

      <CodeBlock code={`int value = stack[top--];`} />

      <h3 className="mt-8 text-xl font-bold">Peek</h3>

      <CodeBlock code={`int value = stack[top];`} />

      <CodeBlock code={stackBasicCode} />

      <InfoBox type="important" title="Điểm cần hiểu">
        Stack không phải là một loại bộ nhớ đặc biệt.
        <br />
        <br />
        Stack chỉ là <strong>một cách tổ chức dữ liệu</strong> với quy tắc
        LIFO. Chúng ta hoàn toàn có thể dùng Array để xây dựng nó.
      </InfoBox>
    </section>
  );
}
