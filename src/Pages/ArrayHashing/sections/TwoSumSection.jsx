import { Check, Target } from "lucide-react";
import { CodeBlock, Complexity, InfoBox, ProblemHeader } from "../components/ArrayHashingUI";
import { twoSumBruteForceCode, twoSumHashCode } from "../data/arrayHashingData";

export function TwoSumSection() {
  return (
<section id="two-sum" className="scroll-mt-24">
            <ProblemHeader
              number="03"
              title="Two Sum"
              difficulty="Easy"
              description="Cho một mảng số nguyên nums và target. Tìm hai index i và j sao cho nums[i] + nums[j] = target và i khác j."
            />

            <h3 className="text-xl font-bold">Ví dụ</h3>

            <div className="my-6 overflow-x-auto rounded-2xl border border-slate-200 bg-white p-5">
              <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
                nums
              </div>

              <div className="flex min-w-[500px] gap-2">
                {[2, 7, 11, 15].map((number, index) => (
                  <div
                    key={index}
                    className={`flex-1 rounded-xl border p-4 text-center ${
                      index === 0 || index === 1
                        ? "border-slate-900 bg-slate-900 text-white"
                        : "border-slate-200 bg-slate-50"
                    }`}
                  >
                    <p className="font-mono text-lg font-bold">{number}</p>

                    <p className="mt-1 text-xs opacity-60">index {index}</p>
                  </div>
                ))}
              </div>

              <div className="mt-5 text-sm text-slate-600">
                target = <strong>9</strong>
              </div>

              <div className="mt-2 flex items-center gap-2 font-mono text-sm">
                2 + 7 = 9
                <Check size={16} className="text-emerald-600" />
              </div>
            </div>

            <h3 className="mt-8 text-xl font-bold">Cách 1 — Brute Force</h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Thử mọi cặp số có thể.
            </p>

            <CodeBlock code={twoSumBruteForceCode} />

            <p className="text-sm leading-7 text-slate-600">
              Nếu có <code>n</code> phần tử thì trong trường hợp xấu nhất chúng
              ta phải thử gần như mọi cặp.
            </p>

            <Complexity
              time="O(n²)"
              space="O(1)"
              timeDescription="Hai vòng lặp."
              spaceDescription="Không dùng Hash Map."
            />

            <h3 className="mt-8 text-xl font-bold">
              Bây giờ hãy nhìn bài toán theo cách khác
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Giả sử chúng ta đang đứng ở:
            </p>

            <div className="my-5 rounded-2xl bg-slate-950 p-6 text-center font-mono text-lg text-white">
              nums[i] = 2
            </div>

            <p className="text-sm leading-7 text-slate-600">Target là 9.</p>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Vậy số còn thiếu phải là:
            </p>

            <div className="my-5 rounded-2xl border border-slate-200 bg-white p-6 text-center font-mono text-xl font-bold">
              9 - 2 = 7
            </div>

            <p className="text-sm leading-7 text-slate-600">
              Đây chính là <strong>complement</strong>.
            </p>

            <div className="my-7 rounded-3xl border border-slate-200 bg-white p-6">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Công thức
              </p>

              <p className="mt-4 font-mono text-xl font-bold">
                complement = target - current
              </p>
            </div>

            <h3 className="mt-8 text-xl font-bold">
              Hash Map giải quyết vấn đề gì?
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Chúng ta không cần tìm complement trong toàn bộ Array. Chỉ cần lưu
              những số đã nhìn thấy:
            </p>

            <div className="my-6 overflow-x-auto rounded-2xl border border-slate-200 bg-white p-5">
              <div className="grid min-w-[520px] grid-cols-3 gap-2 text-sm">
                <div className="rounded-lg bg-slate-50 p-3 font-semibold">
                  Number
                </div>

                <div className="rounded-lg bg-slate-50 p-3 font-semibold">
                  Index
                </div>

                <div className="rounded-lg bg-slate-50 p-3 font-semibold">
                  Meaning
                </div>

                <div className="rounded-lg border border-slate-200 p-3 font-mono">
                  2
                </div>

                <div className="rounded-lg border border-slate-200 p-3 font-mono">
                  0
                </div>

                <div className="rounded-lg border border-slate-200 p-3 text-slate-600">
                  Đã thấy số 2
                </div>

                <div className="rounded-lg border border-slate-200 p-3 font-mono">
                  7
                </div>

                <div className="rounded-lg border border-slate-200 p-3 font-mono">
                  1
                </div>

                <div className="rounded-lg border border-slate-200 p-3 text-slate-600">
                  Đã thấy số 7
                </div>
              </div>
            </div>

            <h3 className="mt-8 text-xl font-bold">One-pass Hash Map</h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Với mỗi phần tử:
            </p>

            <div className="my-6 space-y-3">
              {[
                "Tính complement = target - nums[i].",
                "Kiểm tra complement đã có trong Map chưa.",
                "Nếu có → tìm thấy đáp án.",
                "Nếu chưa → lưu nums[i] cùng index của nó.",
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-4"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-900 font-mono text-xs font-bold text-white">
                    {index + 1}
                  </div>

                  <p className="text-sm leading-6 text-slate-600">{item}</p>
                </div>
              ))}
            </div>

            <CodeBlock code={twoSumHashCode} />

            <Complexity
              time="O(n)"
              space="O(n)"
              timeDescription="Mỗi phần tử được duyệt một lần; lookup Hash Map trung bình gần O(1)."
              spaceDescription="Map có thể lưu tới n phần tử."
            />

            <InfoBox
              type="important"
              title="Tại sao phải check trước khi insert?"
            >
              Giả sử:
              <br />
              <br />
              <strong>nums = [5, 5]</strong>
              <br />
              <strong>target = 10</strong>
              <br />
              <br />
              Với phần tử thứ hai, complement của nó là 5. Phần tử 5 đầu tiên đã
              được lưu trong Map nên chúng ta tìm được hai index khác nhau.
              <br />
              <br />
              Nếu bạn insert phần tử hiện tại trước rồi mới kiểm tra, bạn rất dễ
              vô tình dùng cùng một phần tử hai lần.
            </InfoBox>

            <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-white">
                  <Target size={20} />
                </div>

                <div>
                  <h3 className="text-xl font-bold">Pattern của Two Sum</h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Khi đề bài yêu cầu tìm một phần tử "đi kèm" với phần tử hiện
                    tại để tạo ra một giá trị nào đó, hãy thử biến bài toán
                    thành:
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl bg-slate-950 p-6 text-center font-mono text-base text-white">
                current
                <span className="mx-2 text-slate-500">→</span>
                required
                <span className="mx-2 text-slate-500">→</span>
                Hash Map lookup
              </div>
            </div>
          </section>
  );
}
