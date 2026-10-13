import { Braces, CheckCircle2, Timer } from "lucide-react";
import { LessonLayout } from "../../components/lesson/LessonKit";
import { sections } from "./data/dp1dData";

export default function DP1D() {
  return (
    <LessonLayout
      badge="NEETCODE · 1-D DYNAMIC PROGRAMMING"
      icon={Braces}
      title="1-D Dynamic Programming"
      intro={"DP = **đệ quy + nhớ kết quả**. Bài học đi từ Memoization / Tabulation đến Climbing Stairs, House Robber, Coin Change, LIS và Word Break."}
      chips={[[Braces, "dp[i]"], [Timer, "Memoization"], [CheckCircle2, "Tabulation"]]}
      sections={sections}
      prev={{"path":"/algorithms/advanced-graphs","label":"Advanced Graphs"}}
      next={{"path":"/algorithms/dp-2d","label":"2-D Dynamic Programming"}}
    />
  );
}
