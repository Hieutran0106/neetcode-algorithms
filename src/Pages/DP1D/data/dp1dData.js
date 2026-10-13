export const sections = [
  {
    id: "introduction",
    title: "Dynamic Programming là gì?",
    description: "Chia bài toán thành bài toán con chồng lấn, giải mỗi bài con đúng một lần và lưu kết quả.",
    blocks: [
      { type: "p", text: "Ở chương Backtracking, `fib(n)` đệ quy gọi lại `fib(2)`, `fib(3)`... hàng nghìn lần. **DP** loại bỏ sự lặp lại đó. Một bài toán dùng DP được khi có hai tính chất:" },
      { type: "cards", items: [
        { title: "Bài toán con chồng lấn", text: "Cùng một bài toán con xuất hiện nhiều lần trong cây đệ quy.", mono: "→ lưu kết quả (memo)" },
        { title: "Cấu trúc con tối ưu", text: "Đáp án của bài lớn được tạo từ đáp án của các bài con.", mono: "→ có công thức truy hồi" },
        { title: "Trạng thái", text: "Tập tham số **đủ** để mô tả một bài toán con (thường là một chỉ số i).", mono: "dp[i] = ?" },
      ] },
      { type: "info", kind: "important", title: "Công thức 4 bước", text: "**(1)** Định nghĩa `dp[i]` bằng lời. **(2)** Viết công thức truy hồi. **(3)** Xác định base case. **(4)** Xác định thứ tự tính và đáp án cuối." },
    ],
  },
  {
    id: "memo-vs-tab",
    title: "Memoization và Tabulation",
    blocks: [
      { type: "table", head: ["", "Top-down (Memoization)", "Bottom-up (Tabulation)"], rows: [
        ["Cách làm", "Đệ quy + lưu kết quả", "Vòng lặp từ bài nhỏ đến bài lớn"],
        ["Ưu điểm", "Dễ viết, chỉ tính trạng thái cần thiết", "Không đệ quy, dễ tối ưu bộ nhớ"],
        ["Nhược điểm", "Tốn call stack", "Phải xác định đúng thứ tự tính"],
      ] },
      { type: "code", label: "Fibonacci – ba phiên bản (Python)", code: "# 1) Đệ quy thuần: O(2^n)\ndef fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)\n\n# 2) Top-down: O(n)\ndef fib_memo(n, memo={}):\n    if n < 2: return n\n    if n not in memo: memo[n] = fib_memo(n - 1) + fib_memo(n - 2)\n    return memo[n]\n\n# 3) Bottom-up + tối ưu bộ nhớ: O(n) time, O(1) space\ndef fib_opt(n):\n    a, b = 0, 1\n    for _ in range(n): a, b = b, a + b\n    return a" },
    ],
  },
  {
    id: "climbing-stairs",
    title: "Pattern 1: dp[i] phụ thuộc vài ô trước đó",
    blocks: [
      { type: "problem", title: "Climbing Stairs", difficulty: "Easy", description: "Leo n bậc, mỗi lần bước 1 hoặc 2 bậc. Có bao nhiêu cách?", link: "https://neetcode.io/problems/climbing-stairs" },
      { type: "formula", text: "dp[i] = dp[i-1] + dp[i-2]" },
      { type: "p", text: "Để lên bậc i, bước cuối cùng chỉ có thể xuất phát từ bậc i−1 (bước 1) hoặc i−2 (bước 2). Đây chính là Fibonacci." },
      { type: "code", examples: {
        C: "int climbStairs(int n) {\n    if (n <= 2) return n;\n    int a = 1, b = 2;\n    for (int i = 3; i <= n; i++) { int c = a + b; a = b; b = c; }\n    return b;\n}",
        Java: "public int climbStairs(int n) {\n    if (n <= 2) return n;\n    int a = 1, b = 2;\n    for (int i = 3; i <= n; i++) { int c = a + b; a = b; b = c; }\n    return b;\n}",
        Python: "def climbStairs(n):\n    a, b = 1, 1\n    for _ in range(n - 1):\n        a, b = b, a + b\n    return b",
      } },
      { type: "complexity", time: "O(n)", space: "O(1)" },
      { type: "problem", title: "Min Cost Climbing Stairs", difficulty: "Easy", description: "Trả cost[i] khi bước từ bậc i. Chi phí nhỏ nhất để lên tới đỉnh (sau bậc cuối)?", link: "https://neetcode.io/problems/min-cost-climbing-stairs" },
      { type: "formula", text: "dp[i] = cost[i] + min(dp[i-1], dp[i-2])" },
      { type: "code", label: "Python", code: "def minCostClimbingStairs(cost):\n    a, b = 0, 0                    # chi phí để đứng ở bậc i-2, i-1\n    for i in range(2, len(cost) + 1):\n        a, b = b, min(b + cost[i - 1], a + cost[i - 2])\n    return b" },
    ],
  },
  {
    id: "house-robber",
    title: "Pattern 2: Chọn / không chọn (House Robber)",
    blocks: [
      { type: "problem", title: "House Robber", difficulty: "Medium", description: "Không được cướp hai nhà liền kề. Tổng tiền lớn nhất?", link: "https://neetcode.io/problems/house-robber" },
      { type: "p", text: "Với mỗi nhà i có hai lựa chọn: **bỏ qua** (giữ nguyên kết quả đến i−1) hoặc **cướp** (cộng nums[i] vào kết quả đến i−2)." },
      { type: "formula", text: "dp[i] = max(dp[i-1], dp[i-2] + nums[i])" },
      { type: "code", examples: {
        C: "int rob(int *nums, int n) {\n    int prev2 = 0, prev1 = 0;\n    for (int i = 0; i < n; i++) {\n        int cur = prev1 > prev2 + nums[i] ? prev1 : prev2 + nums[i];\n        prev2 = prev1; prev1 = cur;\n    }\n    return prev1;\n}",
        Java: "public int rob(int[] nums) {\n    int prev2 = 0, prev1 = 0;\n    for (int x : nums) {\n        int cur = Math.max(prev1, prev2 + x);\n        prev2 = prev1; prev1 = cur;\n    }\n    return prev1;\n}",
        Python: "def rob(nums):\n    prev2 = prev1 = 0\n    for x in nums:\n        prev2, prev1 = prev1, max(prev1, prev2 + x)\n    return prev1",
      } },
      { type: "complexity", time: "O(n)", space: "O(1)" },
      { type: "problem", title: "House Robber II", difficulty: "Medium", description: "Các nhà xếp thành vòng tròn (nhà đầu và cuối liền kề).", link: "https://neetcode.io/problems/house-robber-ii" },
      { type: "p", text: "Nhà đầu và nhà cuối **không thể cùng bị cướp** → chạy House Robber hai lần: bỏ nhà cuối (`nums[0..n-2]`) và bỏ nhà đầu (`nums[1..n-1]`), lấy max. Nhớ xử lý `n == 1`." },
      { type: "code", label: "Python", code: "def rob2(nums):\n    if len(nums) == 1: return nums[0]\n    return max(rob(nums[:-1]), rob(nums[1:]))" },
    ],
  },
  {
    id: "coin-change",
    title: "Pattern 3: Unbounded Knapsack (Coin Change)",
    blocks: [
      { type: "problem", title: "Coin Change", difficulty: "Medium", description: "Số đồng xu ít nhất để tạo thành amount (mỗi mệnh giá dùng không giới hạn), hoặc −1.", link: "https://neetcode.io/problems/coin-change" },
      { type: "steps", items: [
        { title: "Trạng thái", text: "`dp[a]` = số xu ít nhất để tạo ra số tiền `a`." },
        { title: "Truy hồi", text: "Thử từng mệnh giá `c ≤ a`: `dp[a] = min(dp[a - c] + 1)`." },
        { title: "Base case", text: "`dp[0] = 0`; các ô còn lại khởi tạo bằng \"vô cực\" (amount + 1)." },
      ] },
      { type: "code", examples: {
        C: "int coinChange(int *coins, int n, int amount) {\n    int *dp = malloc((amount + 1) * sizeof(int));\n    dp[0] = 0;\n    for (int a = 1; a <= amount; a++) {\n        dp[a] = amount + 1;\n        for (int i = 0; i < n; i++)\n            if (coins[i] <= a && dp[a - coins[i]] + 1 < dp[a])\n                dp[a] = dp[a - coins[i]] + 1;\n    }\n    int ans = dp[amount] > amount ? -1 : dp[amount];\n    free(dp);\n    return ans;\n}",
        Java: "public int coinChange(int[] coins, int amount) {\n    int[] dp = new int[amount + 1];\n    Arrays.fill(dp, amount + 1);\n    dp[0] = 0;\n    for (int a = 1; a <= amount; a++)\n        for (int c : coins)\n            if (c <= a) dp[a] = Math.min(dp[a], dp[a - c] + 1);\n    return dp[amount] > amount ? -1 : dp[amount];\n}",
        Python: "def coinChange(coins, amount):\n    dp = [amount + 1] * (amount + 1)\n    dp[0] = 0\n    for a in range(1, amount + 1):\n        for c in coins:\n            if c <= a:\n                dp[a] = min(dp[a], dp[a - c] + 1)\n    return -1 if dp[amount] > amount else dp[amount]",
      } },
      { type: "complexity", time: "O(amount · số mệnh giá)", space: "O(amount)" },
      { type: "info", kind: "tip", title: "Vì sao greedy sai?", text: "Với coins = [1, 3, 4], amount = 6: greedy chọn 4+1+1 (3 xu) nhưng tối ưu là 3+3 (2 xu). Đây là lý do bài này cần DP." },
    ],
  },
  {
    id: "string-subsequence",
    title: "Pattern 4: DP trên chuỗi / dãy con",
    blocks: [
      { type: "problem", title: "Longest Increasing Subsequence", difficulty: "Medium", description: "Độ dài dãy con tăng dài nhất (không nhất thiết liên tiếp).", link: "https://neetcode.io/problems/longest-increasing-subsequence" },
      { type: "formula", text: "dp[i] = 1 + max(dp[j])  với mọi j < i, nums[j] < nums[i]" },
      { type: "code", examples: {
        C: "int lengthOfLIS(int *nums, int n) {\n    int *dp = malloc(n * sizeof(int)), best = 1;\n    for (int i = 0; i < n; i++) {\n        dp[i] = 1;\n        for (int j = 0; j < i; j++)\n            if (nums[j] < nums[i] && dp[j] + 1 > dp[i]) dp[i] = dp[j] + 1;\n        if (dp[i] > best) best = dp[i];\n    }\n    free(dp);\n    return best;\n}",
        Java: "public int lengthOfLIS(int[] nums) {\n    int[] dp = new int[nums.length];\n    int best = 1;\n    for (int i = 0; i < nums.length; i++) {\n        dp[i] = 1;\n        for (int j = 0; j < i; j++)\n            if (nums[j] < nums[i]) dp[i] = Math.max(dp[i], dp[j] + 1);\n        best = Math.max(best, dp[i]);\n    }\n    return best;\n}",
        Python: "def lengthOfLIS(nums):\n    dp = [1] * len(nums)\n    for i in range(len(nums)):\n        for j in range(i):\n            if nums[j] < nums[i]:\n                dp[i] = max(dp[i], dp[j] + 1)\n    return max(dp)",
      } },
      { type: "complexity", time: "O(n²)", space: "O(n)", timeDescription: "Có thể xuống O(n log n) bằng binary search trên mảng \"đuôi nhỏ nhất\"." },
      { type: "problem", title: "Word Break", difficulty: "Medium", description: "Chuỗi s có thể tách thành các từ trong từ điển không?", link: "https://neetcode.io/problems/word-break" },
      { type: "p", text: "`dp[i]` = tiền tố `s[0:i]` tách được hay không. `dp[i] = true` nếu tồn tại `j < i` với `dp[j]` và `s[j:i]` thuộc từ điển." },
      { type: "code", label: "Python", code: "def wordBreak(s, wordDict):\n    words = set(wordDict)\n    dp = [False] * (len(s) + 1)\n    dp[0] = True\n    for i in range(1, len(s) + 1):\n        for j in range(i):\n            if dp[j] and s[j:i] in words:\n                dp[i] = True\n                break\n    return dp[len(s)]" },
      { type: "table", head: ["Bài", "Định nghĩa dp[i]", "Truy hồi"], rows: [
        ["Longest Palindromic Substring", "Mở rộng từ tâm (không cần bảng)", "Mỗi tâm mở rộng trái/phải"],
        ["Palindromic Substrings", "Đếm khi mở rộng từ mỗi tâm", "2n − 1 tâm"],
        ["Decode Ways", "Số cách giải mã `s[0:i]`", "`dp[i] = dp[i-1]` (1 chữ số hợp lệ) `+ dp[i-2]` (2 chữ số 10–26)"],
        ["Maximum Product Subarray", "Giữ cả **max** và **min** hiện tại", "Số âm đảo vai trò max/min"],
        ["Partition Equal Subset Sum", "Có thể tạo tổng s?", "0/1 knapsack, duyệt s giảm dần"],
      ] },
    ],
  },
  {
    id: "recognition",
    title: "Nhận diện pattern & lỗi thường gặp",
    blocks: [
      { type: "list", items: [
        "Đề hỏi **số cách / min / max / có thể hay không** và có \"lựa chọn ở mỗi bước\" → nghĩ đến DP.",
        "Viết đệ quy brute force trước, thấy bài toán con lặp lại → thêm memo → đổi thành bottom-up.",
        "Chỉ phụ thuộc k ô trước → **tối ưu bộ nhớ** về O(k).",
        "Sai thứ tự duyệt trong knapsack: 0/1 duyệt tổng **giảm dần**, unbounded duyệt **tăng dần**.",
        "Khởi tạo base case sai (đặc biệt `dp[0]`) hoặc dùng `INT_MAX` rồi cộng gây tràn số.",
        "Chưa định nghĩa rõ `dp[i]` bằng lời → công thức truy hồi sẽ mơ hồ.",
      ] },
      { type: "info", kind: "important", title: "Tóm tắt", text: "DP = **đệ quy + nhớ kết quả**. Với 1-D: xác định `dp[i]`, công thức dựa vào các ô trước, base case, rồi chạy vòng lặp. Fibonacci, Climbing Stairs, House Robber, Coin Change, LIS là 5 mẫu cần thuộc." },
    ],
  },
];
