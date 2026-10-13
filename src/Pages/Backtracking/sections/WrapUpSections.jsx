import { ArrowLeft, ArrowRight, Check, CheckCircle2, Code2, GitBranch, GitMerge, Network, RotateCcw, Undo2, X, Zap } from "lucide-react";
import { CodeBlock, SectionTitle, InfoBox } from "../components/BacktrackingUI";
import { emptySubsetCode } from "../data/backtrackingData";
import { Link } from "react-router-dom";

export default function WrapUpSections() {
  return (
    <>
          <section id="edge-cases" className="scroll-mt-24">
            <SectionTitle
              number="25"
              title="Edge Cases"
              description="Backtracking thường có một vài trường hợp đặc biệt phải kiểm tra."
            />

            <div className="space-y-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold">Empty Array</h3>

                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      Với nums = [] thì vẫn có đúng một subset: empty subset.
                    </p>

                    <CodeBlock code={emptySubsetCode} label="text" />
                  </div>

                  <CheckCircle2
                    size={19}
                    className="shrink-0 text-emerald-600"
                  />
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold">Chỉ có một phần tử</h3>

                    <p className="mt-2 font-mono text-sm">[7]</p>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Có đúng hai subset: [] và [7].
                    </p>
                  </div>

                  <CheckCircle2
                    size={19}
                    className="shrink-0 text-emerald-600"
                  />
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold">Không được tạo duplicate</h3>

                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      Đề bài cho nums gồm các số nguyên unique, vì vậy không cần
                      xử lý duplicate trong input.
                    </p>
                  </div>

                  <CheckCircle2
                    size={19}
                    className="shrink-0 text-emerald-600"
                  />
                </div>
              </div>
            </div>

            <InfoBox type="important" title="Empty subset vẫn là đáp án">
              Đây là một chi tiết rất dễ quên.
              <br />
              <br />
              Với mọi array, <strong>[]</strong> luôn là một subset hợp lệ.
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Common Mistakes */}
          <section id="common-mistakes" className="scroll-mt-24">
            <SectionTitle
              number="26"
              title="Lỗi thường gặp"
              description="Các lỗi này thường khiến Backtracking cho thiếu hoặc trùng kết quả."
            />

            <div className="space-y-4">
              <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
                <div className="flex gap-4">
                  <X size={19} className="mt-0.5 shrink-0 text-red-500" />

                  <div>
                    <h3 className="font-semibold">Quên Undo</h3>

                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      State của một nhánh sẽ bị giữ lại khi thử nhánh tiếp theo.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
                <div className="flex gap-4">
                  <X size={19} className="mt-0.5 shrink-0 text-red-500" />

                  <div>
                    <h3 className="font-semibold">Push nhưng không Pop</h3>

                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      Đây chính là phiên bản cụ thể của lỗi quên Undo khi dùng
                      array/list làm path.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
                <div className="flex gap-4">
                  <X size={19} className="mt-0.5 shrink-0 text-red-500" />

                  <div>
                    <h3 className="font-semibold">
                      Lưu reference của path thay vì copy
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      Result phải lưu snapshot của path tại thời điểm đó, không
                      phải một reference vẫn tiếp tục thay đổi.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
                <div className="flex gap-4">
                  <X size={19} className="mt-0.5 shrink-0 text-red-500" />

                  <div>
                    <h3 className="font-semibold">
                      Cho phép chọn lại phần tử phía trước
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      Điều này có thể tạo những subset giống nhau theo thứ tự
                      khác nhau.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
                <div className="flex gap-4">
                  <X size={19} className="mt-0.5 shrink-0 text-red-500" />

                  <div>
                    <h3 className="font-semibold">Quên empty subset</h3>

                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      [] luôn phải xuất hiện trong kết quả.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <InfoBox type="tip" title="Quy tắc vàng">
              Mỗi lần bạn thay đổi state trước recursion, hãy tự hỏi:
              <br />
              <br />
              <strong>
                "Sau khi recursion xong, tôi đã trả state về đúng trạng thái ban
                đầu chưa?"
              </strong>
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Recognition */}
          <section id="recognition" className="scroll-mt-24">
            <SectionTitle
              number="27"
              title="Nhận diện Pattern Backtracking"
              description="Mục tiêu là nhìn đề và nhận ra cây quyết định."
            />

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-3xl border border-sky-200 bg-sky-50 p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-100 text-sky-700">
                  <GitBranch size={19} />
                </div>

                <h3 className="mt-4 text-xl font-bold">Subsets</h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Mỗi phần tử: chọn hoặc không chọn.
                </p>

                <p className="mt-5 rounded-xl bg-white/70 p-3 font-mono text-sm">
                  2ⁿ
                </p>
              </div>

              <div className="rounded-3xl border border-violet-200 bg-violet-50 p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100 text-violet-700">
                  <GitMerge size={19} />
                </div>

                <h3 className="mt-4 text-xl font-bold">Combinations</h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Chọn một nhóm phần tử mà không quan tâm thứ tự.
                </p>

                <p className="mt-5 rounded-xl bg-white/70 p-3 font-mono text-sm">
                  Choose k
                </p>
              </div>

              <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                  <RotateCcw size={19} />
                </div>

                <h3 className="mt-4 text-xl font-bold">Permutations</h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Mỗi lần chọn một phần tử chưa dùng và phải track trạng thái
                  used.
                </p>

                <p className="mt-5 rounded-xl bg-white/70 p-3 font-mono text-sm">
                  used[]
                </p>
              </div>

              <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                  <Network size={19} />
                </div>

                <h3 className="mt-4 text-xl font-bold">Board / Grid</h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  DFS nhiều hướng + đánh dấu cell + Undo.
                </p>

                <p className="mt-5 rounded-xl bg-white/70 p-3 font-mono text-sm">
                  mark → DFS → unmark
                </p>
              </div>
            </div>

            <InfoBox type="important" title="Câu hỏi nhận diện mạnh nhất">
              Hãy hỏi:
              <br />
              <br />
              <strong>
                "Từ state hiện tại, có nhiều lựa chọn và tôi cần thử từng lựa
                chọn không?"
              </strong>
              <br />
              <br />
              Nếu có, hãy nghĩ tới Backtracking.
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Summary */}
          <section id="summary" className="scroll-mt-24">
            <SectionTitle
              number="28"
              title="Tổng kết Backtracking"
              description="Từ Recursion đến cây quyết định và bài Subsets."
            />

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                  <RotateCcw size={20} />
                </div>

                <h3 className="mt-4 text-lg font-bold">Recursion</h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Function gọi lại chính nó để giải bài toán nhỏ hơn.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                  <GitBranch size={20} />
                </div>

                <h3 className="mt-4 text-lg font-bold">Decision Tree</h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Mỗi Node đại diện cho một trạng thái và nhiều lựa chọn tiếp
                  theo.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                  <Check size={20} />
                </div>

                <h3 className="mt-4 text-lg font-bold">Choose</h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Thay đổi state để thử một khả năng.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                  <Undo2 size={20} />
                </div>

                <h3 className="mt-4 text-lg font-bold">Undo</h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Hoàn tác state trước khi thử nhánh khác.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                  <Zap size={20} />
                </div>

                <h3 className="mt-4 text-lg font-bold">Pruning</h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Cắt những nhánh không thể tạo ra solution.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                  <Code2 size={20} />
                </div>

                <h3 className="mt-4 text-lg font-bold">Subsets</h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Mỗi phần tử có 2 lựa chọn → tổng 2ⁿ subset.
                </p>
              </div>
            </div>

            <h3 className="mt-10 text-xl font-bold">
              Fibonacci và Subsets khác nhau thế nào?
            </h3>

            <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
              <table className="w-full min-w-[820px] text-sm">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="border-b border-slate-200 px-5 py-4 text-left">
                      Problem
                    </th>

                    <th className="border-b border-slate-200 px-5 py-4 text-left">
                      Pattern
                    </th>

                    <th className="border-b border-slate-200 px-5 py-4 text-left">
                      Ý tưởng
                    </th>

                    <th className="border-b border-slate-200 px-5 py-4 text-left">
                      Complexity
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td className="border-b border-slate-100 px-5 py-4 font-semibold">
                      Fibonacci
                    </td>

                    <td className="border-b border-slate-100 px-5 py-4 font-mono">
                      Recursion / DP
                    </td>

                    <td className="border-b border-slate-100 px-5 py-4 text-slate-600">
                      fib(n) phụ thuộc fib(n-1) và fib(n-2)
                    </td>

                    <td className="border-b border-slate-100 px-5 py-4 font-mono">
                      O(2ⁿ) naive
                    </td>
                  </tr>

                  <tr>
                    <td className="px-5 py-4 font-semibold">Subsets</td>

                    <td className="px-5 py-4 font-mono">Backtracking</td>

                    <td className="px-5 py-4 text-slate-600">
                      Choose / Skip mỗi phần tử
                    </td>

                    <td className="px-5 py-4 font-mono">O(n × 2ⁿ)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <InfoBox type="important" title="Mental model cuối cùng">
              Hãy ghi nhớ Backtracking bằng một câu:
              <br />
              <br />
              <strong>
                "Chọn một khả năng → đi sâu → nếu quay lại thì hoàn tác → thử
                khả năng khác."
              </strong>
            </InfoBox>

            <div className="mt-8 rounded-3xl bg-slate-950 p-6 text-white sm:p-8">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Backtracking roadmap
              </p>

              <h3 className="mt-3 text-2xl font-bold">Mental model</h3>

              <div className="mt-7 space-y-2 font-mono text-sm leading-8 text-slate-300">
                <div>Recursion</div>
                <div>↓</div>
                <div>Multiple choices</div>
                <div>↓</div>
                <div>Decision Tree</div>
                <div>↓</div>
                <div>Choose</div>
                <div>↓</div>
                <div>Explore with recursion</div>
                <div>↓</div>
                <div>Undo</div>
                <div>↓</div>
                <div>Try another branch</div>
                <div>↓</div>
                <div className="text-emerald-300">Backtracking</div>
              </div>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <Link
                to="/algorithms/tries"
                className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-slate-300 hover:shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <ArrowLeft
                    size={18}
                    className="text-slate-400 transition-transform group-hover:-translate-x-1"
                  />

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Previous
                    </p>

                    <p className="mt-1 font-semibold">Tries</p>
                  </div>
                </div>
              </Link>

              <Link
                to="/"
                className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-slate-300 hover:shadow-lg"
              >
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Finish
                  </p>

                  <p className="mt-1 font-semibold">Tất cả thuật toán</p>
                </div>

                <ArrowRight
                  size={18}
                  className="text-slate-400 transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </section>
    </>
  );
}
