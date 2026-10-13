export const sections = [
  {
    id: "introduction",
    title: "Heap là gì?",
    description: "Cấu trúc cho phép lấy phần tử nhỏ nhất (hoặc lớn nhất) trong O(log n) mà không cần sắp xếp toàn bộ.",
    blocks: [
      { type: "p", text: "Khi bài toán liên tục hỏi **\"phần tử nhỏ nhất / lớn nhất hiện tại là gì?\"** trong lúc dữ liệu thay đổi, sắp xếp lại mảng sau mỗi lần thêm là quá chậm. **Heap** (hay **Priority Queue**) trả lời câu hỏi đó rất rẻ." },
      {
        type: "cards",
        items: [
          { title: "Min-Heap", text: "Cha luôn **nhỏ hơn hoặc bằng** các con. Gốc là phần tử nhỏ nhất.", mono: "peek() → min" },
          { title: "Max-Heap", text: "Cha luôn **lớn hơn hoặc bằng** các con. Gốc là phần tử lớn nhất.", mono: "peek() → max" },
          { title: "Complete Binary Tree", text: "Cây nhị phân đầy từ trên xuống, từ trái sang phải → lưu được trong **mảng**.", mono: "không cần con trỏ" },
        ],
      },
      {
        type: "table",
        head: ["Thao tác", "Heap", "Mảng đã sort", "Mảng chưa sort"],
        rows: [
          ["Lấy min/max", "O(1)", "O(1)", "O(n)"],
          ["Thêm phần tử", "O(log n)", "O(n)", "O(1)"],
          ["Xóa min/max", "O(log n)", "O(n)", "O(n)"],
          ["Build từ n phần tử", "O(n)", "O(n log n)", "—"],
        ],
      },
      { type: "info", kind: "important", title: "Heap không phải mảng đã sort", text: "Heap chỉ đảm bảo quan hệ **cha – con**, không đảm bảo thứ tự giữa các nút anh em. Chỉ có phần tử gốc là chắc chắn đúng." },
    ],
  },
  {
    id: "array-representation",
    title: "Lưu Heap bằng mảng",
    description: "Công thức chỉ số là thứ cần nhớ để hiểu sift up / sift down.",
    blocks: [
      { type: "formula", text: "parent(i) = (i-1)/2   left(i) = 2i+1   right(i) = 2i+2" },
      { type: "code", label: "Min-Heap [1, 3, 5, 7, 4, 8]", code: "        1            index: 0  1  2  3  4  5\n      /   \\          value: 1  3  5  7  4  8\n     3     5\n    / \\   /          parent(4) = (4-1)/2 = 1  → 3\n   7   4 8           left(1)   = 3 → 7,  right(1) = 4 → 4" },
      { type: "steps", items: [
        { title: "Push (sift up)", text: "Thêm vào cuối mảng, rồi **đổi chỗ với cha** chừng nào nó còn nhỏ hơn cha. Tối đa log n lần." },
        { title: "Pop (sift down)", text: "Lấy gốc ra, đưa **phần tử cuối lên gốc**, rồi đổi chỗ với **con nhỏ hơn** chừng nào còn lớn hơn con." },
        { title: "Heapify", text: "Sift down từ nút cha cuối cùng ngược về gốc → build heap trong **O(n)**, nhanh hơn push n lần (O(n log n))." },
      ] },
    ],
  },
  {
    id: "language-usage",
    title: "Dùng Heap trong C / Java / Python",
    description: "Thi/làm bài NeetCode thường dùng thư viện có sẵn; riêng C phải tự viết.",
    blocks: [
      { type: "code", examples: {
        C: "typedef struct { int *a; int size; } MinHeap;\n\nstatic void swap(int *x, int *y) { int t = *x; *x = *y; *y = t; }\n\nvoid push(MinHeap *h, int v) {\n    int i = h->size++;\n    h->a[i] = v;\n    while (i > 0 && h->a[(i - 1) / 2] > h->a[i]) {   /* sift up */\n        swap(&h->a[(i - 1) / 2], &h->a[i]);\n        i = (i - 1) / 2;\n    }\n}\n\nint pop(MinHeap *h) {\n    int top = h->a[0];\n    h->a[0] = h->a[--h->size];\n    int i = 0;\n    for (;;) {                                        /* sift down */\n        int l = 2 * i + 1, r = l + 1, m = i;\n        if (l < h->size && h->a[l] < h->a[m]) m = l;\n        if (r < h->size && h->a[r] < h->a[m]) m = r;\n        if (m == i) break;\n        swap(&h->a[i], &h->a[m]);\n        i = m;\n    }\n    return top;\n}",
        Java: "import java.util.*;\n\nPriorityQueue<Integer> minHeap = new PriorityQueue<>();\nPriorityQueue<Integer> maxHeap = new PriorityQueue<>(Collections.reverseOrder());\n\n// So sánh tùy chỉnh: theo khoảng cách tăng dần\nPriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> a[0] - b[0]);\n\nminHeap.offer(5);      // push  O(log n)\nint x = minHeap.peek(); // top   O(1)\nminHeap.poll();        // pop   O(log n)",
        Python: "import heapq\n\nh = []                        # min-heap\nheapq.heappush(h, 5)          # push  O(log n)\nx = h[0]                      # top   O(1)\nheapq.heappop(h)              # pop   O(log n)\n\nheapq.heapify(arr)            # biến list thành heap O(n)\n\n# Max-heap: đảo dấu\nheapq.heappush(h, -5)\nbiggest = -heapq.heappop(h)\n\n# Tuple so sánh từng phần tử: (khoảng cách, x, y)\nheapq.heappush(h, (dist, x, y))",
      } },
      { type: "info", kind: "tip", title: "Mẹo Python", text: "`heapq` chỉ có min-heap. Cần max-heap thì lưu **số âm**. Heap so sánh tuple theo thứ tự → đặt khóa ưu tiên ở phần tử đầu." },
    ],
  },
  {
    id: "top-k",
    title: "Pattern 1: Top K bằng heap kích thước K",
    description: "Pattern xuất hiện nhiều nhất trong nhóm Heap của NeetCode.",
    blocks: [
      { type: "p", text: "Muốn giữ **K phần tử lớn nhất** → dùng **min-heap kích thước K**. Phần tử gốc chính là phần tử nhỏ nhất trong K phần tử đó, tức là **ứng viên bị loại đầu tiên**. Ngược lại, giữ K nhỏ nhất → max-heap kích thước K." },
      { type: "formula", text: "K lớn nhất → min-heap(K)   |   K nhỏ nhất → max-heap(K)" },
      { type: "problem", title: "Kth Largest Element in a Stream", difficulty: "Easy", description: "Thiết kế class nhận số mới liên tục và trả về phần tử lớn thứ k sau mỗi lần thêm.", link: "https://neetcode.io/problems/kth-largest-integer-in-a-stream" },
      { type: "code", examples: {
        C: "/* Dùng MinHeap ở phần trước, giữ tối đa k phần tử */\nint add(MinHeap *h, int k, int val) {\n    if (h->size < k) push(h, val);\n    else if (val > h->a[0]) { pop(h); push(h, val); }\n    return h->a[0];   /* gốc = phần tử lớn thứ k */\n}",
        Java: "class KthLargest {\n    private final PriorityQueue<Integer> heap = new PriorityQueue<>();\n    private final int k;\n\n    public KthLargest(int k, int[] nums) {\n        this.k = k;\n        for (int n : nums) add(n);\n    }\n\n    public int add(int val) {\n        heap.offer(val);\n        if (heap.size() > k) heap.poll();   // bỏ phần tử nhỏ nhất\n        return heap.peek();\n    }\n}",
        Python: "class KthLargest:\n    def __init__(self, k, nums):\n        self.k = k\n        self.heap = []\n        for n in nums:\n            self.add(n)\n\n    def add(self, val):\n        heapq.heappush(self.heap, val)\n        if len(self.heap) > self.k:\n            heapq.heappop(self.heap)   # bỏ phần tử nhỏ nhất\n        return self.heap[0]",
      } },
      { type: "complexity", time: "O(log k) / lần add", space: "O(k)", timeDescription: "Heap không bao giờ vượt quá k phần tử.", spaceDescription: "Chỉ lưu k phần tử." },
      { type: "problem", title: "K Closest Points to Origin", difficulty: "Medium", description: "Trả về k điểm gần gốc tọa độ nhất.", link: "https://neetcode.io/problems/k-closest-points-to-origin" },
      { type: "code", examples: {
        C: "/* Dùng qsort theo x*x + y*y rồi lấy k phần tử đầu: O(n log n) */\nstatic int cmp(const void *a, const void *b) {\n    const int *p = *(const int **)a, *q = *(const int **)b;\n    return (p[0]*p[0] + p[1]*p[1]) - (q[0]*q[0] + q[1]*q[1]);\n}",
        Java: "public int[][] kClosest(int[][] points, int k) {\n    // max-heap theo khoảng cách bình phương, giữ k điểm gần nhất\n    PriorityQueue<int[]> pq = new PriorityQueue<>(\n        (a, b) -> (b[0]*b[0] + b[1]*b[1]) - (a[0]*a[0] + a[1]*a[1]));\n    for (int[] p : points) {\n        pq.offer(p);\n        if (pq.size() > k) pq.poll();\n    }\n    return pq.toArray(new int[0][]);\n}",
        Python: "def kClosest(points, k):\n    heap = []                      # max-heap bằng cách đảo dấu\n    for x, y in points:\n        d = -(x * x + y * y)       # không cần sqrt\n        heapq.heappush(heap, (d, x, y))\n        if len(heap) > k:\n            heapq.heappop(heap)\n    return [[x, y] for _, x, y in heap]",
      } },
      { type: "info", kind: "tip", title: "Không cần căn bậc hai", text: "So sánh khoảng cách thì so sánh **bình phương** là đủ — tránh sai số số thực và nhanh hơn." },
    ],
  },
  {
    id: "simulation",
    title: "Pattern 2: Mô phỏng \"lấy lớn nhất, xử lý, trả lại\"",
    description: "Bài toán lặp đi lặp lại: lấy phần tử tốt nhất, biến đổi nó, rồi nhét lại.",
    blocks: [
      { type: "problem", title: "Last Stone Weight", difficulty: "Easy", description: "Mỗi lượt chọn 2 viên đá nặng nhất đập vào nhau; còn lại hiệu của chúng. Trả về trọng lượng viên cuối cùng.", link: "https://neetcode.io/problems/last-stone-weight" },
      { type: "code", examples: {
        C: "/* Dùng max-heap (đảo dấu vào MinHeap ở trên) */\nint lastStoneWeight(int *stones, int n, MinHeap *h) {\n    for (int i = 0; i < n; i++) push(h, -stones[i]);\n    while (h->size > 1) {\n        int a = -pop(h), b = -pop(h);\n        if (a != b) push(h, -(a - b));\n    }\n    return h->size ? -h->a[0] : 0;\n}",
        Java: "public int lastStoneWeight(int[] stones) {\n    PriorityQueue<Integer> pq = new PriorityQueue<>(Collections.reverseOrder());\n    for (int s : stones) pq.offer(s);\n    while (pq.size() > 1) {\n        int a = pq.poll(), b = pq.poll();\n        if (a != b) pq.offer(a - b);\n    }\n    return pq.isEmpty() ? 0 : pq.peek();\n}",
        Python: "def lastStoneWeight(stones):\n    heap = [-s for s in stones]\n    heapq.heapify(heap)\n    while len(heap) > 1:\n        a, b = -heapq.heappop(heap), -heapq.heappop(heap)\n        if a != b:\n            heapq.heappush(heap, -(a - b))\n    return -heap[0] if heap else 0",
      } },
      { type: "complexity", time: "O(n log n)", space: "O(n)" },
      { type: "problem", title: "Task Scheduler", difficulty: "Medium", description: "Chạy các task (A–Z), cùng loại phải cách nhau ít nhất n chu kỳ. Tìm thời gian tối thiểu.", link: "https://neetcode.io/problems/task-scheduling" },
      { type: "p", text: "Ý tưởng **Greedy + Heap**: mỗi chu kỳ luôn chạy task còn nhiều lượt nhất (max-heap theo count). Task vừa chạy được đưa vào **hàng đợi chờ** đến chu kỳ `time + n` mới được trả lại heap." },
      { type: "code", examples: {
        Java: "public int leastInterval(char[] tasks, int n) {\n    int[] cnt = new int[26];\n    for (char c : tasks) cnt[c - 'A']++;\n    PriorityQueue<Integer> pq = new PriorityQueue<>(Collections.reverseOrder());\n    for (int c : cnt) if (c > 0) pq.offer(c);\n\n    Queue<int[]> cooldown = new LinkedList<>(); // {count còn lại, thời điểm sẵn sàng}\n    int time = 0;\n    while (!pq.isEmpty() || !cooldown.isEmpty()) {\n        time++;\n        if (!pq.isEmpty()) {\n            int c = pq.poll() - 1;\n            if (c > 0) cooldown.offer(new int[]{c, time + n});\n        }\n        if (!cooldown.isEmpty() && cooldown.peek()[1] == time)\n            pq.offer(cooldown.poll()[0]);\n    }\n    return time;\n}",
        Python: "def leastInterval(tasks, n):\n    heap = [-c for c in Counter(tasks).values()]\n    heapq.heapify(heap)\n    cooldown = deque()          # (count còn lại, thời điểm sẵn sàng)\n    time = 0\n    while heap or cooldown:\n        time += 1\n        if heap:\n            c = 1 + heapq.heappop(heap)   # đang là số âm\n            if c:\n                cooldown.append((c, time + n))\n        if cooldown and cooldown[0][1] == time:\n            heapq.heappush(heap, cooldown.popleft()[0])\n    return time",
        C: "/* Đáp án công thức (không cần heap): */\nint leastInterval(char *tasks, int size, int n) {\n    int cnt[26] = {0}, mx = 0, mxCount = 0;\n    for (int i = 0; i < size; i++) cnt[tasks[i] - 'A']++;\n    for (int i = 0; i < 26; i++) if (cnt[i] > mx) mx = cnt[i];\n    for (int i = 0; i < 26; i++) if (cnt[i] == mx) mxCount++;\n    int need = (mx - 1) * (n + 1) + mxCount;\n    return need > size ? need : size;\n}",
      } },
    ],
  },
  {
    id: "two-heaps",
    title: "Pattern 3: Hai Heap (Median)",
    description: "Một max-heap cho nửa nhỏ, một min-heap cho nửa lớn → trung vị nằm ở hai đỉnh.",
    blocks: [
      { type: "problem", title: "Find Median from Data Stream", difficulty: "Hard", description: "Thêm số liên tục và lấy trung vị bất kỳ lúc nào.", link: "https://neetcode.io/problems/find-median-in-a-data-stream" },
      { type: "steps", items: [
        { title: "Chia đôi dữ liệu", text: "`small` = max-heap chứa nửa nhỏ, `large` = min-heap chứa nửa lớn. Mọi phần tử của small ≤ mọi phần tử của large." },
        { title: "Giữ cân bằng", text: "Kích thước hai heap chênh nhau tối đa 1 (cho phép `small` nhiều hơn 1)." },
        { title: "Đọc trung vị", text: "Tổng lẻ → đỉnh `small`. Tổng chẵn → trung bình hai đỉnh." },
      ] },
      { type: "code", examples: {
        Java: "class MedianFinder {\n    PriorityQueue<Integer> small = new PriorityQueue<>(Collections.reverseOrder());\n    PriorityQueue<Integer> large = new PriorityQueue<>();\n\n    public void addNum(int num) {\n        small.offer(num);\n        large.offer(small.poll());              // đẩy max của small sang large\n        if (large.size() > small.size())\n            small.offer(large.poll());          // cân bằng lại\n    }\n\n    public double findMedian() {\n        if (small.size() > large.size()) return small.peek();\n        return (small.peek() + large.peek()) / 2.0;\n    }\n}",
        Python: "class MedianFinder:\n    def __init__(self):\n        self.small = []   # max-heap (số âm)\n        self.large = []   # min-heap\n\n    def addNum(self, num):\n        heapq.heappush(self.small, -num)\n        heapq.heappush(self.large, -heapq.heappop(self.small))\n        if len(self.large) > len(self.small):\n            heapq.heappush(self.small, -heapq.heappop(self.large))\n\n    def findMedian(self):\n        if len(self.small) > len(self.large):\n            return -self.small[0]\n        return (-self.small[0] + self.large[0]) / 2",
        C: "/* Cài đặt tương tự với 2 MinHeap: large lưu giá trị gốc,\n   small lưu giá trị đảo dấu (-x). Các bước giống bản Java/Python:\n   push small → pop small sang large → nếu large lớn hơn thì trả 1 phần tử về small. */",
      } },
      { type: "complexity", time: "addNum: O(log n), findMedian: O(1)", space: "O(n)" },
    ],
  },
  {
    id: "merge-k",
    title: "Pattern 4: Gộp K nguồn đã sắp xếp",
    description: "Heap giữ \"ứng viên nhỏ nhất của mỗi nguồn\".",
    blocks: [
      { type: "p", text: "Merge K Sorted Lists, Kth Smallest in Matrix, Design Twitter (merge feed của nhiều user) đều dùng chung ý tưởng: bỏ **phần tử đầu của mỗi nguồn** vào min-heap, lấy nhỏ nhất ra, rồi thêm **phần tử kế tiếp cùng nguồn** vào heap." },
      { type: "code", label: "Python – Merge K Sorted Lists", code: "def mergeKLists(lists):\n    heap = []\n    for i, node in enumerate(lists):\n        if node:\n            heapq.heappush(heap, (node.val, i, node))  # i để tránh so sánh node\n    dummy = tail = ListNode()\n    while heap:\n        _, i, node = heapq.heappop(heap)\n        tail.next = node; tail = node\n        if node.next:\n            heapq.heappush(heap, (node.next.val, i, node.next))\n    return dummy.next" },
      { type: "info", kind: "info", title: "Vì sao có chỉ số i?", text: "Khi hai `val` bằng nhau, Python sẽ so sánh phần tử tiếp theo của tuple (node). `ListNode` không so sánh được → lỗi. Thêm một số duy nhất vào giữa để phá thế hòa." },
      { type: "complexity", time: "O(N log k)", space: "O(k)", timeDescription: "N = tổng số phần tử, k = số danh sách.", spaceDescription: "Heap chứa tối đa k nút." },
    ],
  },
  {
    id: "recognition",
    title: "Nhận diện pattern & lỗi thường gặp",
    blocks: [
      { type: "table", head: ["Dấu hiệu trong đề", "Cách dùng Heap"], rows: [
        ["\"K lớn nhất / nhỏ nhất / gần nhất / tần suất cao nhất\"", "Heap kích thước K"],
        ["Dữ liệu đến liên tục + hỏi min/max/median", "Heap (hoặc 2 heap)"],
        ["Lặp \"lấy tốt nhất rồi xử lý\"", "Heap + mô phỏng"],
        ["Gộp nhiều danh sách đã sort", "Min-heap theo đầu mỗi nguồn"],
        ["Lập lịch với cooldown", "Max-heap + hàng đợi chờ"],
      ] },
      { type: "list", items: [
        "Quên rằng `heapq` là min-heap → muốn max phải đảo dấu.",
        "Dùng heap kích thước n thay vì K → mất lợi thế O(n log k).",
        "Trong Java, so sánh `a - b` có thể **tràn số**; dùng `Integer.compare(a, b)` khi giá trị lớn.",
        "Nhầm giữa \"K lớn nhất\" (min-heap) và \"K nhỏ nhất\" (max-heap).",
      ] },
      { type: "info", kind: "important", title: "Tóm tắt", text: "Heap = **lấy min/max trong O(log n)**. Câu thần chú: *\"K lớn nhất thì dùng min-heap cỡ K\"*. Cần trung vị thì dùng **hai heap**." },
    ],
  },
];
