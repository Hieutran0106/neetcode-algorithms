import { CodeBlock, SectionTitle, InfoBox, Complexity, StepCard } from "../components/BacktrackingUI";
import { fibonacciTraceCode, fibonacciRecursiveExamples, fibonacciMemoExamples, fibonacciIterativeExamples } from "../data/backtrackingData";

export default function FibonacciSections() {
  return (
    <>
          <section id="fibonacci-problem" className="scroll-mt-24">
            <SectionTitle
              number="11"
              title="Fibonacci"
              description="Fibonacci không phải bài Backtracking, nhưng là bài rất tốt để xây nền recursion trước khi bước vào Backtracking."
            />

            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Problem
              </p>

              <h3 className="mt-3 text-2xl font-bold tracking-tight">
                Fibonacci Number
              </h3>

              <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
                Cho số nguyên <code>n</code>, trả về số Fibonacci thứ n.
              </p>

              <div className="mt-6 rounded-2xl bg-slate-50 p-5 font-mono text-sm leading-8">
                F(0) = 0
                <br />
                F(1) = 1
                <br />
                F(n) = F(n - 1) + F(n - 2)
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {[0, 1, 1, 2, 3, 5, 8, 13].map((value, index) => (
                  <div
                    key={`${value}-${index}`}
                    className="rounded-xl border border-slate-200 bg-white px-4 py-3"
                  >
                    <div className="text-xs text-slate-400">F({index})</div>

                    <div className="mt-1 font-mono text-lg font-bold">
                      {value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <InfoBox type="tip" title="Tại sao học Fibonacci ở đây?">
              Fibonacci giúp bạn hiểu rất rõ{" "}
              <strong>Base Case → Recursive Call → Return</strong>.
              <br />
              <br />
              Sau khi hiểu recursion tree, việc chuyển sang Decision Tree của
              Backtracking sẽ tự nhiên hơn.
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Fibonacci Thinking */}
          <section id="fibonacci-thinking" className="scroll-mt-24">
            <SectionTitle
              number="12"
              title="Tư duy Fibonacci"
              description="Đừng bắt đầu bằng code. Hãy viết công thức trước."
            />

            <p className="text-sm leading-7 text-slate-600">Với n lớn hơn 1:</p>

            <div className="my-5 rounded-2xl bg-slate-950 p-6 text-center font-mono text-xl font-bold text-white">
              fib(n) = fib(n - 1) + fib(n - 2)
            </div>

            <div className="space-y-4">
              <StepCard number="01" title="Base Case">
                Nếu <code>n</code> là 0 hoặc 1, trả trực tiếp <code>n</code>.
              </StepCard>

              <StepCard number="02" title="Chia bài toán">
                Fibonacci n được chia thành hai bài nhỏ hơn.
              </StepCard>

              <StepCard number="03" title="Recursive Call">
                Tính <code>fib(n - 1)</code> và <code>fib(n - 2)</code>.
              </StepCard>

              <StepCard number="04" title="Combine">
                Cộng hai kết quả.
              </StepCard>
            </div>

            <InfoBox type="important" title="Đây vẫn chưa phải Backtracking">
              Fibonacci không có thao tác kiểu "chọn một state, undo state rồi
              thử lựa chọn khác".
              <br />
              <br />
              Đây chủ yếu là <strong>Recursion / Dynamic Programming</strong>.
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Fibonacci Tree */}
          <section id="fibonacci-tree" className="scroll-mt-24">
            <SectionTitle
              number="13"
              title="Recursion Tree của Fibonacci"
              description="Đây là lúc thấy rõ một lời gọi recursion có thể sinh ra nhiều lời gọi con."
            />

            <CodeBlock code={fibonacciTraceCode} label="Recursion Tree" />

            <p className="text-sm leading-7 text-slate-600">
              Với <code>fib(5)</code>, nhiều lời gọi bị lặp lại:
            </p>

            <div className="my-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="font-mono font-bold">fib(3)</p>

                <p className="mt-2 text-sm text-slate-500">
                  Xuất hiện nhiều lần.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="font-mono font-bold">fib(2)</p>

                <p className="mt-2 text-sm text-slate-500">Cũng bị tính lại.</p>
              </div>

              <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
                <p className="font-mono font-bold text-red-700">
                  Repeated Work
                </p>

                <p className="mt-2 text-sm text-slate-600">
                  Đây là nguyên nhân khiến cách ngây thơ rất chậm.
                </p>
              </div>
            </div>

            <InfoBox type="tip" title="Liên hệ với Backtracking">
              Fibonacci cho ta thấy một node trong recursion có thể sinh ra
              nhiều nhánh con. Backtracking cũng xây một cây lựa chọn, nhưng
              thêm state và Undo.
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Fibonacci Dry Run */}
          <section id="fibonacci-dry-run" className="scroll-mt-24">
            <SectionTitle
              number="14"
              title="Dry Run Fibonacci"
              description="Tính F(5) từ dưới lên trong quá trình recursion quay trở lại."
            />

            <div className="space-y-4">
              <StepCard number="01" title="fib(5)">
                Chưa biết → phải tính fib(4) + fib(3).
              </StepCard>

              <StepCard number="02" title="fib(2)">
                Tiếp tục chia thành fib(1) + fib(0).
              </StepCard>

              <StepCard number="03" title="Base Case">
                fib(1) = 1 và fib(0) = 0.
              </StepCard>

              <StepCard number="04" title="Return">
                fib(2) = 1 + 0 = 1.
              </StepCard>

              <StepCard number="05" title="Quay trở lại">
                Những giá trị được return sẽ được dùng để tính Node cha.
              </StepCard>
            </div>

            <div className="my-7 rounded-3xl bg-slate-950 p-6 font-mono text-sm leading-8 text-white">
              fib(0) → 0
              <br />
              fib(1) → 1
              <br />
              fib(2) → 1
              <br />
              fib(3) → 2
              <br />
              fib(4) → 3
              <br />
              fib(5) → 5
            </div>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Fibonacci Code */}
          <section id="fibonacci-code" className="scroll-mt-24">
            <SectionTitle
              number="15"
              title="Code Fibonacci"
              description="Implementation recursion cơ bản."
            />

            <CodeBlock examples={fibonacciRecursiveExamples} />

            <Complexity
              time="O(2ⁿ)"
              space="O(n)"
              timeDescription="Nhiều subtree bị tính lại."
              spaceDescription="Call stack sâu tối đa n."
            />

            <InfoBox type="important" title="Code đúng nhưng chưa tốt">
              Đây là implementation rất tốt để học recursion, nhưng không phải
              implementation tối ưu về performance.
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Fibonacci Optimization */}
          <section id="fibonacci-optimization" className="scroll-mt-24">
            <SectionTitle
              number="16"
              title="Tối ưu Fibonacci"
              description="Fibonacci cho thấy vì sao chúng ta cần lưu kết quả đã tính."
            />

            <h3 className="text-xl font-bold">Memoization</h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Nếu đã tính fib(5) rồi thì không cần tính lại fib(5) từ đầu. Chúng
              ta lưu kết quả vào array.
            </p>

            <CodeBlock examples={fibonacciMemoExamples} />

            <Complexity
              time="O(n)"
              space="O(n)"
              timeDescription="Mỗi fib(i) được tính tối đa một lần."
              spaceDescription="Memo array + recursion stack."
            />

            <h3 className="mt-8 text-xl font-bold">Iterative</h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Nếu chỉ cần số Fibonacci, ta thậm chí không cần recursion:
            </p>

            <CodeBlock examples={fibonacciIterativeExamples} />

            <Complexity
              time="O(n)"
              space="O(1)"
              timeDescription="Duyệt từ 2 tới n."
              spaceDescription="Chỉ giữ hai giá trị trước."
            />

            <InfoBox type="tip" title="Bài học từ Fibonacci">
              Recursion giúp mô tả bài toán tự nhiên.
              <br />
              <br />
              Nhưng sau đó phải đặt câu hỏi:
              <strong> "Có công việc nào đang bị lặp lại không?"</strong>
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

    </>
  );
}
