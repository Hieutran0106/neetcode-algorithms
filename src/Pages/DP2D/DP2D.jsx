import { Braces, Layers3, Timer } from "lucide-react";
import { LessonLayout } from "../../components/lesson/LessonKit";
import { sections } from "./data/dp2dData";

export default function DP2D() {
  return (
    <LessonLayout
      badge="NEETCODE · 2-D DYNAMIC PROGRAMMING"
      icon={Timer}
      title="2-D Dynamic Programming"
      intro={"Khi trạng thái cần **hai tham số**: đi trên lưới, so sánh hai chuỗi (**LCS, Edit Distance**), **Knapsack** và DP có trạng thái ẩn (Stock with Cooldown)."}
      chips={[[Timer, "dp[i][j]"], [Braces, "LCS"], [Layers3, "Knapsack"]]}
      sections={sections}
      prev={{"path":"/algorithms/dp-1d","label":"1-D Dynamic Programming"}}
      next={{"path":"/algorithms/bit-manipulation","label":"Bit Manipulation"}}
    />
  );
}
