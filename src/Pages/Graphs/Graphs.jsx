import { GitBranch, Link2, Network } from "lucide-react";
import { LessonLayout } from "../../components/lesson/LessonKit";
import { sections } from "./data/graphsData";

export default function Graphs() {
  return (
    <LessonLayout
      badge="NEETCODE · GRAPHS"
      icon={Network}
      title="Graphs"
      intro={"Hầu hết bài Graph giải được bằng **DFS, BFS, Topological Sort và Union-Find**. Bài học đi từ cách biểu diễn đồ thị, grid, Multi-source BFS đến Course Schedule."}
      chips={[[Network, "DFS / BFS"], [GitBranch, "Topo Sort"], [Link2, "Union-Find"]]}
      sections={sections}
      prev={{"path":"/algorithms/greedy","label":"Greedy"}}
      next={{"path":"/algorithms/advanced-graphs","label":"Advanced Graphs"}}
    />
  );
}
