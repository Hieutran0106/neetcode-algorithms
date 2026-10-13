export const sections = [
  {
    id: "introduction",
    title: "Interval là gì?",
    description: "Một đoạn [start, end] trên trục số — lịch họp, khoảng thời gian, đoạn thẳng...",
    blocks: [
      { type: "p", text: "Hầu hết bài Interval đều quy về **một thao tác duy nhất: sắp xếp theo điểm đầu (hoặc điểm cuối) rồi quét một lần**. Phần khó nằm ở việc quyết định sắp theo gì và so sánh với phần tử nào." },
      { type: "code", label: "Hai interval a và b (a.start ≤ b.start)", code: "Không chồng nhau:   a: [1──3]\n                    b:        [5──8]        → a.end < b.start\n\nChồng nhau:         a: [1────6]\n                    b:     [4────9]         → b.start ≤ a.end\n\nBao trùm:           a: [1──────────9]\n                    b:     [3──5]           → b nằm trọn trong a" },
      { type: "formula", text: "Chồng nhau  ⇔  max(a.start, b.start) ≤ min(a.end, b.end)" },
      { type: "info", kind: "important", title: "Quy ước biên", text: "Luôn đọc kỹ đề: `[1,3]` và `[3,5]` có tính là chồng nhau không? Với **Merge Intervals** thì có (gộp thành [1,5]); với **Meeting Rooms** thì **không** (họp xong lúc 3 thì họp tiếp lúc 3 được)." },
    ],
  },
  {
    id: "sort-first",
    title: "Bước 1: Sắp xếp",
    blocks: [
      { type: "table", head: ["Mục tiêu", "Sắp theo", "Lý do"], rows: [
        ["Gộp / chèn interval", "**start** tăng dần", "Interval có thể chồng nhau đứng liền kề"],
        ["Chọn tối đa interval không chồng (greedy)", "**end** tăng dần", "Kết thúc sớm → chừa chỗ nhiều nhất"],
        ["Đếm số phòng / điểm giao nhiều nhất", "tách **start** và **end** riêng", "Sự kiện bắt đầu / kết thúc"],
      ] },
      { type: "code", examples: {
        C: "static int cmp(const void *a, const void *b) {\n    return (*(int **)a)[0] - (*(int **)b)[0];   /* theo start */\n}\nqsort(intervals, n, sizeof(int *), cmp);",
        Java: "Arrays.sort(intervals, (a, b) -> Integer.compare(a[0], b[0]));",
        Python: "intervals.sort(key=lambda x: x[0])",
      } },
    ],
  },
  {
    id: "merge",
    title: "Pattern 1: Merge Intervals",
    blocks: [
      { type: "problem", title: "Merge Intervals", difficulty: "Medium", description: "Gộp tất cả các interval chồng nhau.", link: "https://neetcode.io/problems/merge-intervals" },
      { type: "steps", items: [
        { title: "Sort theo start", text: "Các interval chồng nhau sẽ nằm cạnh nhau." },
        { title: "Giữ interval cuối của kết quả", text: "Gọi là `last`." },
        { title: "Duyệt từng interval cur", text: "Nếu `cur.start ≤ last.end` → gộp: `last.end = max(last.end, cur.end)`. Ngược lại → thêm `cur` vào kết quả." },
      ] },
      { type: "code", examples: {
        C: "int **merge(int **in, int n, int *retSize, int **retCols) {\n    qsort(in, n, sizeof(int *), cmp);\n    int **res = malloc(sizeof(int *) * n);\n    *retCols = malloc(sizeof(int) * n);\n    int k = 0;\n    for (int i = 0; i < n; i++) {\n        if (k > 0 && in[i][0] <= res[k - 1][1]) {\n            if (in[i][1] > res[k - 1][1]) res[k - 1][1] = in[i][1];\n        } else {\n            res[k] = malloc(sizeof(int) * 2);\n            res[k][0] = in[i][0]; res[k][1] = in[i][1];\n            (*retCols)[k++] = 2;\n        }\n    }\n    *retSize = k;\n    return res;\n}",
        Java: "public int[][] merge(int[][] intervals) {\n    Arrays.sort(intervals, (a, b) -> Integer.compare(a[0], b[0]));\n    List<int[]> res = new ArrayList<>();\n    for (int[] cur : intervals) {\n        if (res.isEmpty() || res.get(res.size() - 1)[1] < cur[0]) {\n            res.add(cur);\n        } else {\n            int[] last = res.get(res.size() - 1);\n            last[1] = Math.max(last[1], cur[1]);\n        }\n    }\n    return res.toArray(new int[0][]);\n}",
        Python: "def merge(intervals):\n    intervals.sort(key=lambda x: x[0])\n    res = [intervals[0]]\n    for s, e in intervals[1:]:\n        if s <= res[-1][1]:\n            res[-1][1] = max(res[-1][1], e)\n        else:\n            res.append([s, e])\n    return res",
      } },
      { type: "complexity", time: "O(n log n)", space: "O(n)", timeDescription: "Sort chiếm phần lớn, quét chỉ O(n)." },
    ],
  },
  {
    id: "insert",
    title: "Pattern 2: Insert Interval",
    blocks: [
      { type: "problem", title: "Insert Interval", difficulty: "Medium", description: "Chèn một interval mới vào danh sách đã sort, không chồng nhau; gộp nếu cần.", link: "https://neetcode.io/problems/insert-new-interval" },
      { type: "p", text: "Vì danh sách **đã sort**, không cần sort lại: chia làm ba giai đoạn — **trước** (kết thúc trước khi newInterval bắt đầu), **chồng** (gộp dần vào newInterval) và **sau**." },
      { type: "code", examples: {
        Java: "public int[][] insert(int[][] intervals, int[] nw) {\n    List<int[]> res = new ArrayList<>();\n    int i = 0, n = intervals.length;\n    while (i < n && intervals[i][1] < nw[0]) res.add(intervals[i++]);   // trước\n    while (i < n && intervals[i][0] <= nw[1]) {                         // chồng\n        nw[0] = Math.min(nw[0], intervals[i][0]);\n        nw[1] = Math.max(nw[1], intervals[i][1]);\n        i++;\n    }\n    res.add(nw);\n    while (i < n) res.add(intervals[i++]);                              // sau\n    return res.toArray(new int[0][]);\n}",
        Python: "def insert(intervals, new):\n    res, i, n = [], 0, len(intervals)\n    while i < n and intervals[i][1] < new[0]:\n        res.append(intervals[i]); i += 1\n    while i < n and intervals[i][0] <= new[1]:\n        new = [min(new[0], intervals[i][0]), max(new[1], intervals[i][1])]\n        i += 1\n    res.append(new)\n    res.extend(intervals[i:])\n    return res",
        C: "/* Ba vòng while giống hệt Java: (1) copy các đoạn có end < new.start,\n   (2) gộp các đoạn có start <= new.end vào new bằng min/max,\n   (3) chèn new, rồi copy phần còn lại. Độ phức tạp O(n). */",
      } },
      { type: "complexity", time: "O(n)", space: "O(n)" },
    ],
  },
  {
    id: "greedy-intervals",
    title: "Pattern 3: Chọn / xóa interval (Greedy)",
    description: "Sort theo END, luôn giữ interval kết thúc sớm nhất.",
    blocks: [
      { type: "problem", title: "Non-overlapping Intervals", difficulty: "Medium", description: "Xóa ít interval nhất để các interval còn lại không chồng nhau.", link: "https://neetcode.io/problems/non-overlapping-intervals" },
      { type: "p", text: "Đây là bài **Activity Selection** kinh điển: số interval cần xóa = **n − (số interval giữ được tối đa)**. Sort theo `end`; giữ interval nếu `start ≥ end` của interval vừa giữ, ngược lại **xóa** nó." },
      { type: "code", examples: {
        Java: "public int eraseOverlapIntervals(int[][] iv) {\n    Arrays.sort(iv, (a, b) -> Integer.compare(a[1], b[1]));\n    int removed = 0, prevEnd = iv[0][1];\n    for (int i = 1; i < iv.length; i++) {\n        if (iv[i][0] < prevEnd) removed++;       // chồng → bỏ cái kết thúc muộn hơn\n        else prevEnd = iv[i][1];\n    }\n    return removed;\n}",
        Python: "def eraseOverlapIntervals(iv):\n    iv.sort(key=lambda x: x[1])\n    removed, prev_end = 0, iv[0][1]\n    for s, e in iv[1:]:\n        if s < prev_end:\n            removed += 1\n        else:\n            prev_end = e\n    return removed",
        C: "int eraseOverlapIntervals(int **iv, int n) {\n    qsort(iv, n, sizeof(int *), cmpByEnd);   /* so sánh iv[i][1] */\n    int removed = 0, prevEnd = iv[0][1];\n    for (int i = 1; i < n; i++) {\n        if (iv[i][0] < prevEnd) removed++;\n        else prevEnd = iv[i][1];\n    }\n    return removed;\n}",
      } },
      { type: "info", kind: "tip", title: "Vì sao sort theo end?", text: "Interval kết thúc sớm nhất để lại **nhiều chỗ trống nhất** cho các interval sau. Sort theo start có thể bị một interval dài che mất nhiều interval ngắn." },
      { type: "complexity", time: "O(n log n)", space: "O(1)" },
    ],
  },
  {
    id: "sweep-line",
    title: "Pattern 4: Sweep Line (Meeting Rooms)",
    description: "Quét trục thời gian, đếm số sự kiện đang diễn ra cùng lúc.",
    blocks: [
      { type: "problem", title: "Meeting Rooms", difficulty: "Easy", description: "Một người có thể dự tất cả cuộc họp không? (Có interval chồng nhau hay không.)", link: "https://neetcode.io/problems/meeting-schedule" },
      { type: "code", label: "Python – sort theo start rồi so sánh liền kề", code: "def canAttendMeetings(intervals):\n    intervals.sort(key=lambda x: x[0])\n    for i in range(1, len(intervals)):\n        if intervals[i][0] < intervals[i - 1][1]:\n            return False\n    return True" },
      { type: "problem", title: "Meeting Rooms II", difficulty: "Medium", description: "Cần tối thiểu bao nhiêu phòng họp để xếp tất cả cuộc họp?", link: "https://neetcode.io/problems/meeting-schedule-ii" },
      { type: "steps", items: [
        { title: "Tách start và end", text: "Hai mảng riêng, mỗi mảng được sort độc lập." },
        { title: "Two pointers", text: "Nếu `start[i] < end[j]` → có cuộc họp mới bắt đầu trước khi cuộc cũ xong → **cần thêm phòng**. Ngược lại một phòng được giải phóng (`j++`)." },
        { title: "Theo dõi lớn nhất", text: "Số phòng đang dùng lớn nhất trong quá trình quét là đáp án." },
      ] },
      { type: "code", examples: {
        Java: "public int minMeetingRooms(int[][] iv) {\n    int n = iv.length;\n    int[] s = new int[n], e = new int[n];\n    for (int i = 0; i < n; i++) { s[i] = iv[i][0]; e[i] = iv[i][1]; }\n    Arrays.sort(s); Arrays.sort(e);\n    int rooms = 0, best = 0, j = 0;\n    for (int i = 0; i < n; i++) {\n        if (s[i] < e[j]) rooms++;\n        else j++;\n        best = Math.max(best, rooms);\n    }\n    return best;\n}",
        Python: "def minMeetingRooms(iv):\n    s = sorted(x[0] for x in iv)\n    e = sorted(x[1] for x in iv)\n    rooms = best = j = 0\n    for i in range(len(s)):\n        if s[i] < e[j]:\n            rooms += 1\n        else:\n            j += 1\n        best = max(best, rooms)\n    return best",
        C: "int minMeetingRooms(int *s, int *e, int n) {   /* s, e đã qsort */\n    int rooms = 0, best = 0, j = 0;\n    for (int i = 0; i < n; i++) {\n        if (s[i] < e[j]) rooms++; else j++;\n        if (rooms > best) best = rooms;\n    }\n    return best;\n}",
      } },
      { type: "complexity", time: "O(n log n)", space: "O(n)" },
      { type: "info", kind: "info", title: "Cách khác", text: "Dùng **min-heap** lưu thời điểm kết thúc của các phòng đang dùng: nếu `heap[0] ≤ start` thì tái sử dụng phòng đó (pop), rồi push `end` mới. Kích thước heap cuối cùng = số phòng." },
    ],
  },
  {
    id: "recognition",
    title: "Nhận diện pattern & lỗi thường gặp",
    blocks: [
      { type: "table", head: ["Đề bài", "Cách giải"], rows: [
        ["Gộp / hợp các đoạn", "Sort start + quét, gộp bằng `max(end)`"],
        ["Chèn đoạn vào danh sách đã sort", "3 giai đoạn: trước – chồng – sau"],
        ["Xóa ít đoạn nhất / chọn nhiều đoạn nhất", "Greedy: sort **end**"],
        ["Có chồng không? / cần bao nhiêu phòng?", "Sort + so sánh liền kề / sweep line"],
        ["Minimum Interval to Include Each Query", "Sort + min-heap theo độ dài"],
      ] },
      { type: "list", items: [
        "Nhầm `<` và `≤` ở điều kiện chồng nhau — luôn thử với ví dụ [1,3], [3,5].",
        "Quên `max(last.end, cur.end)` khi một interval bao trùm interval kia.",
        "Sort theo start trong khi bài greedy cần sort theo end.",
        "Sort thay đổi mảng đầu vào — copy trước nếu đề yêu cầu giữ nguyên.",
      ] },
      { type: "info", kind: "important", title: "Tóm tắt", text: "Interval = **Sort rồi quét một lần**. Gộp → sort start. Chọn tối đa → sort end. Đếm đồng thời → sweep line." },
    ],
  },
];
