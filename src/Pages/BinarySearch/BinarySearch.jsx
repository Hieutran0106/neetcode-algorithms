import React from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Code2,
  GitBranch,
  List,
  Search,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  CodeBlock,
  Complexity,
  InfoBox,
  ResultState,
  SearchCell,
  SectionTitle,
  StepCard,
} from "./components/BinarySearchUI.jsx";
import {
  binaryBasicCode,
  binaryRecursiveCode,
  binarySearchFinalCode,
  linearSearchCode,
  midCode,
  toc,
} from "./data/binarySearchData.js";

function Divider() {
  return <div className="my-16 h-px bg-slate-200" />;
}

function DataCards({ items }) {
  return (
    <div className="my-5 grid gap-4 sm:grid-cols-2">
      {items.map(([title, description]) => (
        <div key={title} className="rounded-2xl border border-slate-200 bg-white p-5">
          <h3 className="font-semibold">{title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-500">{description}</p>
        </div>
      ))}
    </div>
  );
}

export default function BinarySearch() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-900">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-4xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs font-bold tracking-wider text-slate-600">
              <Search size={14} /> NEETCODE · BINARY SEARCH
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">Binary Search</h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
              Binary Search là một trong những kỹ thuật tìm kiếm quan trọng nhất trong Data Structures & Algorithms. Thay vì kiểm tra từng phần tử một, chúng ta liên tục loại bỏ một nửa vùng tìm kiếm sau mỗi bước.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-600"><Search size={16} /> Search</span>
              <span className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-600"><Zap size={16} /> O(log n)</span>
              <span className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-600"><Code2 size={16} /> C · Java · Python</span>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:px-8">
        <aside className="hidden lg:block">
          <div className="sticky top-24">
            <div className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400"><List size={14} /> Nội dung</div>
            <nav className="max-h-[calc(100vh-130px)] space-y-1 overflow-y-auto pr-3">
              {toc.map((item) => (
                <a key={item.id} href={`#${item.id}`} className="group flex items-center gap-2 rounded-lg px-3 py-2.5 text-xs leading-5 text-slate-500 transition hover:bg-white hover:text-slate-900">
                  <ChevronRight size={12} className="shrink-0 opacity-0 transition group-hover:opacity-100" /> {item.label}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        <main className="min-w-0">
          <section id="introduction" className="scroll-mt-24">
            <SectionTitle number="00" title="Binary Search là gì?" description="Hãy bắt đầu từ câu hỏi đơn giản nhất: nếu tôi muốn tìm một giá trị trong một danh sách thì tôi phải làm thế nào?" />
            <p className="text-sm leading-7 text-slate-600 sm:text-base">Giả sử chúng ta có một Array chứa rất nhiều số và cần tìm một số cụ thể.</p>
            <div className="my-7 overflow-x-auto rounded-2xl border border-slate-200 bg-white p-5"><div className="flex min-w-[620px] gap-2">{[1, 3, 5, 7, 9, 11, 13, 15].map((number) => <div key={number} className="flex-1 rounded-xl border border-slate-200 bg-slate-50 p-4 text-center font-mono font-bold">{number}</div>)}</div></div>
            <p className="text-sm leading-7 text-slate-600">Nếu cần tìm <strong>13</strong>, bạn có thể kiểm tra từng phần tử. Nhưng Array ở trên có một đặc điểm rất quan trọng:</p>
            <div className="my-6 rounded-3xl border border-slate-200 bg-slate-950 p-7 text-center"><p className="font-mono text-2xl font-bold text-white">Array đã được sắp xếp</p><p className="mt-3 text-sm text-slate-400">ascending order</p></div>
            <p className="text-sm leading-7 text-slate-600">Chính tính chất này cho phép chúng ta loại bỏ một nửa dữ liệu mà không cần kiểm tra từng phần tử.</p>
            <InfoBox type="important" title="Một câu định nghĩa"><strong>Binary Search là kỹ thuật tìm kiếm bằng cách liên tục chia đôi vùng dữ liệu đang cần tìm.</strong></InfoBox>
          </section>

          <Divider />
          <section id="search-basics" className="scroll-mt-24">
            <SectionTitle number="01" title="Tìm kiếm cơ bản là gì?" description="Trước Binary Search, chúng ta phải hiểu bài toán Search." />
            <p className="text-sm leading-7 text-slate-600">Search nghĩa là chúng ta có một tập dữ liệu và một <strong>target</strong>, sau đó cần xác định target có tồn tại hay không và nếu có thì nó nằm ở đâu.</p>
            <DataCards items={[["Data", "[2, 4, 6, 8, 10]"], ["Target", "8"]]} />
            <p className="text-sm leading-7 text-slate-600">Kết quả mong muốn là index của 8:</p>
            <div className="my-5 rounded-2xl bg-slate-950 p-6 text-center font-mono text-xl font-bold text-white">3</div>
            <p className="text-sm leading-7 text-slate-600">Nếu target không tồn tại thì trả về:</p>
            <div className="my-5 rounded-2xl border border-slate-200 bg-white p-6 text-center font-mono text-xl font-bold">-1</div>
          </section>

          <Divider />
          <section id="linear-search" className="scroll-mt-24">
            <SectionTitle number="02" title="Linear Search" description="Cách đơn giản nhất là kiểm tra lần lượt từ đầu đến cuối." />
            <p className="text-sm leading-7 text-slate-600">Với Array <code>[3, 8, 12, 17, 25, 31]</code>, nếu target = 25, chúng ta phải kiểm tra lần lượt cho tới khi tìm thấy phần tử.</p>
            <div className="my-6 flex min-w-[620px] gap-2 overflow-x-auto pb-2">{[3, 8, 12, 17, 25, 31].map((number) => <div key={number} className={`min-w-[82px] rounded-xl border p-4 text-center font-mono font-bold ${number === 25 ? "border-emerald-300 bg-emerald-50 text-emerald-700" : "border-slate-200 bg-white"}`}>{number}</div>)}</div>
            <CodeBlock code={linearSearchCode} />
            <p className="text-sm leading-7 text-slate-600">Trường hợp xấu nhất, target nằm cuối Array hoặc hoàn toàn không tồn tại. Khi đó chúng ta phải đi qua toàn bộ n phần tử.</p>
            <Complexity time="O(n)" space="O(1)" timeDescription="Có thể phải kiểm tra toàn bộ Array." spaceDescription="Chỉ dùng biến chỉ số." />
            <InfoBox type="important" title="Vấn đề">Nếu Array đã được sắp xếp, việc đi qua từng phần tử là đang <strong>bỏ phí thông tin mà thứ tự của Array cung cấp</strong>.</InfoBox>
          </section>

          <Divider />
          <section id="requirement" className="scroll-mt-24">
            <SectionTitle number="03" title="Điều kiện để dùng Binary Search" description="Không phải Array nào cũng có thể áp dụng Binary Search." />
            <div className="grid gap-4 md:grid-cols-2">
              <ResultState success title="Có thứ tự">Dữ liệu phải có tính chất cho phép chúng ta loại bỏ một phần search space dựa trên giá trị đang kiểm tra.</ResultState>
              <ResultState title="Không có thông tin thứ tự">Nếu không biết nửa nào chắc chắn chứa target, chúng ta không được phép loại bỏ nửa đó.</ResultState>
            </div>
            <DataCards items={[["Sorted", "[1, 3, 5, 7, 9, 11] — có thể dùng Binary Search."], ["Unsorted", "[7, 1, 11, 3, 9, 5] — không thể tự động loại bỏ một nửa chỉ từ giá trị giữa."]]} />
            <InfoBox type="tip" title="Câu hỏi cần hỏi đầu tiên"><strong>"Tôi có đủ thông tin để biết một nửa dữ liệu chắc chắn không có đáp án không?"</strong><br /><br />Nếu có, Binary Search có thể là lựa chọn phù hợp.</InfoBox>
          </section>

          <Divider />
          <section id="core-idea" className="scroll-mt-24">
            <SectionTitle number="04" title="Ý tưởng chia đôi" description="Đây là toàn bộ sức mạnh của Binary Search." />
            <p className="text-sm leading-7 text-slate-600">Giả sử có 16 phần tử. Nếu chỉ kiểm tra từng phần tử thì có thể cần 16 lần kiểm tra. Binary Search kiểm tra giữa trước và dùng tính chất đã sort để loại bỏ nửa còn lại.</p>
            <div className="my-6 grid grid-cols-4 gap-2 sm:grid-cols-8">{Array.from({ length: 16 }, (_, index) => index + 1).map((number) => <div key={number} className={`rounded-lg border p-3 text-center font-mono text-xs sm:p-4 ${number === 8 ? "border-slate-900 bg-slate-900 text-white" : "border-slate-200 bg-white text-slate-500"}`}>{number}</div>)}</div>
            <div className="my-7 grid gap-4 sm:grid-cols-2"><div className="rounded-2xl border border-red-200 bg-red-50 p-5"><p className="font-semibold text-red-800">Target &lt; 8</p><p className="mt-2 text-sm text-slate-600">Bỏ toàn bộ nửa bên phải.</p></div><div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5"><p className="font-semibold text-emerald-800">Target &gt; 8</p><p className="mt-2 text-sm text-slate-600">Bỏ toàn bộ nửa bên trái.</p></div></div>
            <InfoBox type="important" title="Điểm cốt lõi">Mỗi lần kiểm tra, chúng ta không chỉ kiểm tra một phần tử. Chúng ta dùng phần tử đó để <strong>loại bỏ một nửa search space</strong>.</InfoBox>
          </section>

          <Divider />
          <section id="search-space" className="scroll-mt-24">
            <SectionTitle number="05" title="Search Space là gì?" description="Hiểu Search Space sẽ giúp bạn hiểu Binary Search sâu hơn rất nhiều." />
            <p className="text-sm leading-7 text-slate-600">Search Space là tập hợp những vị trí hoặc giá trị <strong>vẫn còn có khả năng chứa đáp án</strong>.</p>
            <div className="my-5 grid gap-3 sm:grid-cols-3">{[["Original", "n"], ["After 1 step", "n / 2"], ["After 2 steps", "n / 4"]].map(([label, value]) => <div key={label} className="rounded-xl border border-slate-200 bg-white p-4 text-center"><p className="text-xs text-slate-400">{label}</p><p className="mt-2 font-mono font-bold">{value}</p></div>)}</div>
            <p className="text-sm leading-7 text-slate-600">Sau k bước, vùng tìm kiếm còn khoảng n / 2<sup>k</sup>. Khi còn khoảng một phần tử, n / 2<sup>k</sup> = 1, suy ra k ≈ log₂(n).</p>
            <div className="my-5 rounded-2xl bg-slate-950 p-6 text-center font-mono text-xl text-white">k ≈ log₂(n)</div>
            <InfoBox title="Đây là lý do Binary Search là O(log n)">Không phải vì chúng ta có một vòng <code>while</code> đặc biệt. Nó là <strong>O(log n)</strong> vì sau mỗi bước search space bị chia đôi.</InfoBox>
          </section>

          <Divider />
          <section id="left-right-mid" className="scroll-mt-24">
            <SectionTitle number="06" title="Left, Right và Mid" description="Binary Search thường được cài đặt bằng ba vị trí quan trọng." />
            <div className="my-7 overflow-x-auto rounded-2xl border border-slate-200 bg-white p-5"><div className="flex min-w-[650px] gap-2">{[2, 4, 6, 8, 10, 12, 14].map((number, index) => <div key={number} className="relative flex-1"><div className={`rounded-xl border p-4 text-center font-mono font-bold ${index === 0 ? "border-sky-300 bg-sky-50 text-sky-800" : index === 6 ? "border-violet-300 bg-violet-50 text-violet-800" : index === 3 ? "border-amber-300 bg-amber-50 text-amber-800" : "border-slate-200 bg-slate-50"}`}>{number}</div><div className="mt-2 text-center text-[10px] font-semibold">{index === 0 ? <span className="text-sky-700">LEFT</span> : index === 3 ? <span className="text-amber-700">MID</span> : index === 6 ? <span className="text-violet-700">RIGHT</span> : null}</div></div>)}</div></div>
            <DataCards items={[["left", "Điểm bắt đầu của Search Space."], ["mid", "Vị trí chính giữa mà chúng ta kiểm tra."], ["right", "Điểm kết thúc của Search Space."]]} />
            <div className="space-y-3"><StepCard number="01" title="nums[mid] == target">Tìm thấy target → trả về <code>mid</code>.</StepCard><StepCard number="02" title="nums[mid] &lt; target">Vì Array tăng dần, mọi phần tử bên trái mid đều nhỏ hơn target. Bỏ bên trái và đặt <code>left</code> sau mid.</StepCard><StepCard number="03" title="nums[mid] &gt; target">Vì Array tăng dần, mọi phần tử bên phải mid đều lớn hơn target. Bỏ bên phải và đặt <code>right</code> trước mid.</StepCard></div>
          </section>

          <Divider />
          <section id="mid" className="scroll-mt-24">
            <SectionTitle number="07" title="Tính Mid đúng cách" description="Một dòng code nhỏ nhưng bạn nên hình thành thói quen viết an toàn." />
            <p className="text-sm leading-7 text-slate-600">Cách dễ nghĩ:</p><CodeBlock code={`int mid = (left + right) / 2;`} />
            <p className="text-sm leading-7 text-slate-600">Công thức trên thường cho ra kết quả đúng, nhưng nếu <code>left</code> và <code>right</code> là những số nguyên rất lớn, phép cộng <code>left + right</code> có thể gây overflow.</p>
            <p className="mt-5 text-sm leading-7 text-slate-600">Cách an toàn hơn là:</p><div className="my-5 rounded-2xl bg-slate-950 p-6 text-center font-mono text-xl text-white">left + (right - left) / 2</div><CodeBlock code={midCode} />
            <InfoBox type="tip" title="Tại sao công thức vẫn cho cùng một kết quả?">Về mặt toán học, <code>left + (right - left) / 2</code> tương đương với trung điểm giữa left và right, nhưng tránh phải cộng trực tiếp hai số lớn.</InfoBox>
          </section>

          <Divider />
          <section id="dry-run-basic" className="scroll-mt-24">
            <SectionTitle number="08" title="Dry Run Binary Search cơ bản" description="Trước khi giải bài, hãy chạy thuật toán bằng tay." />
            <p className="text-sm leading-7 text-slate-600">Array: <code>[2, 4, 6, 8, 10, 12, 14, 16, 18]</code>. Target = <strong>14</strong>.</p>
            <div className="my-6 overflow-x-auto"><div className="flex min-w-[620px] gap-2">{[2, 4, 6, 8, 10, 12, 14, 16, 18].map((number) => <div key={number} className="flex-1 rounded-xl border border-slate-200 bg-white p-4 text-center font-mono font-bold">{number}</div>)}</div></div>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 bg-white"><table className="w-full min-w-[700px] text-sm"><thead className="bg-slate-50"><tr>{["Step", "Left", "Mid", "Right", "nums[mid]", "Action"].map((title) => <th key={title} className="border-b border-slate-200 px-4 py-4 text-left">{title}</th>)}</tr></thead><tbody>{[["1", "0", "4", "8", "10", "10 < 14 → left = mid + 1"], ["2", "5", "6", "8", "14", "Found → return 6"]].map((row) => <tr key={row[0]}>{row.map((value, i) => <td key={i} className="border-b border-slate-100 px-4 py-4 text-slate-600">{value}</td>)}</tr>)}</tbody></table></div>
            <div className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 p-5"><p className="text-sm font-semibold text-emerald-800">Chỉ cần 2 lần kiểm tra thay vì đi qua toàn bộ Array.</p></div>
          </section>

          <Divider />
          <section id="problem" className="scroll-mt-24">
            <SectionTitle number="09" title="Bài toán Binary Search" description="Đây chính là bài toán bạn cần giải trong trang này." />
            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8"><div className="flex flex-wrap items-start justify-between gap-4"><div><p className="text-xs font-bold uppercase tracking-wider text-slate-400">Problem</p><h3 className="mt-3 text-2xl font-bold tracking-tight">Binary Search</h3></div><span className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700">Easy</span></div><div className="mt-6 space-y-5 text-sm leading-7 text-slate-600 sm:text-base"><p>Cho một mảng các số nguyên <code>nums</code> không trùng nhau, được sắp xếp tăng dần, cùng một số nguyên <code>target</code>.</p><p>Hãy tìm <code>target</code> trong <code>nums</code>. Nếu tồn tại, trả về index của nó. Nếu không tồn tại, trả về <code>-1</code>.</p><p className="font-semibold text-slate-900">Yêu cầu quan trọng:</p><div className="rounded-2xl bg-slate-950 p-5 text-center font-mono text-lg font-bold text-white">O(log n)</div></div></div>
            <h3 className="mt-8 text-xl font-bold">Những thông tin đề bài đã cho</h3><DataCards items={[["Distinct", "Không có hai phần tử giống nhau."], ["Sorted", "Được sắp xếp theo thứ tự tăng dần."], ["Complexity", "O(log n)"]]} />
            <InfoBox type="important" title="Đề bài đang gần như chỉ thẳng kỹ thuật">Hai từ khóa quan trọng nhất là <strong>sorted</strong> + <strong>O(log n)</strong>. Đây là dấu hiệu cực mạnh cho Binary Search.</InfoBox>
          </section>

          <Divider />
          <section id="brute-force" className="scroll-mt-24">
            <SectionTitle number="10" title="Vì sao Linear Search không đủ?" description="Hãy thử giải bài toán theo cách đơn giản trước." />
            <CodeBlock code={linearSearchCode} />
            <p className="text-sm leading-7 text-slate-600">Code này đúng về mặt kết quả. Nhưng complexity là O(n), không đáp ứng yêu cầu O(log n).</p>
            <div className="my-5 rounded-2xl border border-red-200 bg-red-50 p-5 text-center"><p className="font-mono text-2xl font-bold text-red-700">O(n)</p><p className="mt-2 text-sm text-slate-600">Không đáp ứng yêu cầu O(log n).</p></div>
            <InfoBox title="Điều bài toán đang bắt chúng ta làm">Vì đề bài yêu cầu <strong>O(log n)</strong>, chúng ta cần một cách mà sau mỗi bước có thể loại bỏ một phần rất lớn của dữ liệu. Vì Array đã được sort, đó chính là điều Binary Search cho phép.</InfoBox>
          </section>

          <Divider />
          <section id="binary-solution" className="scroll-mt-24">
            <SectionTitle number="11" title="Giải bằng Binary Search" description="Bây giờ biến lý thuyết thành thuật toán." />
            <h3 className="text-xl font-bold">Bước 1 — Xác định Search Space</h3><p className="mt-3 text-sm leading-7 text-slate-600">Ban đầu toàn bộ Array đều có khả năng chứa target.</p><CodeBlock code={`int left = 0;\nint right = numsSize - 1;`} />
            <h3 className="mt-8 text-xl font-bold">Bước 2 — Lấy phần tử ở giữa</h3><CodeBlock code={midCode} />
            <h3 className="mt-8 text-xl font-bold">Bước 3 — So sánh</h3><div className="mt-5 space-y-3"><div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5"><p className="font-mono font-bold text-emerald-800">nums[mid] == target</p><p className="mt-2 text-sm text-slate-600">Tìm thấy → trả về mid.</p></div><div className="rounded-2xl border border-sky-200 bg-sky-50 p-5"><p className="font-mono font-bold text-sky-800">nums[mid] &lt; target</p><p className="mt-2 text-sm text-slate-600">Target lớn hơn giá trị giữa → target chỉ có thể nằm bên phải.</p></div><div className="rounded-2xl border border-violet-200 bg-violet-50 p-5"><p className="font-mono font-bold text-violet-800">nums[mid] &gt; target</p><p className="mt-2 text-sm text-slate-600">Target nhỏ hơn giá trị giữa → target chỉ có thể nằm bên trái.</p></div></div>
            <h3 className="mt-8 text-xl font-bold">Bước 4 — Thu hẹp Search Space</h3><CodeBlock code={`if (nums[mid] < target) {\n    left = mid + 1;\n} else {\n    right = mid - 1;\n}`} />
            <p className="text-sm leading-7 text-slate-600">Chú ý <strong>+1</strong> và <strong>-1</strong>. Chúng ta đã kiểm tra mid rồi, nên mid không cần nằm trong Search Space tiếp theo nữa.</p>
            <InfoBox type="important" title="Đây chính là Binary Search"><strong>Check giữa → xác định target nằm ở nửa nào → bỏ nửa còn lại → lặp lại.</strong></InfoBox>
          </section>

          <Divider />
          <section id="dry-run-solution" className="scroll-mt-24">
            <SectionTitle number="12" title="Dry Run bài toán" description="Chúng ta sẽ chạy đúng bài toán bằng tay trước khi đọc code." />
            <div className="rounded-2xl border border-slate-200 bg-white p-5"><p className="text-xs font-bold uppercase tracking-wider text-slate-400">Input</p><p className="mt-3 font-mono text-lg font-bold">nums = [-1, 0, 3, 5, 9, 12]</p><p className="mt-3 font-mono text-lg font-bold">target = 9</p></div>
            <h3 className="mt-8 text-xl font-bold">Lần 1</h3><div className="my-6 overflow-x-auto"><div className="flex min-w-[620px] gap-2">{[-1, 0, 3, 5, 9, 12].map((number, index) => <SearchCell key={number} value={number} left={index === 0} right={index === 5} mid={index === 2} active={index === 2} />)}</div></div>
            <div className="my-5 rounded-2xl border border-slate-200 bg-white p-5"><p className="font-mono text-sm">left = 0<br />right = 5<br />mid = 2<br />nums[2] = 3</p><p className="mt-4 text-sm leading-6 text-slate-600">3 nhỏ hơn 9 → target phải nằm bên phải.</p></div><div className="my-5 rounded-2xl bg-slate-950 p-5 text-center font-mono text-sm text-white">left = mid + 1 = 3</div>
            <h3 className="mt-8 text-xl font-bold">Lần 2</h3><div className="my-6 overflow-x-auto"><div className="flex min-w-[620px] gap-2">{[-1, 0, 3, 5, 9, 12].map((number, index) => <SearchCell key={number} value={number} left={index === 3} right={index === 5} mid={index === 4} active={index === 4} />)}</div></div>
            <div className="my-5 rounded-2xl border border-slate-200 bg-white p-5"><p className="font-mono text-sm">left = 3<br />right = 5<br />mid = 4<br />nums[4] = 9</p><p className="mt-4 flex items-center gap-2 text-sm font-semibold text-emerald-700"><CheckCircle2 size={17} /> nums[mid] == target → return 4</p></div>
            <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-5 text-center"><p className="text-xs font-bold uppercase tracking-wider text-emerald-600">Answer</p><p className="mt-3 font-mono text-2xl font-bold text-emerald-800">4</p></div>
            <h3 className="mt-10 text-xl font-bold">Trường hợp không tìm thấy</h3><p className="mt-3 text-sm leading-7 text-slate-600">Với target = 2, Search Space sẽ liên tục thu hẹp cho tới khi <code>left &gt; right</code>. Khi điều này xảy ra, không còn vị trí nào có thể chứa target nữa, kết quả là <code>-1</code>.</p>
          </section>

          <Divider />
          <section id="code" className="scroll-mt-24">
            <SectionTitle number="13" title="Code hoàn chỉnh" description="Lời giải trực tiếp cho bài toán Binary Search bằng C, Java và Python." />
            <CodeBlock code={binarySearchFinalCode} />
            <InfoBox type="tip" title="Tư duy của toàn bộ code">Code thực chất chỉ làm 4 việc:<br /><br /><strong>1.</strong> Tạo Search Space bằng left và right.<br /><strong>2.</strong> Tính mid.<br /><strong>3.</strong> So sánh nums[mid] với target.<br /><strong>4.</strong> Giữ lại nửa có khả năng chứa target.</InfoBox>
            <h3 className="mt-8 text-xl font-bold">Phiên bản đệ quy</h3><p className="mt-3 text-sm leading-7 text-slate-600">Binary Search cũng có thể viết bằng recursion. Mỗi lần gọi chỉ xử lý một nửa Search Space còn lại.</p><CodeBlock code={binaryRecursiveCode} />
          </section>

          <Divider />
          <section id="explain-code" className="scroll-mt-24">
            <SectionTitle number="14" title="Giải thích từng dòng" description="Hiểu từng dòng code sẽ giúp bạn tự viết Binary Search thay vì học thuộc." />
            <StepCard number="01" title="Khởi tạo left"> <code>left</code> bắt đầu tại index đầu tiên.</StepCard><CodeBlock code={`int left = 0;`} />
            <StepCard number="02" title="Khởi tạo right">Vì index cuối cùng là <code>numsSize - 1</code>, right bắt đầu ở đó.</StepCard><CodeBlock code={`int right = numsSize - 1;`} />
            <StepCard number="03" title="Điều kiện while">Còn Search Space khi <code>left &lt;= right</code>. Nếu <code>left &gt; right</code>, Search Space đã rỗng.</StepCard><CodeBlock code={`while (left <= right) {\n    // tiếp tục tìm kiếm\n}`} />
            <StepCard number="04" title="Tính mid">Lấy vị trí chính giữa của Search Space.</StepCard><CodeBlock code={midCode} />
            <StepCard number="05" title="Kiểm tra target">Nếu phần tử giữa chính là target, chúng ta đã tìm thấy đáp án.</StepCard><CodeBlock code={`if (nums[mid] == target) {\n    return mid;\n}`} />
            <StepCard number="06" title="Target nằm bên phải">Nếu <code>nums[mid] &lt; target</code>, Array tăng dần nên target không thể nằm ở bên trái hoặc tại mid.</StepCard><CodeBlock code={`if (nums[mid] < target) {\n    left = mid + 1;\n}`} />
            <StepCard number="07" title="Target nằm bên trái">Trường hợp còn lại, nums[mid] lớn hơn target. Target chỉ có thể nằm bên trái mid.</StepCard><CodeBlock code={`else {\n    right = mid - 1;\n}`} />
            <StepCard number="08" title="Không tìm thấy">Nếu vòng lặp kết thúc, Search Space đã rỗng.</StepCard><CodeBlock code={`return -1;`} />
            <InfoBox type="important" title="Một lỗi logic rất phổ biến">Khi đã kiểm tra <code>mid</code> mà không tìm thấy, đừng để mid tồn tại trong Search Space tiếp theo. Vì vậy dùng <code>left = mid + 1</code> và <code>right = mid - 1</code>.</InfoBox>
          </section>

          <Divider />
          <section id="complexity" className="scroll-mt-24">
            <SectionTitle number="15" title="Complexity" description="Đây là phần giúp bạn hiểu tại sao bài toán yêu cầu O(log n)." />
            <Complexity time="O(log n)" space="O(1)" timeDescription="Mỗi vòng lặp loại bỏ khoảng một nửa Search Space." spaceDescription="Chỉ dùng left, right, mid." />
            <h3 className="text-xl font-bold">So sánh với Linear Search</h3>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 bg-white"><table className="w-full min-w-[650px] text-sm"><thead className="bg-slate-50"><tr>{["Algorithm", "Mỗi bước loại bỏ", "Complexity"].map((title) => <th key={title} className="border-b border-slate-200 px-5 py-4 text-left">{title}</th>)}</tr></thead><tbody><tr><td className="border-b border-slate-100 px-5 py-4 font-semibold">Linear Search</td><td className="border-b border-slate-100 px-5 py-4 text-slate-600">Có thể chỉ loại 1 phần tử</td><td className="border-b border-slate-100 px-5 py-4 font-mono">O(n)</td></tr><tr><td className="px-5 py-4 font-semibold">Binary Search</td><td className="px-5 py-4 text-slate-600">Khoảng một nửa Search Space</td><td className="px-5 py-4 font-mono">O(log n)</td></tr></tbody></table></div>
            <InfoBox type="tip" title="Nhớ bản chất thay vì nhớ công thức"><strong>O(n)</strong> → mỗi bước loại được rất ít dữ liệu.<br /><strong>O(log n)</strong> → mỗi bước loại được một phần rất lớn, thường là một nửa.</InfoBox>
          </section>

          <Divider />
          <section id="edge-cases" className="scroll-mt-24">
            <SectionTitle number="16" title="Edge Cases" description="Các trường hợp nhỏ nhưng rất dễ làm Binary Search sai." />
            <div className="space-y-4">
              <ResultState success title="Array rỗng">nums = []; right = -1, while không chạy → return -1.</ResultState>
              <ResultState success title="Chỉ có một phần tử">nums = [5]. left và right cùng bằng 0.</ResultState>
              <ResultState success title="Target ở đầu">nums = [2, 4, 6, 8], target = 2.</ResultState>
              <ResultState success title="Target ở cuối">nums = [2, 4, 6, 8], target = 8.</ResultState>
              <ResultState title="Target không tồn tại">nums = [2, 4, 6, 8], target = 5. Cuối cùng left sẽ vượt right.</ResultState>
            </div>
          </section>

          <Divider />
          <section id="mistakes" className="scroll-mt-24">
            <SectionTitle number="17" title="Các lỗi thường gặp" description="Binary Search nổi tiếng là dễ hiểu nhưng dễ code sai." />
            <div className="space-y-4">
              <ResultState title="Dùng while sai điều kiện"><code>left &lt;= right</code> thường dùng với Search Space inclusive. Nếu dùng <code>left &lt; right</code> mà không điều chỉnh logic, bạn có thể bỏ qua trường hợp chỉ còn một phần tử.</ResultState>
              <ResultState title="Viết left = mid hoặc right = mid">Điều này có thể khiến left hoặc right không thay đổi và vòng lặp chạy vô hạn. Sau khi check mid, nên dùng <code>mid + 1</code> hoặc <code>mid - 1</code>.</ResultState>
              <ResultState title="Quên rằng Array phải có tính chất phù hợp">Không thể lấy một Array bất kỳ rồi tùy tiện loại bỏ một nửa dữ liệu. Phải có property đảm bảo điều đó là an toàn.</ResultState>
              <ResultState success title="Chỉ học thuộc template">Template Binary Search chỉ là điểm bắt đầu. Các bài nâng cao có thể dùng Search Space khác, điều kiện khác và Binary Search trên answer.</ResultState>
            </div>
            <InfoBox type="important" title="Một nguyên tắc rất mạnh">Sau mỗi vòng lặp, hãy tự hỏi: <strong>"Search Space của tôi có thực sự nhỏ hơn trước không?"</strong> Nếu câu trả lời là không, logic Binary Search có thể đang có vấn đề.</InfoBox>
          </section>

          <Divider />
          <section id="recognition" className="scroll-mt-24">
            <SectionTitle number="18" title="Cách nhận diện Binary Search" description="Mục tiêu cuối cùng không phải nhớ một đoạn code mà là nhìn đề và nhận ra pattern." />
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-6"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100"><Search size={19} /></div><h3 className="mt-4 text-lg font-bold">Search</h3><p className="mt-2 text-sm leading-6 text-slate-600">Đề bài yêu cầu tìm một giá trị hoặc vị trí.</p></div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100"><CheckCircle2 size={19} /></div><h3 className="mt-4 text-lg font-bold">Sorted</h3><p className="mt-2 text-sm leading-6 text-slate-600">Dữ liệu có thứ tự và cho phép loại bỏ một phía.</p></div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100"><Clock3 size={19} /></div><h3 className="mt-4 text-lg font-bold">O(log n)</h3><p className="mt-2 text-sm leading-6 text-slate-600">Đề bài hoặc yêu cầu gợi ý việc chia search space theo cấp số nhân.</p></div>
            </div>
            <h3 className="mt-10 text-xl font-bold">Hai dấu hiệu cực mạnh</h3><DataCards items={[["Clue #1 — Sorted Array", "Dữ liệu đã sắp xếp thường cho phép suy luận rằng đáp án phải nằm về một phía."], ["Clue #2 — O(log n)", "Đây gần như là lời gợi ý trực tiếp rằng search space cần được giảm theo cấp số nhân."]]} />
            <InfoBox type="tip" title="Nhưng đừng hiểu quá máy móc">Không phải cứ thấy "sorted" là chắc chắn dùng Binary Search. Câu hỏi quan trọng vẫn là: <strong>"Tôi có thể dùng một phép kiểm tra để loại bỏ một phần Search Space một cách chắc chắn không?"</strong></InfoBox>
            <h3 className="mt-8 text-xl font-bold">Binary Search không chỉ dùng cho Array</h3><p className="mt-3 text-sm leading-7 text-slate-600">Khi đã hiểu bản chất "chia Search Space", bạn sẽ gặp Binary Search ở nhiều dạng khác:</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">{["Tìm một phần tử trong Sorted Array", "Tìm boundary / first true", "Tìm first hoặc last occurrence", "Binary Search on Answer"].map((item) => <div key={item} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4"><Check size={17} className="shrink-0 text-emerald-600" /><span className="text-sm text-slate-600">{item}</span></div>)}</div>
          </section>

          <Divider />
          <section id="summary" className="scroll-mt-24">
            <SectionTitle number="19" title="Tổng kết Binary Search" description="Nếu chỉ nhớ một vài điều sau trang này, hãy nhớ những nguyên tắc dưới đây." />
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-6"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100"><Search size={20} /></div><h3 className="mt-4 text-lg font-bold">Search Space</h3><p className="mt-2 text-sm leading-6 text-slate-600">Luôn xác định rõ phần nào của dữ liệu vẫn còn có khả năng chứa đáp án.</p></div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100"><GitBranch size={20} /></div><h3 className="mt-4 text-lg font-bold">Mid</h3><p className="mt-2 text-sm leading-6 text-slate-600">Luôn kiểm tra phần tử giữa rồi quyết định giữ lại nửa nào.</p></div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100"><Zap size={20} /></div><h3 className="mt-4 text-lg font-bold">Half</h3><p className="mt-2 text-sm leading-6 text-slate-600">Mỗi bước phải loại bỏ được khoảng một nửa Search Space.</p></div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100"><Clock3 size={20} /></div><h3 className="mt-4 text-lg font-bold">O(log n)</h3><p className="mt-2 text-sm leading-6 text-slate-600">Complexity xuất hiện vì Search Space giảm theo cấp số nhân.</p></div>
            </div>
            <h3 className="mt-10 text-xl font-bold">Template cần nhớ</h3><CodeBlock code={binaryBasicCode} />
            <InfoBox type="important" title="Mental model">Đừng nhớ Binary Search là <strong>"có một template code như này"</strong>. Hãy nhớ: <strong>"Tôi có một Search Space. Tôi kiểm tra điểm giữa. Kết quả cho tôi biết phải bỏ một nửa nào."</strong></InfoBox>
            <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white sm:p-8"><p className="text-xs font-bold uppercase tracking-wider text-slate-500">Mental model</p><h3 className="mt-3 text-2xl font-bold">Binary Search trong một dòng</h3><div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row"><div className="rounded-xl bg-white/10 px-4 py-3 font-mono text-sm">Search Space</div><ArrowRight size={18} className="text-slate-500" /><div className="rounded-xl bg-white/10 px-4 py-3 font-mono text-sm">Mid</div><ArrowRight size={18} className="text-slate-500" /><div className="rounded-xl bg-white/10 px-4 py-3 font-mono text-sm">Keep 1/2</div><ArrowRight size={18} className="text-slate-500" /><div className="rounded-xl bg-emerald-500/20 px-4 py-3 font-mono text-sm text-emerald-300">Repeat</div></div></div>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link to="/algorithms/two-pointer" className="group flex flex-1 items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-slate-300 hover:shadow-lg"><div className="flex items-center gap-3"><ArrowLeft size={18} className="text-slate-400 transition-transform group-hover:-translate-x-1" /><div><p className="text-xs font-bold uppercase tracking-wider text-slate-400">Previous</p><p className="mt-1 font-semibold">Two Pointer</p></div></div></Link>
              <Link to="/algorithms/sliding-window" className="group flex flex-1 items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-slate-300 hover:shadow-lg"><div><p className="text-xs font-bold uppercase tracking-wider text-slate-400">Next</p><p className="mt-1 font-semibold">Sliding Window</p></div><ArrowRight size={18} className="text-slate-400 transition-transform group-hover:translate-x-1" /></Link>
            </div>
          </section>
        </main>
      </div>

      <section className="border-t border-slate-200 bg-white lg:hidden"><div className="mx-auto max-w-7xl px-4 py-8 sm:px-6"><div className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400"><List size={14} /> Nội dung</div><div className="grid gap-2 sm:grid-cols-2">{toc.map((item) => <a key={item.id} href={`#${item.id}`} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600 transition hover:border-slate-300 hover:bg-white hover:text-slate-900">{item.label}</a>)}</div></div></section>
      <footer className="border-t border-slate-200 bg-white"><div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8"><span>Algorithm Learning Lab</span><span>Binary Search</span></div></footer>
    </div>
  );
}
