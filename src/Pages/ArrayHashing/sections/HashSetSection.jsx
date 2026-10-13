import { InfoBox, SectionTitle } from "../components/ArrayHashingUI";

export function HashSetSection() {
  return (
<section id="hash-set" className="scroll-mt-24">
            <SectionTitle
              number="03"
              title="Hash Set"
              description="Hash Set dùng khi điều chúng ta quan tâm chỉ là một giá trị có tồn tại hay không."
            />

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Array
                </p>

                <p className="mt-4 font-mono text-lg">[1, 2, 2, 3, 3]</p>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Có thể chứa dữ liệu trùng nhau.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Hash Set
                </p>

                <p className="mt-4 font-mono text-lg">{"{1, 2, 3}"}</p>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Đại diện cho một tập hợp các giá trị duy nhất.
                </p>
              </div>
            </div>

            <h3 className="mt-8 text-xl font-bold">Ba thao tác quan trọng</h3>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {[
                ["Insert", "Thêm giá trị"],
                ["Contains", "Kiểm tra tồn tại"],
                ["Delete", "Xóa giá trị"],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-slate-200 bg-white p-5"
                >
                  <p className="font-mono font-bold text-slate-900">{title}</p>

                  <p className="mt-2 text-sm text-slate-500">{text}</p>
                </div>
              ))}
            </div>

            <InfoBox type="tip" title="Keyword để nhận diện Hash Set">
              Khi đề bài hỏi:
              <br />
              <strong>“Đã xuất hiện chưa?”</strong>
              <br />
              <strong>“Có tồn tại không?”</strong>
              <br />
              <strong>“Có phần tử bị trùng không?”</strong>
              <br />
              hãy nghĩ ngay tới Set.
            </InfoBox>
          </section>
  );
}
