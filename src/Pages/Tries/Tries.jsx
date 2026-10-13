import React from "react";
import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  Code2,
  GitBranch,
  List,
  Network,
  Search,
  TreePine,
} from "lucide-react";
import { Link } from "react-router-dom";
import { toc, sections } from "./data/triesLesson.js";
import { LessonSection } from "./components/TrieUI.jsx";

export default function Tries() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-900">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-4xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs font-bold tracking-wider text-slate-600">
              <TreePine size={14} /> NEETCODE · TRIES
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Tries
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
              Trie là một cấu trúc dữ liệu chuyên dùng cho{" "}
              <strong>String và Prefix</strong>. Bài này đi từ khái niệm Tree cơ
              bản đến cách Trie lưu từng ký tự, cách Insert, Search, StartsWith
              và cuối cùng là các bài NeetCode quan trọng.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-600">
                <TreePine size={16} /> Trie
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-600">
                <GitBranch size={16} /> Prefix
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-600">
                <Search size={16} /> Search
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-600">
                <Network size={16} /> DFS
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-600">
                <Code2 size={16} /> C · Java · Python
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:px-8">
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
          {toc.map((item, index) => (
            <React.Fragment key={item.id}>
              {sections[item.id] ? (
                <LessonSection section={sections[item.id]} />
              ) : null}
              {index < toc.length - 1 && (
                <div className="my-16 h-px bg-slate-200" />
              )}
            </React.Fragment>
          ))}

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <Link
              to="/algorithms/trees"
              className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-slate-300 hover:shadow-lg"
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
                  <p className="mt-1 font-semibold">Tree</p>
                </div>
              </div>
            </Link>
            <Link
              to="/"
              className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-slate-300 hover:shadow-lg"
            >
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Finish
                </p>
                <p className="mt-1 font-semibold">Tất cả thuật toán</p>
              </div>
              <ArrowRight
                size={18}
                className="text-slate-400 transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </main>
      </div>

      <section className="border-t border-slate-200 bg-white lg:hidden">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
          <div className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400">
            <List size={14} /> Nội dung
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
          <span>Tries · Prefix · DFS · Backtracking</span>
        </div>
      </footer>
    </div>
  );
}
