import { CodeBlock, Complexity, InfoBox, ProblemHeader } from "../components/ArrayHashingUI";
import { validAnagramBruteForceCode, validAnagramCode } from "../data/arrayHashingData";

export function ValidAnagramSection() {
  return (
<section id="valid-anagram" className="scroll-mt-24">
            <ProblemHeader
              number="02"
              title="Valid Anagram"
              difficulty="Easy"
              description="Cho hai chuỗi s và t. Kiểm tra xem chúng có phải là Anagram của nhau hay không — tức là chứa cùng các ký tự với cùng số lần xuất hiện, chỉ khác thứ tự."
            />

            <h3 className="text-xl font-bold">Anagram là gì?</h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">Ví dụ:</p>

            <div className="my-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  String S
                </p>

                <p className="mt-3 font-mono text-xl font-bold">racecar</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  String T
                </p>

                <p className="mt-3 font-mono text-xl font-bold">carrace</p>
              </div>
            </div>

            <p className="text-sm leading-7 text-slate-600">
              Hai chuỗi này có cùng các ký tự với cùng frequency nên kết quả là
              true.
            </p>

            <h3 className="mt-8 text-xl font-bold">
              Điều gì thực sự quan trọng?
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Thứ tự không quan trọng.
              <br />
              Điều quan trọng là{" "}
              <strong>tần suất xuất hiện của từng ký tự</strong>.
            </p>

            <div className="my-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                ["a", "2"],
                ["c", "2"],
                ["e", "1"],
                ["r", "2"],
              ].map(([char, count]) => (
                <div
                  key={char}
                  className="rounded-xl border border-slate-200 bg-white p-4 text-center"
                >
                  <p className="font-mono text-lg font-bold">{char}</p>

                  <p className="mt-1 text-xs text-slate-400">count = {count}</p>
                </div>
              ))}
            </div>

            <h3 className="mt-8 text-xl font-bold">Cách 1 — Sorting</h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Sort cả hai chuỗi rồi so sánh.
            </p>

            <CodeBlock code={validAnagramBruteForceCode} />

            <p className="text-sm leading-7 text-slate-600">Ví dụ:</p>

            <div className="my-5 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl bg-white border border-slate-200 p-4 font-mono text-sm">
                racecar
                <br />
                ↓
                <br />
                aaccerr
              </div>

              <div className="rounded-xl bg-white border border-slate-200 p-4 font-mono text-sm">
                carrace
                <br />
                ↓
                <br />
                aaccerr
              </div>
            </div>

            <p className="text-sm leading-7 text-slate-600">
              Hai chuỗi giống nhau sau khi sort → Anagram.
            </p>

            <Complexity
              time="O(n log n)"
              space="O(n)"
              timeDescription="Sorting mỗi chuỗi."
              spaceDescription="Tùy implementation của sorting."
            />

            <h3 className="mt-8 text-xl font-bold">Cách 2 — Frequency Count</h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Đề bài quy định s và t chỉ chứa{" "}
              <strong>lowercase English letters</strong>. Vì chỉ có 26 ký tự,
              chúng ta không cần một Hash Map phức tạp.
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              Chỉ cần một Array có 26 phần tử:
            </p>

            <div className="my-6 overflow-x-auto">
              <div className="flex min-w-[700px] gap-2">
                {Array.from({ length: 26 }, (_, index) => (
                  <div
                    key={index}
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white font-mono text-xs"
                  >
                    {String.fromCharCode(97 + index)}
                  </div>
                ))}
              </div>
            </div>

            <p className="text-sm leading-7 text-slate-600">
              Với ký tự <code>a</code>:
            </p>

            <div className="my-4 rounded-xl border border-slate-200 bg-white p-4 font-mono text-sm">
              'a' - 'a' = 0
            </div>

            <p className="text-sm leading-7 text-slate-600">
              Với <code>b</code>:
            </p>

            <div className="my-4 rounded-xl border border-slate-200 bg-white p-4 font-mono text-sm">
              'b' - 'a' = 1
            </div>

            <p className="text-sm leading-7 text-slate-600">
              Và cứ như vậy cho đến <code>z</code>.
            </p>

            <h3 className="mt-8 text-xl font-bold">Tăng và giảm frequency</h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Thay vì tạo hai Hash Map, chúng ta có thể dùng một array duy nhất:
            </p>

            <div className="my-5 rounded-2xl bg-slate-950 p-6 font-mono text-sm leading-8 text-slate-300">
              <span className="text-emerald-300">s[i]</span>
              <span> → </span>
              <span className="text-sky-300">count++</span>
              <br />
              <span className="text-emerald-300">t[i]</span>
              <span> → </span>
              <span className="text-sky-300">count--</span>
            </div>

            <p className="text-sm leading-7 text-slate-600">
              Nếu hai chuỗi là Anagram, tất cả các count cuối cùng phải bằng
              <code> 0</code>.
            </p>

            <CodeBlock code={validAnagramCode} />

            <Complexity
              time="O(n + m)"
              space="O(1)"
              timeDescription="Duyệt hai chuỗi rồi duyệt 26 ký tự."
              spaceDescription="Array luôn có kích thước cố định 26."
            />

            <InfoBox type="tip" title="Pattern cần nhớ">
              <strong>“Cần biết mỗi giá trị xuất hiện bao nhiêu lần?”</strong>
              <br />
              → Frequency Counting.
              <br />
              <br />
              Nếu miền giá trị nhỏ và cố định, Array thường đơn giản hơn Hash
              Map.
            </InfoBox>
          </section>
  );
}
