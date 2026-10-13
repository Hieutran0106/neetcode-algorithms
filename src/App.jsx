import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ArrayHashing from "./Pages/ArrayHashing/ArrayHashing";
import Stack from "./Pages/Stack/Stack";
import TwoPointer from "./Pages/TwoPointer/TwoPointer";
import BinarySearch from "./Pages/BinarySearch/BinarySearch";
import SlidingWindow from "./Pages/SlidingWindow/SlidingWindow";
import LinkedList from "./Pages/LinkedList/LinkedList";
import Tree from "./Pages/Tree/Tree";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Tries from "./Pages/Tries/Tries";
import Backtracking from "./Pages/Backtracking/Backtracking";
import Heap from "./Pages/Heap/Heap";
import Intervals from "./Pages/Intervals/Intervals";
import Greedy from "./Pages/Greedy/Greedy";
import Graphs from "./Pages/Graphs/Graphs";
import AdvancedGraphs from "./Pages/AdvancedGraphs/AdvancedGraphs";
import DP1D from "./Pages/DP1D/DP1D";
import DP2D from "./Pages/DP2D/DP2D";
import BitManipulation from "./Pages/BitManipulation/BitManipulation";
import MathGeometry from "./Pages/MathGeometry/MathGeometry";

function NotFoundPage() {
  return (
    <>
      {" "}
      <h1>404</h1> <p>Không tìm thấy trang.</p>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />{" "}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/algorithms/array-hashing" element={<ArrayHashing />} />
        <Route path="/algorithms/stack" element={<Stack />} />
        <Route path="/algorithms/two-pointer" element={<TwoPointer />} />
        <Route path="/algorithms/binary-search" element={<BinarySearch />} />
        <Route path="/algorithms/sliding-window" element={<SlidingWindow />} />
        <Route path="/algorithms/linked-list" element={<LinkedList />} />
        <Route path="/algorithms/trees" element={<Tree />} />
        <Route path="/algorithms/tries" element={<Tries />} />
        <Route path="/algorithms/backtracking" element={<Backtracking />} />
        <Route path="/algorithms/heap" element={<Heap />} />
        <Route path="/algorithms/intervals" element={<Intervals />} />
        <Route path="/algorithms/greedy" element={<Greedy />} />
        <Route path="/algorithms/graphs" element={<Graphs />} />
        <Route path="/algorithms/advanced-graphs" element={<AdvancedGraphs />} />
        <Route path="/algorithms/dp-1d" element={<DP1D />} />
        <Route path="/algorithms/dp-2d" element={<DP2D />} />
        <Route path="/algorithms/bit-manipulation" element={<BitManipulation />} />
        <Route path="/algorithms/math-geometry" element={<MathGeometry />} />
        <Route path="*" element={<NotFoundPage />} />{" "}
      </Routes>{" "}
    </BrowserRouter>
  );
}
