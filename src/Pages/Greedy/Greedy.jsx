import { CheckCircle2, Search, Timer } from "lucide-react";
import { LessonLayout } from "../../components/lesson/LessonKit";
import { sections } from "./data/greedyData";

export default function Greedy() {
  return (
    <LessonLayout
      badge="NEETCODE · GREEDY"
      icon={CheckCircle2}
      title="Greedy"
      intro={"Greedy **chọn phương án tốt nhất tại mỗi bước và không quay đầu**. Bài học dạy cách nhận ra khi nào Greedy đúng qua Kadane, Jump Game, Gas Station, Partition Labels."}
      chips={[[CheckCircle2, "Local Optimum"], [Timer, "O(n)"], [Search, "Exchange Argument"]]}
      sections={sections}
      prev={{"path":"/algorithms/intervals","label":"Intervals"}}
      next={{"path":"/algorithms/graphs","label":"Graphs"}}
    />
  );
}
