export const sections = [
  {
    id: "introduction",
    title: "Greedy là gì?",
    description: "Ở mỗi bước chọn phương án tốt nhất tại thời điểm đó, hy vọng (và chứng minh được) rằng cuối cùng sẽ tối ưu toàn cục.",
    blocks: [
      { type: "p", text: "Greedy không thử mọi khả năng như Backtracking, cũng không lưu kết quả con như DP. Nó **chọn một lần và không quay đầu**. Vì vậy Greedy rất nhanh (thường O(n) hoặc O(n log n)) nhưng **chỉ đúng khi bài toán có tính chất phù hợp**." },
      { type: "cards", items: [
        { title: "Greedy-choice property", text: "Tồn tại lựa chọn cục bộ tốt nhất nằm trong **ít nhất một** lời giải tối ưu.", mono: "chọn tham lam an toàn" },
        { title: "Optimal substructure", text: "Sau khi chọn, phần còn lại là **bài toán con cùng dạng**.", mono: "lặp lại được" },
        { title: "Exchange argument", text: "Chứng minh: đổi một lựa chọn của lời giải tối ưu thành lựa chọn tham lam **không làm xấu đi** kết quả.", mono: "cách chứng minh" },
      ] },
      { type: "info", kind: "important", title: "Greedy hay DP?", text: "Nếu thấy một phản ví dụ khiến lựa chọn tham lam sai (ví dụ đổi tiền với mệnh giá [1, 3, 4], đổi 6 → greedy chọn 4+1+1 = 3 xu, tối ưu là 3+3 = 2 xu) thì phải chuyển sang **DP**." },
    ],
  },
  {
    id: "how-to-think",
    title: "Cách nghĩ ra lời giải Greedy",
    blocks: [
      { type: "steps", items: [
        { title: "Tìm \"tiêu chí chọn\"", text: "Lớn nhất? Kết thúc sớm nhất? Chi phí/lợi ích cao nhất? Thường cần **sắp xếp** theo tiêu chí đó." },
        { title: "Duy trì một trạng thái nhỏ", text: "Thường chỉ là vài biến: tổng hiện tại, vị trí xa nhất, số lượng cần..." },
        { title: "Tự tìm phản ví dụ", text: "Thử vài input nhỏ bằng tay; nếu không phá được tiêu chí thì rất có thể đúng." },
        { title: "Kiểm tra bằng brute force", text: "Với bài lạ, so kết quả với Backtracking trên input nhỏ." },
      ] },
      { type: "table", head: ["Dấu hiệu", "Tiêu chí greedy thường gặp"], rows: [
        ["Chọn tối đa / xóa tối thiểu interval", "Sort theo **end** (xem chương Intervals)"],
        ["Tối đa / tối thiểu trên mảng liên tiếp", "Giữ tổng chạy, **reset khi âm**"],
        ["Có thể đến được ô cuối?", "Theo dõi **vị trí xa nhất** tới được"],
        ["Ghép nhóm, chia phần", "Xử lý theo **thứ tự nhỏ nhất trước**"],
      ] },
    ],
  },
  {
    id: "kadane",
    title: "Pattern 1: Tổng chạy (Kadane)",
    blocks: [
      { type: "problem", title: "Maximum Subarray", difficulty: "Medium", description: "Tìm dãy con liên tiếp có tổng lớn nhất.", link: "https://neetcode.io/problems/maximum-subarray" },
      { type: "p", text: "Tại mỗi phần tử, ta có hai lựa chọn: **nối tiếp** dãy hiện tại hoặc **bắt đầu dãy mới**. Nếu tổng hiện tại đang âm, nó chỉ làm xấu đi → bỏ đi." },
      { type: "formula", text: "cur = max(nums[i], cur + nums[i])" },
      { type: "code", examples: {
        C: "int maxSubArray(int *nums, int n) {\n    int cur = nums[0], best = nums[0];\n    for (int i = 1; i < n; i++) {\n        cur = (cur > 0 ? cur : 0) + nums[i];\n        if (cur > best) best = cur;\n    }\n    return best;\n}",
        Java: "public int maxSubArray(int[] nums) {\n    int cur = nums[0], best = nums[0];\n    for (int i = 1; i < nums.length; i++) {\n        cur = Math.max(nums[i], cur + nums[i]);\n        best = Math.max(best, cur);\n    }\n    return best;\n}",
        Python: "def maxSubArray(nums):\n    cur = best = nums[0]\n    for x in nums[1:]:\n        cur = max(x, cur + x)\n        best = max(best, cur)\n    return best",
      } },
      { type: "complexity", time: "O(n)", space: "O(1)" },
      { type: "info", kind: "tip", title: "Lỗi hay gặp", text: "Khởi tạo `best = 0` sẽ sai khi **tất cả phần tử đều âm**. Hãy khởi tạo bằng `nums[0]`." },
    ],
  },
  {
    id: "jump-game",
    title: "Pattern 2: Vị trí xa nhất / Jump Game",
    blocks: [
      { type: "problem", title: "Jump Game", difficulty: "Medium", description: "nums[i] là bước nhảy tối đa từ i. Có đến được ô cuối không?", link: "https://neetcode.io/problems/jump-game" },
      { type: "code", examples: {
        C: "bool canJump(int *nums, int n) {\n    int far = 0;\n    for (int i = 0; i < n; i++) {\n        if (i > far) return false;          /* không tới được ô i */\n        if (i + nums[i] > far) far = i + nums[i];\n    }\n    return true;\n}",
        Java: "public boolean canJump(int[] nums) {\n    int far = 0;\n    for (int i = 0; i < nums.length; i++) {\n        if (i > far) return false;\n        far = Math.max(far, i + nums[i]);\n    }\n    return true;\n}",
        Python: "def canJump(nums):\n    far = 0\n    for i, step in enumerate(nums):\n        if i > far:\n            return False\n        far = max(far, i + step)\n    return True",
      } },
      { type: "problem", title: "Jump Game II", difficulty: "Medium", description: "Số bước nhảy tối thiểu để đến ô cuối (luôn đến được).", link: "https://neetcode.io/problems/jump-game-ii" },
      { type: "p", text: "Coi như **BFS theo tầng** trên mảng: `end` là biên của tầng hiện tại, `far` là biên xa nhất của tầng kế tiếp. Chạm `end` → phải nhảy thêm một bước." },
      { type: "code", examples: {
        C: "int jump(int *nums, int n) {\n    int jumps = 0, end = 0, far = 0;\n    for (int i = 0; i < n - 1; i++) {\n        if (i + nums[i] > far) far = i + nums[i];\n        if (i == end) { jumps++; end = far; }\n    }\n    return jumps;\n}",
        Java: "public int jump(int[] nums) {\n    int jumps = 0, end = 0, far = 0;\n    for (int i = 0; i < nums.length - 1; i++) {\n        far = Math.max(far, i + nums[i]);\n        if (i == end) { jumps++; end = far; }\n    }\n    return jumps;\n}",
        Python: "def jump(nums):\n    jumps = end = far = 0\n    for i in range(len(nums) - 1):\n        far = max(far, i + nums[i])\n        if i == end:\n            jumps += 1\n            end = far\n    return jumps",
      } },
      { type: "complexity", time: "O(n)", space: "O(1)" },
    ],
  },
  {
    id: "gas-station",
    title: "Pattern 3: Reset khi âm (Gas Station)",
    blocks: [
      { type: "problem", title: "Gas Station", difficulty: "Medium", description: "Vòng tròn các trạm xăng; tìm trạm xuất phát để đi hết một vòng (hoặc −1).", link: "https://neetcode.io/problems/gas-station" },
      { type: "list", items: [
        "Nếu **tổng gas ≥ tổng cost** thì chắc chắn có đáp án.",
        "Nếu từ trạm `s` mà xe hết xăng ở trạm `i` thì **mọi trạm từ s đến i** đều không thể làm điểm xuất phát → thử lại từ `i + 1`.",
      ] },
      { type: "code", examples: {
        C: "int canCompleteCircuit(int *gas, int *cost, int n) {\n    int total = 0, tank = 0, start = 0;\n    for (int i = 0; i < n; i++) {\n        int d = gas[i] - cost[i];\n        total += d; tank += d;\n        if (tank < 0) { start = i + 1; tank = 0; }\n    }\n    return total >= 0 ? start : -1;\n}",
        Java: "public int canCompleteCircuit(int[] gas, int[] cost) {\n    int total = 0, tank = 0, start = 0;\n    for (int i = 0; i < gas.length; i++) {\n        int d = gas[i] - cost[i];\n        total += d; tank += d;\n        if (tank < 0) { start = i + 1; tank = 0; }\n    }\n    return total >= 0 ? start : -1;\n}",
        Python: "def canCompleteCircuit(gas, cost):\n    if sum(gas) < sum(cost):\n        return -1\n    tank = start = 0\n    for i in range(len(gas)):\n        tank += gas[i] - cost[i]\n        if tank < 0:\n            start, tank = i + 1, 0\n    return start",
      } },
      { type: "complexity", time: "O(n)", space: "O(1)" },
    ],
  },
  {
    id: "grouping",
    title: "Pattern 4: Ghép nhóm & chia phần",
    blocks: [
      { type: "problem", title: "Hand of Straights", difficulty: "Medium", description: "Chia bài thành các nhóm gồm groupSize lá liên tiếp.", link: "https://neetcode.io/problems/hand-of-straights" },
      { type: "p", text: "Lá nhỏ nhất còn lại **bắt buộc** phải là đầu của một nhóm (không có lá nào nhỏ hơn để đứng trước nó). Dùng bộ đếm + min-heap (hoặc duyệt các key đã sort), mỗi lần tạo nhóm từ lá nhỏ nhất." },
      { type: "code", label: "Python", code: "def isNStraightHand(hand, k):\n    if len(hand) % k: return False\n    cnt = Counter(hand)\n    heap = list(cnt); heapq.heapify(heap)\n    while heap:\n        first = heap[0]\n        for c in range(first, first + k):\n            if cnt[c] == 0: return False\n            cnt[c] -= 1\n            if cnt[c] == 0:\n                if c != heap[0]: return False   # còn lá nhỏ hơn bị bỏ sót\n                heapq.heappop(heap)\n    return True" },
      { type: "problem", title: "Partition Labels", difficulty: "Medium", description: "Chia chuỗi thành nhiều phần nhất sao cho mỗi chữ cái chỉ xuất hiện trong đúng một phần.", link: "https://neetcode.io/problems/partition-labels" },
      { type: "p", text: "Ghi lại **vị trí xuất hiện cuối cùng** của mỗi ký tự. Duyệt chuỗi, mở rộng `end = max(end, last[c])`; khi `i == end` thì cắt một phần." },
      { type: "code", examples: {
        C: "int *partitionLabels(char *s, int *retSize) {\n    int last[26], n = strlen(s);\n    for (int i = 0; i < n; i++) last[s[i] - 'a'] = i;\n    int *res = malloc(sizeof(int) * n), k = 0, start = 0, end = 0;\n    for (int i = 0; i < n; i++) {\n        if (last[s[i] - 'a'] > end) end = last[s[i] - 'a'];\n        if (i == end) { res[k++] = end - start + 1; start = i + 1; }\n    }\n    *retSize = k;\n    return res;\n}",
        Java: "public List<Integer> partitionLabels(String s) {\n    int[] last = new int[26];\n    for (int i = 0; i < s.length(); i++) last[s.charAt(i) - 'a'] = i;\n    List<Integer> res = new ArrayList<>();\n    int start = 0, end = 0;\n    for (int i = 0; i < s.length(); i++) {\n        end = Math.max(end, last[s.charAt(i) - 'a']);\n        if (i == end) { res.add(end - start + 1); start = i + 1; }\n    }\n    return res;\n}",
        Python: "def partitionLabels(s):\n    last = {c: i for i, c in enumerate(s)}\n    res, start, end = [], 0, 0\n    for i, c in enumerate(s):\n        end = max(end, last[c])\n        if i == end:\n            res.append(end - start + 1)\n            start = i + 1\n    return res",
      } },
      { type: "complexity", time: "O(n)", space: "O(1)", spaceDescription: "Bảng 26 chữ cái là hằng số." },
    ],
  },
  {
    id: "other-problems",
    title: "Các bài Greedy khác trong NeetCode",
    blocks: [
      { type: "table", head: ["Bài", "Ý tưởng chính"], rows: [
        ["Merge Triplets to Form Target", "Chỉ giữ các triplet có **mọi phần tử ≤ target**; kiểm tra xem 3 vị trí có đạt được target không."],
        ["Valid Parenthesis String", "Theo dõi **khoảng** [lo, hi] số dấu `(` chưa đóng; `*` có thể là `(`, `)` hoặc rỗng."],
        ["Non-overlapping Intervals", "Sort theo end (chương Intervals)."],
        ["Task Scheduler", "Greedy với max-heap hoặc công thức (chương Heap)."],
      ] },
      { type: "code", label: "Python – Valid Parenthesis String", code: "def checkValidString(s):\n    lo = hi = 0                      # số '(' chưa đóng có thể có\n    for c in s:\n        if c == '(':   lo, hi = lo + 1, hi + 1\n        elif c == ')': lo, hi = lo - 1, hi - 1\n        else:          lo, hi = lo - 1, hi + 1   # '*' linh hoạt\n        if hi < 0: return False      # quá nhiều ')'\n        lo = max(lo, 0)\n    return lo == 0" },
    ],
  },
  {
    id: "recognition",
    title: "Nhận diện pattern & lỗi thường gặp",
    blocks: [
      { type: "list", items: [
        "Đề có \"**tối đa / tối thiểu**\" mà n lớn (10⁵) và không cần liệt kê tất cả khả năng → nghĩ đến Greedy.",
        "Lời giải thường là **một vòng lặp** hoặc **sort + một vòng lặp**.",
        "Không chứng minh được → thử tìm phản ví dụ; nếu thấy phụ thuộc vào lựa chọn trước đó theo nhiều cách → DP.",
        "Quên sort trước khi chạy tham lam.",
        "Khởi tạo sai giá trị ban đầu (0 thay vì phần tử đầu / −∞).",
      ] },
      { type: "info", kind: "important", title: "Tóm tắt", text: "Greedy = **chọn tốt nhất hiện tại, không quay đầu**. Các biến thể: tổng chạy (reset khi âm), vị trí xa nhất, sort theo tiêu chí rồi quét, ghép nhóm từ phần tử nhỏ nhất." },
    ],
  },
];
