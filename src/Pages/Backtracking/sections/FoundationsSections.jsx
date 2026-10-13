import { ArrowDown, ArrowRight, Check, Search, Undo2 } from "lucide-react";
import { CodeBlock, SectionTitle, InfoBox, StepCard, ChooseUndoDiagram } from "../components/BacktrackingUI";
import { countdownExamples } from "../data/backtrackingData";

export default function FoundationsSections() {
  return (
    <>
          <section id="introduction" className="scroll-mt-24">
            <SectionTitle
              number="00"
              title="Backtracking là gì?"
              description="Hãy bắt đầu bằng cách hiểu bản chất của việc thử nhiều khả năng."
            />

            <p className="text-sm leading-7 text-slate-600 sm:text-base">
              Trong nhiều bài toán, chúng ta không biết ngay đáp án cuối cùng.
              Thay vào đó có thể có rất nhiều lựa chọn. Ta thử một lựa chọn,
              tiếp tục đi sâu, nếu phát hiện lựa chọn đó không phù hợp thì quay
              lại trạng thái trước và thử lựa chọn khác.
            </p>

            <div className="my-7 rounded-3xl border border-slate-200 bg-white p-6">
              <div className="flex flex-col items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border-2 border-slate-300 bg-slate-50 font-mono font-bold">
                  Start
                </div>

                <ArrowDown size={18} className="my-3 text-slate-400" />

                <div className="flex gap-8">
                  <div className="flex flex-col items-center">
                    <div className="rounded-xl border border-sky-200 bg-sky-50 px-4 py-3 font-mono text-sm font-bold text-sky-800">
                      Choice A
                    </div>

                    <ArrowDown size={17} className="my-2 text-slate-400" />

                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Explore
                    </div>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="rounded-xl border border-violet-200 bg-violet-50 px-4 py-3 font-mono text-sm font-bold text-violet-800">
                      Choice B
                    </div>

                    <ArrowDown size={17} className="my-2 text-slate-400" />

                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Explore
                    </div>
                  </div>
                </div>

                <div className="my-4 flex items-center gap-2">
                  <Undo2 size={18} className="text-amber-600" />
                  <span className="text-sm font-semibold text-amber-700">
                    Undo để quay lại trạng thái trước
                  </span>
                </div>
              </div>
            </div>

            <InfoBox type="important" title="Định nghĩa đơn giản nhất">
              <strong>
                Backtracking là quá trình thử một lựa chọn, đi sâu bằng
                recursion, rồi hoàn tác lựa chọn đó để thử nhánh khác.
              </strong>
            </InfoBox>

            <p className="text-sm leading-7 text-slate-600">
              Công thức rất quan trọng:
            </p>

            <div className="my-5 rounded-2xl bg-slate-950 p-6 text-center font-mono text-lg font-bold text-white">
              Choose → Explore → Undo
            </div>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Recursion Review */}
          <section id="recursion-review" className="scroll-mt-24">
            <SectionTitle
              number="01"
              title="Ôn lại Recursion"
              description="Backtracking gần như luôn dựa trên recursion, vì vậy phải hiểu recursion trước."
            />

            <p className="text-sm leading-7 text-slate-600">
              Recursion là khi một function gọi lại chính nó để giải một bài
              toán nhỏ hơn.
            </p>

            <CodeBlock examples={countdownExamples} />

            <p className="text-sm leading-7 text-slate-600">
              Với <code>countdown(3)</code>:
            </p>

            <div className="my-6 space-y-3">
              <StepCard number="01" title="countdown(3)">
                In 3 rồi gọi countdown(2).
              </StepCard>

              <StepCard number="02" title="countdown(2)">
                In 2 rồi gọi countdown(1).
              </StepCard>

              <StepCard number="03" title="countdown(1)">
                In 1 rồi gọi countdown(0).
              </StepCard>

              <StepCard number="04" title="countdown(0)">
                Chạm Base Case và return.
              </StepCard>
            </div>

            <InfoBox type="tip" title="Ba thành phần của Recursion">
              <strong>Base Case</strong> để dừng.
              <br />
              <strong>Recursive Call</strong> để đi vào bài toán nhỏ hơn.
              <br />
              <strong>Return</strong> để quay trở lại tầng trước.
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Call Stack */}
          <section id="call-stack" className="scroll-mt-24">
            <SectionTitle
              number="02"
              title="Call Stack"
              description="Muốn hiểu Backtracking phải hiểu chuyện gì xảy ra khi recursion đi sâu rồi quay lại."
            />

            <p className="text-sm leading-7 text-slate-600">
              Mỗi lần function gọi chính nó, một stack frame mới được tạo. Khi
              function con kết thúc, chương trình quay lại frame trước đó.
            </p>

            <div className="my-7 space-y-3">
              {[
                ["Frame 1", "backtrack(0)"],
                ["Frame 2", "backtrack(1)"],
                ["Frame 3", "backtrack(2)"],
                ["Return", "quay lại backtrack(1)"],
                ["Continue", "thử lựa chọn khác"],
              ].map(([title, value]) => (
                <div
                  key={title}
                  className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4"
                >
                  <span className="font-semibold text-slate-900">{title}</span>

                  <span className="font-mono text-sm text-slate-500">
                    {value}
                  </span>
                </div>
              ))}
            </div>

            <InfoBox type="important" title="Backtracking chính là quay lại">
              Từ "backtrack" có thể hiểu rất trực tiếp:
              <br />
              <br />
              đi sâu → thử → return → quay lại trạng thái cũ → thử hướng khác.
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Definition */}
          <section id="backtracking-definition" className="scroll-mt-24">
            <SectionTitle
              number="03"
              title="Backtracking là gì?"
              description="Backtracking biến một bài toán nhiều lựa chọn thành một cây quyết định."
            />

            <p className="text-sm leading-7 text-slate-600">
              Giả sử tại một trạng thái ta có 3 lựa chọn:
            </p>

            <div className="my-6 flex justify-center">
              <div className="flex gap-3">
                {["A", "B", "C"].map((value) => (
                  <div
                    key={value}
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-white font-mono font-bold"
                  >
                    {value}
                  </div>
                ))}
              </div>
            </div>

            <p className="text-sm leading-7 text-slate-600">Ta có thể:</p>

            <div className="my-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <h3 className="font-bold">Chọn A</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Đi xuống toàn bộ các lựa chọn phía sau A.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <h3 className="font-bold">Chọn B</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Quay lại rồi thử B.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <h3 className="font-bold">Chọn C</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Cuối cùng thử C.
                </p>
              </div>
            </div>

            <InfoBox type="important" title="Điểm cốt lõi">
              Không phải cứ dùng recursion là Backtracking.
              <br />
              <br />
              Backtracking phải có{" "}
              <strong>
                nhiều lựa chọn và quá trình quay lại để thử lựa chọn khác
              </strong>
              .
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Choice */}
          <section id="choice" className="scroll-mt-24">
            <SectionTitle
              number="04"
              title="Choice"
              description="Choice là lựa chọn mà chúng ta đang thử tại một trạng thái."
            />

            <p className="text-sm leading-7 text-slate-600">
              Với bài Subsets, tại mỗi phần tử chúng ta có hai lựa chọn:
            </p>

            <div className="my-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6">
                <div className="flex items-center gap-2 font-semibold text-emerald-900">
                  <Check size={18} />
                  Choose
                </div>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Đưa phần tử vào subset hiện tại.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <div className="flex items-center gap-2 font-semibold text-slate-900">
                  <ArrowRight size={18} />
                  Skip
                </div>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Không đưa phần tử vào subset hiện tại.
                </p>
              </div>
            </div>

            <p className="text-sm leading-7 text-slate-600">
              Đây chính là lý do bài Subsets có:
            </p>

            <div className="my-5 rounded-2xl bg-slate-950 p-5 text-center font-mono text-xl font-bold text-white">
              2 choices / element
            </div>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* State */}
          <section id="state" className="scroll-mt-24">
            <SectionTitle
              number="05"
              title="State"
              description="State là toàn bộ thông tin cần thiết để biết chúng ta đang ở đâu trong quá trình tìm kiếm."
            />

            <p className="text-sm leading-7 text-slate-600">
              Trong các bài Backtracking, state thường gồm:
            </p>

            <div className="my-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Index
                </p>

                <p className="mt-3 font-mono text-xl font-bold">i</p>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Đang xét phần tử nào.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Path
                </p>

                <p className="mt-3 font-mono text-xl font-bold">[]</p>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Lựa chọn hiện tại.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Result
                </p>

                <p className="mt-3 font-mono text-xl font-bold">ans</p>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Các lời giải hoàn chỉnh.
                </p>
              </div>
            </div>

            <InfoBox type="tip" title="Một cách nghĩ rất hữu ích">
              <strong>State</strong> trả lời câu hỏi:
              <br />
              <br />
              "Nếu dừng recursion ngay lúc này, chúng ta đang có lựa chọn gì?"
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Undo */}
          <section id="undo" className="scroll-mt-24">
            <SectionTitle
              number="06"
              title="Undo"
              description="Undo là phần biến một DFS bình thường thành Backtracking."
            />

            <p className="text-sm leading-7 text-slate-600">Giả sử:</p>

            <div className="my-5 rounded-2xl bg-slate-950 p-5 text-center font-mono text-lg text-white">
              path = [1, 2]
            </div>

            <p className="text-sm leading-7 text-slate-600">Chúng ta chọn 3:</p>

            <div className="my-5 rounded-2xl bg-slate-950 p-5 text-center font-mono text-lg text-white">
              path = [1, 2, 3]
            </div>

            <p className="text-sm leading-7 text-slate-600">
              Sau khi khám phá toàn bộ nhánh bắt đầu bằng 3, muốn thử một nhánh
              khác thì phải quay lại:
            </p>

            <div className="my-5 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-center font-mono text-lg font-bold text-amber-800">
              path = [1, 2]
            </div>

            <ChooseUndoDiagram />

            <InfoBox type="important" title="Nếu quên Undo">
              State của nhánh trước sẽ bị "dính" sang nhánh sau.
              <br />
              <br />
              Đây là một trong những lỗi quan trọng nhất khi viết Backtracking.
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* DFS vs Backtracking */}
          <section id="dfs-vs-backtracking" className="scroll-mt-24">
            <SectionTitle
              number="07"
              title="DFS và Backtracking khác nhau thế nào?"
              description="Hai khái niệm có liên quan rất chặt, nhưng không hoàn toàn giống nhau."
            />

            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
              <table className="w-full min-w-[760px] text-sm">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="border-b border-slate-200 px-5 py-4 text-left">
                      Đặc điểm
                    </th>

                    <th className="border-b border-slate-200 px-5 py-4 text-left">
                      DFS
                    </th>

                    <th className="border-b border-slate-200 px-5 py-4 text-left">
                      Backtracking
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {[
                    ["Đi sâu trước", "Có", "Có"],
                    ["Recursion", "Có thể", "Rất thường dùng"],
                    ["Nhiều lựa chọn", "Không bắt buộc", "Thường có"],
                    ["Undo state", "Không bắt buộc", "Rất quan trọng"],
                    ["Decision tree", "Có thể có", "Rất thường có"],
                  ].map(([feature, dfs, backtracking]) => (
                    <tr key={feature}>
                      <td className="border-b border-slate-100 px-5 py-4 font-semibold">
                        {feature}
                      </td>

                      <td className="border-b border-slate-100 px-5 py-4 text-slate-600">
                        {dfs}
                      </td>

                      <td className="border-b border-slate-100 px-5 py-4 text-slate-600">
                        {backtracking}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <InfoBox type="tip" title="Có thể nhớ như thế này">
              <strong>DFS</strong> = đi sâu.
              <br />
              <strong>Backtracking</strong> = đi sâu + thay đổi state + quay lại
              để thử lựa chọn khác.
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Template */}
          <section id="template" className="scroll-mt-24">
            <SectionTitle
              number="08"
              title="Template Backtracking"
              description="Đây là skeleton bạn nên tập viết từ trí nhớ."
            />

            <CodeBlock
              code={`void backtrack(State state) {
if (isComplete(state)) {
    saveAnswer(state);
    return;
}

for (each choice) {

    // Choose
    apply(choice);

    // Explore
    backtrack(nextState);

    // Undo
    undo(choice);
}


}`} label="Pseudocode"
            />

            <div className="my-6 grid gap-4 md:grid-cols-3">
              <StepCard number="01" title="Choose">
                Thay đổi state để chọn một khả năng.
              </StepCard>

              <StepCard number="02" title="Explore">
                Gọi recursion để khám phá khả năng đó.
              </StepCard>

              <StepCard number="03" title="Undo">
                Hoàn tác state để thử khả năng tiếp theo.
              </StepCard>
            </div>

            <InfoBox type="important" title="Đừng học thuộc variable">
              Tên biến có thể là <code>path</code>, <code>current</code>,{" "}
              <code>state</code>, <code>board</code>...
              <br />
              <br />
              Thứ cần nhớ là thứ tự:
              <strong> Choose → Explore → Undo</strong>.
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Recognition Basic */}
          <section id="recognize-basic" className="scroll-mt-24">
            <SectionTitle
              number="09"
              title="Khi nào dùng Backtracking?"
              description="Nhận diện đúng pattern quan trọng hơn việc thuộc template."
            />

            <div className="grid gap-4 md:grid-cols-2">
              {[
                [
                  "All possible",
                  "Đề yêu cầu tất cả các khả năng / tất cả solution.",
                ],
                ["Generate", "Tạo permutations, combinations, subsets."],
                ["Choose", "Chọn hoặc không chọn từng phần tử."],
                ["Grid / Board", "Tìm đường bằng DFS và phải undo trạng thái."],
                [
                  "Constraint",
                  "Chỉ tiếp tục nếu lựa chọn hiện tại vẫn hợp lệ.",
                ],
                [
                  "Search all",
                  "Có nhiều nhánh cần thử thay vì một đường duy nhất.",
                ],
              ].map(([title, description]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-slate-200 bg-white p-5"
                >
                  <div className="flex items-center gap-3">
                    <Search size={18} className="text-slate-500" />

                    <h3 className="font-semibold">{title}</h3>
                  </div>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {description}
                  </p>
                </div>
              ))}
            </div>

            <InfoBox type="tip" title="Keyword rất mạnh">
              Khi đề có các cụm như:
              <br />
              <br />
              <strong>
                all possible · all combinations · all subsets · generate ·
                enumerate · every valid solution
              </strong>
              <br />
              <br />
              hãy nghĩ tới Backtracking.
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Complexity Basic */}
          <section id="complexity-basic" className="scroll-mt-24">
            <SectionTitle
              number="10"
              title="Complexity của Backtracking"
              description="Backtracking thường có số lượng trạng thái rất lớn."
            />

            <p className="text-sm leading-7 text-slate-600">
              Nếu mỗi bước có 2 lựa chọn và có n bước, số trạng thái có thể lên
              tới:
            </p>

            <div className="my-6 rounded-2xl bg-slate-950 p-6 text-center font-mono text-2xl font-bold text-white">
              2ⁿ
            </div>

            <p className="text-sm leading-7 text-slate-600">
              Nếu mỗi bước có k lựa chọn:
            </p>

            <div className="my-5 rounded-2xl bg-slate-950 p-5 text-center font-mono text-xl font-bold text-white">
              kⁿ
            </div>

            <InfoBox type="important" title="Vì sao Backtracking thường chậm?">
              Vì nó thực sự phải khám phá nhiều khả năng.
              <br />
              <br />
              Tuy nhiên chúng ta có thể dùng <strong>pruning</strong> để cắt
              những nhánh chắc chắn không thể tạo ra đáp án.
            </InfoBox>

            <div className="my-7 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <div className="font-mono text-2xl font-bold">Search Space</div>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Toàn bộ khả năng có thể thử.
                </p>
              </div>

              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                <div className="font-mono text-2xl font-bold text-emerald-800">
                  Pruning
                </div>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Cắt những nhánh không còn khả năng tạo solution.
                </p>
              </div>
            </div>
          </section>

          <div className="my-16 h-px bg-slate-200" />

    </>
  );
}
