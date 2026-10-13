import React from "react";
import { ArrowLeft, ArrowRight, CheckCircle2, X } from "lucide-react";
import { SectionTitle, InfoBox } from "../components/TwoPointerUI";

export default function ProblemSection() {
  return (
<section id="problem" className="scroll-mt-24">
            <SectionTitle
              number="07"
              title="Hiểu đề bài"
              description="Từ khóa trong đề bài sẽ quyết định cách chúng ta xử lý chuỗi."
            />

            <h3 className="text-xl font-bold">Palindrome là gì?</h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Một chuỗi là Palindrome nếu đọc từ trái sang phải giống hệt đọc từ
              phải sang trái.
            </p>

            <div className="my-6 grid gap-4 sm:grid-cols-3">
              {[
                ["racecar", true],
                ["level", true],
                ["hello", false],
              ].map(([value, valid]) => (
                <div
                  key={value}
                  className={`rounded-2xl border p-5 ${
                    valid
                      ? "border-emerald-200 bg-emerald-50"
                      : "border-red-200 bg-red-50"
                  }`}
                >
                  <p className="font-mono text-xl font-bold">{value}</p>

                  <div className="mt-3 flex items-center gap-2 text-sm font-semibold">
                    {valid ? (
                      <>
                        <CheckCircle2 size={16} className="text-emerald-600" />
                        <span className="text-emerald-700">Palindrome</span>
                      </>
                    ) : (
                      <>
                        <X size={16} className="text-red-600" />
                        <span className="text-red-700">Không phải</span>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <h3 className="mt-8 text-xl font-bold">
              Nhưng bài toán không đơn giản chỉ vậy
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Ví dụ nổi tiếng:
            </p>

            <div className="my-5 rounded-2xl border border-slate-200 bg-white p-6 text-center">
              <p className="font-mono text-lg font-bold sm:text-xl">
                A man, a plan, a canal: Panama
              </p>

              <p className="mt-4 text-sm leading-6 text-slate-500">
                Sau khi bỏ dấu cách, dấu phẩy, dấu hai chấm và không phân biệt
                hoa thường:
              </p>

              <p className="mt-3 font-mono text-sm font-semibold text-slate-900">
                amanaplanacanalpanama
              </p>
            </div>

            <InfoBox title="Hai việc cần làm">
              <strong>1.</strong> Bỏ qua ký tự không phải chữ hoặc số.
              <br />
              <strong>2.</strong> Không phân biệt chữ hoa và chữ thường.
            </InfoBox>

            <h3 className="mt-8 text-xl font-bold">
              Cách kiểm tra Palindrome cơ bản
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">Với chuỗi:</p>

            <div className="my-5 flex justify-center">
              <div className="flex gap-2">
                {["r", "a", "c", "e", "c", "a", "r"].map((char, index) => (
                  <div
                    key={`${char}-${index}`}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white font-mono font-bold"
                  >
                    {char}
                  </div>
                ))}
              </div>
            </div>

            <p className="text-sm leading-7 text-slate-600">
              Ta chỉ cần so sánh:
            </p>

            <div className="my-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <div className="rounded-xl bg-sky-100 px-5 py-3 font-mono text-sm font-bold text-sky-800">
                ký tự đầu
              </div>

              <span className="font-semibold text-slate-400">==</span>

              <div className="rounded-xl bg-violet-100 px-5 py-3 font-mono text-sm font-bold text-violet-800">
                ký tự cuối
              </div>
            </div>

            <p className="text-sm leading-7 text-slate-600">
              Sau đó tiến dần vào giữa:
            </p>

            <div className="my-6 flex items-center justify-center gap-2">
              <ArrowRight size={19} className="text-sky-600" />

              <span className="rounded-lg bg-slate-900 px-4 py-2 font-mono text-sm text-white">
                left++
              </span>

              <span className="text-slate-400">/</span>

              <span className="rounded-lg bg-slate-900 px-4 py-2 font-mono text-sm text-white">
                right--
              </span>

              <ArrowLeft size={19} className="text-violet-600" />
            </div>
          </section>
  );
}
