import React from "react";
import { Lightbulb, X } from "lucide-react";
import { SectionTitle, InfoBox } from "../components/TwoPointerUI";

export default function MistakesSection() {
  return (
<section id="mistakes" className="scroll-mt-24">
            <SectionTitle
              number="14"
              title="Các lỗi thường gặp"
              description="Hiểu những lỗi này sẽ giúp bạn tránh được rất nhiều bug khi dùng Two Pointer."
            />

            <div className="space-y-4">
              <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
                <div className="flex gap-4">
                  <X size={20} className="mt-0.5 shrink-0 text-red-500" />

                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Dùng{" "}
                      <code className="rounded bg-slate-100 px-1.5 py-0.5 text-sm font-mono text-slate-800">
                        left &lt;= right
                      </code>{" "}
                      khi không thực sự cần thiết
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      Khi hai con trỏ trùng nhau (
                      <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs font-mono text-slate-700">
                        left === right
                      </code>
                      ), ký tự ở giữa chỉ còn lại một và luôn bằng chính nó, nên
                      bạn chỉ cần dùng điều kiện{" "}
                      <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs font-mono text-slate-700">
                        left &lt; right
                      </code>
                      .
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
                <div className="flex gap-4">
                  <X size={20} className="mt-0.5 shrink-0 text-red-500" />

                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Quên bỏ qua ký tự đặc biệt
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      Đề bài không yêu cầu so sánh dấu cách, dấu phẩy hoặc dấu
                      câu.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
                <div className="flex gap-4">
                  <X size={20} className="mt-0.5 shrink-0 text-red-500" />

                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Không xử lý uppercase
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      <code>A</code> và <code>a</code> phải được coi là cùng một
                      ký tự theo yêu cầu bài toán.
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
                      Di chuyển cả hai pointer khi mismatch
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      Không cần. Nếu mismatch thì kết luận false ngay. Không cần
                      xử lý tiếp.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <InfoBox type="important" title="Nguyên tắc vàng">
              <strong>
                Chỉ di chuyển pointer sau khi bạn biết chính xác vì sao pointer
                đó cần di chuyển.
              </strong>
              <br />
              <br />
              Không nên viết <code>left++</code> và <code>right--</code> một
              cách máy móc. Hãy hiểu mỗi bước đang loại bỏ phần dữ liệu nào.
            </InfoBox>
          </section>
  );
}
