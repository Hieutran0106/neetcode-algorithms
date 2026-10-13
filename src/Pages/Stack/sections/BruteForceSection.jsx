import { CodeBlock, SectionTitle, InfoBox } from "../components/StackUI";
import { validParenthesesSimpleCode } from "../data/stackData";

export default function BruteForceSection() {
  return (
    <section id="brute-force" className="scroll-mt-24">
      <SectionTitle
        number="08"
        title="Cách đơn giản nhất nhưng chưa tốt"
        description="Trước khi tìm lời giải tối ưu, hãy xem một cách suy nghĩ tự nhiên."
      />

      <p className="text-sm leading-7 text-slate-600">Nếu nhìn vào:</p>

      <div className="my-5 rounded-2xl bg-white border border-slate-200 p-5 text-center font-mono text-xl font-bold">
        ([{"{"}
        {"}"}])
      </div>

      <p className="text-sm leading-7 text-slate-600">Chúng ta có thể nghĩ:</p>

      <div className="my-5 space-y-3">
        {[
          "Tìm những cặp () rồi xóa chúng.",
          "Tìm những cặp [] rồi xóa chúng.",
          "Tìm những cặp {} rồi xóa chúng.",
          "Lặp lại cho tới khi không còn cặp nào.",
        ].map((item, index) => (
          <div
            key={item}
            className="flex gap-4 rounded-xl border border-slate-200 bg-white p-4"
          >
            <span className="font-mono font-bold text-slate-400">
              {index + 1}
            </span>

            <span className="text-sm text-slate-600">{item}</span>
          </div>
        ))}
      </div>

      <p className="text-sm leading-7 text-slate-600">
        Ý tưởng này có thể hoạt động, nhưng việc xóa và tìm kiếm lại nhiều lần
        khiến code phức tạp và có thể dẫn tới O(n²).
      </p>

      <CodeBlock code={validParenthesesSimpleCode} />

      <InfoBox title="Câu hỏi quan trọng">
        Có cách nào để khi gặp một ngoặc đóng, chúng ta biết ngay{" "}
        <strong>ngoặc mở gần nhất chưa được ghép</strong> là gì không?
      </InfoBox>
    </section>
  );
}
