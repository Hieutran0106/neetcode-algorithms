import { InfoBox, SectionTitle } from "../components/ArrayHashingUI";

export function HashMapSection() {
  return (
<section id="hash-map" className="scroll-mt-24">
            <SectionTitle
              number="04"
              title="Hash Map"
              description="Hash Map giống Set nhưng ngoài việc lưu key, chúng ta còn lưu thêm value."
            />

            <p className="text-sm leading-7 text-slate-600 sm:text-base">
              Hash Set có dạng:
            </p>

            <div className="my-4 rounded-2xl bg-slate-950 p-5 font-mono text-sm text-slate-300">
              value
            </div>

            <p className="text-sm leading-7 text-slate-600 sm:text-base">
              Hash Map có dạng:
            </p>

            <div className="my-4 rounded-2xl bg-slate-950 p-5 font-mono text-sm text-slate-300">
              key → value
            </div>

            <div className="my-7 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
              <table className="w-full min-w-[560px] text-sm">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="border-b border-slate-200 px-5 py-4 text-left">
                      Key
                    </th>
                    <th className="border-b border-slate-200 px-5 py-4 text-left">
                      Value
                    </th>
                    <th className="border-b border-slate-200 px-5 py-4 text-left">
                      Ý nghĩa
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td className="border-b border-slate-100 px-5 py-4 font-mono">
                      7
                    </td>

                    <td className="border-b border-slate-100 px-5 py-4 font-mono">
                      1
                    </td>

                    <td className="border-b border-slate-100 px-5 py-4 text-slate-600">
                      Số 7 xuất hiện ở index 1
                    </td>
                  </tr>

                  <tr>
                    <td className="border-b border-slate-100 px-5 py-4 font-mono">
                      11
                    </td>

                    <td className="border-b border-slate-100 px-5 py-4 font-mono">
                      2
                    </td>

                    <td className="border-b border-slate-100 px-5 py-4 text-slate-600">
                      Số 11 xuất hiện ở index 2
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <InfoBox type="important" title="Đây là điểm mấu chốt của Two Sum">
              Two Sum không chỉ cần biết một số đã xuất hiện.
              <br />
              Nó cần biết:
              <strong> số đó xuất hiện ở đâu?</strong>
              <br />
              Vì vậy chúng ta cần lưu:
              <strong> number → index</strong>.
            </InfoBox>
          </section>
  );
}
