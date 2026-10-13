import React from "react";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronRight,
  Code2,
  GitBranch,
  GitMerge,
  Lightbulb,
  Link2,
  List,
  RotateCcw,
  Target,
  Trash2,
  X,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  CodeBlock,
  Complexity,
  InfoBox,
  NodeView,
  SectionTitle,
  StepCard,
} from "./components/LinkedListUI.jsx";
import {
  toc,
  nodeCode,
  createNodeCode,
  traversalCode,
  insertHeadCode,
  insertAfterCode,
  deleteCode,
  searchCode,
  reverseCode,
  reverseDetailedCode,
  mergeCode,
  mergeWithoutDummyCode,
} from "./data/linkedListData.js";

export default function LinkedList() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-900">
      {/* Hero */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-4xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs font-bold tracking-wider text-slate-600">
              <Link2 size={14} /> NEETCODE · LINKED LIST
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Linked List
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
              Linked List là cấu trúc dữ liệu giúp bạn hiểu rõ một trong những
              phần quan trọng nhất của lập trình hệ thống:{" "}
              <strong>pointer và memory</strong>. Thay vì lưu các phần tử liên
              tiếp như Array, mỗi Node sẽ giữ dữ liệu và một địa chỉ trỏ tới
              Node tiếp theo.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-600">
                <Link2 size={16} />
                Node
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-600">
                <GitBranch size={16} />
                Pointer
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-600">
                <RotateCcw size={16} />
                Reverse
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-600">
                <Code2 size={16} />C / Java / Python
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:px-8">
        <aside className="hidden lg:block">
          <div className="sticky top-24">
            <div className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400">
              <List size={14} />
              Nội dung
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
          <section id="introduction" className="scroll-mt-24">
            <SectionTitle
              number="00"
              title="Linked List là gì?"
              description="Hãy bắt đầu từ vấn đề mà Linked List được tạo ra để giải quyết."
            />
            <p className="text-sm leading-7 text-slate-600 sm:text-base">
              Trong Array, các phần tử thường được tổ chức theo một dãy liên
              tiếp. Điều này giúp truy cập bằng index rất nhanh nhưng khiến một
              số thao tác chèn hoặc xóa ở giữa trở nên tốn kém.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              Linked List chọn một cách tiếp cận khác:{" "}
              <strong>mỗi phần tử tự biết Node tiếp theo nằm ở đâu.</strong>
            </p>
            <div className="my-8 overflow-x-auto rounded-3xl border border-slate-200 bg-white p-6">
              <div className="flex min-w-[680px] items-center justify-center gap-3">
                {[
                  ["10", "next"],
                  ["20", "next"],
                  ["30", "next"],
                ].map(([value, label], index) => (
                  <React.Fragment key={value}>
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center">
                      <div className="font-mono text-lg font-bold">{value}</div>
                      <div className="mt-2 text-xs text-slate-400">{label}</div>
                    </div>
                    {index !== 2 && (
                      <ArrowRight size={20} className="text-slate-400" />
                    )}
                  </React.Fragment>
                ))}
                <ArrowRight size={20} className="text-slate-400" />
                <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-5 py-5 font-mono text-sm font-bold text-slate-400">
                  NULL
                </div>
              </div>
            </div>
            <InfoBox type="important" title="Định nghĩa đơn giản nhất">
              <strong>
                Linked List là một chuỗi các Node, trong đó mỗi Node chứa dữ
                liệu và thông tin để đi tới Node tiếp theo.
              </strong>
            </InfoBox>
            <p className="text-sm leading-7 text-slate-600">
              Một Node đơn giản có thể hình dung như:
            </p>
            <div className="my-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-sky-200 bg-sky-50 p-6">
                <p className="text-xs font-bold uppercase tracking-wider text-sky-600">
                  Data
                </p>
                <p className="mt-3 font-mono text-2xl font-bold text-sky-800">
                  10
                </p>
                <p className="mt-2 text-sm text-slate-600">
                  Giá trị mà Node lưu.
                </p>
              </div>
              <div className="rounded-2xl border border-violet-200 bg-violet-50 p-6">
                <p className="text-xs font-bold uppercase tracking-wider text-violet-600">
                  Next
                </p>
                <p className="mt-3 font-mono text-2xl font-bold text-violet-800">
                  address
                </p>
                <p className="mt-2 text-sm text-slate-600">
                  Địa chỉ của Node kế tiếp.
                </p>
              </div>
            </div>
          </section>

          <Divider />
          <section id="array-vs-linked-list" className="scroll-mt-24">
            <SectionTitle
              number="01"
              title="Array vs Linked List"
              description="Hiểu sự khác nhau giữa hai cấu trúc sẽ giúp bạn hiểu vì sao Linked List tồn tại."
            />
            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
              <table className="w-full min-w-[760px] text-sm">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="border-b border-slate-200 px-5 py-4 text-left">
                      Đặc điểm
                    </th>
                    <th className="border-b border-slate-200 px-5 py-4 text-left">
                      Array
                    </th>
                    <th className="border-b border-slate-200 px-5 py-4 text-left">
                      Linked List
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Truy cập theo index", "O(1)", "O(n)"],
                    ["Tìm kiếm", "O(n)", "O(n)"],
                    ["Insert ở đầu", "O(n)", "O(1)"],
                    ["Delete sau khi biết Node", "Thường O(n)", "O(1)"],
                    [
                      "Memory",
                      "Liên tiếp",
                      "Các Node có thể nằm ở các vùng nhớ khác nhau",
                    ],
                  ].map(([feature, array, linked]) => (
                    <tr key={feature}>
                      <td className="border-b border-slate-100 px-5 py-4 font-semibold">
                        {feature}
                      </td>
                      <td className="border-b border-slate-100 px-5 py-4 font-mono text-slate-600">
                        {array}
                      </td>
                      <td className="border-b border-slate-100 px-5 py-4 font-mono text-slate-600">
                        {linked}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <InfoBox
              type="tip"
              title="Đừng nghĩ Linked List luôn tốt hơn Array"
            >
              Hai cấu trúc này giải quyết những trade-off khác nhau.
              <br />
              <br />
              Array mạnh ở <strong>random access</strong>.<br />
              Linked List mạnh ở việc{" "}
              <strong>thay đổi liên kết giữa các Node</strong>.
            </InfoBox>
          </section>

          <Divider />
          <section id="node" className="scroll-mt-24">
            <SectionTitle
              number="02"
              title="Node là gì?"
              description="Node là viên gạch nhỏ nhất tạo nên Linked List."
            />
            <p className="text-sm leading-7 text-slate-600 sm:text-base">
              Một Node của Singly Linked List thường có hai thành phần:
            </p>
            <div className="my-7 rounded-3xl border border-slate-200 bg-white p-6">
              <div className="mx-auto grid max-w-md grid-cols-2 overflow-hidden rounded-2xl border border-slate-300">
                <div className="border-r border-slate-300 bg-sky-50 p-6 text-center">
                  <p className="text-xs font-bold uppercase tracking-wider text-sky-600">
                    Data
                  </p>
                  <p className="mt-3 font-mono text-2xl font-bold text-sky-800">
                    10
                  </p>
                </div>
                <div className="bg-violet-50 p-6 text-center">
                  <p className="text-xs font-bold uppercase tracking-wider text-violet-600">
                    Next
                  </p>
                  <p className="mt-3 font-mono text-xl font-bold text-violet-800">
                    →
                  </p>
                </div>
              </div>
            </div>
            <CodeBlock code={nodeCode} />
            <p className="text-sm leading-7 text-slate-600">Dòng:</p>
            <div className="my-4 rounded-xl bg-slate-950 p-4 font-mono text-sm text-slate-300">
              struct ListNode* next;
            </div>
            <p className="text-sm leading-7 text-slate-600">
              nghĩa là Node đang giữ một pointer trỏ tới một{" "}
              <strong>ListNode khác</strong>.
            </p>
            <InfoBox type="important" title="Vòng lặp tự tham chiếu">
              Đây không phải kiểu dữ liệu "Node chứa toàn bộ Node tiếp theo".
              <br />
              <br />
              Nó chỉ chứa <strong>địa chỉ</strong> của Node tiếp theo.
              <br />
              <br />
              Nhờ vậy chúng ta có thể nối rất nhiều Node thành một chuỗi.
            </InfoBox>
          </section>

          <Divider />
          <section id="head-null" className="scroll-mt-24">
            <SectionTitle
              number="03"
              title="Head và NULL"
              description="Hai khái niệm bạn phải hiểu trước khi thao tác với Linked List."
            />
            <h3 className="text-xl font-bold">Head</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              <strong>head</strong> là pointer trỏ tới Node đầu tiên của Linked
              List.
            </p>
            <div className="my-6 flex items-center justify-center overflow-x-auto">
              <div className="flex min-w-[600px] items-center gap-3">
                <div className="rounded-xl bg-sky-100 px-4 py-3 font-mono text-sm font-bold text-sky-800">
                  head
                </div>
                <ArrowRight size={19} className="text-slate-400" />
                <div className="rounded-2xl border border-slate-200 bg-white px-6 py-5 font-mono font-bold">
                  10
                </div>
                <ArrowRight size={19} className="text-slate-400" />
                <div className="rounded-2xl border border-slate-200 bg-white px-6 py-5 font-mono font-bold">
                  20
                </div>
                <ArrowRight size={19} className="text-slate-400" />
                <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-4 py-5 font-mono text-sm text-slate-400">
                  NULL
                </div>
              </div>
            </div>
            <h3 className="mt-8 text-xl font-bold">NULL</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Node cuối cùng không có Node nào phía sau nên:
            </p>
            <div className="my-5 rounded-2xl bg-slate-950 p-5 text-center font-mono text-lg text-white">
              lastNode-&gt;next = NULL
            </div>
            <p className="text-sm leading-7 text-slate-600">
              NULL là dấu hiệu báo rằng chúng ta đã đi tới cuối Linked List.
            </p>
            <InfoBox type="tip" title="Một mental model đơn giản">
              <strong>head</strong> = điểm bắt đầu.
              <br />
              <strong>next</strong> = đường đi tới Node tiếp theo.
              <br />
              <strong>NULL</strong> = không còn Node tiếp theo.
            </InfoBox>
          </section>

          <Divider />
          <section id="pointer" className="scroll-mt-24">
            <SectionTitle
              number="04"
              title="Pointer trong Linked List"
              description="Đây là phần quan trọng nhất để hiểu các bài Linked List trong C."
            />
            <p className="text-sm leading-7 text-slate-600">
              Pointer là một biến lưu <strong>địa chỉ bộ nhớ</strong> của một
              object hoặc biến khác.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-600">Ví dụ:</p>
            <CodeBlock code={`int x = 10;\n\nint* p = &x;`} />
            <p className="text-sm leading-7 text-slate-600">Ở đây:</p>
            <div className="my-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="font-mono font-bold">x</p>
                <p className="mt-2 text-sm text-slate-500">chứa giá trị 10.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="font-mono font-bold">p</p>
                <p className="mt-2 text-sm text-slate-500">
                  chứa địa chỉ của x.
                </p>
              </div>
            </div>
            <h3 className="mt-8 text-xl font-bold">
              Pointer Node hoạt động tương tự
            </h3>
            <CodeBlock code={`struct ListNode* current = head;`} />
            <p className="text-sm leading-7 text-slate-600">
              Bây giờ <code>current</code> đang trỏ tới cùng Node mà{" "}
              <code>head</code> đang trỏ tới.
            </p>
            <div className="my-6 flex items-center justify-center gap-4">
              <div className="rounded-xl bg-sky-100 px-4 py-3 font-mono text-sm font-bold text-sky-800">
                current
              </div>
              <ArrowRight size={18} className="text-slate-400" />
              <div className="rounded-2xl border border-slate-200 bg-white px-6 py-5 font-mono font-bold">
                Node
              </div>
            </div>
            <InfoBox type="important" title="current không tạo ra Node mới">
              Dòng:
              <br />
              <br />
              <code>{"current = head;"}</code>
              <br />
              <br />
              chỉ copy địa chỉ. Hai pointer cùng trỏ tới cùng một Node.
            </InfoBox>
          </section>

          <Divider />
          <section id="create-node" className="scroll-mt-24">
            <SectionTitle
              number="05"
              title="Tạo Node bằng C"
              description="Bây giờ chúng ta xây dựng Node thật sự trong bộ nhớ."
            />
            <p className="text-sm leading-7 text-slate-600">
              Trong C, nếu muốn tạo Node động, chúng ta thường dùng{" "}
              <code>malloc</code>.
            </p>
            <CodeBlock code={createNodeCode} />
            <h3 className="mt-8 text-xl font-bold">Từng bước</h3>
            <div className="mt-5 space-y-4">
              <StepCard number="01" title="Xin vùng nhớ">
                <code>malloc</code> cấp phát đủ memory để chứa một{" "}
                <code>struct ListNode</code>.
              </StepCard>
              <StepCard number="02" title="Ghi data">
                <code>node-&gt;val = value</code> lưu giá trị vào Node.
              </StepCard>
              <StepCard number="03" title="Khởi tạo next">
                Node mới chưa trỏ tới đâu nên đặt{" "}
                <code>node-&gt;next = NULL</code>.
              </StepCard>
              <StepCard number="04" title="Return địa chỉ">
                Trả về pointer tới Node vừa tạo.
              </StepCard>
            </div>
            <InfoBox type="important" title="Tại sao phải gán next = NULL?">
              Vì Node mới chưa có Node nào đứng sau. Nếu để một giá trị rác
              trong <code>next</code>, khi traversal chúng ta có thể đi vào một
              địa chỉ không hợp lệ và gây crash.
            </InfoBox>
          </section>

          <Divider />
          <section id="traversal" className="scroll-mt-24">
            <SectionTitle
              number="06"
              title="Duyệt Linked List"
              description="Không có index như Array, vậy làm thế nào để đi qua từng Node?"
            />
            <p className="text-sm leading-7 text-slate-600">
              Chúng ta bắt đầu từ head rồi liên tục đi theo{" "}
              <strong>next</strong>.
            </p>
            <CodeBlock code={traversalCode} />
            <div className="my-7 flex items-center justify-center overflow-x-auto">
              <div className="flex min-w-[660px] items-center justify-center gap-3">
                <div className="rounded-2xl border border-sky-200 bg-sky-50 px-5 py-4 font-mono text-sm font-bold text-sky-800">
                  current
                </div>
                <ArrowRight size={18} className="text-slate-400" />
                <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4 font-mono font-bold">
                  10
                </div>
                <ArrowRight size={18} className="text-slate-400" />
                <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4 font-mono font-bold">
                  20
                </div>
                <ArrowRight size={18} className="text-slate-400" />
                <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4 font-mono font-bold">
                  30
                </div>
                <ArrowRight size={18} className="text-slate-400" />
                <div className="rounded-xl bg-slate-50 px-4 py-4 font-mono text-sm font-bold text-slate-400">
                  NULL
                </div>
              </div>
            </div>
            <h3 className="mt-8 text-xl font-bold">
              Vì sao phải dùng current?
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Vì nếu chúng ta thay đổi <code>head</code> trong quá trình duyệt,
              chúng ta có thể mất điểm bắt đầu của Linked List.
            </p>
            <CodeBlock
              code={`struct ListNode* current = head;\n\nwhile (current != NULL) {\n    // xử lý current\n    current = current->next;\n}`}
            />
            <InfoBox type="tip" title="Pattern traversal">
              Gần như mọi bài cơ bản trên Singly Linked List đều bắt đầu bằng:
              <br />
              <br />
              <strong>
                current = head → xử lý → current = current-&gt;next
              </strong>
            </InfoBox>
          </section>

          <Divider />
          <section id="insert" className="scroll-mt-24">
            <SectionTitle
              number="07"
              title="Insert Node"
              description="Điều thú vị nhất của Linked List là thay đổi liên kết thay vì dịch cả dãy phần tử."
            />
            <h3 className="text-xl font-bold">Insert vào đầu</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">Giả sử:</p>
            <NodeView values={["10", "20", "30"]} />
            <p className="text-sm leading-7 text-slate-600">
              Muốn thêm 5 vào đầu:
            </p>
            <div className="my-6 flex flex-col items-center gap-3">
              <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-5 py-4 font-mono font-bold text-emerald-700">
                newNode = 5
              </div>
              <ArrowDown size={18} className="text-slate-400" />
              <div className="rounded-xl bg-slate-950 px-5 py-4 font-mono text-sm text-white">
                newNode-&gt;next = head
              </div>
              <ArrowDown size={18} className="text-slate-400" />
              <div className="rounded-xl bg-slate-950 px-5 py-4 font-mono text-sm text-white">
                head = newNode
              </div>
            </div>
            <CodeBlock code={insertHeadCode} />
            <InfoBox type="important" title="Không cần di chuyển 10, 20, 30">
              Chúng ta chỉ thay đổi hai pointer:
              <br />
              <br />
              Node 5 → Node 10
              <br />
              <br />
              head → Node 5
            </InfoBox>
            <h3 className="mt-10 text-xl font-bold">Insert sau một Node</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Nếu muốn chèn Node mới sau <code>current</code>:
            </p>
            <CodeBlock code={insertAfterCode} />
            <div className="my-6 rounded-2xl border border-slate-200 bg-white p-5">
              <div className="font-mono text-sm leading-8">
                Trước:
                <br />
                current → A → B<br />
                <br />
                Sau:
                <br />
                current → New → A → B
              </div>
            </div>
          </section>

          <Divider />
          <section id="delete" className="scroll-mt-24">
            <SectionTitle
              number="08"
              title="Delete Node"
              description="Delete cũng chủ yếu là thay đổi liên kết."
            />
            <p className="text-sm leading-7 text-slate-600">Giả sử:</p>
            <NodeView values={["10", "20", "30"]} highlightIndex={1} />
            <p className="text-sm leading-7 text-slate-600">
              Muốn xóa Node 20, ta không cần di chuyển Node 30.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Chỉ cần cho Node 10 trỏ thẳng sang Node 30.
            </p>
            <CodeBlock code={deleteCode} />
            <div className="my-6 rounded-2xl border border-red-200 bg-red-50 p-5">
              <div className="flex items-center gap-3">
                <Trash2 size={18} className="text-red-600" />
                <p className="font-mono text-sm font-semibold text-red-800">
                  current-&gt;next = target-&gt;next
                </p>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Liên kết bỏ qua Node cần xóa.
              </p>
            </div>
            <p className="text-sm leading-7 text-slate-600">
              Sau đó vì đang dùng C, chúng ta phải giải phóng memory:
            </p>
            <CodeBlock code={`free(target);`} />
            <InfoBox type="important" title="Đừng quên free">
              Khi dùng <code>malloc</code> trong C, programmer chịu trách nhiệm
              giải phóng vùng nhớ khi không còn dùng. Nếu quên, chương trình có
              thể xảy ra memory leak.
            </InfoBox>
          </section>

          <Divider />
          <section id="search" className="scroll-mt-24">
            <SectionTitle
              number="09"
              title="Search trong Linked List"
              description="Vì không có index, muốn tìm một giá trị chúng ta phải traversal."
            />
            <CodeBlock code={searchCode} />
            <p className="text-sm leading-7 text-slate-600">Không thể làm:</p>
            <div className="my-4 rounded-xl border border-red-200 bg-red-50 p-4 font-mono text-sm text-red-700">
              head[5]
            </div>
            <p className="text-sm leading-7 text-slate-600">
              vì Linked List không có random access theo index như Array.
            </p>
            <Complexity
              time="O(n)"
              space="O(1)"
              timeDescription="Có thể phải đi qua toàn bộ Node."
              spaceDescription="Chỉ cần pointer current."
            />
            <InfoBox type="tip" title="Một trade-off quan trọng">
              Array: <strong>biết index → truy cập O(1)</strong>.<br />
              Linked List:{" "}
              <strong>biết Node → thay đổi liên kết rất nhanh</strong>, nhưng
              tìm Node thường phải traversal.
            </InfoBox>
          </section>

          <Divider />
          <section id="complexity" className="scroll-mt-24">
            <SectionTitle
              number="10"
              title="Complexity của Linked List"
              description="Hiểu complexity để biết lúc nào Linked List thật sự có lợi."
            />
            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
              <table className="w-full min-w-[720px] text-sm">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="border-b border-slate-200 px-5 py-4 text-left">
                      Operation
                    </th>
                    <th className="border-b border-slate-200 px-5 py-4 text-left">
                      Singly Linked List
                    </th>
                    <th className="border-b border-slate-200 px-5 py-4 text-left">
                      Lý do
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Access by index", "O(n)", "Phải traversal từ head"],
                    ["Search", "O(n)", "Có thể phải duyệt toàn bộ"],
                    ["Insert at head", "O(1)", "Đổi head"],
                    ["Delete after known Node", "O(1)", "Đổi next"],
                    ["Insert after known Node", "O(1)", "Đổi next"],
                  ].map(([operation, complexity, reason]) => (
                    <tr key={operation}>
                      <td className="border-b border-slate-100 px-5 py-4 font-semibold">
                        {operation}
                      </td>
                      <td className="border-b border-slate-100 px-5 py-4 font-mono">
                        {complexity}
                      </td>
                      <td className="border-b border-slate-100 px-5 py-4 text-slate-600">
                        {reason}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <InfoBox type="important" title="Một điều kiện quan trọng">
              "Delete là O(1)" chỉ đúng khi bạn{" "}
              <strong>
                đã có reference/pointer tới Node cần xóa hoặc Node đứng trước nó
              </strong>
              .<br />
              <br />
              Nếu phải tìm Node trước, bước search vẫn có thể tốn O(n).
            </InfoBox>
          </section>

          <Divider />
          <section id="types" className="scroll-mt-24">
            <SectionTitle
              number="11"
              title="Các loại Linked List"
              description="Singly Linked List là loại chúng ta dùng trong hai bài kinh điển, nhưng Linked List còn có nhiều biến thể."
            />
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                  <ArrowRight size={19} />
                </div>
                <h3 className="mt-4 text-lg font-bold">Singly</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Mỗi Node chỉ biết Node kế tiếp.
                </p>
                <p className="mt-4 font-mono text-sm">A → B → C → NULL</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                  <GitBranch size={19} />
                </div>
                <h3 className="mt-4 text-lg font-bold">Doubly</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Mỗi Node biết cả Node trước và Node sau.
                </p>
                <p className="mt-4 font-mono text-sm">A ↔ B ↔ C</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                  <RotateCcw size={19} />
                </div>
                <h3 className="mt-4 text-lg font-bold">Circular</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Node cuối trỏ ngược về Node đầu.
                </p>
                <p className="mt-4 font-mono text-sm">A → B → C → A</p>
              </div>
            </div>
            <InfoBox type="tip" title="Hai bài hôm nay dùng loại nào?">
              <strong>Singly Linked List.</strong>
              <br />
              <br />
              Mỗi Node chỉ có <code>val</code> và <code>next</code>, đủ để dạy
              rất tốt tư duy pointer cơ bản.
            </InfoBox>
          </section>

          <Divider />
          <section id="mistakes-before-problems" className="scroll-mt-24">
            <SectionTitle
              number="12"
              title="Những lỗi Pointer cần tránh"
              description="Nếu hiểu sai pointer, Reverse và Merge sẽ trở nên rất khó."
            />
            <div className="space-y-4">
              <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
                <div className="flex gap-4">
                  <X size={19} className="mt-0.5 shrink-0 text-red-500" />
                  <div>
                    <h3 className="font-semibold">
                      Ghi đè next trước khi lưu nó
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      Ví dụ muốn đổi <code>current-&gt;next</code>. Nếu bạn ghi
                      đè mà chưa lưu Node cũ, bạn có thể mất đường đi tới phần
                      còn lại của Linked List.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
                <div className="flex gap-4">
                  <X size={19} className="mt-0.5 shrink-0 text-red-500" />
                  <div>
                    <h3 className="font-semibold">
                      Di chuyển head mà không có backup
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      Một khi head bị thay đổi, bạn có thể không còn pointer tới
                      Node đầu cũ.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
                <div className="flex gap-4">
                  <X size={19} className="mt-0.5 shrink-0 text-red-500" />
                  <div>
                    <h3 className="font-semibold">Quên NULL</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      Vòng lặp traversal thường dựa vào điều kiện{" "}
                      <code>current != NULL</code>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <InfoBox type="important" title="Quy tắc vàng của Pointer">
              Trước khi thay đổi một liên kết, hãy tự hỏi:
              <br />
              <br />
              <strong>
                "Tôi có còn biết cách đi tới phần còn lại của List không?"
              </strong>
            </InfoBox>
          </section>

          <Divider />
          <section id="reverse-problem" className="scroll-mt-24">
            <SectionTitle
              number="13"
              title="Reverse Linked List"
              description="Bài toán kinh điển đầu tiên: đảo ngược hoàn toàn hướng của Linked List."
            />
            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Problem
              </p>
              <h3 className="mt-3 text-2xl font-bold tracking-tight">
                Reverse Linked List
              </h3>
              <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
                Cho một Singly Linked List. Hãy đảo ngược Linked List và trả về
                head mới.
              </p>
              <div className="mt-6">
                <NodeView values={["1", "2", "3", "4", "5"]} />
                <div className="my-4 flex justify-center">
                  <ArrowDown size={20} className="text-slate-400" />
                </div>
                <NodeView
                  values={["5", "4", "3", "2", "1"]}
                  highlightIndex={0}
                />
              </div>
            </div>
            <InfoBox type="important" title="Reverse không phải là đổi value">
              Chúng ta không đổi: <code>1 → 5</code>, <code>2 → 4</code>...
              <br />
              <br />
              Mục tiêu là thay đổi các liên kết <strong>next</strong> để hướng
              của toàn bộ List bị đảo lại.
            </InfoBox>
          </section>

          <Divider />
          <section id="reverse-thinking" className="scroll-mt-24">
            <SectionTitle
              number="14"
              title="Tư duy Reverse Linked List"
              description="Hãy giải quyết bằng pointer trước khi nhìn code."
            />
            <p className="text-sm leading-7 text-slate-600">
              Linked List ban đầu:
            </p>
            <div className="my-6 overflow-x-auto">
              <div className="flex min-w-[660px] items-center justify-center gap-3">
                <div className="rounded-xl bg-sky-100 px-4 py-3 font-mono text-sm font-bold text-sky-800">
                  current
                </div>
                <ArrowRight size={18} className="text-slate-400" />
                <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4 font-mono font-bold">
                  1
                </div>
                <ArrowRight size={18} className="text-slate-400" />
                <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4 font-mono font-bold">
                  2
                </div>
                <ArrowRight size={18} className="text-slate-400" />
                <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4 font-mono font-bold">
                  3
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold">Chúng ta muốn biến:</h3>
            <div className="my-5 rounded-2xl bg-slate-950 p-6 text-center font-mono text-lg text-white">
              1 → 2
            </div>
            <p className="text-center text-sm text-slate-500">thành:</p>
            <div className="my-5 rounded-2xl bg-slate-950 p-6 text-center font-mono text-lg text-white">
              2 → 1
            </div>
            <p className="text-sm leading-7 text-slate-600">Vậy cần thay:</p>
            <div className="my-5 rounded-2xl border border-violet-200 bg-violet-50 p-5 text-center font-mono text-sm font-bold text-violet-800">
              current-&gt;next = prev
            </div>
            <h3 className="mt-8 text-xl font-bold">Nhưng có một vấn đề</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Nếu chúng ta làm ngay:
            </p>
            <CodeBlock code={`current->next = prev;`} />
            <p className="text-sm leading-7 text-slate-600">
              thì liên kết tới Node tiếp theo ban đầu có thể bị mất.
            </p>
            <div className="my-6 rounded-2xl border border-red-200 bg-red-50 p-5">
              <p className="font-mono text-sm font-bold text-red-700">
                1 → 2 → 3
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Nếu đổi mũi tên 1 → NULL trước khi lưu Node 2, chúng ta không
                còn biết Node 2 ở đâu để tiếp tục.
              </p>
            </div>
            <h3 className="mt-8 text-xl font-bold">Vì vậy cần 3 thứ</h3>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              <StepCard number="01" title="prev">
                Node phía trước đã được reverse.
              </StepCard>
              <StepCard number="02" title="current">
                Node đang xử lý.
              </StepCard>
              <StepCard number="03" title="next">
                Node phía sau cần được giữ lại trước khi đổi liên kết.
              </StepCard>
            </div>
            <InfoBox type="important" title="Tư duy cốt lõi">
              Trước khi đổi một pointer, hãy <strong>save đường đi cũ</strong>.
            </InfoBox>
          </section>

          <Divider />
          <section id="reverse-dry-run" className="scroll-mt-24">
            <SectionTitle
              number="15"
              title="Dry Run Reverse"
              description="Chạy từng bước với List: 1 → 2 → 3 → NULL."
            />
            <div className="space-y-6">
              <div className="rounded-3xl border border-slate-200 bg-white p-6">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Initial
                </p>
                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-xl bg-slate-50 p-4">
                    <p className="text-xs text-slate-400">prev</p>
                    <p className="mt-2 font-mono font-bold">NULL</p>
                  </div>
                  <div className="rounded-xl bg-slate-50 p-4">
                    <p className="text-xs text-slate-400">current</p>
                    <p className="mt-2 font-mono font-bold">1</p>
                  </div>
                  <div className="rounded-xl bg-slate-50 p-4">
                    <p className="text-xs text-slate-400">next</p>
                    <p className="mt-2 font-mono font-bold">chưa lưu</p>
                  </div>
                </div>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-6">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Step 1
                </p>
                <div className="mt-5 space-y-4">
                  <p className="font-mono text-sm">next = current-&gt;next</p>
                  <p className="font-mono text-sm">next = 2</p>
                  <p className="font-mono text-sm">current-&gt;next = prev</p>
                  <p className="font-mono text-sm">1 → NULL</p>
                  <p className="font-mono text-sm">prev = current</p>
                  <p className="font-mono text-sm">prev = 1</p>
                  <p className="font-mono text-sm">current = next</p>
                  <p className="font-mono text-sm">current = 2</p>
                </div>
                <div className="mt-6 rounded-xl bg-slate-950 p-5 font-mono text-sm text-white">
                  prev = 1<br />
                  current = 2<br />
                  original next = 2
                </div>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-6">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Step 2
                </p>
                <div className="mt-5 space-y-4 font-mono text-sm">
                  <p>next = 3</p>
                  <p>2 → 1</p>
                  <p>prev = 2</p>
                  <p>current = 3</p>
                </div>
              </div>
              <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6">
                <p className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                  Final
                </p>
                <p className="mt-4 font-mono text-lg font-bold text-emerald-800">
                  3 → 2 → 1 → NULL
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  current đã trở thành NULL, còn prev đang ở Node đầu của List
                  mới.
                </p>
              </div>
            </div>
            <InfoBox type="tip" title="Tại sao return prev?">
              Sau khi reverse xong, <code>current</code> là NULL.
              <br />
              Node đầu tiên của List mới chính là Node cuối cũ, và pointer đang
              giữ Node đó là <strong>prev</strong>.
            </InfoBox>
          </section>

          <Divider />
          <section id="reverse-code" className="scroll-mt-24">
            <SectionTitle
              number="16"
              title="Code Reverse Linked List"
              description="Đây là implementation chuẩn, dùng ba pointer."
            />
            <CodeBlock code={reverseDetailedCode} />
            <Complexity
              time="O(n)"
              space="O(1)"
              timeDescription="Mỗi Node được xử lý đúng một lần."
              spaceDescription="Chỉ dùng prev, current và next."
            />
            <h3 className="mt-8 text-xl font-bold">Có thể rút gọn thành:</h3>
            <CodeBlock code={reverseCode} />
            <InfoBox type="important" title="Điều cần nhớ của Reverse">
              <strong>Save → Reverse → Move → Repeat</strong>
              <br />
              <br />
              1. Save <code>next</code>.<br />
              2. Đổi <code>current-&gt;next</code>.<br />
              3. Di chuyển <code>prev</code>.<br />
              4. Di chuyển <code>current</code>.
            </InfoBox>
          </section>

          <Divider />
          <section id="merge-problem" className="scroll-mt-24">
            <SectionTitle
              number="17"
              title="Merge Two Sorted Lists"
              description="Bài toán thứ hai giúp bạn dùng pointer để đồng thời duyệt hai Linked List."
            />
            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Problem
              </p>
              <h3 className="mt-3 text-2xl font-bold tracking-tight">
                Merge Two Sorted Lists
              </h3>
              <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
                Cho hai Singly Linked List đã được sắp xếp tăng dần. Hãy merge
                chúng thành một Linked List mới vẫn được sắp xếp.
              </p>
              <div className="mt-7 space-y-5">
                <div>
                  <p className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-400">
                    List 1
                  </p>
                  <NodeView values={["1", "2", "4"]} />
                </div>
                <div>
                  <p className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-400">
                    List 2
                  </p>
                  <NodeView values={["1", "3", "4"]} />
                </div>
                <div className="flex justify-center py-2">
                  <ArrowDown size={20} className="text-slate-400" />
                </div>
                <div>
                  <p className="mb-2 text-xs font-bold uppercase tracking-wider text-emerald-600">
                    Result
                  </p>
                  <NodeView values={["1", "1", "2", "3", "4", "4"]} />
                </div>
              </div>
            </div>
            <InfoBox type="important" title="Không cần tạo tất cả Node mới">
              Vì các Node đã tồn tại và bản thân hai List đã được sort, chúng ta
              có thể <strong>nối lại các Node hiện có</strong> thay vì tạo một
              bản sao của toàn bộ dữ liệu.
            </InfoBox>
          </section>

          <Divider />
          <section id="merge-thinking" className="scroll-mt-24">
            <SectionTitle
              number="18"
              title="Tư duy Merge"
              description="Hãy nhìn bài toán giống như merge hai mảng đã sort."
            />
            <div className="my-6 grid gap-5 md:grid-cols-2">
              <div className="rounded-3xl border border-sky-200 bg-sky-50 p-6">
                <p className="text-xs font-bold uppercase tracking-wider text-sky-600">
                  List 1
                </p>
                <p className="mt-4 font-mono text-xl font-bold text-sky-800">
                  1 → 2 → 4
                </p>
                <div className="mt-5 rounded-xl bg-white/70 p-3 font-mono text-sm">
                  p1 → 1
                </div>
              </div>
              <div className="rounded-3xl border border-violet-200 bg-violet-50 p-6">
                <p className="text-xs font-bold uppercase tracking-wider text-violet-600">
                  List 2
                </p>
                <p className="mt-4 font-mono text-xl font-bold text-violet-800">
                  1 → 3 → 4
                </p>
                <div className="mt-5 rounded-xl bg-white/70 p-3 font-mono text-sm">
                  p2 → 1
                </div>
              </div>
            </div>
            <p className="text-sm leading-7 text-slate-600">
              Tại mỗi bước, chỉ cần nhìn vào hai Node hiện tại:
            </p>
            <div className="my-6 rounded-3xl bg-slate-950 p-7 text-center font-mono text-lg text-white">
              p1-&gt;val <span className="mx-3 text-slate-500">vs</span>{" "}
              p2-&gt;val
            </div>
            <p className="text-sm leading-7 text-slate-600">
              Node nào nhỏ hơn hoặc bằng thì đưa Node đó vào kết quả.
            </p>
            <div className="my-6 space-y-3">
              <StepCard number="01" title="So sánh p1 và p2">
                Nếu <code>p1-&gt;val &lt;= p2-&gt;val</code>, chọn p1.
              </StepCard>
              <StepCard number="02" title="Nối Node được chọn">
                Cho tail trỏ tới Node vừa chọn.
              </StepCard>
              <StepCard number="03" title="Di chuyển pointer">
                Pointer của List vừa được chọn tiến tới Node tiếp theo.
              </StepCard>
              <StepCard number="04" title="Lặp lại">
                Tiếp tục cho tới khi một trong hai List hết Node.
              </StepCard>
            </div>
            <InfoBox type="tip" title="Tại sao không cần quay lại?">
              Vì cả hai List đều đã sorted.
              <br />
              <br />
              Nếu p1 nhỏ hơn p2 ở thời điểm hiện tại, việc chọn p1 là an toàn vì
              mọi Node đứng sau p1 còn lớn hơn hoặc bằng p1.
            </InfoBox>
            <h3 className="mt-8 text-xl font-bold">Dummy Node</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Một kỹ thuật rất hay là tạo một Node giả tên là <code>dummy</code>
              . Nó không phải kết quả thật, mà chỉ giúp việc nối Node đầu tiên
              và các Node sau đó trở nên thống nhất.
            </p>
            <div className="my-6 rounded-2xl border border-slate-200 bg-white p-5">
              <div className="flex flex-wrap items-center gap-3 font-mono text-sm">
                <span className="rounded-lg bg-slate-100 px-3 py-2">dummy</span>
                <ArrowRight size={16} className="text-slate-400" />
                <span className="rounded-lg bg-slate-100 px-3 py-2">1</span>
                <ArrowRight size={16} className="text-slate-400" />
                <span className="rounded-lg bg-slate-100 px-3 py-2">2</span>
              </div>
            </div>
            <p className="text-sm leading-7 text-slate-600">
              Khi hoàn thành, kết quả thật bắt đầu tại:
            </p>
            <div className="my-5 rounded-2xl bg-slate-950 p-5 text-center font-mono text-base text-white">
              dummy.next
            </div>
          </section>

          <Divider />
          <section id="merge-dry-run" className="scroll-mt-24">
            <SectionTitle
              number="19"
              title="Dry Run Merge"
              description="Chạy hai list: 1 → 2 → 4 và 1 → 3 → 4."
            />
            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
              <table className="w-full min-w-[820px] text-sm">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="border-b border-slate-200 px-4 py-4 text-left">
                      Bước
                    </th>
                    <th className="border-b border-slate-200 px-4 py-4 text-left">
                      p1
                    </th>
                    <th className="border-b border-slate-200 px-4 py-4 text-left">
                      p2
                    </th>
                    <th className="border-b border-slate-200 px-4 py-4 text-left">
                      Chọn
                    </th>
                    <th className="border-b border-slate-200 px-4 py-4 text-left">
                      Kết quả
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["1", "1", "1", "p1", "1"],
                    ["2", "2", "1", "p2", "1 → 1"],
                    ["3", "2", "3", "p1", "1 → 1 → 2"],
                    ["4", "4", "3", "p2", "1 → 1 → 2 → 3"],
                    ["5", "4", "4", "p1", "1 → 1 → 2 → 3 → 4"],
                    ["6", "NULL", "4", "p2", "1 → 1 → 2 → 3 → 4 → 4"],
                  ].map(([step, p1, p2, chosen, result]) => (
                    <tr key={step}>
                      <td className="border-b border-slate-100 px-4 py-4 font-mono font-bold">
                        {step}
                      </td>
                      <td className="border-b border-slate-100 px-4 py-4 font-mono">
                        {p1}
                      </td>
                      <td className="border-b border-slate-100 px-4 py-4 font-mono">
                        {p2}
                      </td>
                      <td className="border-b border-slate-100 px-4 py-4 font-mono">
                        {chosen}
                      </td>
                      <td className="border-b border-slate-100 px-4 py-4 font-mono text-slate-600">
                        {result}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <InfoBox type="tip" title="Ở trường hợp bằng nhau">
              Chúng ta có thể chọn p1 hoặc p2. Trong code dùng{" "}
              <code>&lt;=</code> nên khi bằng nhau sẽ chọn p1.
              <br />
              <br />
              Điều quan trọng là kết quả vẫn đúng thứ tự.
            </InfoBox>
            <h3 className="mt-10 text-xl font-bold">Khi một List đã hết</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Ví dụ p1 = NULL nhưng p2 vẫn còn:
            </p>
            <div className="my-5 rounded-2xl bg-slate-950 p-6 text-center font-mono text-base text-white">
              tail-&gt;next = p2
            </div>
            <p className="text-sm leading-7 text-slate-600">
              Không cần duyệt từng Node còn lại. Phần còn lại của p2 đã được
              sort sẵn, nên chỉ cần nối cả đoạn còn lại vào kết quả.
            </p>
          </section>

          <Divider />
          <section id="merge-code" className="scroll-mt-24">
            <SectionTitle
              number="20"
              title="Code Merge Two Sorted Lists"
              description="Implementation sử dụng Dummy Node và tái sử dụng các Node cũ."
            />
            <CodeBlock code={mergeCode} />
            <Complexity
              time="O(n + m)"
              space="O(1)"
              timeDescription="Mỗi Node của hai List được xử lý tối đa một lần."
              spaceDescription="Không tạo List mới; chỉ dùng dummy và tail."
            />
            <h3 className="mt-10 text-xl font-bold">
              Vì sao dummy Node hữu ích?
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Nếu không có dummy, việc xử lý Node đầu tiên sẽ phải tách riêng:
            </p>
            <CodeBlock code={mergeWithoutDummyCode} />
            <p className="text-sm leading-7 text-slate-600">
              Code không sai, nhưng nhiều logic đặc biệt xuất hiện ở lần insert
              đầu tiên. Dummy Node giúp mọi lần nối Node đều dùng cùng một công
              thức:
            </p>
            <div className="my-5 rounded-2xl bg-slate-950 p-6 text-center font-mono text-lg text-white">
              tail-&gt;next = selected
              <br />
              tail = tail-&gt;next
            </div>
            <InfoBox type="important" title="Một pattern rất đáng nhớ">
              Dummy Node rất thường xuất hiện trong các bài Linked List khi cần
              tạo một List mới hoặc xây dựng lại liên kết.
              <br />
              <br />
              <strong>
                dummy giúp loại bỏ trường hợp đặc biệt của Node đầu tiên.
              </strong>
            </InfoBox>
          </section>

          <Divider />
          <section id="edge-cases" className="scroll-mt-24">
            <SectionTitle
              number="21"
              title="Edge Cases"
              description="Linked List đặc biệt nhạy với các trường hợp rỗng và một Node."
            />
            <div className="space-y-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold">List rỗng</h3>
                    <p className="mt-2 font-mono text-sm">head = NULL</p>
                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      Reverse phải trả về NULL. Merge phải xử lý được List rỗng.
                    </p>
                  </div>
                  <CheckCircle2 size={19} className="text-emerald-600" />
                </div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold">Chỉ có một Node</h3>
                    <p className="mt-2 font-mono text-sm">1 → NULL</p>
                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      Reverse không cần thay đổi gì.
                    </p>
                  </div>
                  <CheckCircle2 size={19} className="text-emerald-600" />
                </div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold">Một List rỗng khi Merge</h3>
                    <p className="mt-2 font-mono text-sm">
                      list1 = NULL
                      <br />
                      list2 = 1 → 2 → 3
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      Kết quả chính là list2.
                    </p>
                  </div>
                  <GitMerge size={19} className="text-slate-500" />
                </div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold">
                      Hai List cùng có giá trị bằng nhau
                    </h3>
                    <p className="mt-2 font-mono text-sm">
                      1 → 3<br />1 → 2
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      Có thể chọn một trong hai Node khi bằng nhau.
                    </p>
                  </div>
                  <GitMerge size={19} className="text-slate-500" />
                </div>
              </div>
            </div>
          </section>

          <Divider />
          <section id="common-mistakes" className="scroll-mt-24">
            <SectionTitle
              number="22"
              title="Lỗi thường gặp"
              description="Đây là những lỗi xuất hiện rất nhiều trong hai bài Reverse và Merge."
            />
            <div className="space-y-4">
              <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
                <div className="flex gap-4">
                  <X size={19} className="mt-0.5 shrink-0 text-red-500" />
                  <div>
                    <h3 className="font-semibold">
                      Reverse nhưng quên lưu next
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      Đây là lỗi phổ biến nhất. Sau khi đổi{" "}
                      <code>current-&gt;next</code>, đường tới Node tiếp theo cũ
                      có thể biến mất.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
                <div className="flex gap-4">
                  <X size={19} className="mt-0.5 shrink-0 text-red-500" />
                  <div>
                    <h3 className="font-semibold">Reverse trả về head cũ</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      Sau khi reverse, head mới là Node cuối của List cũ, tức là{" "}
                      <code>prev</code> trong implementation này.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
                <div className="flex gap-4">
                  <X size={19} className="mt-0.5 shrink-0 text-red-500" />
                  <div>
                    <h3 className="font-semibold">Merge nhưng tạo vòng lặp</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      Sai một assignment <code>next</code> có thể khiến một Node
                      trỏ ngược về Node đã xuất hiện, tạo cycle.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
                <div className="flex gap-4">
                  <X size={19} className="mt-0.5 shrink-0 text-red-500" />
                  <div>
                    <h3 className="font-semibold">
                      Merge nhưng quên nối phần còn lại
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      Khi một List đã NULL, List còn lại vẫn có thể chứa nhiều
                      Node. Cần nối cả phần còn lại.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
                <div className="flex gap-4">
                  <Lightbulb
                    size={19}
                    className="mt-0.5 shrink-0 text-amber-600"
                  />
                  <div>
                    <h3 className="font-semibold">
                      Chỉ nhìn value mà quên pointer
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      Linked List problem chủ yếu yêu cầu thay đổi{" "}
                      <strong>relationship giữa các Node</strong>, không chỉ
                      thay đổi value.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Divider />
          <section id="recognition" className="scroll-mt-24">
            <SectionTitle
              number="23"
              title="Nhận diện Pattern Linked List"
              description="Sau khi hiểu hai bài kinh điển, hãy biết khi nào cần dùng pattern tương ứng."
            />
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-3xl border border-sky-200 bg-sky-50 p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-100 text-sky-700">
                  <RotateCcw size={19} />
                </div>
                <h3 className="mt-4 text-xl font-bold">Reverse</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Khi cần thay đổi hướng của các liên kết next.
                </p>
                <p className="mt-5 rounded-xl bg-white/70 p-3 font-mono text-sm">
                  prev / current / next
                </p>
              </div>
              <div className="rounded-3xl border border-violet-200 bg-violet-50 p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100 text-violet-700">
                  <GitMerge size={19} />
                </div>
                <h3 className="mt-4 text-xl font-bold">Merge</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Khi có hai List đã sorted và cần merge chúng thành một List.
                </p>
                <p className="mt-5 rounded-xl bg-white/70 p-3 font-mono text-sm">
                  p1 / p2 / tail
                </p>
              </div>
            </div>
            <h3 className="mt-10 text-xl font-bold">Những keyword nên chú ý</h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "reverse the linked list",
                "merge two sorted linked lists",
                "reorder nodes",
                "find cycle",
                "middle of linked list",
                "remove nth node",
              ].map((keyword) => (
                <div
                  key={keyword}
                  className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4"
                >
                  <Check size={16} className="shrink-0 text-emerald-600" />
                  <span className="font-mono text-sm text-slate-600">
                    {keyword}
                  </span>
                </div>
              ))}
            </div>
            <InfoBox type="tip" title="Khi gặp Linked List, hãy hỏi">
              <strong>1.</strong> Tôi đang đứng ở Node nào?
              <br />
              <strong>2.</strong> Tôi còn cần đi tới Node nào tiếp theo?
              <br />
              <strong>3.</strong> Nếu tôi đổi <code>next</code>, tôi có làm mất
              đường đi còn lại không?
            </InfoBox>
          </section>

          <Divider />
          <section id="summary" className="scroll-mt-24">
            <SectionTitle
              number="24"
              title="Tổng kết Linked List"
              description="Đây là những ý quan trọng nhất cần mang sang các bài Linked List khác."
            />
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                  <Link2 size={20} />
                </div>
                <h3 className="mt-4 text-lg font-bold">Node</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Node chứa data và pointer tới Node tiếp theo.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                  <Target size={20} />
                </div>
                <h3 className="mt-4 text-lg font-bold">Head</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Head là điểm bắt đầu của Linked List.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                  <GitBranch size={20} />
                </div>
                <h3 className="mt-4 text-lg font-bold">Pointer</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Phần lớn bài Linked List là bài toán thay đổi pointer.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                  <RotateCcw size={20} />
                </div>
                <h3 className="mt-4 text-lg font-bold">Reverse</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Save next → reverse link → move pointers.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                  <GitMerge size={20} />
                </div>
                <h3 className="mt-4 text-lg font-bold">Merge</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  So sánh hai pointer và luôn chọn Node nhỏ hơn.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                  <Zap size={20} />
                </div>
                <h3 className="mt-4 text-lg font-bold">O(n)</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Reverse và Merge đều xử lý mỗi Node tối đa một lần.
                </p>
              </div>
            </div>
            <h3 className="mt-10 text-xl font-bold">
              Hai bài kinh điển, hai pattern
            </h3>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
              <table className="w-full min-w-[760px] text-sm">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="border-b border-slate-200 px-5 py-4 text-left">
                      Problem
                    </th>
                    <th className="border-b border-slate-200 px-5 py-4 text-left">
                      Pointer
                    </th>
                    <th className="border-b border-slate-200 px-5 py-4 text-left">
                      Pattern
                    </th>
                    <th className="border-b border-slate-200 px-5 py-4 text-left">
                      Time
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-b border-slate-100 px-5 py-4 font-semibold">
                      Reverse Linked List
                    </td>
                    <td className="border-b border-slate-100 px-5 py-4 font-mono">
                      prev / current / next
                    </td>
                    <td className="border-b border-slate-100 px-5 py-4 text-slate-600">
                      Đảo hướng next
                    </td>
                    <td className="border-b border-slate-100 px-5 py-4 font-mono">
                      O(n)
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-4 font-semibold">
                      Merge Two Sorted Lists
                    </td>
                    <td className="px-5 py-4 font-mono">p1 / p2 / tail</td>
                    <td className="px-5 py-4 text-slate-600">
                      Merge hai List đã sort
                    </td>
                    <td className="px-5 py-4 font-mono">O(n + m)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <InfoBox type="important" title="Mental model quan trọng nhất">
              Linked List không nên được học như:
              <br />
              <br />
              <strong>"Một đống Node và syntax khó hiểu."</strong>
              <br />
              <br />
              Hãy nghĩ:
              <br />
              <br />
              <strong>Node → pointer → đường đi → thay đổi đường đi.</strong>
            </InfoBox>
            <div className="mt-8 rounded-3xl bg-slate-950 p-6 text-white sm:p-8">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Mental model
              </p>
              <h3 className="mt-3 text-2xl font-bold">Khi làm Linked List</h3>
              <div className="mt-7 space-y-2 font-mono text-sm leading-8 text-slate-300">
                <div>Tôi đang ở Node nào?</div>
                <div>Node tiếp theo là Node nào?</div>
                <div>Tôi có cần lưu next trước khi thay đổi không?</div>
                <div>Pointer nào phải di chuyển?</div>
                <div>Head mới là Node nào?</div>
                <div className="pt-3 text-emerald-300">
                  Không được làm mất đường đi tới phần còn lại.
                </div>
              </div>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <Link
                to="/algorithms/sliding-window"
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
                    <p className="mt-1 font-semibold">Sliding Window</p>
                  </div>
                </div>
              </Link>
              <Link
                to="/algorithms/trees"
                className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-slate-300 hover:shadow-lg"
              >
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Next
                  </p>
                  <p className="mt-1 font-semibold">Trees</p>
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
          <span>Linked List · Reverse · Merge</span>
        </div>
      </footer>
    </div>
  );
}

function Divider() {
  return <div className="my-16 h-px bg-slate-200" />;
}
