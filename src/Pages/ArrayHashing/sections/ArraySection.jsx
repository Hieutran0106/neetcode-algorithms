import { CodeBlock, Complexity, InfoBox, SectionTitle } from "../components/ArrayHashingUI";

export function ArraySection() {
  return (
<section id="array" className="scroll-mt-24">
            <SectionTitle
              number="01"
              title="Array cơ bản"
              description="Mọi thứ bắt đầu từ cách chúng ta lưu dữ liệu."
            />

            <p className="text-sm leading-7 text-slate-600 sm:text-base">
              Array là một tập hợp các phần tử được đặt theo thứ tự. Mỗi phần tử
              được xác định bởi một <strong>index</strong>.
            </p>

            <div className="my-7 overflow-x-auto rounded-2xl border border-slate-200 bg-white p-5">
              <div className="flex min-w-[560px]">
                {[
                  { index: 0, value: 3 },
                  { index: 1, value: 4 },
                  { index: 2, value: 5 },
                  { index: 3, value: 6 },
                ].map((item) => (
                  <div key={item.index} className="flex-1">
                    <div className="border border-slate-200 bg-slate-50 p-5 text-center font-mono text-lg font-bold">
                      {item.value}
                    </div>

                    <p className="mt-2 text-center font-mono text-xs text-slate-400">
                      index {item.index}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <h3 className="text-xl font-bold text-slate-900">
              Index bắt đầu từ 0
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Phần tử đầu tiên nằm ở index <code>0</code>. Do đó:
            </p>

            <div className="my-5 flex flex-wrap gap-2">
              {[0, 1, 2, 3].map((index) => (
                <span
                  key={index}
                  className="rounded-lg bg-slate-900 px-4 py-2 font-mono text-sm text-white"
                >
                  nums[{index}]
                </span>
              ))}
            </div>

            <h3 className="mt-8 text-xl font-bold text-slate-900">
              Truy cập phần tử
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Nếu biết index, chúng ta có thể truy cập trực tiếp phần tử đó. Đây
              là lý do Array rất mạnh khi cần random access.
            </p>

            <CodeBlock
              code={`int nums[4] = {3, 4, 5, 6};


printf("%d", nums[2]);

// Output:
// 5`}
            />

            <Complexity
              time="O(1)"
              space="O(1)"
              timeDescription="Biết index thì truy cập trực tiếp."
              spaceDescription="Không cần thêm cấu trúc dữ liệu phụ."
            />

            <h3 className="mt-8 text-xl font-bold text-slate-900">
              Nhưng tìm kiếm thì sao?
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Nếu chúng ta không biết phần tử nằm ở đâu, cách đơn giản nhất là
              duyệt từng phần tử:
            </p>

            <CodeBlock
              code={`for (int i = 0; i < n; i++) {
if (nums[i] == target) {
    return i;
}


}`}
            />

            <p className="text-sm leading-7 text-slate-600">
              Đây là <strong>Linear Search</strong> và có complexity O(n).
            </p>

            <InfoBox type="tip" title="Từ đây xuất hiện một vấn đề">
              Nếu chúng ta phải kiểm tra đi kiểm tra lại xem một giá trị có tồn
              tại trong Array hay không, việc duyệt từ đầu mỗi lần có thể rất
              chậm.
              <br />
              <br />
              <strong>Hashing xuất hiện để giải quyết chính vấn đề này.</strong>
            </InfoBox>
          </section>
  );
}
