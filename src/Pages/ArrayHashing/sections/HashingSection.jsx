import { ArrowRight } from "lucide-react";
import { InfoBox, SectionTitle } from "../components/ArrayHashingUI";

export function HashingSection() {
  return (
<section id="hashing" className="scroll-mt-24">
            <SectionTitle
              number="02"
              title="Hashing là gì?"
              description="Hiểu Hashing trước, rồi ba bài toán phía dưới sẽ trở nên rất dễ."
            />

            <p className="text-sm leading-7 text-slate-600 sm:text-base">
              Hãy tưởng tượng chúng ta có một danh sách rất lớn và muốn biết một
              giá trị có nằm trong đó hay không.
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              Với Array thông thường:
            </p>

            <div className="my-5 rounded-2xl border border-slate-200 bg-white p-5 font-mono text-sm">
              10 → kiểm tra
              <br />
              20 → kiểm tra
              <br />
              30 → kiểm tra
              <br />
              40 → kiểm tra
              <br />
              ...
            </div>

            <p className="text-sm leading-7 text-slate-600">
              Nếu giá trị nằm gần cuối, chúng ta phải đi qua rất nhiều phần tử.
            </p>

            <h3 className="mt-8 text-xl font-bold">Hash function</h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Hashing sử dụng một <strong>hash function</strong> để biến key
              thành một giá trị dùng để xác định vị trí trong hash table.
            </p>

            <div className="my-7 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <div className="w-full rounded-2xl border border-slate-200 bg-white p-5 text-center sm:w-40">
                <p className="text-xs text-slate-400">KEY</p>

                <p className="mt-2 font-mono text-xl font-bold">42</p>
              </div>

              <ArrowRight className="rotate-90 text-slate-400 sm:rotate-0" />

              <div className="w-full rounded-2xl border border-slate-200 bg-white p-5 text-center sm:w-40">
                <p className="text-xs text-slate-400">HASH</p>

                <p className="mt-2 font-mono text-xl font-bold">hash(42)</p>
              </div>

              <ArrowRight className="rotate-90 text-slate-400 sm:rotate-0" />

              <div className="w-full rounded-2xl border border-slate-200 bg-white p-5 text-center sm:w-40">
                <p className="text-xs text-slate-400">INDEX</p>

                <p className="mt-2 font-mono text-xl font-bold">5</p>
              </div>
            </div>

            <InfoBox title="Mục tiêu của Hashing">
              Thay vì hỏi:
              <strong> "Tôi phải duyệt bao nhiêu phần tử?"</strong>
              <br />
              chúng ta muốn hỏi:
              <strong> "Giá trị này có trong bảng băm không?"</strong>
              <br />
              và thực hiện lookup gần như trực tiếp.
            </InfoBox>

            <h3 className="mt-8 text-xl font-bold">Collision là gì?</h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Hai key khác nhau đôi khi có thể cho cùng một vị trí hash. Điều
              này gọi là <strong>collision</strong>.
            </p>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Có nhiều cách xử lý collision. Một cách phổ biến là{" "}
              <strong>open addressing</strong>, trong đó nếu vị trí hiện tại đã
              có dữ liệu thì chúng ta thử vị trí tiếp theo.
            </p>

            <div className="my-6 overflow-x-auto rounded-2xl border border-slate-200 bg-white p-5">
              <div className="flex min-w-[620px] gap-2">
                {[0, 1, 2, 3, 4, 5, 6].map((index) => (
                  <div
                    key={index}
                    className={`flex-1 rounded-xl border p-4 text-center ${
                      index === 5
                        ? "border-slate-900 bg-slate-900 text-white"
                        : "border-slate-200 bg-slate-50"
                    }`}
                  >
                    <p className="font-mono text-xs opacity-60">{index}</p>

                    <p className="mt-2 font-mono font-bold">
                      {index === 5 ? "42" : "—"}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
  );
}
