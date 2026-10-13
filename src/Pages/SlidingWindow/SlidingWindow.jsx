import React from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronRight,
  Expand,
  GitBranch,
  Lightbulb,
  List,
  MoveHorizontal,
  Search,
  X,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import { toc } from "./data/toc.js";
import {
  basicWindowCode,
  fixedWindowCode,
  variableWindowCode,
  stockBruteForceCode,
  stockTwoPointerCode,
  stockMinPriceCode,
} from "./data/slidingWindowExamples.js";
import {
  CodeBlock,
  SectionTitle,
  InfoBox,
  Complexity,
  StepCard,
  PriceCell,
} from "./components/SlidingWindowUI.jsx";
import { Code2 } from "lucide-react";
export default function SlidingWindow() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-900">
      {/* Hero */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-4xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs font-bold tracking-wider text-slate-600">
              <MoveHorizontal size={14} />
              NEETCODE · SLIDING WINDOW
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Sliding Window
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
              Sliding Window là một kỹ thuật giúp chúng ta xử lý một đoạn liên
              tiếp của Array hoặc String mà không cần tính toán lại toàn bộ đoạn
              đó ở mỗi bước. Ý tưởng cốt lõi là duy trì một Window và di chuyển
              nó qua dữ liệu.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-600">
                <MoveHorizontal size={16} /> Window
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-600">
                <GitBranch size={16} /> Left / Right
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-600">
                <Zap size={16} /> O(n)
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-600">
                <Code2 size={16} />C
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:px-8">
        {/* Sidebar */}
        <aside className="hidden lg:block">
          <div className="sticky top-24">
            <div className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400">
              <List size={14} /> Nội dung
            </div>
            <nav className="max-h-[calc(100vh-130px)] space-y-1 overflow-y-auto pr-3">
              {toc.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="group flex items-center gap-2 rounded-lg px-3 py-2.5 text-xs leading-5 text-slate-500 transition hover:bg-white hover:text-slate-900"
                >
                  <ChevronRight
                    size={12}
                    className="shrink-0 opacity-0 transition group-hover:opacity-100"
                  />
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        <main className="min-w-0">
          {/* Introduction */}
          <section id="introduction" className="scroll-mt-24">
            <SectionTitle
              number="00"
              title="Sliding Window là gì?"
              description="Đây là một kỹ thuật, không phải một cấu trúc dữ liệu."
            />
            <p className="text-sm leading-7 text-slate-600 sm:text-base">
              Hãy tưởng tượng bạn đang nhìn qua một chiếc cửa sổ trên một dãy dữ
              liệu.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              Window chỉ nhìn thấy một đoạn dữ liệu tại một thời điểm. Sau đó
              Window trượt sang phải để nhìn đoạn tiếp theo.
            </p>
            <div className="my-8 overflow-x-auto rounded-3xl border border-slate-200 bg-white p-6">
              <div className="min-w-[700px]">
                <div className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-400">
                  Array
                </div>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((number) => (
                    <div
                      key={number}
                      className="flex-1 rounded-xl border border-slate-200 bg-slate-50 p-4 text-center font-mono font-bold"
                    >
                      {number}
                    </div>
                  ))}
                </div>
                <div className="mt-3 rounded-xl border border-slate-900 bg-slate-900/5 p-3">
                  <div className="flex w-[37.5%] gap-2">
                    {[1, 2, 3].map((number) => (
                      <div
                        key={number}
                        className="flex-1 rounded-lg bg-slate-900 p-2 text-center font-mono text-xs font-bold text-white"
                      >
                        {number}
                      </div>
                    ))}
                  </div>
                  <p className="mt-2 text-xs font-semibold text-slate-500">
                    Window hiện tại
                  </p>
                </div>
              </div>
            </div>
            <InfoBox type="important" title="Định nghĩa đơn giản nhất">
              <strong>
                Sliding Window là kỹ thuật duy trì một đoạn liên tiếp của dữ
                liệu và di chuyển đoạn đó trong quá trình xử lý.
              </strong>
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Window */}
          <section id="window" className="scroll-mt-24">
            <SectionTitle
              number="01"
              title="Window là gì?"
              description="Trước khi trượt, hãy hiểu chính xác Window đang đại diện cho cái gì."
            />
            <p className="text-sm leading-7 text-slate-600 sm:text-base">
              Window đơn giản là một đoạn liên tiếp trong Array hoặc String.
            </p>
            <div className="my-6 overflow-x-auto rounded-2xl border border-slate-200 bg-white p-5">
              <div className="min-w-[650px]">
                <div className="flex gap-2">
                  {[10, 20, 30, 40, 50, 60, 70].map((number) => (
                    <div
                      key={number}
                      className="flex-1 rounded-xl border border-slate-200 bg-slate-50 p-4 text-center font-mono font-bold"
                    >
                      {number}
                    </div>
                  ))}
                </div>
                <div className="mt-3 flex gap-2">
                  <div className="w-[42.85%] rounded-xl border-2 border-slate-900 bg-slate-900/5 p-2">
                    <div className="flex gap-2">
                      {[10, 20, 30].map((number) => (
                        <div
                          key={number}
                          className="flex-1 rounded-lg bg-slate-900 p-2 text-center font-mono text-xs font-bold text-white"
                        >
                          {number}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-sm leading-7 text-slate-600">Window ở đây là:</p>
            <div className="my-5 rounded-2xl bg-slate-950 p-5 text-center font-mono text-lg text-white">
              [10, 20, 30]
            </div>
            <p className="text-sm leading-7 text-slate-600">
              Sau khi trượt một bước:
            </p>
            <div className="my-5 rounded-2xl border border-slate-200 bg-white p-5 text-center font-mono text-lg font-bold">
              [20, 30, 40]
            </div>
            <p className="text-sm leading-7 text-slate-600">
              Chú ý rằng phần lớn dữ liệu được giữ lại. Chỉ có:
            </p>
            <div className="my-5 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
                <p className="font-mono font-bold text-red-700">10</p>
                <p className="mt-2 text-sm text-slate-600">
                  Đi ra khỏi Window.
                </p>
              </div>
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                <p className="font-mono font-bold text-emerald-700">40</p>
                <p className="mt-2 text-sm text-slate-600">Đi vào Window.</p>
              </div>
            </div>
            <InfoBox type="tip" title="Đây là lý do Sliding Window nhanh">
              Thay vì bỏ Window cũ và tính lại từ đầu, chúng ta thường chỉ cần
              <strong> loại phần tử bên trái</strong> và{" "}
              <strong>thêm phần tử bên phải</strong>.
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Two boundaries */}
          <section id="two-boundaries" className="scroll-mt-24">
            <SectionTitle
              number="02"
              title="Left và Right"
              description="Sliding Window thường dùng hai biến để xác định hai biên của Window."
            />
            <div className="my-7 overflow-x-auto">
              <div className="flex min-w-[700px] gap-2">
                {[1, 2, 3, 4, 5, 6, 7].map((number, index) => (
                  <div key={number} className="relative flex-1">
                    <div
                      className={`rounded-xl border p-4 text-center font-mono font-bold ${
                        index >= 1 && index <= 4
                          ? "border-slate-900 bg-slate-900 text-white"
                          : "border-slate-200 bg-white"
                      }`}
                    >
                      {number}
                    </div>
                    <div className="mt-2 text-center text-[10px] font-bold">
                      {index === 1 && (
                        <span className="text-sky-600">LEFT</span>
                      )}
                      {index === 4 && (
                        <span className="text-violet-600">RIGHT</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-sm leading-7 text-slate-600">
              Vì vậy Window được xác định bởi:
            </p>
            <div className="my-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-sky-200 bg-sky-50 p-5 text-center">
                <p className="font-mono text-lg font-bold text-sky-800">left</p>
                <p className="mt-2 text-sm text-slate-600">Biên trái.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center">
                <p className="font-mono text-lg font-bold text-slate-800">
                  Window
                </p>
                <p className="mt-2 text-sm text-slate-600">Đoạn đang xử lý.</p>
              </div>
              <div className="rounded-2xl border border-violet-200 bg-violet-50 p-5 text-center">
                <p className="font-mono text-lg font-bold text-violet-800">
                  right
                </p>
                <p className="mt-2 text-sm text-slate-600">Biên phải.</p>
              </div>
            </div>
            <CodeBlock code={basicWindowCode} />
            <InfoBox type="important" title="left và right không phải mục tiêu">
              left và right chỉ là hai biến giúp chúng ta quản lý Window.
              <br />
              <br />
              Điều quan trọng là hiểu:
              <strong>Window [left ... right] đang đại diện cho cái gì?</strong>
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Fixed Window */}
          <section id="fixed-window" className="scroll-mt-24">
            <SectionTitle
              number="03"
              title="Fixed-Size Window"
              description="Window có kích thước cố định."
            />
            <p className="text-sm leading-7 text-slate-600">
              Ví dụ đề bài yêu cầu:
            </p>
            <div className="my-5 rounded-2xl bg-white border border-slate-200 p-5 text-center text-sm">
              Tìm tổng lớn nhất của <strong>3 phần tử liên tiếp</strong>.
            </div>
            <p className="text-sm leading-7 text-slate-600">
              Khi đó kích thước Window luôn bằng:
            </p>
            <div className="my-5 rounded-2xl bg-slate-950 p-5 text-center font-mono text-xl text-white">
              k = 3
            </div>
            <div className="my-7 overflow-x-auto">
              <div className="flex min-w-[700px] gap-2">
                {[2, 4, 1, 8, 5, 3, 9].map((number, index) => (
                  <div
                    key={index}
                    className={`flex-1 rounded-xl border p-4 text-center font-mono font-bold ${
                      index <= 2
                        ? "border-slate-900 bg-slate-900 text-white"
                        : "border-slate-200 bg-white"
                    }`}
                  >
                    {number}
                  </div>
                ))}
              </div>
            </div>
            <p className="text-sm leading-7 text-slate-600">Window đầu tiên:</p>
            <div className="my-5 rounded-xl bg-slate-50 p-4 text-center font-mono">
              [2, 4, 1]
            </div>
            <p className="text-sm leading-7 text-slate-600">
              Window tiếp theo:
            </p>
            <div className="my-5 rounded-xl bg-slate-50 p-4 text-center font-mono">
              [4, 1, 8]
            </div>
            <p className="text-sm leading-7 text-slate-600">Ta chỉ cần:</p>
            <div className="my-5 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-red-200 bg-red-50 p-4">
                <p className="font-mono font-bold text-red-700">- 2</p>
                <p className="mt-1 text-sm text-slate-600">Phần tử ra.</p>
              </div>
              <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
                <p className="font-mono font-bold text-emerald-700">+ 8</p>
                <p className="mt-1 text-sm text-slate-600">Phần tử vào.</p>
              </div>
            </div>
            <CodeBlock code={fixedWindowCode} />
            <InfoBox type="tip" title="Fixed Window">
              Khi đề bài nói về:
              <br />
              <br />
              <strong>"k phần tử liên tiếp"</strong>
              <br />
              <strong>"substring có độ dài k"</strong>
              <br />
              <strong>"subarray kích thước k"</strong>
              <br />
              <br />
              hãy nghĩ tới Fixed-Size Sliding Window.
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Variable Window */}
          <section id="variable-window" className="scroll-mt-24">
            <SectionTitle
              number="04"
              title="Variable-Size Window"
              description="Window không có kích thước cố định và có thể mở rộng hoặc thu nhỏ."
            />
            <p className="text-sm leading-7 text-slate-600">
              Đây là dạng quan trọng hơn trong nhiều bài toán.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Ta thường có:
            </p>
            <div className="my-6 rounded-3xl border border-slate-200 bg-white p-6">
              <div className="flex items-center justify-between">
                <div className="rounded-xl bg-sky-100 px-5 py-3 font-mono font-bold text-sky-800">
                  left
                </div>
                <div className="flex flex-1 items-center px-4">
                  <div className="h-1 w-full rounded-full bg-slate-200" />
                </div>
                <div className="rounded-xl bg-violet-100 px-5 py-3 font-mono font-bold text-violet-800">
                  right
                </div>
              </div>
              <p className="mt-5 text-center text-sm text-slate-500">
                Kích thước Window thay đổi.
              </p>
            </div>
            <p className="text-sm leading-7 text-slate-600">
              Ý tưởng thường là:
            </p>
            <CodeBlock code={variableWindowCode} />
            <div className="mt-7 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                  <Expand size={19} />
                </div>
                <h3 className="mt-4 font-bold">Expand</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Tăng right để đưa thêm dữ liệu vào Window.
                </p>
              </div>
              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                  <ArrowLeft size={19} />
                </div>
                <h3 className="mt-4 font-bold">Shrink</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Tăng left để loại dữ liệu khỏi Window.
                </p>
              </div>
            </div>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Expand / Shrink */}
          <section id="expand-shrink" className="scroll-mt-24">
            <SectionTitle
              number="05"
              title="Expand và Shrink"
              description="Đây là nhịp hoạt động đặc trưng của Sliding Window."
            />
            <h3 className="text-xl font-bold">Expand</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              right di chuyển sang phải:
            </p>
            <div className="my-6 flex items-center justify-center gap-3">
              <div className="rounded-xl border border-slate-200 bg-white px-4 py-3 font-mono text-sm">
                Window
              </div>
              <ArrowRight size={18} className="text-emerald-600" />
              <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 font-mono text-sm font-bold text-emerald-700">
                Window lớn hơn
              </div>
            </div>
            <h3 className="mt-8 text-xl font-bold">Shrink</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Khi Window không còn thỏa điều kiện, left phải di chuyển sang phải
              để loại bỏ dữ liệu cũ.
            </p>
            <div className="my-6 flex items-center justify-center gap-3">
              <div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 font-mono text-sm font-bold text-amber-700">
                Window quá lớn
              </div>
              <ArrowRight size={18} className="text-slate-400" />
              <div className="rounded-xl border border-slate-200 bg-white px-4 py-3 font-mono text-sm">
                Window nhỏ lại
              </div>
            </div>
            <InfoBox type="important" title="Điều quyết định hướng di chuyển">
              Không có quy tắc rằng left phải luôn tăng ở thời điểm này hoặc
              right phải tăng ở thời điểm khác.
              <br />
              <br />
              Bạn phải xác định:{" "}
              <strong>"Window hiện tại còn hợp lệ không?"</strong>
            </InfoBox>
            <h3 className="mt-8 text-xl font-bold">Vì sao thường là O(n)?</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Vì <code>right</code> chỉ đi từ trái sang phải và{" "}
              <code>left</code> cũng chỉ đi từ trái sang phải. Chúng không quay
              ngược lại.
            </p>
            <Complexity
              time="O(n)"
              space="O(1) hoặc O(k)"
              timeDescription="Tổng số lần left và right di chuyển vẫn tuyến tính."
              spaceDescription="Phụ thuộc dữ liệu phụ dùng để quản lý Window."
            />
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* When to use */}
          <section id="when-to-use" className="scroll-mt-24">
            <SectionTitle
              number="06"
              title="Khi nào nên nghĩ tới Sliding Window?"
              description="Hãy học cách nhận diện pattern từ đề bài."
            />
            <div className="grid gap-4 md:grid-cols-2">
              <StepCard number="01" title="Subarray / Substring">
                Đề bài nói tới một đoạn liên tiếp trong Array hoặc String.
              </StepCard>
              <StepCard number="02" title="Contiguous">
                Các phần tử phải đứng liên tiếp nhau.
              </StepCard>
              <StepCard number="03" title="Kích thước k">
                Đề yêu cầu một đoạn có độ dài cố định.
              </StepCard>
              <StepCard number="04" title="Longest / Shortest">
                Tìm đoạn dài nhất hoặc ngắn nhất thỏa một điều kiện.
              </StepCard>
            </div>
            <InfoBox type="tip" title="Từ khóa rất dễ nhận diện">
              Hãy chú ý những từ như:
              <br />
              <br />
              <strong>
                subarray · substring · contiguous · consecutive · longest ·
                shortest · at most k · exactly k
              </strong>
            </InfoBox>
            <InfoBox
              type="important"
              title="Nhưng Best Time to Buy and Sell Stock có phải Sliding Window không?"
            >
              Bài này có thể được trình bày bằng tư duy hai biên{" "}
              <strong>buy / sell</strong> và thường được xếp cùng nhóm Sliding
              Window trong các roadmap DSA như NeetCode.
              <br />
              <br />
              Tuy nhiên, điều quan trọng không phải tên gọi mà là ý tưởng:{" "}
              <strong>
                duy trì một khoảng từ ngày mua hợp lệ tới ngày bán hiện tại
              </strong>{" "}
              và loại bỏ những ngày mua chắc chắn không thể tốt hơn.
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Stock problem */}
          <section id="stock-problem" className="scroll-mt-24">
            <SectionTitle
              number="07"
              title="Best Time to Buy and Sell Stock"
              description="Đây là bài toán kinh điển để bắt đầu học tư duy Sliding Window."
            />
            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Problem
                  </p>
                  <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-950">
                    Best Time to Buy and Sell Stock
                  </h3>
                </div>
                <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700">
                  Easy
                </span>
              </div>
              <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
                Cho một Array <code>prices</code>, trong đó{" "}
                <code>prices[i]</code> là giá của NeetCoin vào ngày thứ i.
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                Bạn được phép chọn <strong>một ngày để mua</strong> và một{" "}
                <strong>ngày khác trong tương lai để bán</strong>.
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                Hãy trả về lợi nhuận lớn nhất có thể đạt được. Nếu không có giao
                dịch nào sinh lợi, kết quả là <strong>0</strong>.
              </p>
            </div>
            <h3 className="mt-8 text-xl font-bold">Ví dụ đề bài</h3>
            <div className="my-6 rounded-2xl border border-slate-200 bg-white p-5">
              <p className="font-mono text-sm leading-7">
                prices = [10, 1, 5, 6, 7, 1]
                <br />
                <br />
                Output = 6
              </p>
            </div>
            <p className="text-sm leading-7 text-slate-600">
              Cách tốt nhất là:
            </p>
            <div className="my-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 text-center">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Buy
                </p>
                <p className="mt-3 font-mono text-xl font-bold">1</p>
                <p className="mt-2 text-xs text-slate-500">Day 1</p>
              </div>
              <div className="flex items-center justify-center">
                <ArrowRight className="text-slate-400" />
              </div>
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 text-center">
                <p className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                  Sell
                </p>
                <p className="mt-3 font-mono text-xl font-bold text-emerald-800">
                  7
                </p>
                <p className="mt-2 text-xs text-slate-500">Day 4</p>
              </div>
            </div>
            <div className="my-6 rounded-2xl bg-slate-950 p-6 text-center font-mono text-xl text-white">
              7 - 1 = 6
            </div>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Understand problem */}
          <section id="understand-problem" className="scroll-mt-24">
            <SectionTitle
              number="08"
              title="Hiểu đề bài thật kỹ"
              description="Có ba điều kiện quan trọng không được bỏ sót."
            />
            <div className="space-y-4">
              <StepCard number="01" title="Chỉ được mua một lần">
                Chúng ta chỉ chọn một ngày mua và một ngày bán.
              </StepCard>
              <StepCard number="02" title="Phải bán trong tương lai">
                Ngày bán phải đứng sau ngày mua.
                <br />
                Không được mua ở ngày 5 rồi quay lại bán ở ngày 2.
              </StepCard>
              <StepCard number="03" title="Không có lợi nhuận thì chọn 0">
                Chúng ta không bắt buộc phải giao dịch.
              </StepCard>
            </div>
            <h3 className="mt-8 text-xl font-bold">Công thức lợi nhuận</h3>
            <div className="my-6 rounded-3xl bg-slate-950 p-7 text-center font-mono text-xl text-white">
              profit = sellPrice - buyPrice
            </div>
            <p className="text-sm leading-7 text-slate-600">Mục tiêu là tìm:</p>
            <div className="my-5 rounded-2xl border border-slate-200 bg-white p-6 text-center font-mono text-lg font-bold">
              max(sellPrice - buyPrice)
            </div>
            <InfoBox type="important" title="Câu hỏi quan trọng nhất">
              Nếu hôm nay tôi muốn bán,{" "}
              <strong>giá mua tốt nhất trước hôm nay là bao nhiêu?</strong>
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Brute force */}
          <section id="brute-force" className="scroll-mt-24">
            <SectionTitle
              number="09"
              title="Brute Force"
              description="Trước khi tối ưu, hãy thử tất cả cặp Buy / Sell."
            />
            <p className="text-sm leading-7 text-slate-600">
              Với mỗi ngày mua, thử tất cả các ngày bán ở phía sau.
            </p>
            <CodeBlock code={stockBruteForceCode} />
            <div className="my-6 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
              <table className="w-full min-w-[650px] text-sm">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="border-b border-slate-200 px-5 py-4 text-left">
                      Buy
                    </th>
                    <th className="border-b border-slate-200 px-5 py-4 text-left">
                      Sell
                    </th>
                    <th className="border-b border-slate-200 px-5 py-4 text-left">
                      Profit
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["10", "1", "-9"],
                    ["10", "5", "-5"],
                    ["1", "5", "4"],
                    ["1", "6", "5"],
                    ["1", "7", "6"],
                    ["1", "1", "0"],
                  ].map(([buy, sell, profit]) => (
                    <tr key={`${buy}-${sell}`}>
                      <td className="border-b border-slate-100 px-5 py-4 font-mono">
                        {buy}
                      </td>
                      <td className="border-b border-slate-100 px-5 py-4 font-mono">
                        {sell}
                      </td>
                      <td
                        className={`border-b border-slate-100 px-5 py-4 font-mono font-semibold ${profit === "6" ? "text-emerald-700" : "text-slate-600"}`}
                      >
                        {profit}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Complexity
              time="O(n²)"
              space="O(1)"
              timeDescription="Thử gần như mọi cặp ngày."
              spaceDescription="Chỉ dùng một vài biến."
            />
            <InfoBox title="Chúng ta đang tính lại điều gì?">
              Khi đang ở ngày bán thứ 5, chúng ta lại kiểm tra:
              <br />
              <br />
              giá ngày 1<br />
              giá ngày 2<br />
              giá ngày 3<br />
              giá ngày 4<br />
              <br />
              Nhưng nhiều thông tin trong số đó đã được biết từ trước.
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Window Thinking */}
          <section id="window-thinking" className="scroll-mt-24">
            <SectionTitle
              number="10"
              title="Tư duy Sliding Window cho bài Stock"
              description="Đây là phần quan trọng nhất của bài."
            />
            <p className="text-sm leading-7 text-slate-600">
              Hãy đặt hai pointer:
            </p>
            <div className="my-6 rounded-2xl bg-slate-950 p-6 text-center font-mono text-lg text-white">
              left = ngày mua<span className="mx-4 text-slate-500">|</span>right
              = ngày bán
            </div>
            <div className="my-7 overflow-x-auto">
              <div className="flex min-w-[700px] gap-2">
                {[10, 1, 5, 6, 7, 1].map((price, index) => (
                  <PriceCell
                    key={index}
                    value={price}
                    left={index === 1}
                    right={index === 4}
                    active={index >= 1 && index <= 4}
                  />
                ))}
              </div>
            </div>
            <p className="text-sm leading-7 text-slate-600">
              Window hiện tại là:
            </p>
            <div className="my-5 rounded-xl bg-slate-50 p-5 text-center font-mono">
              [1, 5, 6, 7]
            </div>
            <p className="text-sm leading-7 text-slate-600">
              Và lợi nhuận tại thời điểm right là:
            </p>
            <div className="my-5 rounded-2xl bg-slate-950 p-6 text-center font-mono text-xl text-white">
              prices[right] - prices[left]
            </div>
            <h3 className="mt-8 text-xl font-bold">Trường hợp 1 — Giá tăng</h3>
            <div className="my-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <p className="font-mono font-bold text-emerald-800">
                prices[right] &gt; prices[left]
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Có lợi nhuận. Tính profit và cập nhật maxProfit nếu cần.
              </p>
            </div>
            <h3 className="mt-8 text-xl font-bold">Trường hợp 2 — Giá giảm</h3>
            <div className="my-6 rounded-2xl border border-red-200 bg-red-50 p-5">
              <p className="font-mono font-bold text-red-800">
                prices[right] &lt; prices[left]
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Ngày left không còn là ngày mua tốt nhất nữa.
              </p>
            </div>
            <InfoBox
              type="important"
              title="Tại sao khi giá giảm lại chuyển left sang right?"
            >
              Giả sử:
              <br />
              <br />
              buy = 5<br />
              hôm nay = 3<br />
              <br />
              Nếu ngày hôm nay đang có giá 3 thì bất kỳ ngày bán nào trong tương
              lai cũng sẽ lời nhiều hơn hoặc ít nhất không tệ hơn nếu mua ở 3
              thay vì mua ở 5.
              <br />
              <br />
              Vì vậy <strong>5 chắc chắn không còn là ứng viên tốt nhất</strong>
              . Ta loại nó khỏi Window và đặt left = right.
            </InfoBox>
            <h3 className="mt-8 text-xl font-bold">
              Đây chính là "Shrink" của Window
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Khi giá hiện tại thấp hơn giá mua đang giữ, Window cũ không còn
              hữu ích. Một Window mới bắt đầu tại vị trí hiện tại.
            </p>
            <div className="my-7 flex items-center justify-center gap-4">
              <div className="rounded-xl border border-red-200 bg-red-50 px-5 py-3 font-mono text-sm text-red-700">
                buy = 5
              </div>
              <ArrowRight size={18} className="text-slate-400" />
              <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-5 py-3 font-mono text-sm font-bold text-emerald-700">
                buy = 3
              </div>
            </div>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Dry Run */}
          <section id="dry-run" className="scroll-mt-24">
            <SectionTitle
              number="11"
              title="Dry Run từng bước"
              description="Chạy chính input của đề bài: [10, 1, 5, 6, 7, 1]."
            />
            <div className="my-7 overflow-x-auto">
              <div className="flex min-w-[700px] gap-2">
                {[10, 1, 5, 6, 7, 1].map((price, index) => (
                  <PriceCell
                    key={index}
                    value={price}
                    left={index === 1}
                    best={index === 4}
                    right={index === 4}
                  />
                ))}
              </div>
            </div>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
              <table className="w-full min-w-[800px] text-sm">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="border-b border-slate-200 px-4 py-4 text-left">
                      Day
                    </th>
                    <th className="border-b border-slate-200 px-4 py-4 text-left">
                      Price
                    </th>
                    <th className="border-b border-slate-200 px-4 py-4 text-left">
                      Buy
                    </th>
                    <th className="border-b border-slate-200 px-4 py-4 text-left">
                      Profit
                    </th>
                    <th className="border-b border-slate-200 px-4 py-4 text-left">
                      Max Profit
                    </th>
                    <th className="border-b border-slate-200 px-4 py-4 text-left">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["0", "10", "10", "0", "0", "Giữ buy = 10"],
                    ["1", "1", "1", "0", "0", "Giá giảm → buy = 1"],
                    ["2", "5", "1", "4", "4", "Có profit"],
                    ["3", "6", "1", "5", "5", "Có profit"],
                    ["4", "7", "1", "6", "6", "Có profit"],
                    ["5", "1", "1", "0", "6", "Không tăng max"],
                  ].map(([day, price, buy, profit, maxProfit, action]) => (
                    <tr key={day}>
                      <td className="border-b border-slate-100 px-4 py-4 font-mono">
                        {day}
                      </td>
                      <td className="border-b border-slate-100 px-4 py-4 font-mono font-bold">
                        {price}
                      </td>
                      <td className="border-b border-slate-100 px-4 py-4 font-mono">
                        {buy}
                      </td>
                      <td className="border-b border-slate-100 px-4 py-4 font-mono">
                        {profit}
                      </td>
                      <td className="border-b border-slate-100 px-4 py-4 font-mono font-bold text-emerald-700">
                        {maxProfit}
                      </td>
                      <td className="border-b border-slate-100 px-4 py-4 text-slate-600">
                        {action}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <h3 className="mt-10 text-xl font-bold">Phân tích từng ngày</h3>
            <div className="mt-5 space-y-4">
              <StepCard number="1" title="Ngày 0 — Giá 10">
                Đây là giá đầu tiên nên tạm thời coi <code>10</code> là giá mua
                nhỏ nhất.
              </StepCard>
              <StepCard number="2" title="Ngày 1 — Giá 1">
                1 nhỏ hơn 10. Vì vậy mua ở 1 tốt hơn mua ở 10. Cập nhật giá mua
                thành 1.
              </StepCard>
              <StepCard number="3" title="Ngày 2 — Giá 5">
                Nếu bán ở 5, profit = 5 - 1 = 4.
              </StepCard>
              <StepCard number="4" title="Ngày 3 — Giá 6">
                Profit = 6 - 1 = 5. Max Profit tăng lên 5.
              </StepCard>
              <StepCard number="5" title="Ngày 4 — Giá 7">
                Profit = 7 - 1 = 6. Đây là lợi nhuận lớn nhất.
              </StepCard>
              <StepCard number="6" title="Ngày 5 — Giá 1">
                Giá giảm nhưng maxProfit vẫn giữ nguyên là 6.
              </StepCard>
            </div>
            <div className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-center">
              <p className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                Final Answer
              </p>
              <p className="mt-3 font-mono text-3xl font-bold text-emerald-800">
                6
              </p>
            </div>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Solution */}
          <section id="solution" className="scroll-mt-24">
            <SectionTitle
              number="12"
              title="Code C"
              description="Lời giải Two Pointer / Sliding Window cho bài toán."
            />
            <CodeBlock code={stockTwoPointerCode} />
            <InfoBox type="tip" title="Đọc code theo 3 biến">
              <strong>left</strong> = ngày mua hiện tại.
              <br />
              <strong>right</strong> = ngày bán hiện tại.
              <br />
              <strong>maxProfit</strong> = lợi nhuận tốt nhất đã tìm được.
            </InfoBox>
            <h3 className="mt-10 text-xl font-bold">
              Một cách viết còn rõ bản chất hơn
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Thực tế chúng ta không nhất thiết phải giữ cả left và right. Chỉ
              cần nhớ giá mua nhỏ nhất đã gặp.
            </p>
            <CodeBlock code={stockMinPriceCode} />
            <InfoBox type="important" title="Hai code trên cùng một ý tưởng">
              Phiên bản đầu làm rõ mô hình Window: <strong>buy → sell</strong>.
              <br />
              <br />
              Phiên bản thứ hai làm rõ invariant:{" "}
              <strong>minPrice là giá mua tốt nhất trước ngày hiện tại.</strong>
              <br />
              <br />
              Để học Sliding Window, phiên bản đầu dễ hình dung hơn. Để viết
              production code ngắn gọn, phiên bản thứ hai thường được ưu tiên.
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Explain code */}
          <section id="explain-code" className="scroll-mt-24">
            <SectionTitle
              number="13"
              title="Giải thích từng dòng"
              description="Không học thuộc code; hãy hiểu trạng thái mà mỗi biến đang giữ."
            />
            <StepCard number="01" title="left = 0">
              Ban đầu ngày đầu tiên là ứng viên mua.
            </StepCard>
            <CodeBlock code={`int left = 0;`} />
            <StepCard number="02" title="right = 1">
              Cần ít nhất hai ngày để mua và bán, nên ngày thứ hai là ứng viên
              bán đầu tiên.
            </StepCard>
            <CodeBlock code={`int right = 1;`} />
            <StepCard number="03" title="maxProfit = 0">
              Chúng ta được phép không giao dịch nên lợi nhuận ban đầu là 0.
            </StepCard>
            <CodeBlock code={`int maxProfit = 0;`} />
            <StepCard number="04" title="while (right < pricesSize)">
              Khi right còn nằm trong Array, vẫn còn một ngày bán để xét.
            </StepCard>
            <CodeBlock
              code={`while (right < pricesSize) {
...


}`}
            />
            <StepCard number="05" title="Giá bán cao hơn giá mua">
              Nếu giá hiện tại lớn hơn giá mua, giao dịch đang có lợi nhuận.
            </StepCard>
            <CodeBlock
              code={`if (prices[right] > prices[left]) {
int profit =
    prices[right] - prices[left];


}`}
            />
            <StepCard number="06" title="Cập nhật maxProfit">
              Chỉ cập nhật khi profit hiện tại tốt hơn kết quả trước đó.
            </StepCard>
            <CodeBlock
              code={`if (profit > maxProfit) {
maxProfit = profit;


}`}
            />
            <StepCard number="07" title="Giá bán thấp hơn giá mua">
              Nếu giá hiện tại thấp hơn giá mua đang giữ, ngày mua cũ không còn
              là lựa chọn tốt nhất.
            </StepCard>
            <CodeBlock
              code={`else {
left = right;


}`}
            />
            <StepCard number="08" title="Di chuyển right">
              Sau mỗi ngày, chúng ta luôn chuyển sang ngày tiếp theo.
            </StepCard>
            <CodeBlock code={`right++;`} />
            <StepCard number="09" title="Kết thúc">
              Duyệt xong tất cả các ngày thì maxProfit là đáp án.
            </StepCard>
            <CodeBlock code={`return maxProfit;`} />
            <InfoBox type="important" title="Invariant quan trọng">
              Trong suốt vòng lặp, <strong>prices[left]</strong> luôn đại diện
              cho giá mua tốt nhất mà chúng ta đã biết trong phạm vi trước hoặc
              tại right.
              <br />
              <br />
              Vì thế khi đứng ở một ngày bán mới, chúng ta không cần thử lại tất
              cả các ngày mua trước đó.
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Complexity */}
          <section id="complexity" className="scroll-mt-24">
            <SectionTitle
              number="14"
              title="Complexity"
              description="Từ O(n²) xuống O(n) nhờ không tính lại những gì đã biết."
            />
            <Complexity
              time="O(n)"
              space="O(1)"
              timeDescription="right chỉ đi qua Array một lần; left cũng chỉ tiến về phía trước."
              spaceDescription="Chỉ dùng một vài biến."
            />
            <div className="my-7 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
              <table className="w-full min-w-[650px] text-sm">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="border-b border-slate-200 px-5 py-4 text-left">
                      Approach
                    </th>
                    <th className="border-b border-slate-200 px-5 py-4 text-left">
                      Time
                    </th>
                    <th className="border-b border-slate-200 px-5 py-4 text-left">
                      Space
                    </th>
                    <th className="border-b border-slate-200 px-5 py-4 text-left">
                      Ý tưởng
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-b border-slate-100 px-5 py-4 font-semibold">
                      Brute Force
                    </td>
                    <td className="border-b border-slate-100 px-5 py-4 font-mono">
                      O(n²)
                    </td>
                    <td className="border-b border-slate-100 px-5 py-4 font-mono">
                      O(1)
                    </td>
                    <td className="border-b border-slate-100 px-5 py-4 text-slate-600">
                      Thử mọi Buy / Sell
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-4 font-semibold">Sliding Window</td>
                    <td className="px-5 py-4 font-mono">O(n)</td>
                    <td className="px-5 py-4 font-mono">O(1)</td>
                    <td className="px-5 py-4 text-slate-600">
                      Giữ Buy tốt nhất
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <InfoBox title="Điều gì đã bị loại bỏ?">
              Với brute force, khi bán ở ngày i, chúng ta thử lại{" "}
              <strong>mọi ngày mua trước i</strong>.<br />
              <br />
              Với Sliding Window, ta đã tóm tắt toàn bộ lịch sử đó bằng một giá
              trị: <strong>minPrice</strong> hoặc một pointer{" "}
              <strong>left</strong>.
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Edge cases */}
          <section id="edge-cases" className="scroll-mt-24">
            <SectionTitle
              number="15"
              title="Edge Cases"
              description="Hãy thử những trường hợp nhỏ nhất để chắc chắn thuật toán đúng."
            />
            <div className="space-y-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <h3 className="font-semibold">Giá chỉ có một ngày</h3>
                <p className="mt-3 font-mono text-sm">[5]</p>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Không thể mua và bán ở cùng một ngày → 0.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <h3 className="font-semibold">Giá luôn giảm</h3>
                <p className="mt-3 font-mono text-sm">[7, 6, 4, 3, 1]</p>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Không có giao dịch có lãi → 0.
                </p>
              </div>
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                <h3 className="font-semibold">Giá luôn tăng</h3>
                <p className="mt-3 font-mono text-sm">[1, 2, 3, 4, 5]</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Mua ở 1 và bán ở 5 → profit = 4.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <h3 className="font-semibold">Không có lợi nhuận</h3>
                <p className="mt-3 font-mono text-sm">[5, 5, 5, 5]</p>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Profit luôn bằng 0.
                </p>
              </div>
            </div>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Mistakes */}
          <section id="mistakes" className="scroll-mt-24">
            <SectionTitle
              number="16"
              title="Lỗi thường gặp"
              description="Sliding Window rất dễ viết sai nếu không xác định rõ invariant của Window."
            />
            <div className="space-y-4">
              <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
                <div className="flex gap-4">
                  <X size={20} className="mt-0.5 shrink-0 text-red-500" />
                  <div>
                    <h3 className="font-semibold">
                      Cho phép mua và bán cùng ngày
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      Đề bài yêu cầu hai ngày khác nhau. Vì vậy right phải bắt
                      đầu sau left.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
                <div className="flex gap-4">
                  <X size={20} className="mt-0.5 shrink-0 text-red-500" />
                  <div>
                    <h3 className="font-semibold">
                      Khi giá giảm chỉ giảm left một lần
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      Khi tìm thấy giá mua tốt hơn ở right, cần cập nhật left
                      thành right. Không cần tiếp tục giữ ngày mua cũ.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
                <div className="flex gap-4">
                  <X size={20} className="mt-0.5 shrink-0 text-red-500" />
                  <div>
                    <h3 className="font-semibold">
                      Chỉ tìm giá thấp nhất và giá cao nhất
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      Không thể lấy min toàn bộ và max toàn bộ một cách độc lập.
                      Giá bán phải xảy ra <strong>sau</strong> ngày mua.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
                <div className="flex gap-4">
                  <Lightbulb
                    size={20}
                    className="mt-0.5 shrink-0 text-amber-600"
                  />
                  <div>
                    <h3 className="font-semibold">
                      Nghĩ Sliding Window chỉ dành cho Window có kích thước k
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      Không đúng. Đây mới chỉ là Fixed-Size Window. Nhiều bài
                      quan trọng dùng Variable-Size Window.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <InfoBox type="important" title="Một câu hỏi nên tự hỏi">
              <strong>
                "Thông tin nào trong Window hiện tại đủ để tôi không phải xét
                lại toàn bộ Window ở bước tiếp theo?"
              </strong>
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Recognition */}
          <section id="recognition" className="scroll-mt-24">
            <SectionTitle
              number="17"
              title="Cách nhận diện Sliding Window"
              description="Mục tiêu là nhìn đề và nhận ra cấu trúc trước khi viết code."
            />
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                  <List size={19} />
                </div>
                <h3 className="mt-4 text-lg font-bold">Đoạn liên tiếp</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Subarray hoặc substring.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                  <MoveHorizontal size={19} />
                </div>
                <h3 className="mt-4 text-lg font-bold">Window di chuyển</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Phần lớn Window được giữ lại khi chuyển bước.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                  <Zap size={19} />
                </div>
                <h3 className="mt-4 text-lg font-bold">Tránh tính lại</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Thông tin từ Window cũ được tái sử dụng.
                </p>
              </div>
            </div>
            <h3 className="mt-10 text-xl font-bold">Hai dạng lớn</h3>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-sky-200 bg-sky-50 p-6">
                <p className="text-xs font-bold uppercase tracking-wider text-sky-600">
                  Fixed
                </p>
                <h3 className="mt-3 text-xl font-bold">Kích thước cố định</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Ví dụ: k phần tử liên tiếp.
                </p>
                <p className="mt-4 rounded-xl bg-white/70 p-3 font-mono text-sm">
                  windowSize = k
                </p>
              </div>
              <div className="rounded-3xl border border-violet-200 bg-violet-50 p-6">
                <p className="text-xs font-bold uppercase tracking-wider text-violet-600">
                  Variable
                </p>
                <h3 className="mt-3 text-xl font-bold">Kích thước thay đổi</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Expand hoặc Shrink tùy theo điều kiện.
                </p>
                <p className="mt-4 rounded-xl bg-white/70 p-3 font-mono text-sm">
                  [left ... right]
                </p>
              </div>
            </div>
            <InfoBox type="tip" title="Stock thuộc nhóm nào?">
              Best Time to Buy and Sell Stock có thể được nhìn dưới góc độ
              Variable Window:
              <br />
              <br />
              <strong>left = ngày mua, right = ngày bán.</strong>
              <br />
              <br />
              Khi gặp một giá mua mới thấp hơn, ta bỏ Window cũ và bắt đầu
              Window mới.
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Summary */}
          <section id="summary" className="scroll-mt-24">
            <SectionTitle
              number="18"
              title="Tổng kết Sliding Window"
              description="Hãy tập trung vào mental model thay vì học thuộc template."
            />
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                  <MoveHorizontal size={20} />
                </div>
                <h3 className="mt-4 text-lg font-bold">Window</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Một đoạn liên tiếp đang được xử lý.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                  <GitBranch size={20} />
                </div>
                <h3 className="mt-4 text-lg font-bold">Left / Right</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Hai biến quản lý biên của Window.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                  <ArrowRight size={20} />
                </div>
                <h3 className="mt-4 text-lg font-bold">Expand</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  right tiến tới để đưa dữ liệu mới vào Window.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                  <ArrowLeft size={20} />
                </div>
                <h3 className="mt-4 text-lg font-bold">Shrink</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  left tiến tới để loại dữ liệu khỏi Window.
                </p>
              </div>
            </div>
            <h3 className="mt-10 text-xl font-bold">
              Pattern của Best Time to Buy and Sell Stock
            </h3>
            <div className="my-6 rounded-3xl bg-slate-950 p-6 sm:p-8">
              <div className="space-y-3 font-mono text-sm leading-8 text-slate-300">
                <div>
                  <span className="text-sky-300">left</span>
                  <span> = ngày mua</span>
                </div>
                <div>
                  <span className="text-violet-300">right</span>
                  <span> = ngày bán</span>
                </div>
                <div>
                  <span className="text-slate-500">↓</span>
                </div>
                <div>
                  <span className="text-emerald-300">
                    prices[right] &gt; prices[left]
                  </span>
                </div>
                <div>profit = sell - buy</div>
                <div>cập nhật maxProfit</div>
                <div>
                  <span className="text-slate-500">↓</span>
                </div>
                <div>
                  <span className="text-red-300">
                    prices[right] &lt; prices[left]
                  </span>
                </div>
                <div>left = right</div>
                <div>
                  <span className="text-slate-500">↓</span>
                </div>
                <div>right++</div>
              </div>
            </div>
            <InfoBox type="important" title="Mental model">
              Sliding Window không phải là:
              <br />
              <br />
              <strong>"Có hai biến left/right là Sliding Window."</strong>
              <br />
              <br />
              Mà là:
              <br />
              <br />
              <strong>
                "Tôi đang duy trì một đoạn dữ liệu liên tiếp và tận dụng thông
                tin của Window cũ thay vì tính lại từ đầu."
              </strong>
            </InfoBox>
            <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white sm:p-8">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Remember
              </p>
              <h3 className="mt-3 text-2xl font-bold">
                Sliding Window trong một dòng
              </h3>
              <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <div className="rounded-xl bg-white/10 px-4 py-3 font-mono text-sm">
                  Window
                </div>
                <ArrowRight size={18} className="text-slate-500" />
                <div className="rounded-xl bg-white/10 px-4 py-3 font-mono text-sm">
                  Add Right
                </div>
                <ArrowRight size={18} className="text-slate-500" />
                <div className="rounded-xl bg-white/10 px-4 py-3 font-mono text-sm">
                  Remove Left
                </div>
                <ArrowRight size={18} className="text-slate-500" />
                <div className="rounded-xl bg-emerald-500/20 px-4 py-3 font-mono text-sm text-emerald-300">
                  Reuse Information
                </div>
              </div>
            </div>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/algorithms/binary-search"
                className="group flex flex-1 items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-slate-300 hover:shadow-lg"
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
                    <p className="mt-1 font-semibold">Binary Search</p>
                  </div>
                </div>
              </Link>
              <Link
                to="/algorithms/linked-list"
                className="group flex flex-1 items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-slate-300 hover:shadow-lg"
              >
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Next
                  </p>
                  <p className="mt-1 font-semibold">Linked List</p>
                </div>
                <ArrowRight
                  size={18}
                  className="text-slate-400 transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </section>
        </main>
      </div>
      {/* Mobile TOC */}
      <section className="border-t border-slate-200 bg-white lg:hidden">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
          <div className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400">
            <List size={14} />
            Nội dung
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            {toc.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600 transition hover:border-slate-300 hover:bg-white hover:text-slate-900"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </section>
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <span>Algorithm Learning Lab</span>
          <span>Sliding Window · Best Time to Buy and Sell Stock</span>
        </div>
      </footer>
    </div>
  );
}
