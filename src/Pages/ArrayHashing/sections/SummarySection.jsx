import { ArrowRight, Hash, Search, Target } from "lucide-react";
import { InfoBox, SectionTitle } from "../components/ArrayHashingUI";
import { Link } from "react-router-dom";

export function SummarySection() {
  return (
    <section id="summary" className="scroll-mt-24">
      <SectionTitle
        number="08"
        title="Tổng kết"
        description="Ba bài này thực chất đang dạy ba cách sử dụng Hashing khác nhau."
      />

      <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
        <table className="w-full min-w-[760px] text-sm">
          <thead className="bg-slate-50">
            <tr>
              <th className="border-b border-slate-200 px-5 py-4 text-left">
                Bài toán
              </th>
              <th className="border-b border-slate-200 px-5 py-4 text-left">
                Câu hỏi
              </th>
              <th className="border-b border-slate-200 px-5 py-4 text-left">
                Pattern
              </th>
              <th className="border-b border-slate-200 px-5 py-4 text-left">
                Complexity
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="border-b border-slate-100 px-5 py-4 font-semibold">
                Contains Duplicate
              </td>

              <td className="border-b border-slate-100 px-5 py-4 text-slate-600">
                Đã thấy giá trị này chưa?
              </td>

              <td className="border-b border-slate-100 px-5 py-4 font-mono">
                Hash Set
              </td>

              <td className="border-b border-slate-100 px-5 py-4 font-mono">
                O(n)
              </td>
            </tr>

            <tr>
              <td className="border-b border-slate-100 px-5 py-4 font-semibold">
                Valid Anagram
              </td>

              <td className="border-b border-slate-100 px-5 py-4 text-slate-600">
                Mỗi ký tự xuất hiện bao nhiêu lần?
              </td>

              <td className="border-b border-slate-100 px-5 py-4 font-mono">
                Frequency Count
              </td>

              <td className="border-b border-slate-100 px-5 py-4 font-mono">
                O(n + m)
              </td>
            </tr>

            <tr>
              <td className="px-5 py-4 font-semibold">Two Sum</td>

              <td className="px-5 py-4 text-slate-600">
                Phần tử còn thiếu là gì?
              </td>

              <td className="px-5 py-4 font-mono">Hash Map</td>

              <td className="px-5 py-4 font-mono">O(n)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="mt-10 text-xl font-bold">
        3 câu hỏi nên tự hỏi khi gặp bài Array
      </h3>

      <div className="mt-5 grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
            <Search size={19} />
          </div>

          <p className="mt-4 font-semibold">Đã thấy chưa?</p>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Nghĩ tới <strong>Hash Set</strong>.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
            <Hash size={19} />
          </div>

          <p className="mt-4 font-semibold">Xuất hiện bao nhiêu lần?</p>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Nghĩ tới <strong>Frequency Count</strong>.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
            <Target size={19} />
          </div>

          <p className="mt-4 font-semibold">Cần tìm giá trị còn thiếu?</p>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Nghĩ tới <strong>Hash Map</strong>.
          </p>
        </div>
      </div>

      <InfoBox type="important" title="Điều cần nhớ nhất">
        Người mới thường cố tìm ra "thuật toán" ngay lập tức. Nhưng với những
        bài như ba bài trên, bước quan trọng hơn là nhận diện{" "}
        <strong>pattern của dữ liệu</strong>.
        <br />
        <br />
        <strong>Contains Duplicate</strong> → cần biết đã gặp chưa.
        <br />
        <strong>Valid Anagram</strong> → cần biết frequency.
        <br />
        <strong>Two Sum</strong> → cần biết giá trị và vị trí của thứ đã gặp.
        <br />
        <br />
        Một khi nhận diện được ba pattern này, rất nhiều bài Array & Hashing
        khác sẽ trở nên dễ hiểu hơn.
      </InfoBox>

      <div className="mt-10 flex flex-col gap-3 rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Next topic
          </p>

          <h3 className="mt-2 text-xl font-bold">Stack</h3>

          <p className="mt-2 text-sm text-slate-400">
            Tiếp tục với cấu trúc dữ liệu LIFO.
          </p>
        </div>

        <Link
          to="/algorithms/stack"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
        >
          Học Stack
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
