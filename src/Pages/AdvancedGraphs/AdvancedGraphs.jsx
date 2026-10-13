import { GitFork, Network, Timer } from "lucide-react";
import { LessonLayout } from "../../components/lesson/LessonKit";
import { sections } from "./data/advancedGraphsData";

export default function AdvancedGraphs() {
  return (
    <LessonLayout
      badge="NEETCODE · ADVANCED GRAPHS"
      icon={GitFork}
      title="Advanced Graphs"
      intro={"Đồ thị **có trọng số**: **Dijkstra**, **Bellman-Ford**, **MST (Prim / Kruskal)**, đường Euler và Alien Dictionary — kết hợp Heap, Union-Find và Topological Sort."}
      chips={[[GitFork, "Dijkstra"], [Timer, "Bellman-Ford"], [Network, "MST"]]}
      sections={sections}
      prev={{"path":"/algorithms/graphs","label":"Graphs"}}
      next={{"path":"/algorithms/dp-1d","label":"1-D Dynamic Programming"}}
    />
  );
}
