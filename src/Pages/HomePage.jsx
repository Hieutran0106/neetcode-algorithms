import {
  ArrowRight,
  Binary,
  Braces,
  CheckCircle2,
  ChevronRight,
  GitBranch,
  GitFork,
  Layers3,
  Link2,
  Network,
  Search,
  SquareStack,
  Timer,
} from "lucide-react";

import { Link } from "react-router-dom";

const algorithmGroups = [
  {
    number: "01",
    title: "Array & Hashing",
    description:
      "Nền tảng quan trọng để xử lý dữ liệu dạng mảng, đếm tần suất, tìm kiếm phần tử và tối ưu truy xuất dữ liệu.",
    icon: Braces,
    difficulty: "Cơ bản",
    path: "/algorithms/array-hashing",
    concepts: ["Array", "Hash Map"],
  },
  {
    number: "02",
    title: "Stack",
    description:
      "Tìm hiểu cấu trúc LIFO và cách sử dụng Stack để xử lý dấu ngoặc, lịch sử thao tác và các bài toán tuần tự.",
    icon: Layers3,
    difficulty: "Cơ bản",
    path: "/algorithms/stack",
    concepts: ["FIFO", "Monotonic Stack"],
  },
  {
    number: "03",
    title: "Two Pointer",
    description:
      "Một kỹ thuật cực kỳ phổ biến giúp giảm độ phức tạp của nhiều bài toán mảng và chuỗi từ O(n²) xuống O(n).",
    icon: GitBranch,
    difficulty: "Cơ bản",
    path: "/algorithms/two-pointer",
    concepts: ["Left / Right", "Fast / Slow"],
  },
  {
    number: "04",
    title: "Binary Search",
    description:
      "Học cách tìm kiếm trên dữ liệu đã được sắp xếp bằng cách liên tục chia đôi không gian tìm kiếm.",
    icon: Binary,
    difficulty: "Trung bình",
    path: "/algorithms/binary-search",
    concepts: ["Sorted Array", "Search Space"],
  },
  {
    number: "05",
    title: "Sliding Window",
    description:
      "Kỹ thuật duy trì một cửa sổ dữ liệu để giải quyết hiệu quả các bài toán substring, subarray và khoảng liên tiếp.",
    icon: Search,
    difficulty: "Trung bình",
    path: "/algorithms/sliding-window",
    concepts: ["Window", "Subarray", "Substring"],
  },
  {
    number: "06",
    title: "Linked List",
    description:
      "Nắm vững cách hoạt động của danh sách liên kết, thao tác Node và các kỹ thuật đảo ngược hoặc phát hiện chu kỳ.",
    icon: Link2,
    difficulty: "Trung bình",
    path: "/algorithms/linked-list",
    concepts: ["Node", "Pointer"],
  },
  {
    number: "07",
    title: "Trees",
    description:
      "Khám phá cây nhị phân, Binary Search Tree và các kỹ thuật DFS, BFS để xử lý cấu trúc dữ liệu phân cấp.",
    icon: SquareStack,
    difficulty: "Trung bình",
    path: "/algorithms/trees",
    concepts: ["BST", "Balance Tree"],
  },
  {
    number: "08",
    title: "Tries",
    description:
      "Tối ưu tra cứu chuỗi và tìm kiếm tiền tố (Prefix Tree), ứng dụng trong gợi ý từ tự động và kiểm tra chính tả.",
    icon: GitFork, // Hoặc dùng Network / FolderTree
    difficulty: "Trung bình",
    path: "/algorithms/tries",
    concepts: ["Prefix Tree", "Autocomplete"],
  },
  {
    number: "09",
    title: "Backtracking",
    description:
      "Áp dụng kỹ thuật Quay lui để duyệt không gian lời giải, kết hợp Cắt tỉa nhánh cận (Pruning) cho các bài toán tổ hợp.",
    icon: GitBranch, // Hoặc dùng Undo2 / RotateCcw
    difficulty: "Khó",
    path: "/algorithms/backtracking",
    concepts: ["Recursion", "Pruning"],
  },
  {
    number: "10",
    title: "Heap / Priority Queue",
    description:
      "Lấy phần tử nhỏ nhất / lớn nhất trong O(log n): Top K, Two Heaps, gộp K danh sách đã sắp xếp.",
    icon: SquareStack,
    difficulty: "Trung bình",
    path: "/algorithms/heap",
    concepts: ["Min / Max Heap", "Top K"],
  },
  {
    number: "11",
    title: "Intervals",
    description:
      "Sắp xếp rồi quét một lần để gộp, chèn, xóa interval chồng nhau và đếm số phòng họp.",
    icon: Layers3,
    difficulty: "Trung bình",
    path: "/algorithms/intervals",
    concepts: ["Merge", "Sweep Line"],
  },
  {
    number: "12",
    title: "Greedy",
    description:
      "Chọn phương án tốt nhất ở mỗi bước và không quay đầu: Kadane, Jump Game, Gas Station.",
    icon: CheckCircle2,
    difficulty: "Trung bình",
    path: "/algorithms/greedy",
    concepts: ["Local Optimum", "Kadane"],
  },
  {
    number: "13",
    title: "Graphs",
    description:
      "DFS, BFS, Multi-source BFS, Topological Sort và Union-Find cho grid và đồ thị tổng quát.",
    icon: Network,
    difficulty: "Khó",
    path: "/algorithms/graphs",
    concepts: ["DFS / BFS", "Union-Find"],
  },
  {
    number: "14",
    title: "Advanced Graphs",
    description:
      "Đồ thị có trọng số: Dijkstra, Bellman-Ford, Minimum Spanning Tree, đường Euler.",
    icon: GitFork,
    difficulty: "Khó",
    path: "/algorithms/advanced-graphs",
    concepts: ["Dijkstra", "MST"],
  },
  {
    number: "15",
    title: "1-D Dynamic Programming",
    description:
      "Đệ quy + nhớ kết quả: Climbing Stairs, House Robber, Coin Change, LIS, Word Break.",
    icon: Braces,
    difficulty: "Khó",
    path: "/algorithms/dp-1d",
    concepts: ["Memoization", "dp[i]"],
  },
  {
    number: "16",
    title: "2-D Dynamic Programming",
    description:
      "Bảng hai chiều cho lưới, hai chuỗi (LCS, Edit Distance) và Knapsack.",
    icon: Timer,
    difficulty: "Khó",
    path: "/algorithms/dp-2d",
    concepts: ["dp[i][j]", "Knapsack"],
  },
  {
    number: "17",
    title: "Bit Manipulation",
    description:
      "XOR, n & (n-1), dịch bit và bitmask — các trick O(1) space cho bài toán nhị phân.",
    icon: Binary,
    difficulty: "Trung bình",
    path: "/algorithms/bit-manipulation",
    concepts: ["XOR", "Bitmask"],
  },
  {
    number: "18",
    title: "Math & Geometry",
    description:
      "Xoay / xoắn ốc ma trận, số học với carry, lũy thừa nhanh và hình học tọa độ.",
    icon: Search,
    difficulty: "Trung bình",
    path: "/algorithms/math-geometry",
    concepts: ["Matrix", "Fast Power"],
  },
];

const learningSteps = [
  {
    step: "01",
    title: "Hiểu bản chất",
    description:
      "Bắt đầu bằng việc hiểu cấu trúc dữ liệu và bài toán mà thuật toán được sinh ra để giải quyết.",
  },
  {
    step: "02",
    title: "Học pattern",
    description:
      "Nhận diện những pattern thường gặp thay vì ghi nhớ hàng chục lời giải riêng lẻ.",
  },
  {
    step: "03",
    title: "Thực hành",
    description:
      "Áp dụng pattern vào những bài toán thực tế và từng bước tối ưu complexity.",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div className="absolute inset-x-0 top-0 -z-0 h-96 bg-[radial-gradient(circle_at_top,_rgba(15,23,42,0.07),_transparent_65%)]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 pb-24 pt-20 sm:px-6 sm:pt-24 lg:px-8 lg:pb-28">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-2 text-sm font-medium text-slate-600">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />18 patterns
              quan trọng để học DSA
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Học thuật toán bằng
              <span className="block text-slate-500">cách tư duy.</span>
            </h1>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/algorithms/array-hashing"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
              >
                Bắt đầu học
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>

              <a
                href="#algorithms"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Xem các chủ đề
                <ChevronRight size={17} />
              </a>
            </div>
          </div>

          {/* Hero visual */}
          <div className="mx-auto mt-16 max-w-4xl">
            <div className="rounded-3xl border border-slate-200 bg-slate-950 p-2 shadow-2xl shadow-slate-300/30">
              <div className="rounded-2xl border border-white/10 bg-slate-900 p-5 sm:p-7">
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-400/80" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                    <span className="h-3 w-3 rounded-full bg-green-400/80" />
                  </div>

                  <span className="text-xs text-slate-500">algorithm.ts</span>
                </div>

                <div className="overflow-x-auto">
                  <pre className="min-w-max font-mono text-sm leading-7 sm:text-[15px]">
                    <code>
                      <span className="text-violet-300">#include</span>
                      <span className="text-slate-300"> </span>
                      <span className="text-emerald-300">&lt;stdio.h&gt;</span>
                      {"\n\n"}
                      <span className="text-sky-300">int</span>
                      <span className="text-slate-300"> </span>
                      <span className="text-yellow-300">main</span>
                      <span className="text-slate-300">() {"{"}</span>
                      {"\n"}
                      <span className="text-slate-300"> </span>
                      <span className="text-slate-400">printf</span>
                      <span className="text-slate-300">(</span>
                      <span className="text-emerald-300">
                        "Hello, World!\n"
                      </span>
                      <span className="text-slate-300">);</span>
                      {"\n"}
                      <span className="text-slate-300"> </span>
                      <span className="text-violet-300">return</span>
                      <span className="text-slate-300"> 0;</span>
                      {"\n"}
                      <span className="text-slate-300">{"}"}</span>
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Overview */}
      <section className="border-b border-slate-200 bg-[#fafafa]">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-12 sm:px-6 md:grid-cols-3 lg:px-8">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
              <Timer size={20} className="text-slate-700" />
            </div>
            <p className="text-2xl font-bold tracking-tight">18</p>
            <p className="mt-1 text-sm text-slate-500">
              nhóm thuật toán & pattern
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
              <Binary size={20} className="text-slate-700" />
            </div>
            <p className="text-2xl font-bold tracking-tight">O(n)</p>
            <p className="mt-1 text-sm text-slate-500">
              tập trung vào tư duy tối ưu
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
              <CheckCircle2 size={20} className="text-slate-700" />
            </div>
            <p className="text-2xl font-bold tracking-tight">Pattern</p>
            <p className="mt-1 text-sm text-slate-500">
              học một cách có hệ thống
            </p>
          </div>
        </div>
      </section>
      {/* Algorithms */}
      <section
        id="algorithms"
        className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24"
      >
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
            Learning path
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Các thuật toán sẽ được học
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600">
            Mỗi chủ đề là một trang riêng, tập trung vào lý thuyết, tư duy,
            pattern, complexity và các bài toán thường gặp.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {algorithmGroups.map((algorithm) => {
            const Icon = algorithm.icon;

            return (
              <Link
                key={algorithm.path}
                to={algorithm.path}
                className="group relative rounded-2xl border border-slate-200 bg-white p-6 transition duration-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/50"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-700 transition group-hover:bg-slate-900 group-hover:text-white">
                    <Icon size={21} />
                  </div>

                  <span className="font-mono text-xs font-medium text-slate-400">
                    {algorithm.number}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-bold tracking-tight text-slate-900">
                  {algorithm.title}
                </h3>

                <p className="mt-3 min-h-[84px] text-sm leading-6 text-slate-600">
                  {algorithm.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {algorithm.concepts.map((concept) => (
                    <span
                      key={concept}
                      className="rounded-lg bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-500"
                    >
                      {concept}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
                  <span className="text-xs font-medium text-slate-400">
                    {algorithm.difficulty}
                  </span>

                  <span className="flex items-center gap-1 text-sm font-semibold text-slate-700 transition group-hover:gap-2">
                    Học ngay
                    <ArrowRight size={15} />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
      \
    </div>
  );
}
