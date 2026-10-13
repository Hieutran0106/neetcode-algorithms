import React from "react";
import { CheckCircle2, X } from "lucide-react";
import { SectionTitle, InfoBox } from "../components/TwoPointerUI";

export default function EdgeCasesSection() {
  return (
<section id="edge-cases" className="scroll-mt-24">
            <SectionTitle
              number="13"
              title="Edge Cases"
              description="Một thuật toán tốt phải xử lý được cả các trường hợp nhỏ nhất."
            />

            <div className="space-y-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-lg font-bold">""</p>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Chuỗi rỗng được xem là Palindrome.
                    </p>
                  </div>

                  <CheckCircle2
                    size={20}
                    className="shrink-0 text-emerald-600"
                  />
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-lg font-bold">"a"</p>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Một ký tự duy nhất luôn là Palindrome.
                    </p>
                  </div>

                  <CheckCircle2
                    size={20}
                    className="shrink-0 text-emerald-600"
                  />
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-lg font-bold">".,"</p>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Không có ký tự chữ hoặc số hợp lệ. Hai pointer sẽ tiến vào
                      nhau và kết quả vẫn là true.
                    </p>
                  </div>

                  <CheckCircle2
                    size={20}
                    className="shrink-0 text-emerald-600"
                  />
                </div>
              </div>

              <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-lg font-bold">"ab"</p>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      a khác b → trả về false ngay.
                    </p>
                  </div>

                  <X size={20} className="shrink-0 text-red-600" />
                </div>
              </div>
            </div>

            <InfoBox type="tip" title="Một thói quen tốt khi làm bài">
              Trước khi code, hãy tự kiểm tra ít nhất:
              <br />
              <strong>chuỗi rỗng</strong>, <strong>một phần tử</strong>,{" "}
              <strong>không có ký tự hợp lệ</strong>, và{" "}
              <strong>có mismatch ngay từ đầu</strong>.
            </InfoBox>
          </section>
  );
}
