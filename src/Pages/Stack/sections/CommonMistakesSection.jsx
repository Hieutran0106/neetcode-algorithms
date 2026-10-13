import React from "react";
import { Lightbulb, X } from "lucide-react";
import { SectionTitle } from "../components/StackUI";

export default function CommonMistakesSection() {
  return (
    <section id="common-mistakes" className="scroll-mt-24">
      <SectionTitle
        number="12"
        title="Các lỗi thường gặp"
        description="Đây là những lỗi người mới rất dễ mắc khi giải Valid Parentheses."
      />

      <div className="space-y-4">
        <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
          <div className="flex gap-4">
            <X size={20} className="mt-0.5 shrink-0 text-red-500" />

            <div>
              <h3 className="font-semibold text-slate-900">
                Chỉ đếm số lượng ngoặc
              </h3>

              <p className="mt-2 text-sm leading-7 text-slate-600">
                Ví dụ <code>([)]</code> có số lượng ngoặc mở và đóng cân
                bằng nhưng vẫn sai thứ tự. Vì vậy chỉ counting là chưa đủ.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
          <div className="flex gap-4">
            <X size={20} className="mt-0.5 shrink-0 text-red-500" />

            <div>
              <h3 className="font-semibold text-slate-900">
                Không kiểm tra Stack rỗng
              </h3>

              <p className="mt-2 text-sm leading-7 text-slate-600">
                Chuỗi bắt đầu bằng <code>)</code> thì không có gì để Pop.
                Cần kiểm tra <code>top == -1</code> trước.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
          <div className="flex gap-4">
            <X size={20} className="mt-0.5 shrink-0 text-red-500" />

            <div>
              <h3 className="font-semibold text-slate-900">
                Duyệt xong nhưng không kiểm tra Stack
              </h3>

              <p className="mt-2 text-sm leading-7 text-slate-600">
                Ví dụ <code>((</code> không có ngoặc đóng. Nếu chỉ kiểm
                tra mismatch trong lúc duyệt thì có thể trả về sai. Cuối
                cùng Stack phải rỗng.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
          <div className="flex gap-4">
            <Lightbulb
              size={20}
              className="mt-0.5 shrink-0 text-amber-600"
            />

            <div>
              <h3 className="font-semibold text-slate-900">
                Pop trước rồi mới kiểm tra
              </h3>

              <p className="mt-2 text-sm leading-7 text-slate-600">
                Trong code cần đọc TOP và kiểm tra nó có khớp không. Nếu
                mismatch thì trả về false ngay.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
