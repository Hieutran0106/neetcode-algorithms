import { CodeBlock, Complexity, InfoBox, ProblemHeader } from "../components/ArrayHashingUI";
import { containsDuplicateBruteForceCode, containsDuplicateHashCode, containsDuplicateSortCode } from "../data/arrayHashingData";

export function ContainsDuplicateSection() {
  return (
<section id="contains-duplicate" className="scroll-mt-24">
            <ProblemHeader
              number="01"
              title="Contains Duplicate"
              difficulty="Easy"
              description="Cho một mảng số nguyên, hãy trả về true nếu có bất kỳ giá trị nào xuất hiện nhiều hơn một lần. Nếu tất cả giá trị đều khác nhau, trả về false."
            />

            <h3 className="text-xl font-bold">Hiểu đề bài</h3>

            <div className="my-5 rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-sm text-slate-500">Input</p>

              <p className="mt-2 font-mono text-lg">[1, 2, 3, 3]</p>

              <p className="mt-5 text-sm text-slate-500">Output</p>

              <p className="mt-2 font-mono text-lg font-bold text-emerald-600">
                true
              </p>

              <p className="mt-4 text-sm leading-6 text-slate-600">
                Vì số <strong>3</strong> xuất hiện hai lần.
              </p>
            </div>

            <h3 className="mt-8 text-xl font-bold">Cách 1 — Brute Force</h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Ý tưởng đầu tiên rất tự nhiên:
              <strong> lấy từng cặp phần tử và so sánh.</strong>
            </p>

            <CodeBlock code={containsDuplicateBruteForceCode} />

            <p className="text-sm leading-7 text-slate-600">
              Với 5 phần tử, chúng ta kiểm tra nhiều cặp. Với 100.000 phần tử,
              số lần so sánh tăng rất nhanh.
            </p>

            <Complexity
              time="O(n²)"
              space="O(1)"
              timeDescription="Hai vòng lặp lồng nhau."
              spaceDescription="Không dùng cấu trúc dữ liệu phụ."
            />

            <InfoBox title="Vấn đề nằm ở đâu?">
              Chúng ta đang liên tục hỏi một câu giống nhau:
              <strong> “Phần tử này đã xuất hiện trước đó chưa?”</strong>
              <br />
              <br />
              Nhưng thay vì nhớ những gì đã thấy, brute force lại đi tìm lại từ
              đầu.
            </InfoBox>

            <h3 className="mt-8 text-xl font-bold">Cách 2 — Sorting</h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Nếu sort mảng:
            </p>

            <div className="my-5 rounded-2xl bg-white border border-slate-200 p-5 font-mono text-sm">
              [1, 3, 3, 5, 8]
            </div>

            <p className="text-sm leading-7 text-slate-600">
              Các phần tử trùng nhau sẽ đứng cạnh nhau. Vì vậy chỉ cần kiểm tra
              phần tử hiện tại với phần tử trước đó.
            </p>

            <CodeBlock code={containsDuplicateSortCode} />

            <Complexity
              time="O(n log n)"
              space="O(1)*"
              timeDescription="Phần lớn chi phí đến từ sorting."
              spaceDescription="Phụ thuộc vào implementation của qsort."
            />

            <h3 className="mt-8 text-xl font-bold">Cách 3 — Hash Set</h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Đây là cách chúng ta thực sự muốn học từ bài này.
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              Duyệt từng số:
            </p>

            <div className="my-5 space-y-3">
              {[
                ["1", "Set chưa có 1", "Thêm 1"],
                ["2", "Set chưa có 2", "Thêm 2"],
                ["3", "Set chưa có 3", "Thêm 3"],
                ["3", "Set đã có 3", "Duplicate → true"],
              ].map(([number, action, result], index) => (
                <div
                  key={`${number}-${index}`}
                  className="grid gap-3 rounded-xl border border-slate-200 bg-white p-4 sm:grid-cols-[60px_1fr_1fr]"
                >
                  <div className="font-mono font-bold">{number}</div>

                  <div className="text-sm text-slate-600">{action}</div>

                  <div className="text-sm font-semibold text-slate-900">
                    {result}
                  </div>
                </div>
              ))}
            </div>

            <CodeBlock code={containsDuplicateHashCode} />

            <Complexity
              time="O(n)"
              space="O(n)"
              timeDescription="Mỗi phần tử được xử lý một lần, lookup trung bình gần O(1)."
              spaceDescription="Có thể phải lưu tới n phần tử trong Set."
            />

            <InfoBox type="tip" title="Pattern cần nhớ">
              <strong>“Seen before?” → Hash Set.</strong>
              <br />
              <br />
              Đây là pattern đầu tiên bạn nên ghi nhớ trong Array & Hashing.
            </InfoBox>
          </section>
  );
}
