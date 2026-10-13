import { Binary, Search, SquareStack, Timer } from "lucide-react";
import { LessonLayout } from "../../components/lesson/LessonKit";
import { sections } from "./data/heapData";

export default function Heap() {
  return (
    <LessonLayout
      badge="NEETCODE · HEAP / PRIORITY QUEUE"
      icon={SquareStack}
      title="Heap / Priority Queue"
      intro={"Heap cho phép lấy **phần tử nhỏ nhất / lớn nhất trong O(log n)**. Bài học đi từ cách lưu heap bằng mảng, sift up / sift down đến các pattern **Top K**, **Two Heaps** và **Merge K**."}
      chips={[[Binary, "Min / Max Heap"], [Timer, "O(log n)"], [Search, "Top K"]]}
      sections={sections}
      prev={{"path":"/algorithms/backtracking","label":"Backtracking"}}
      next={{"path":"/algorithms/intervals","label":"Intervals"}}
    />
  );
}
