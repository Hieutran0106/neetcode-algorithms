import { Hash, List, Zap } from "lucide-react";
import { InfoBox, SectionTitle } from "../components/ArrayHashingUI";

export function IntroductionSection() {
  return (
<section id="introduction" className="scroll-mt-24">
            <SectionTitle
              number="00"
              title="Array & Hashing là gì?"
              description="Hãy bắt đầu từ vấn đề chứ chưa cần nhớ bất kỳ thuật toán nào."
            />

            <p className="text-sm leading-7 text-slate-600 sm:text-base">
              Khi giải một bài toán, chúng ta thường có một lượng dữ liệu đầu
              vào và cần tìm ra một thông tin nào đó. Vấn đề không chỉ là "làm
              được", mà còn là{" "}
              <strong>
                làm thế nào để không phải tìm đi tìm lại cùng một dữ liệu.
              </strong>
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                  <List size={20} />
                </div>

                <h3 className="mt-4 font-semibold">Array</h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Lưu nhiều giá trị theo thứ tự và truy cập chúng bằng index.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                  <Hash size={20} />
                </div>

                <h3 className="mt-4 font-semibold">Hashing</h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Giúp chúng ta tổ chức dữ liệu để kiểm tra và truy xuất nhanh.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                  <Zap size={20} />
                </div>

                <h3 className="mt-4 font-semibold">Tối ưu</h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Tránh các vòng lặp dư thừa và đưa lời giải từ O(n²) về O(n).
                </p>
              </div>
            </div>

            <InfoBox type="important" title="Mục tiêu của chương này">
              Không phải học thuộc ba đoạn code. Mục tiêu là khi nhìn thấy một
              bài toán, bạn có thể tự hỏi:
              <strong> "Mình có cần lưu lại những gì đã thấy không?"</strong>
            </InfoBox>
          </section>
  );
}
