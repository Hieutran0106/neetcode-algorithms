import { Binary, Search, Timer } from "lucide-react";
import { LessonLayout } from "../../components/lesson/LessonKit";
import { sections } from "./data/bitData";

export default function BitManipulation() {
  return (
    <LessonLayout
      badge="NEETCODE · BIT MANIPULATION"
      icon={Binary}
      title="Bit Manipulation"
      intro={"Năm công cụ cần nhớ: **XOR triệt tiêu**, **n & (n−1)**, dịch bit, **XOR + carry** để cộng và **bitmask**. Giải các bài Single Number, Counting Bits, Reverse Bits, Sum of Two Integers."}
      chips={[[Binary, "XOR"], [Timer, "O(1) space"], [Search, "Bitmask"]]}
      sections={sections}
      prev={{"path":"/algorithms/dp-2d","label":"2-D Dynamic Programming"}}
      next={{"path":"/algorithms/math-geometry","label":"Math & Geometry"}}
    />
  );
}
