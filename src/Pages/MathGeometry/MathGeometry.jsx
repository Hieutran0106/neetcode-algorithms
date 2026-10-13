import { Network, Search, Timer } from "lucide-react";
import { LessonLayout } from "../../components/lesson/LessonKit";
import { sections } from "./data/mathGeometryData";

export default function MathGeometry() {
  return (
    <LessonLayout
      badge="NEETCODE · MATH & GEOMETRY"
      icon={Search}
      title="Math & Geometry"
      intro={"Nhóm bài \"mẹo\": **xoay / xoắn ốc ma trận**, số học (carry, chu trình, **lũy thừa nhanh**) và hình học tọa độ với **Detect Squares**."}
      chips={[[Search, "Matrix"], [Timer, "Fast Power"], [Network, "Coordinates"]]}
      sections={sections}
      prev={{"path":"/algorithms/bit-manipulation","label":"Bit Manipulation"}}
      next={null}
    />
  );
}
