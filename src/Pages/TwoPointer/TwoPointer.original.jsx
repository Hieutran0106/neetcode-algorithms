import React from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronRight,
  CircleAlert,
  Clock3,
  Code2,
  GitBranch,
  Lightbulb,
  List,
  MoveHorizontal,
  Target,
  X,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

const toc = [
  {
    id: "introduction",
    label: "Two Pointer là gì?",
  },
  {
    id: "pointer",
    label: "1. Pointer là gì?",
  },
  {
    id: "two-pointers",
    label: "2. Vì sao cần hai Pointer?",
  },
  {
    id: "opposite-direction",
    label: "3. Hai Pointer từ hai đầu",
  },
  {
    id: "same-direction",
    label: "4. Hai Pointer cùng chiều",
  },
  {
    id: "when-to-use",
    label: "5. Khi nào dùng Two Pointer?",
  },
  {
    id: "valid-palindrome",
    label: "6. Valid Palindrome",
  },
  {
    id: "problem",
    label: "7. Hiểu đề bài",
  },
  {
    id: "brute-force",
    label: "8. Cách chưa tối ưu",
  },
  {
    id: "pattern",
    label: "9. Nhận diện Two Pointer",
  },
  {
    id: "dry-run",
    label: "10. Dry Run",
  },
  {
    id: "solution",
    label: "11. Code C",
  },
  {
    id: "explain-code",
    label: "12. Giải thích từng phần",
  },
  {
    id: "edge-cases",
    label: "13. Edge Cases",
  },
  {
    id: "mistakes",
    label: "14. Lỗi thường gặp",
  },
  {
    id: "summary",
    label: "15. Tổng kết",
  },
];

function CodeBlock({ code, label = "C" }) {
  return (
    <div className="my-6 overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 shadow-lg shadow-slate-200/30">
      {" "}
      <div className="flex items-center justify-between border-b border-white/10 bg-slate-900 px-4 py-3">
        {" "}
        <div className="flex items-center gap-2">
          {" "}
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />{" "}
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />{" "}
          <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />{" "}
        </div>
        <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
          <Code2 size={14} />
          {label}
        </div>
      </div>
      <div className="overflow-x-auto p-5">
        <pre className="font-mono text-[13px] leading-7 text-slate-300 sm:text-sm">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}

function SectionTitle({ number, title, description }) {
  return (
    <div className="mb-8">
      {" "}
      <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
        {" "}
        <span>{number}</span> <span className="h-px w-8 bg-slate-200" />{" "}
      </div>
      <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}

function InfoBox({ type = "info", title, children }) {
  const config = {
    info: {
      wrapper: "border-sky-200 bg-sky-50",
      icon: "bg-sky-100 text-sky-700",
      Icon: CircleAlert,
    },
    tip: {
      wrapper: "border-amber-200 bg-amber-50",
      icon: "bg-amber-100 text-amber-700",
      Icon: Lightbulb,
    },
    important: {
      wrapper: "border-violet-200 bg-violet-50",
      icon: "bg-violet-100 text-violet-700",
      Icon: Zap,
    },
  };

  const current = config[type];
  const Icon = current.Icon;

  return (
    <div className={`my-6 rounded-2xl border p-5 ${current.wrapper}`}>
      {" "}
      <div className="flex gap-4">
        <div
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${current.icon}`}
        >
          {" "}
          <Icon size={17} />{" "}
        </div>

        <div>
          <h4 className="font-semibold text-slate-900">{title}</h4>

          <div className="mt-2 text-sm leading-7 text-slate-700">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

function Complexity({ time, space, timeDescription, spaceDescription }) {
  return (
    <div className="my-6 grid gap-4 sm:grid-cols-2">
      {" "}
      <div className="rounded-2xl border border-slate-200 bg-white p-5">
        {" "}
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
          {" "}
          <Clock3 size={15} />
          Time Complexity{" "}
        </div>
        <p className="mt-3 font-mono text-2xl font-bold text-slate-900">
          {time}
        </p>
        {timeDescription && (
          <p className="mt-2 text-sm leading-6 text-slate-500">
            {timeDescription}
          </p>
        )}
      </div>
      <div className="rounded-2xl border border-slate-200 bg-white p-5">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
          <GitBranch size={15} />
          Space Complexity
        </div>

        <p className="mt-3 font-mono text-2xl font-bold text-slate-900">
          {space}
        </p>

        {spaceDescription && (
          <p className="mt-2 text-sm leading-6 text-slate-500">
            {spaceDescription}
          </p>
        )}
      </div>
    </div>
  );
}

function StepCard({ number, title, children }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      {" "}
      <div className="flex gap-4">
        {" "}
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-900 font-mono text-xs font-bold text-white">
          {number}{" "}
        </div>
        <div>
          <h3 className="font-semibold text-slate-900">{title}</h3>

          <div className="mt-2 text-sm leading-7 text-slate-600">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

const pointerBasicCode = `int numbers[5] = {10, 20, 30, 40, 50};

int left = 0;
int right = 4;

// left đang ở numbers[0]
// right đang ở numbers[4]`;

const oppositeDirectionCode = `int left = 0;
int right = n - 1;

while (left < right) {


// xử lý numbers[left]
// xử lý numbers[right]

left++;
right--;


}`;

const sameDirectionCode = `int left = 0;

for (int right = 0; right < n; right++) {


// right khám phá dữ liệu mới

if (/* điều kiện */) {
    left++;
}


}`;

const palindromeBruteForceCode = `// Ý tưởng:
// 1. Lọc bỏ ký tự không phải chữ/số
// 2. Chuyển tất cả về lowercase
// 3. Tạo chuỗi mới
// 4. So sánh chuỗi với phiên bản đảo ngược

// Ví dụ:
// "A man, a plan, a canal: Panama"
// =>
// "amanaplanacanalpanama"`;

const palindromeStackCode = `// Có thể dùng Stack để:
// 1. Push từng ký tự
// 2. Pop ngược lại
// 3. So sánh với chuỗi ban đầu

// Nhưng cách này cần thêm bộ nhớ O(n)
// và không cần thiết cho bài toán này.`;

const validPalindromeCode = `#include <stdbool.h>
#include <string.h>

bool isAlphaNumeric(char c) {
return
(c >= 'a' && c <= 'z') ||
(c >= 'A' && c <= 'Z') ||
(c >= '0' && c <= '9');
}

char toLowerCase(char c) {
if (c >= 'A' && c <= 'Z') {
return c - 'A' + 'a';
}


return c;


}

bool isPalindrome(char* s) {
int left = 0;
int right = strlen(s) - 1;


while (left < right) {

    while (
        left < right &&
        !isAlphaNumeric(s[left])
    ) {
        left++;
    }

    while (
        left < right &&
        !isAlphaNumeric(s[right])
    ) {
        right--;
    }

    if (
        toLowerCase(s[left]) !=
        toLowerCase(s[right])
    ) {
        return false;
    }

    left++;
    right--;
}

return true;


}`;

const simplifiedPalindromeCode = `bool isPalindrome(char* s) {
int left = 0;
int right = strlen(s) - 1;


while (left < right) {

    // Bỏ qua ký tự không hợp lệ
    while (left < right && !isAlphaNumeric(s[left])) {
        left++;
    }

    while (left < right && !isAlphaNumeric(s[right])) {
        right--;
    }

    // So sánh hai đầu
    if (toLowerCase(s[left]) !=
        toLowerCase(s[right])) {
        return false;
    }

    // Hai ký tự hợp lệ giống nhau
    left++;
    right--;
}

return true;


}`;

export default function TwoPointer() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-900">
      {/* Hero */}{" "}
      <section className="border-b border-slate-200 bg-white">
        {" "}
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          {" "}
          <div className="max-w-4xl">
            {" "}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs font-bold tracking-wider text-slate-600">
              {" "}
              <GitBranch size={14} />
              NEETCODE · TWO POINTER{" "}
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Two Pointer
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
              Two Pointer là một kỹ thuật giải thuật dùng hai biến để theo dõi
              hai vị trí khác nhau trong dữ liệu. Kỹ thuật này đặc biệt mạnh khi
              hai con trỏ có thể cùng nhau thay thế cho việc thử mọi cặp phần
              tử.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-600">
                <MoveHorizontal size={16} />
                Left / Right
              </div>

              <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-600">
                <Zap size={16} />
                O(n)
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
          {/* Introduction */}
          <section id="introduction" className="scroll-mt-24">
            <SectionTitle
              number="00"
              title="Two Pointer là gì?"
              description="Hãy bỏ qua code trong vài phút đầu và hiểu ý tưởng trước."
            />

            <p className="text-sm leading-7 text-slate-600 sm:text-base">
              Two Pointer nghĩa đơn giản là{" "}
              <strong>
                dùng hai biến để theo dõi hai vị trí trong dữ liệu
              </strong>
              .
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              Ví dụ với một Array:
            </p>

            <div className="my-6 overflow-x-auto rounded-2xl border border-slate-200 bg-white p-5">
              <div className="flex min-w-[600px] gap-2">
                {[10, 20, 30, 40, 50, 60].map((number, index) => (
                  <div
                    key={index}
                    className="relative flex-1 rounded-xl border border-slate-200 bg-slate-50 p-4 text-center font-mono font-bold"
                  >
                    {number}

                    {index === 0 && (
                      <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-[11px] font-sans font-semibold text-sky-600">
                        left
                      </span>
                    )}

                    {index === 5 && (
                      <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-[11px] font-sans font-semibold text-violet-600">
                        right
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-10 text-sm leading-7 text-slate-600 sm:text-base">
              Hai biến <code>left</code> và <code>right</code> đang chỉ vào hai
              vị trí khác nhau. Sau mỗi bước, chúng ta quyết định con trỏ nào
              cần di chuyển.
            </p>

            <InfoBox type="important" title="Điều cần nhớ ngay từ đầu">
              Two Pointer <strong>không phải là một Data Structure</strong>.
              <br />
              <br />
              Nó là một <strong>problem-solving technique</strong> — một cách tổ
              chức việc duyệt dữ liệu để tránh phải thử quá nhiều trường hợp.
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Pointer */}
          <section id="pointer" className="scroll-mt-24">
            <SectionTitle
              number="01"
              title="Pointer là gì?"
              description="Đầu tiên cần hiểu chính xác từ pointer trong ngữ cảnh của thuật toán."
            />

            <p className="text-sm leading-7 text-slate-600 sm:text-base">
              Trong ngữ cảnh Two Pointer, khi nói đến "pointer", chúng ta thường
              chỉ đơn giản là <strong>một biến lưu vị trí hoặc index</strong>{" "}
              của phần tử mà chúng ta đang quan tâm.
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-600">Ví dụ:</p>

            <CodeBlock code={pointerBasicCode} />

            <p className="text-sm leading-7 text-slate-600">Ở đây:</p>

            <div className="my-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-sky-200 bg-sky-50 p-5">
                <p className="font-mono font-bold text-sky-800">left = 0</p>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Đang quan tâm phần tử đầu tiên.
                </p>
              </div>

              <div className="rounded-2xl border border-violet-200 bg-violet-50 p-5">
                <p className="font-mono font-bold text-violet-800">right = 4</p>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Đang quan tâm phần tử cuối cùng.
                </p>
              </div>
            </div>

            <p className="text-sm leading-7 text-slate-600">
              Khi học Two Pointer, bạn có thể tạm thời hiểu pointer là{" "}
              <strong>một ngón tay đang chỉ vào một vị trí</strong>.
            </p>

            <div className="my-7 flex items-center justify-center gap-3">
              <div className="rounded-xl bg-sky-100 px-5 py-3 font-mono text-sm font-bold text-sky-800">
                left
              </div>

              <ArrowRight size={18} className="text-slate-400" />

              <div className="rounded-xl border border-slate-200 bg-white px-5 py-3 font-mono text-sm">
                vị trí đang xét
              </div>
            </div>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Two Pointer */}
          <section id="two-pointers" className="scroll-mt-24">
            <SectionTitle
              number="02"
              title="Vì sao cần hai Pointer?"
              description="Một pointer thường đủ để duyệt Array. Nhưng có những bài toán cần nhìn hai vị trí cùng lúc."
            />

            <p className="text-sm leading-7 text-slate-600 sm:text-base">
              Giả sử chúng ta có:
            </p>

            <div className="my-6 flex justify-center">
              <div className="grid grid-cols-6 gap-2">
                {[1, 2, 3, 4, 5, 6].map((number) => (
                  <div
                    key={number}
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-white font-mono font-bold"
                  >
                    {number}
                  </div>
                ))}
              </div>
            </div>

            <p className="text-sm leading-7 text-slate-600">
              Một số bài toán không hỏi:
            </p>

            <div className="my-4 rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-600">
              "Phần tử này là gì?"
            </div>

            <p className="text-sm leading-7 text-slate-600">mà hỏi:</p>

            <div className="my-4 rounded-xl border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-900">
              "Phần tử đầu và phần tử cuối có quan hệ gì với nhau?"
            </div>

            <p className="mt-5 text-sm leading-7 text-slate-600">
              Khi đó một pointer ở đầu và một pointer ở cuối sẽ tự nhiên hơn rất
              nhiều.
            </p>

            <InfoBox title="Ý tưởng cốt lõi">
              Thay vì tạo ra tất cả các cặp có thể có, chúng ta chỉ giữ lại{" "}
              <strong>hai vị trí quan trọng tại thời điểm hiện tại</strong>. Sau
              mỗi bước, một hoặc cả hai pointer được di chuyển.
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Opposite direction */}
          <section id="opposite-direction" className="scroll-mt-24">
            <SectionTitle
              number="03"
              title="Hai Pointer từ hai đầu"
              description="Đây là dạng Two Pointer nổi tiếng nhất và cũng là dạng được dùng trong Valid Palindrome."
            />

            <p className="text-sm leading-7 text-slate-600">Ta đặt:</p>

            <div className="my-5 rounded-2xl bg-slate-950 p-6 text-center font-mono text-base text-white">
              left = 0<span className="mx-4 text-slate-500">|</span>
              right = n - 1
            </div>

            <div className="my-8 overflow-x-auto">
              <div className="mx-auto flex min-w-[650px] max-w-3xl gap-2">
                {[10, 20, 30, 40, 50, 60, 70].map((number, index) => (
                  <div key={number} className="relative flex-1">
                    <div className="rounded-xl border border-slate-200 bg-white p-4 text-center font-mono font-bold">
                      {number}
                    </div>

                    {index === 0 && (
                      <div className="mt-2 text-center text-xs font-semibold text-sky-600">
                        ↑ left
                      </div>
                    )}

                    {index === 6 && (
                      <div className="mt-2 text-center text-xs font-semibold text-violet-600">
                        ↑ right
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <p className="text-sm leading-7 text-slate-600">
              Sau khi xử lý hai đầu:
            </p>

            <CodeBlock code={oppositeDirectionCode} />

            <p className="text-sm leading-7 text-slate-600">
              Ta thu hẹp phạm vi:
            </p>

            <div className="my-7 flex items-center justify-center">
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-sky-100 px-4 py-3 font-mono text-sm font-bold text-sky-800">
                  left++
                </div>

                <div className="text-slate-400">và</div>

                <div className="rounded-xl bg-violet-100 px-4 py-3 font-mono text-sm font-bold text-violet-800">
                  right--
                </div>
              </div>
            </div>

            <InfoBox type="important" title="Tại sao làm như vậy lại nhanh?">
              Mỗi pointer chỉ đi theo một hướng và không quay lại vị trí cũ.
              <br />
              <br />
              Vì vậy dù có hai pointer, tổng số lần di chuyển vẫn chỉ tỷ lệ với
              <strong> n</strong>, chứ không phải n × n.
            </InfoBox>

            <Complexity
              time="O(n)"
              space="O(1)"
              timeDescription="left và right di chuyển vào trong, mỗi phần tử được xử lý nhiều nhất một lần."
              spaceDescription="Chỉ cần thêm hai biến chỉ số."
            />
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Same direction */}
          <section id="same-direction" className="scroll-mt-24">
            <SectionTitle
              number="04"
              title="Hai Pointer cùng chiều"
              description="Không phải Two Pointer nào cũng đi từ hai đầu."
            />

            <p className="text-sm leading-7 text-slate-600">
              Một dạng khác là cả hai pointer đều bắt đầu từ đầu Array nhưng có
              tốc độ hoặc nhiệm vụ khác nhau.
            </p>

            <CodeBlock code={sameDirectionCode} />

            <p className="text-sm leading-7 text-slate-600">
              Ví dụ kinh điển của dạng này là:
            </p>

            <div className="my-5 grid gap-3 sm:grid-cols-3">
              {[
                "Fast / Slow Pointer",
                "Remove Duplicates",
                "Partition Array",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-white p-5"
                >
                  <p className="text-sm font-semibold text-slate-900">{item}</p>
                </div>
              ))}
            </div>

            <InfoBox type="tip" title="Hai dạng lớn cần nhớ">
              <strong>Dạng 1:</strong> left ↔ right, đi từ hai đầu vào giữa.
              <br />
              <strong>Dạng 2:</strong> fast → chậm hoặc hai pointer cùng chiều.
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* When to use */}
          <section id="when-to-use" className="scroll-mt-24">
            <SectionTitle
              number="05"
              title="Khi nào nên nghĩ tới Two Pointer?"
              description="Học cách nhận diện pattern quan trọng hơn việc học thuộc tên bài."
            />

            <div className="grid gap-4 md:grid-cols-2">
              <StepCard number="01" title="So sánh hai đầu">
                Bài toán có thể kiểm tra phần tử đầu và cuối cùng lúc.
              </StepCard>

              <StepCard number="02" title="Palindrome">
                Cần kiểm tra chuỗi từ hai phía tiến vào giữa.
              </StepCard>

              <StepCard number="03" title="Sorted Array">
                Array đã sắp xếp thường mở ra khả năng điều khiển pointer dựa
                trên giá trị hiện tại.
              </StepCard>

              <StepCard number="04" title="Loại bỏ / thu hẹp">
                Mỗi bước có thể loại bỏ một phần không còn cần xét.
              </StepCard>
            </div>

            <InfoBox type="important" title="Một dấu hiệu rất đáng chú ý">
              Nếu bạn đang làm brute force bằng cách thử{" "}
              <strong>mọi cặp phần tử</strong>, hãy dừng lại và tự hỏi:
              <br />
              <br />
              <strong>
                "Có thể dùng hai pointer để loại bỏ hàng loạt trường hợp không
                cần thiết không?"
              </strong>
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Valid Palindrome */}
          <section id="valid-palindrome" className="scroll-mt-24">
            <SectionTitle
              number="06"
              title="Valid Palindrome"
              description="Đây là bài toán kinh điển nhất để học Two Pointer từ hai đầu."
            />

            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Problem
                  </p>

                  <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-950">
                    Valid Palindrome
                  </h3>
                </div>

                <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700">
                  Easy
                </span>
              </div>

              <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
                Cho một chuỗi. Kiểm tra xem chuỗi có phải là Palindrome hay
                không sau khi bỏ qua các ký tự không phải chữ hoặc số và không
                phân biệt chữ hoa/chữ thường.
              </p>
            </div>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Problem */}
          <section id="problem" className="scroll-mt-24">
            <SectionTitle
              number="07"
              title="Hiểu đề bài"
              description="Từ khóa trong đề bài sẽ quyết định cách chúng ta xử lý chuỗi."
            />

            <h3 className="text-xl font-bold">Palindrome là gì?</h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Một chuỗi là Palindrome nếu đọc từ trái sang phải giống hệt đọc từ
              phải sang trái.
            </p>

            <div className="my-6 grid gap-4 sm:grid-cols-3">
              {[
                ["racecar", true],
                ["level", true],
                ["hello", false],
              ].map(([value, valid]) => (
                <div
                  key={value}
                  className={`rounded-2xl border p-5 ${
                    valid
                      ? "border-emerald-200 bg-emerald-50"
                      : "border-red-200 bg-red-50"
                  }`}
                >
                  <p className="font-mono text-xl font-bold">{value}</p>

                  <div className="mt-3 flex items-center gap-2 text-sm font-semibold">
                    {valid ? (
                      <>
                        <CheckCircle2 size={16} className="text-emerald-600" />
                        <span className="text-emerald-700">Palindrome</span>
                      </>
                    ) : (
                      <>
                        <X size={16} className="text-red-600" />
                        <span className="text-red-700">Không phải</span>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <h3 className="mt-8 text-xl font-bold">
              Nhưng bài toán không đơn giản chỉ vậy
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Ví dụ nổi tiếng:
            </p>

            <div className="my-5 rounded-2xl border border-slate-200 bg-white p-6 text-center">
              <p className="font-mono text-lg font-bold sm:text-xl">
                A man, a plan, a canal: Panama
              </p>

              <p className="mt-4 text-sm leading-6 text-slate-500">
                Sau khi bỏ dấu cách, dấu phẩy, dấu hai chấm và không phân biệt
                hoa thường:
              </p>

              <p className="mt-3 font-mono text-sm font-semibold text-slate-900">
                amanaplanacanalpanama
              </p>
            </div>

            <InfoBox title="Hai việc cần làm">
              <strong>1.</strong> Bỏ qua ký tự không phải chữ hoặc số.
              <br />
              <strong>2.</strong> Không phân biệt chữ hoa và chữ thường.
            </InfoBox>

            <h3 className="mt-8 text-xl font-bold">
              Cách kiểm tra Palindrome cơ bản
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">Với chuỗi:</p>

            <div className="my-5 flex justify-center">
              <div className="flex gap-2">
                {["r", "a", "c", "e", "c", "a", "r"].map((char, index) => (
                  <div
                    key={`${char}-${index}`}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white font-mono font-bold"
                  >
                    {char}
                  </div>
                ))}
              </div>
            </div>

            <p className="text-sm leading-7 text-slate-600">
              Ta chỉ cần so sánh:
            </p>

            <div className="my-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <div className="rounded-xl bg-sky-100 px-5 py-3 font-mono text-sm font-bold text-sky-800">
                ký tự đầu
              </div>

              <span className="font-semibold text-slate-400">==</span>

              <div className="rounded-xl bg-violet-100 px-5 py-3 font-mono text-sm font-bold text-violet-800">
                ký tự cuối
              </div>
            </div>

            <p className="text-sm leading-7 text-slate-600">
              Sau đó tiến dần vào giữa:
            </p>

            <div className="my-6 flex items-center justify-center gap-2">
              <ArrowRight size={19} className="text-sky-600" />

              <span className="rounded-lg bg-slate-900 px-4 py-2 font-mono text-sm text-white">
                left++
              </span>

              <span className="text-slate-400">/</span>

              <span className="rounded-lg bg-slate-900 px-4 py-2 font-mono text-sm text-white">
                right--
              </span>

              <ArrowLeft size={19} className="text-violet-600" />
            </div>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Brute force */}
          <section id="brute-force" className="scroll-mt-24">
            <SectionTitle
              number="08"
              title="Cách giải đơn giản nhất"
              description="Biết cách giải brute force giúp chúng ta hiểu tại sao Two Pointer tốt hơn."
            />

            <h3 className="text-xl font-bold">
              Cách 1 — Tạo chuỗi đã làm sạch
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">Ta có thể:</p>

            <div className="my-5 grid gap-3 sm:grid-cols-2">
              {[
                "Lọc các ký tự không phải chữ/số.",
                "Chuyển tất cả về lowercase.",
                "Tạo một chuỗi mới.",
                "Đảo ngược chuỗi và so sánh.",
              ].map((item, index) => (
                <StepCard key={item} number={index + 1} title={item}>
                  Thực hiện bước này trước khi kiểm tra Palindrome.
                </StepCard>
              ))}
            </div>

            <CodeBlock code={palindromeBruteForceCode} />

            <p className="text-sm leading-7 text-slate-600">
              Cách này hoàn toàn hợp lý về mặt tư duy, nhưng chúng ta đang tạo
              ra dữ liệu phụ.
            </p>

            <Complexity
              time="O(n)"
              space="O(n)"
              timeDescription="Duyệt chuỗi để lọc và kiểm tra."
              spaceDescription="Cần chuỗi mới sau khi lọc và/hoặc chuỗi đảo."
            />

            <h3 className="mt-8 text-xl font-bold">Cách 2 — Dùng Stack</h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Stack có thể giúp đảo thứ tự:
            </p>

            <CodeBlock code={palindromeStackCode} />

            <p className="text-sm leading-7 text-slate-600">
              Nhưng đây vẫn là dùng thêm O(n) bộ nhớ. Bài toán không thực sự cần
              phải đảo toàn bộ chuỗi.
            </p>

            <InfoBox type="important" title="Một câu hỏi tốt hơn">
              Chúng ta có thể lấy ngay ký tự đầu và ký tự cuối mà không cần tạo
              ra cấu trúc dữ liệu mới không?
              <br />
              <br />
              <strong>Có.</strong>
              <br />
              Đây chính là lúc Two Pointer xuất hiện.
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Pattern */}
          <section id="pattern" className="scroll-mt-24">
            <SectionTitle
              number="09"
              title="Nhận diện pattern Two Pointer"
              description="Hãy biến đề bài thành một pattern mà bạn có thể nhận ra trong vài giây."
            />

            <div className="my-6 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                Input
              </p>

              <p className="mt-4 text-center font-mono text-xl font-bold">
                r a c e c a r
              </p>

              <div className="mt-8 flex items-center justify-between">
                <div className="text-center">
                  <div className="rounded-xl bg-sky-100 px-4 py-3 font-mono font-bold text-sky-800">
                    left
                  </div>

                  <p className="mt-2 text-xs text-slate-400">từ đầu</p>
                </div>

                <div className="flex flex-1 items-center justify-center px-5">
                  <div className="h-px w-full bg-slate-200" />
                </div>

                <div className="text-center">
                  <div className="rounded-xl bg-violet-100 px-4 py-3 font-mono font-bold text-violet-800">
                    right
                  </div>

                  <p className="mt-2 text-xs text-slate-400">từ cuối</p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold">Pattern hoàn chỉnh</h3>

            <div className="mt-5 space-y-3">
              <StepCard number="01" title="Đặt left và right">
                <code>left = 0</code> và <code>right = length - 1</code>.
              </StepCard>

              <StepCard number="02" title="Bỏ qua dữ liệu không cần">
                Nếu ký tự tại left hoặc right không phải chữ/số, di chuyển
                pointer tương ứng.
              </StepCard>

              <StepCard number="03" title="So sánh hai đầu">
                Chuyển về cùng kiểu chữ rồi kiểm tra hai giá trị.
              </StepCard>

              <StepCard number="04" title="Mismatch">
                Nếu hai giá trị khác nhau, chắc chắn không phải Palindrome.
              </StepCard>

              <StepCard number="05" title="Match">
                Nếu giống nhau, left tiến vào và right lùi vào.
              </StepCard>
            </div>

            <InfoBox type="tip" title="Tư duy quan trọng">
              Chúng ta không cần biết toàn bộ chuỗi có Palindrome hay không ngay
              lập tức. Chỉ cần phát hiện một cặp đối xứng sai là đủ để kết luận{" "}
              <strong>false</strong>.
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Dry run */}
          <section id="dry-run" className="scroll-mt-24">
            <SectionTitle
              number="10"
              title="Dry Run"
              description="Chạy bằng tay là cách tốt nhất để hiểu hai pointer di chuyển như thế nào."
            />

            <h3 className="text-xl font-bold">
              Ví dụ: "A man, a plan, a canal: Panama"
            </h3>

            <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
              <table className="w-full min-w-[760px] text-sm">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="border-b border-slate-200 px-4 py-4 text-left">
                      Bước
                    </th>

                    <th className="border-b border-slate-200 px-4 py-4 text-left">
                      Left
                    </th>

                    <th className="border-b border-slate-200 px-4 py-4 text-left">
                      Right
                    </th>

                    <th className="border-b border-slate-200 px-4 py-4 text-left">
                      So sánh
                    </th>

                    <th className="border-b border-slate-200 px-4 py-4 text-left">
                      Hành động
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {[
                    ["1", "A", "a", "a == a", "left++, right--"],
                    ["2", "m", "m", "m == m", "left++, right--"],
                    ["3", "a", "a", "a == a", "left++, right--"],
                    ["4", "n", "n", "n == n", "left++, right--"],
                    ["5", "a", "a", "a == a", "left++, right--"],
                  ].map(([step, left, right, compare, action]) => (
                    <tr key={step}>
                      <td className="border-b border-slate-100 px-4 py-4 font-mono font-bold">
                        {step}
                      </td>

                      <td className="border-b border-slate-100 px-4 py-4 font-mono">
                        {left}
                      </td>

                      <td className="border-b border-slate-100 px-4 py-4 font-mono">
                        {right}
                      </td>

                      <td className="border-b border-slate-100 px-4 py-4 font-mono text-emerald-700">
                        {compare}
                      </td>

                      <td className="border-b border-slate-100 px-4 py-4 text-slate-600">
                        {action}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <div className="flex items-center gap-3">
                <CheckCircle2 size={19} className="text-emerald-600" />

                <p className="text-sm font-semibold text-emerald-800">
                  Không có cặp nào mismatch → chuỗi là Palindrome.
                </p>
              </div>
            </div>

            <h3 className="mt-10 text-xl font-bold">Ví dụ sai: "race a car"</h3>

            <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
              <table className="w-full min-w-[700px] text-sm">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="border-b border-slate-200 px-4 py-4 text-left">
                      Bước
                    </th>

                    <th className="border-b border-slate-200 px-4 py-4 text-left">
                      Left
                    </th>

                    <th className="border-b border-slate-200 px-4 py-4 text-left">
                      Right
                    </th>

                    <th className="border-b border-slate-200 px-4 py-4 text-left">
                      Kết quả
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td className="border-b border-slate-100 px-4 py-4">1</td>

                    <td className="border-b border-slate-100 px-4 py-4 font-mono">
                      r
                    </td>

                    <td className="border-b border-slate-100 px-4 py-4 font-mono">
                      r
                    </td>

                    <td className="border-b border-slate-100 px-4 py-4 text-emerald-700">
                      Match
                    </td>
                  </tr>

                  <tr>
                    <td className="border-b border-slate-100 px-4 py-4">2</td>

                    <td className="border-b border-slate-100 px-4 py-4 font-mono">
                      a
                    </td>

                    <td className="border-b border-slate-100 px-4 py-4 font-mono">
                      a
                    </td>

                    <td className="border-b border-slate-100 px-4 py-4 text-emerald-700">
                      Match
                    </td>
                  </tr>

                  <tr>
                    <td className="px-4 py-4">3</td>

                    <td className="px-4 py-4 font-mono">c</td>

                    <td className="px-4 py-4 font-mono">c</td>

                    <td className="px-4 py-4 text-emerald-700">Match</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-5 text-sm leading-7 text-slate-600">
              Đối với ví dụ này, sau khi bỏ khoảng trắng, chuỗi trở thành{" "}
              <code>raceacar</code>. Khi hai pointer tiến vào giữa, cuối cùng sẽ
              gặp một cặp không giống nhau và trả về <code>false</code>.
            </p>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Solution */}
          <section id="solution" className="scroll-mt-24">
            <SectionTitle
              number="11"
              title="Code C hoàn chỉnh"
              description="Đây là lời giải Two Pointer từ hai đầu cho Valid Palindrome."
            />

            <CodeBlock code={validPalindromeCode} />

            <Complexity
              time="O(n)"
              space="O(1)"
              timeDescription="Mỗi pointer chỉ tiến về phía giữa và không quay lại."
              spaceDescription="Chỉ dùng left, right và một vài biến phụ."
            />

            <InfoBox
              type="important"
              title="Tại sao là O(n) dù có hai while bên trong?"
            >
              Đây là chỗ người mới rất dễ nhầm.
              <br />
              <br />
              Hai vòng <code>while</code> để bỏ qua ký tự không hợp lệ không có
              nghĩa là O(n²). <strong>left chỉ tăng</strong> và{" "}
              <strong>right chỉ giảm</strong>.
              <br />
              <br />
              Một ký tự sau khi bị bỏ qua sẽ không được pointer quay lại. Tổng
              số lần di chuyển của cả hai pointer vẫn tuyến tính theo n.
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Explain code */}
          <section id="explain-code" className="scroll-mt-24">
            <SectionTitle
              number="12"
              title="Giải thích từng phần của code"
              description="Đọc code theo từng ý nhỏ thay vì nhìn toàn bộ hàm một lần."
            />

            <StepCard number="01" title="Kiểm tra ký tự chữ hoặc số">
              Hàm <code>isAlphaNumeric</code> trả về true nếu ký tự nằm trong
              các khoảng <code>a-z</code>, <code>A-Z</code> hoặc{" "}
              <code>0-9</code>.
            </StepCard>

            <CodeBlock
              code={`bool isAlphaNumeric(char c) {
return
    (c >= 'a' && c <= 'z') ||
    (c >= 'A' && c <= 'Z') ||
    (c >= '0' && c <= '9');


}`}
            />

            <StepCard number="02" title="Chuyển chữ hoa thành chữ thường">
              Nếu ký tự là chữ hoa, ta chuyển nó sang lowercase để việc so sánh
              không phụ thuộc vào chữ hoa hay chữ thường.
            </StepCard>

            <CodeBlock
              code={`char toLowerCase(char c) {
if (c >= 'A' && c <= 'Z') {
    return c - 'A' + 'a';
}

return c;


}`}
            />

            <StepCard number="03" title="Đặt hai Pointer">
              <code>left</code> ở đầu chuỗi và <code>right</code> ở cuối chuỗi.
            </StepCard>

            <CodeBlock
              code={`int left = 0;


int right = strlen(s) - 1;`}
            />

            <StepCard number="04" title="Trong khi hai Pointer chưa gặp nhau">
              Chúng ta chỉ cần tiếp tục nếu <code>left &lt; right</code>.
            </StepCard>

            <CodeBlock
              code={`while (left < right) {
...


}`}
            />

            <StepCard number="05" title="Bỏ qua ký tự không phải chữ hoặc số">
              Nếu left đang ở dấu cách, dấu phẩy hoặc ký tự đặc biệt thì left
              phải tiếp tục tiến tới. Tương tự với right.
            </StepCard>

            <CodeBlock
              code={`while (
left < right &&
!isAlphaNumeric(s[left])


) {
left++;
}

while (
left < right &&
!isAlphaNumeric(s[right])
) {
right--;
}`}
            />

            <StepCard number="06" title="So sánh hai ký tự">
              Sau khi hai pointer đã đứng ở những ký tự hợp lệ, ta chuyển chúng
              về lowercase rồi so sánh.
            </StepCard>

            <CodeBlock
              code={`if (
toLowerCase(s[left]) !=
toLowerCase(s[right])


) {
return false;
}`}
            />

            <StepCard number="07" title="Hai ký tự giống nhau">
              Nếu match, cặp hiện tại đã được xử lý xong. Hai pointer tiến vào
              phía giữa.
            </StepCard>

            <CodeBlock
              code={`left++;


right--;`}
            />

            <StepCard number="08" title="Duyệt hết mà không mismatch">
              Nếu không tìm thấy bất kỳ cặp nào khác nhau thì chuỗi là
              Palindrome.
            </StepCard>

            <CodeBlock code={`return true;`} />
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Edge cases */}
          <section id="edge-cases" className="scroll-mt-24">
            <SectionTitle
              number="13"
              title="Edge Cases"
              description="Một thuật toán tốt phải xử lý được cả các trường hợp nhỏ nhất."
            />

            <div className="space-y-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-lg font-bold">""</p>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Chuỗi rỗng được xem là Palindrome.
                    </p>
                  </div>

                  <CheckCircle2
                    size={20}
                    className="shrink-0 text-emerald-600"
                  />
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-lg font-bold">"a"</p>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Một ký tự duy nhất luôn là Palindrome.
                    </p>
                  </div>

                  <CheckCircle2
                    size={20}
                    className="shrink-0 text-emerald-600"
                  />
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-lg font-bold">".,"</p>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Không có ký tự chữ hoặc số hợp lệ. Hai pointer sẽ tiến vào
                      nhau và kết quả vẫn là true.
                    </p>
                  </div>

                  <CheckCircle2
                    size={20}
                    className="shrink-0 text-emerald-600"
                  />
                </div>
              </div>

              <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-lg font-bold">"ab"</p>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      a khác b → trả về false ngay.
                    </p>
                  </div>

                  <X size={20} className="shrink-0 text-red-600" />
                </div>
              </div>
            </div>

            <InfoBox type="tip" title="Một thói quen tốt khi làm bài">
              Trước khi code, hãy tự kiểm tra ít nhất:
              <br />
              <strong>chuỗi rỗng</strong>, <strong>một phần tử</strong>,{" "}
              <strong>không có ký tự hợp lệ</strong>, và{" "}
              <strong>có mismatch ngay từ đầu</strong>.
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Mistakes */}
          <section id="mistakes" className="scroll-mt-24">
            <SectionTitle
              number="14"
              title="Các lỗi thường gặp"
              description="Hiểu những lỗi này sẽ giúp bạn tránh được rất nhiều bug khi dùng Two Pointer."
            />

            <div className="space-y-4">
              <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
                <div className="flex gap-4">
                  <X size={20} className="mt-0.5 shrink-0 text-red-500" />

                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Dùng{" "}
                      <code className="rounded bg-slate-100 px-1.5 py-0.5 text-sm font-mono text-slate-800">
                        left &lt;= right
                      </code>{" "}
                      khi không thực sự cần thiết
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      Khi hai con trỏ trùng nhau (
                      <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs font-mono text-slate-700">
                        left === right
                      </code>
                      ), ký tự ở giữa chỉ còn lại một và luôn bằng chính nó, nên
                      bạn chỉ cần dùng điều kiện{" "}
                      <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs font-mono text-slate-700">
                        left &lt; right
                      </code>
                      .
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
                <div className="flex gap-4">
                  <X size={20} className="mt-0.5 shrink-0 text-red-500" />

                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Quên bỏ qua ký tự đặc biệt
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      Đề bài không yêu cầu so sánh dấu cách, dấu phẩy hoặc dấu
                      câu.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
                <div className="flex gap-4">
                  <X size={20} className="mt-0.5 shrink-0 text-red-500" />

                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Không xử lý uppercase
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      <code>A</code> và <code>a</code> phải được coi là cùng một
                      ký tự theo yêu cầu bài toán.
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
                    <h3 className="font-semibold text-slate-900">
                      Di chuyển cả hai pointer khi mismatch
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      Không cần. Nếu mismatch thì kết luận false ngay. Không cần
                      xử lý tiếp.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <InfoBox type="important" title="Nguyên tắc vàng">
              <strong>
                Chỉ di chuyển pointer sau khi bạn biết chính xác vì sao pointer
                đó cần di chuyển.
              </strong>
              <br />
              <br />
              Không nên viết <code>left++</code> và <code>right--</code> một
              cách máy móc. Hãy hiểu mỗi bước đang loại bỏ phần dữ liệu nào.
            </InfoBox>
          </section>

          <div className="my-16 h-px bg-slate-200" />

          {/* Summary */}
          <section id="summary" className="scroll-mt-24">
            <SectionTitle
              number="15"
              title="Tổng kết Two Pointer"
              description="Nếu chỉ nhớ một vài điều sau trang này, hãy nhớ những điều dưới đây."
            />

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                  <GitBranch size={20} />
                </div>

                <h3 className="mt-4 text-lg font-bold">Đây là technique</h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Two Pointer là kỹ thuật giải bài, không phải một Data
                  Structure.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                  <MoveHorizontal size={20} />
                </div>

                <h3 className="mt-4 text-lg font-bold">Left / Right</h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Đây là dạng phổ biến nhất: hai pointer từ hai đầu tiến vào
                  giữa.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                  <Zap size={20} />
                </div>

                <h3 className="mt-4 text-lg font-bold">
                  Loại bỏ trường hợp thừa
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Thay vì thử mọi cặp, mỗi bước loại bỏ một phần dữ liệu không
                  còn cần xét.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                  <Clock3 size={20} />
                </div>

                <h3 className="mt-4 text-lg font-bold">O(n)</h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Nếu mỗi pointer chỉ di chuyển một chiều, tổng số bước thường
                  là tuyến tính.
                </p>
              </div>
            </div>

            <h3 className="mt-10 text-xl font-bold">
              Pattern của Valid Palindrome
            </h3>

            <div className="mt-5 grid gap-3 sm:grid-cols-4">
              {[
                ["1", "left", "Đầu chuỗi"],
                ["2", "right", "Cuối chuỗi"],
                ["3", "compare", "So sánh"],
                ["4", "move", "Tiến vào giữa"],
              ].map(([number, title, description]) => (
                <div
                  key={number}
                  className="rounded-2xl border border-slate-200 bg-white p-5"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 font-mono text-xs font-bold text-white">
                    {number}
                  </div>

                  <p className="mt-3 font-mono font-bold">{title}</p>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    {description}
                  </p>
                </div>
              ))}
            </div>

            <InfoBox type="important" title="Một câu để nhớ Two Pointer">
              Khi dữ liệu có thể được xử lý từ{" "}
              <strong>hai vị trí khác nhau</strong>, và sau mỗi bước ta có thể
              thu hẹp phạm vi cần xét, hãy thử nghĩ tới:
              <br />
              <br />
              <strong>Two Pointer.</strong>
            </InfoBox>

            <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white sm:p-8">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Mental model
              </p>

              <h3 className="mt-3 text-2xl font-bold">Valid Palindrome</h3>

              <div className="mt-7 space-y-2 font-mono text-sm leading-8 text-slate-300">
                <div>
                  <span className="text-sky-300">left</span>
                  <span> → đầu chuỗi</span>
                </div>

                <div>
                  <span className="text-violet-300">right</span>
                  <span> → cuối chuỗi</span>
                </div>

                <div>
                  <span className="text-slate-500">↓</span>
                </div>

                <div>so sánh hai ký tự</div>

                <div>
                  <span className="text-emerald-300">match</span>
                  <span> → left++, right--</span>
                </div>

                <div>
                  <span className="text-red-300">mismatch</span>
                  <span> → false</span>
                </div>

                <div>
                  <span className="text-slate-500">↓</span>
                </div>

                <div>
                  hết chuỗi → <span className="text-emerald-300">true</span>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/algorithms/stack"
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

                    <p className="mt-1 font-semibold">Stack</p>
                  </div>
                </div>
              </Link>

              <Link
                to="/algorithms/binary-search"
                className="group flex flex-1 items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-slate-300 hover:shadow-lg"
              >
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Next
                  </p>

                  <p className="mt-1 font-semibold">Binary Search</p>
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
          <span>Two Pointer · Valid Palindrome</span>
        </div>
      </footer>
    </div>
  );
}
