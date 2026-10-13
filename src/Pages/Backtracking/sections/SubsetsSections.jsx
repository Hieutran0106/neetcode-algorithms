import { ArrowRight, Check } from "lucide-react";
import { CodeBlock, SectionTitle, InfoBox, Complexity, StepCard, SubsetTreeDiagram } from "../components/BacktrackingUI";
import { subsetsDecisionCode, validSubsetCode, subsetsExamples } from "../data/backtrackingData";

export default function SubsetsSections() {
  return (
    <>
          <section id="subsets-problem" className="scroll-mt-24">
            <SectionTitle
              number="17"
              title="Subsets"
              description="Bây giờ mới bước vào bài Backtracking kinh điển."
            />

            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Problem
              </p>

              <h3 className="mt-3 text-2xl font-bold tracking-tight">
                Subsets
              </h3>

              <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
                Cho một array <code>nums</code> gồm các số nguyên{" "}
                <strong>unique</strong>. Trả về tất cả các subset có thể tạo
                thành.
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                Kết quả không được chứa duplicate subset và có thể trả về theo
                bất kỳ thứ tự nào.
              </p>

              <div className="mt-6 rounded-2xl bg-slate-50 p-5 font-mono text-sm leading-8">
                nums = [1, 2, 3]
                <br />
                <br />
                Output =
                <br />
                [[], [1], [2], [1,2], [3], [1,3], [2,3], [1,2,3]]
              </div>

              <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-sm leading-7 text-slate-600">Với:</p>

                <p className="mt-3 font-mono text-lg font-bold">nums = [7]</p>

                <p className="mt-3 font-mono text-sm text-slate-600">
                  Output = [[], [7]]
                </p>
              </div>
            </div>

            <InfoBox type="important" title="Câu hỏi chính">
              Với mỗi phần tử, chúng ta cần quyết định:
              <br />
              <br />
              <strong>
                "Có đưa phần tử này vào subset hiện tại hay không?"
              </strong>
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Subsets Observation */}
          <section id="subsets-observation" className="scroll-mt-24">
            <SectionTitle
              number="18"
              title="Quan sát bài toán"
              description="Chỉ cần nhìn mỗi phần tử như một quyết định."
            />

            <p className="text-sm leading-7 text-slate-600">Với:</p>

            <div className="my-5 flex justify-center gap-3">
              {[1, 2, 3].map((value) => (
                <div
                  key={value}
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-white font-mono font-bold"
                >
                  {value}
                </div>
              ))}
            </div>

            <p className="text-sm leading-7 text-slate-600">Với số 1:</p>

            <div className="my-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                <Check size={18} className="text-emerald-600" />

                <h3 className="mt-3 font-bold">Chọn 1</h3>

                <p className="mt-2 font-mono text-sm">[1]</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <ArrowRight size={18} className="text-slate-500" />

                <h3 className="mt-3 font-bold">Không chọn 1</h3>

                <p className="mt-2 font-mono text-sm">[]</p>
              </div>
            </div>

            <p className="text-sm leading-7 text-slate-600">
              Với số 2, hai trạng thái trước lại tiếp tục tách thành hai lựa
              chọn:
            </p>

            <SubsetTreeDiagram />

            <InfoBox type="tip" title="Nhìn ra ngay 2ⁿ">
              Mỗi phần tử có 2 lựa chọn.
              <br />
              <br />
              Có n phần tử → tổng số subset là <strong>2ⁿ</strong>.
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Subsets Choice */}
          <section id="subsets-choice" className="scroll-mt-24">
            <SectionTitle
              number="19"
              title="Choose / Not Choose"
              description="Đây là cách nghĩ đơn giản nhất để tự xây cây quyết định."
            />

            <div className="my-7 grid gap-5 md:grid-cols-2">
              <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6">
                <div className="flex items-center gap-2 font-semibold text-emerald-900">
                  <Check size={19} />
                  Choose
                </div>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Thêm phần tử vào subset hiện tại rồi đi tiếp.
                </p>

                <div className="mt-5 rounded-xl bg-white/70 p-4 font-mono text-sm">
                  path[pathSize] = nums[index]
                  <br />
                  pathSize++
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <div className="flex items-center gap-2 font-semibold">
                  <ArrowRight size={19} />
                  Not Choose
                </div>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Bỏ qua phần tử và đi tiếp sang phần tử kế.
                </p>

                <div className="mt-5 rounded-xl bg-white/70 p-4 font-mono text-sm">
                  backtrack(index + 1)
                </div>
              </div>
            </div>

            <h3 className="mt-8 text-xl font-bold">Có hai cách viết</h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Một cách là viết trực tiếp hai nhánh:
            </p>

            <CodeBlock code={subsetsDecisionCode} label="Pseudocode · Python-like" />

            <p className="text-sm leading-7 text-slate-600">
              Cách thứ hai là dùng vòng lặp từ <code>index</code> trở đi. Đây là
              cách rất phổ biến cho bài Subsets.
            </p>

            <InfoBox type="important" title="Tại sao dùng i + 1?">
              Sau khi đã chọn <code>nums[i]</code>, những lựa chọn tiếp theo chỉ
              được lấy từ các phần tử phía sau.
              <br />
              <br />
              Nhờ vậy mỗi subset được tạo ra đúng một lần và không bị đảo thứ tự
              như [1,2] và [2,1].
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Subsets State */}
          <section id="subsets-state" className="scroll-mt-24">
            <SectionTitle
              number="20"
              title="State của bài Subsets"
              description="Xác định đúng state thì code gần như tự xuất hiện."
            />

            <div className="my-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  nums
                </div>

                <div className="mt-3 font-mono text-lg font-bold">[1,2,3]</div>

                <p className="mt-2 text-sm text-slate-500">Dữ liệu gốc.</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  index
                </div>

                <div className="mt-3 font-mono text-lg font-bold">0,1,2</div>

                <p className="mt-2 text-sm text-slate-500">
                  Đi tới phần tử nào.
                </p>
              </div>

              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                  path
                </div>

                <div className="mt-3 font-mono text-lg font-bold text-emerald-800">
                  [1,2]
                </div>

                <p className="mt-2 text-sm text-slate-500">Subset hiện tại.</p>
              </div>
            </div>

            <p className="text-sm leading-7 text-slate-600">
              Khi đạt đến một trạng thái bất kỳ, path hiện tại luôn là một
              subset hợp lệ.
            </p>

            <div className="my-5 rounded-2xl bg-slate-950 p-5 text-center font-mono text-lg text-white">
              path = current subset
            </div>

            <InfoBox type="tip" title="Một điểm rất hay">
              Trong bài Subsets, chúng ta có thể{" "}
              <strong>lưu path ngay tại mỗi level</strong>, vì mọi path đều là
              một subset hợp lệ.
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Subsets Tree */}
          <section id="subsets-tree" className="scroll-mt-24">
            <SectionTitle
              number="21"
              title="Cây quyết định của Subsets"
              description="Đây chính là Backtracking Tree."
            />

            <SubsetTreeDiagram />

            <p className="text-sm leading-7 text-slate-600">
              Với [1,2,3], mỗi level tương ứng với việc xử lý thêm một phần tử.
            </p>

            <div className="my-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Level 0
                </p>

                <p className="mt-3 font-mono text-xl font-bold">[]</p>

                <p className="mt-2 text-sm text-slate-500">Chưa chọn gì.</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Level 1
                </p>

                <p className="mt-3 font-mono text-xl font-bold">
                  [1], [2], [3]
                </p>

                <p className="mt-2 text-sm text-slate-500">Chọn một phần tử.</p>
              </div>

              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                  Level 2+
                </p>

                <p className="mt-3 font-mono text-xl font-bold text-emerald-800">
                  [1,2,3]
                </p>

                <p className="mt-2 text-sm text-slate-500">
                  Tiếp tục mở rộng subset.
                </p>
              </div>
            </div>

            <InfoBox
              type="important"
              title="Đừng nghĩ Output là thứ được tạo sau cùng"
            >
              Với bài Subsets, mỗi khi Backtracking đang ở một state hợp lệ,
              state đó đã là một đáp án và có thể được copy vào result ngay.
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Subsets Dry Run */}
          <section id="subsets-dry-run" className="scroll-mt-24">
            <SectionTitle
              number="22"
              title="Dry Run Subsets"
              description="Chạy từng bước với nums = [1,2,3]."
            />

            <div className="space-y-5">
              <StepCard number="01" title="Bắt đầu">
                path = [].
                <br />
                Lưu [] vào result.
              </StepCard>

              <StepCard number="02" title="Chọn 1">
                path = [1].
                <br />
                Lưu [1].
              </StepCard>

              <StepCard number="03" title="Chọn 2">
                path = [1,2].
                <br />
                Lưu [1,2].
              </StepCard>

              <StepCard number="04" title="Chọn 3">
                path = [1,2,3].
                <br />
                Lưu [1,2,3].
              </StepCard>

              <StepCard number="05" title="Undo 3">
                Xóa 3 → path = [1,2].
                <br />
                Quay lại thử lựa chọn khác.
              </StepCard>

              <StepCard number="06" title="Undo 2">
                Xóa 2 → path = [1].
              </StepCard>

              <StepCard number="07" title="Thử 3">
                path = [1,3].
                <br />
                Lưu [1,3].
              </StepCard>

              <StepCard number="08" title="Quay lại">
                Cuối cùng thử các nhánh bắt đầu bằng [2] và [3].
              </StepCard>
            </div>

            <CodeBlock code={validSubsetCode} label="text" />

            <InfoBox type="tip" title="Tại sao không trùng?">
              Bởi vì khi đang ở index i, chúng ta chỉ chọn những phần tử từ i
              trở đi. Một phần tử không quay ngược lại phía trước, nên cùng một
              subset không được tạo theo nhiều thứ tự khác nhau.
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Subsets Code */}
          <section id="subsets-code" className="scroll-mt-24">
            <SectionTitle
              number="23"
              title="Code Subsets"
              description="Cùng một thuật toán Backtracking, triển khai bằng C, Java và Python."
            />

            <p className="text-sm leading-7 text-slate-600">
              Chọn tab ngôn ngữ để xem implementation tương đương theo interface LeetCode:
            </p>

            <CodeBlock examples={subsetsExamples} />

            <h3 className="mt-8 text-xl font-bold">Phần quan trọng nhất</h3>

            <div className="mt-5 space-y-4">
              <StepCard number="01" title="Copy path vào result">
                Mỗi path hiện tại là một subset hợp lệ.
              </StepCard>

              <StepCard number="02" title="for từ index">
                Thử lần lượt từng phần tử có thể chọn.
              </StepCard>

              <StepCard number="03" title="Thêm vào path">
                Đặt <code>nums[i]</code> vào cuối path.
              </StepCard>

              <StepCard number="04" title="Recursion">
                Gọi lại với <code>i + 1</code>.
              </StepCard>

              <StepCard number="05" title="Undo">
                Khi recursion quay về, giảm <code>pathSize</code> để bỏ phần tử
                cuối.
              </StepCard>
            </div>

            <InfoBox type="important" title="Undo trong code C">
              Ta có thể không cần xóa giá trị vật lý khỏi array path.
              <br />
              <br />
              Chỉ cần:
              <br />
              <code>pathSize--;</code>
              <br />
              <br />
              vì từ góc nhìn logic, phần tử cuối đã không còn nằm trong subset
              hiện tại.
            </InfoBox>

            <div className="my-6 rounded-2xl bg-slate-950 p-6 text-center font-mono text-base text-white">
              pathSize++
              <span className="mx-3 text-slate-500">→</span>
              recurse
              <span className="mx-3 text-slate-500">→</span>
              pathSize--
            </div>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Subsets Complexity */}
          <section id="subsets-complexity" className="scroll-mt-24">
            <SectionTitle
              number="24"
              title="Complexity của Subsets"
              description="Đây là chỗ rất quan trọng để hiểu vì sao 2ⁿ xuất hiện."
            />

            <p className="text-sm leading-7 text-slate-600">
              Với n phần tử, số subset là:
            </p>

            <div className="my-5 rounded-2xl bg-slate-950 p-6 text-center font-mono text-2xl font-bold text-white">
              2ⁿ
            </div>

            <p className="text-sm leading-7 text-slate-600">
              Vì mỗi phần tử có hai lựa chọn:
            </p>

            <div className="my-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                <Check size={18} className="text-emerald-600" />

                <h3 className="mt-3 font-bold">Choose</h3>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <ArrowRight size={18} className="text-slate-500" />

                <h3 className="mt-3 font-bold">Skip</h3>
              </div>
            </div>

            <p className="text-sm leading-7 text-slate-600">
              Mỗi subset chứa tối đa n phần tử, nên để copy toàn bộ output, tổng
              công việc vào khoảng:
            </p>

            <div className="my-5 rounded-2xl bg-slate-950 p-5 text-center font-mono text-xl font-bold text-white">
              O(n × 2ⁿ)
            </div>

            <Complexity
              time="O(n × 2ⁿ)"
              space="O(n × 2ⁿ)"
              timeDescription="Có 2ⁿ subset và mỗi subset có thể cần copy tới n phần tử."
              spaceDescription="Result cần lưu toàn bộ output; recursion/path thêm O(n)."
            />

            <InfoBox type="tip" title="Output itself đã rất lớn">
              Không thể kỳ vọng algorithm output tất cả 2ⁿ subset mà chạy nhanh
              hơn đáng kể so với kích thước của chính output.
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

    </>
  );
}
