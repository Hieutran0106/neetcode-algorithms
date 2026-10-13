import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BookOpen, ChevronDown, Github, Menu, X } from "lucide-react";

const algorithms = [
  {
    name: "Array & Hashing",
    path: "/algorithms/array-hashing",
  },
  {
    name: "Stack",
    path: "/algorithms/stack",
  },
  {
    name: "Two Pointer",
    path: "/algorithms/two-pointer",
  },
  {
    name: "Binary Search",
    path: "/algorithms/binary-search",
  },
  {
    name: "Sliding Window",
    path: "/algorithms/sliding-window",
  },
  {
    name: "Linked List",
    path: "/algorithms/linked-list",
  },
  {
    name: "Trees",
    path: "/algorithms/trees",
  },
  {
    name: "Tries",
    path: "/algorithms/tries",
  },
  {
    name: "Backtracking",
    path: "/algorithms/backtracking",
  },
  {
    name: "Heap / Priority Queue",
    path: "/algorithms/heap",
  },
  {
    name: "Intervals",
    path: "/algorithms/intervals",
  },
  {
    name: "Greedy",
    path: "/algorithms/greedy",
  },
  {
    name: "Graphs",
    path: "/algorithms/graphs",
  },
  {
    name: "Advanced Graphs",
    path: "/algorithms/advanced-graphs",
  },
  {
    name: "1-D Dynamic Programming",
    path: "/algorithms/dp-1d",
  },
  {
    name: "2-D Dynamic Programming",
    path: "/algorithms/dp-2d",
  },
  {
    name: "Bit Manipulation",
    path: "/algorithms/bit-manipulation",
  },
  {
    name: "Math & Geometry",
    path: "/algorithms/math-geometry",
  },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [algorithmOpen, setAlgorithmOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          onClick={() => setMobileOpen(false)}
          className="group flex items-center gap-2.5"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-white shadow-sm transition-transform duration-200 group-hover:-translate-y-0.5">
            <BookOpen size={19} strokeWidth={2.2} />
          </div>

          <div className="flex flex-col leading-none">
            <span className="text-[16px] font-bold tracking-tight text-slate-900">
              Algorithm
            </span>
            <span className="text-[12px] font-medium text-slate-500">
              Learning Lab
            </span>
          </div>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `rounded-lg px-4 py-2 text-sm font-medium transition ${
                isActive
                  ? "bg-slate-100 text-slate-900"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`
            }
          >
            Trang chủ
          </NavLink>

          <div className="relative">
            <button
              type="button"
              onClick={() => setAlgorithmOpen((prev) => !prev)}
              className="flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-50 hover:text-slate-900"
            >
              Thuật toán
              <ChevronDown
                size={15}
                className={`transition-transform ${
                  algorithmOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {algorithmOpen && (
              <div className="absolute left-1/2 top-full mt-2 w-64 max-h-[70vh] -translate-x-1/2 overflow-y-auto rounded-2xl border border-slate-200 bg-white p-2 shadow-xl shadow-slate-200/50">
                {algorithms.map((algorithm) => (
                  <Link
                    key={algorithm.path}
                    to={algorithm.path}
                    onClick={() => setAlgorithmOpen(false)}
                    className="block rounded-xl px-3 py-2.5 text-sm text-slate-600 transition hover:bg-slate-50 hover:text-slate-900"
                  >
                    {algorithm.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-50 hover:text-slate-900"
          >
            <Github size={16} />
            Github
          </a>
        </nav>

        {/* Desktop CTA */}
        <Link
          to="/algorithms/array-hashing"
          className="hidden rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800 md:inline-flex"
        >
          Bắt đầu học
        </Link>

        {/* Mobile button */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-700 transition hover:bg-slate-50 md:hidden"
          aria-label="Mở menu"
        >
          {mobileOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      {/* Mobile navigation */}
      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <nav className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
            <div className="space-y-1">
              <NavLink
                to="/"
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `block rounded-xl px-4 py-3 text-sm font-medium ${
                    isActive
                      ? "bg-slate-100 text-slate-900"
                      : "text-slate-600 hover:bg-slate-50"
                  }`
                }
              >
                Trang chủ
              </NavLink>

              <button
                type="button"
                onClick={() => setAlgorithmOpen((prev) => !prev)}
                className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50"
              >
                <span>Thuật toán</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    algorithmOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {algorithmOpen && (
                <div className="ml-2 space-y-1 border-l border-slate-200 pl-3">
                  {algorithms.map((algorithm) => (
                    <Link
                      key={algorithm.path}
                      to={algorithm.path}
                      onClick={() => {
                        setAlgorithmOpen(false);
                        setMobileOpen(false);
                      }}
                      className="block rounded-lg px-3 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    >
                      {algorithm.name}
                    </Link>
                  ))}
                </div>
              )}

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50"
              >
                <Github size={16} />
                Github
              </a>

              <Link
                to="/algorithms/array-hashing"
                onClick={() => setMobileOpen(false)}
                className="mt-3 flex items-center justify-center rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white"
              >
                Bắt đầu học
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
