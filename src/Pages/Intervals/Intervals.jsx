import { CheckCircle2, Layers3, Timer } from "lucide-react";
import { LessonLayout } from "../../components/lesson/LessonKit";
import { sections } from "./data/intervalsData";

export default function Intervals() {
  return (
    <LessonLayout
      badge="NEETCODE · INTERVALS"
      icon={Layers3}
      title="Intervals"
      intro={"Bài Interval gần như luôn là **sắp xếp rồi quét một lần**. Bài học gồm Merge, Insert, xóa interval chồng nhau (Greedy) và Sweep Line cho Meeting Rooms."}
      chips={[[Layers3, "Merge"], [Timer, "Sort + Sweep"], [CheckCircle2, "Greedy"]]}
      sections={sections}
      prev={{"path":"/algorithms/heap","label":"Heap / Priority Queue"}}
      next={{"path":"/algorithms/greedy","label":"Greedy"}}
    />
  );
}
