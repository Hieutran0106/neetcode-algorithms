export const sections = [
  {
    id: "introduction",
    title: "Khi nào cần DP 2 chiều?",
    description: "Khi trạng thái cần hai tham số để mô tả đầy đủ: (i, j) trên lưới, hai chuỗi, hoặc (vị trí, lượng còn lại).",
    blocks: [
      { type: "p", text: "Ở DP 1-D, `dp[i]` chỉ cần một chỉ số. Nhiều bài **không thể mô tả bài toán con chỉ bằng một số**:" },
      { type: "table", head: ["Dạng bài", "Trạng thái", "Ví dụ"], rows: [
        ["Đi trên lưới", "`dp[r][c]`", "Unique Paths"],
        ["So sánh hai chuỗi", "`dp[i][j]` = xét i ký tự đầu của A và j ký tự đầu của B", "LCS, Edit Distance"],
        ["Knapsack", "`dp[i][w]` = xét i vật phẩm đầu, sức chứa w", "Coin Change II, Target Sum"],
        ["Có \"chế độ\" / trạng thái ẩn", "`dp[i][state]`", "Stock with Cooldown"],
      ] },
      { type: "info", kind: "important", title: "Quy trình giống 1-D", text: "Định nghĩa `dp[i][j]` bằng lời → truy hồi → base case (hàng 0, cột 0) → thứ tự điền bảng → đáp án ở ô nào. Chỉ khác là bảng có hai chiều." },
    ],
  },
  {
    id: "grid",
    title: "Pattern 1: Đi trên lưới (Unique Paths)",
    blocks: [
      { type: "problem", title: "Unique Paths", difficulty: "Medium", description: "Robot đi từ (0,0) đến (m-1,n-1), chỉ đi sang phải hoặc xuống dưới. Bao nhiêu đường đi?", link: "https://neetcode.io/problems/count-paths" },
      { type: "formula", text: "dp[r][c] = dp[r-1][c] + dp[r][c-1]" },
      { type: "p", text: "Mỗi ô chỉ phụ thuộc ô **trên** và ô **bên trái**, nên chỉ cần giữ **một hàng** → tối ưu bộ nhớ xuống O(n)." },
      { type: "code", examples: {
        C: "int uniquePaths(int m, int n) {\n    int *dp = malloc(n * sizeof(int));\n    for (int c = 0; c < n; c++) dp[c] = 1;\n    for (int r = 1; r < m; r++)\n        for (int c = 1; c < n; c++)\n            dp[c] += dp[c - 1];          /* dp[c] cũ = ô phía trên */\n    int ans = dp[n - 1];\n    free(dp);\n    return ans;\n}",
        Java: "public int uniquePaths(int m, int n) {\n    int[] dp = new int[n];\n    Arrays.fill(dp, 1);\n    for (int r = 1; r < m; r++)\n        for (int c = 1; c < n; c++)\n            dp[c] += dp[c - 1];\n    return dp[n - 1];\n}",
        Python: "def uniquePaths(m, n):\n    dp = [1] * n\n    for _ in range(1, m):\n        for c in range(1, n):\n            dp[c] += dp[c - 1]\n    return dp[-1]",
      } },
      { type: "complexity", time: "O(m·n)", space: "O(n)", spaceDescription: "Bảng đầy đủ là O(m·n), nhưng chỉ cần một hàng." },
      { type: "info", kind: "tip", title: "Công thức tổ hợp", text: "Cần đi (m−1) bước xuống và (n−1) bước phải → đáp án = C(m+n−2, m−1). Dùng DP khi có chướng ngại vật (Unique Paths II)." },
    ],
  },
  {
    id: "lcs",
    title: "Pattern 2: Hai chuỗi – LCS",
    blocks: [
      { type: "problem", title: "Longest Common Subsequence", difficulty: "Medium", description: "Độ dài dãy con chung dài nhất của hai chuỗi.", link: "https://neetcode.io/problems/longest-common-subsequence" },
      { type: "steps", items: [
        { title: "Trạng thái", text: "`dp[i][j]` = LCS của `a[0..i)` và `b[0..j)`." },
        { title: "Hai ký tự cuối bằng nhau", text: "`dp[i][j] = dp[i-1][j-1] + 1`." },
        { title: "Khác nhau", text: "`dp[i][j] = max(dp[i-1][j], dp[i][j-1])` — bỏ ký tự cuối của một trong hai chuỗi." },
        { title: "Base case", text: "`dp[0][*] = dp[*][0] = 0` (chuỗi rỗng)." },
      ] },
      { type: "code", examples: {
        C: "int longestCommonSubsequence(char *a, char *b) {\n    int n = strlen(a), m = strlen(b);\n    int **dp = malloc((n + 1) * sizeof(int *));\n    for (int i = 0; i <= n; i++) dp[i] = calloc(m + 1, sizeof(int));\n    for (int i = 1; i <= n; i++)\n        for (int j = 1; j <= m; j++)\n            dp[i][j] = a[i - 1] == b[j - 1]\n                ? dp[i - 1][j - 1] + 1\n                : (dp[i - 1][j] > dp[i][j - 1] ? dp[i - 1][j] : dp[i][j - 1]);\n    int ans = dp[n][m];\n    for (int i = 0; i <= n; i++) free(dp[i]);\n    free(dp);\n    return ans;\n}",
        Java: "public int longestCommonSubsequence(String a, String b) {\n    int n = a.length(), m = b.length();\n    int[][] dp = new int[n + 1][m + 1];\n    for (int i = 1; i <= n; i++)\n        for (int j = 1; j <= m; j++)\n            dp[i][j] = a.charAt(i - 1) == b.charAt(j - 1)\n                ? dp[i - 1][j - 1] + 1\n                : Math.max(dp[i - 1][j], dp[i][j - 1]);\n    return dp[n][m];\n}",
        Python: "def longestCommonSubsequence(a, b):\n    n, m = len(a), len(b)\n    dp = [[0] * (m + 1) for _ in range(n + 1)]\n    for i in range(1, n + 1):\n        for j in range(1, m + 1):\n            if a[i - 1] == b[j - 1]:\n                dp[i][j] = dp[i - 1][j - 1] + 1\n            else:\n                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])\n    return dp[n][m]",
      } },
      { type: "complexity", time: "O(n·m)", space: "O(n·m)", spaceDescription: "Có thể giảm xuống O(min(n, m)) bằng hai hàng." },
      { type: "problem", title: "Edit Distance", difficulty: "Medium", description: "Số thao tác ít nhất (chèn, xóa, thay thế một ký tự) để biến word1 thành word2.", link: "https://neetcode.io/problems/edit-distance" },
      { type: "p", text: "`dp[i][j]` = chi phí biến `word1[0..i)` thành `word2[0..j)`. Nếu hai ký tự cuối giống nhau → `dp[i-1][j-1]`; ngược lại → `1 + min(` **xóa** `dp[i-1][j]`, **chèn** `dp[i][j-1]`, **thay** `dp[i-1][j-1] )`. Base: `dp[i][0] = i`, `dp[0][j] = j`." },
      { type: "code", label: "Python", code: "def minDistance(w1, w2):\n    n, m = len(w1), len(w2)\n    dp = [[0] * (m + 1) for _ in range(n + 1)]\n    for i in range(n + 1): dp[i][0] = i\n    for j in range(m + 1): dp[0][j] = j\n    for i in range(1, n + 1):\n        for j in range(1, m + 1):\n            if w1[i - 1] == w2[j - 1]:\n                dp[i][j] = dp[i - 1][j - 1]\n            else:\n                dp[i][j] = 1 + min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1])\n    return dp[n][m]" },
    ],
  },
  {
    id: "knapsack",
    title: "Pattern 3: Knapsack (Coin Change II, Target Sum)",
    blocks: [
      { type: "table", head: ["Loại", "Mỗi vật dùng", "Thứ tự vòng lặp (bảng 1 chiều)"], rows: [
        ["0/1 Knapsack", "Tối đa 1 lần", "Vật ngoài, tổng **giảm dần**"],
        ["Unbounded Knapsack", "Không giới hạn", "Vật ngoài, tổng **tăng dần**"],
      ] },
      { type: "problem", title: "Coin Change II", difficulty: "Medium", description: "Đếm **số tổ hợp** các đồng xu có tổng bằng amount (không phân biệt thứ tự).", link: "https://neetcode.io/problems/coin-change-ii" },
      { type: "info", kind: "important", title: "Tổ hợp vs hoán vị", text: "Để không đếm trùng thứ tự (1+2 và 2+1 là một), vòng lặp **ngoài là mệnh giá**, vòng trong là tổng. Đảo thứ tự hai vòng lặp sẽ đếm hoán vị." },
      { type: "code", examples: {
        C: "int change(int amount, int *coins, int n) {\n    unsigned int *dp = calloc(amount + 1, sizeof(unsigned int));\n    dp[0] = 1;\n    for (int i = 0; i < n; i++)\n        for (int a = coins[i]; a <= amount; a++)\n            dp[a] += dp[a - coins[i]];\n    int ans = dp[amount];\n    free(dp);\n    return ans;\n}",
        Java: "public int change(int amount, int[] coins) {\n    int[] dp = new int[amount + 1];\n    dp[0] = 1;\n    for (int c : coins)\n        for (int a = c; a <= amount; a++)\n            dp[a] += dp[a - c];\n    return dp[amount];\n}",
        Python: "def change(amount, coins):\n    dp = [0] * (amount + 1)\n    dp[0] = 1\n    for c in coins:\n        for a in range(c, amount + 1):\n            dp[a] += dp[a - c]\n    return dp[amount]",
      } },
      { type: "problem", title: "Target Sum", difficulty: "Medium", description: "Gán dấu + hoặc − trước mỗi số để tổng bằng target. Bao nhiêu cách?", link: "https://neetcode.io/problems/target-sum" },
      { type: "p", text: "Gọi P là tổng nhóm dấu +, N là tổng nhóm dấu −. Ta có P − N = target và P + N = sum ⇒ **P = (sum + target) / 2**. Bài toán trở thành: *đếm số tập con có tổng bằng P* (0/1 knapsack). Nếu `(sum + target)` lẻ hoặc âm → 0." },
      { type: "code", examples: {
        Java: "public int findTargetSumWays(int[] nums, int target) {\n    int sum = 0;\n    for (int x : nums) sum += x;\n    if ((sum + target) % 2 != 0 || Math.abs(target) > sum) return 0;\n    int p = (sum + target) / 2;\n    int[] dp = new int[p + 1];\n    dp[0] = 1;\n    for (int x : nums)\n        for (int s = p; s >= x; s--)      // 0/1: duyệt giảm dần\n            dp[s] += dp[s - x];\n    return dp[p];\n}",
        Python: "def findTargetSumWays(nums, target):\n    total = sum(nums)\n    if (total + target) % 2 or abs(target) > total:\n        return 0\n    p = (total + target) // 2\n    dp = [0] * (p + 1)\n    dp[0] = 1\n    for x in nums:\n        for s in range(p, x - 1, -1):      # 0/1: duyệt giảm dần\n            dp[s] += dp[s - x]\n    return dp[p]",
        C: "/* Giống Java: tính p = (sum + target) / 2, dp[0] = 1,\n   for mỗi x: for (s = p; s >= x; s--) dp[s] += dp[s - x]. */",
      } },
      { type: "complexity", time: "O(n · P)", space: "O(P)" },
    ],
  },
  {
    id: "state-machine",
    title: "Pattern 4: DP có trạng thái (Stock with Cooldown)",
    blocks: [
      { type: "problem", title: "Best Time to Buy and Sell Stock with Cooldown", difficulty: "Medium", description: "Mua bán nhiều lần nhưng sau khi bán phải nghỉ 1 ngày. Lợi nhuận tối đa?", link: "https://neetcode.io/problems/buy-and-sell-crypto-with-cooldown" },
      { type: "p", text: "Mỗi ngày bạn ở một trong ba **trạng thái** → vẽ máy trạng thái rồi viết truy hồi cho từng trạng thái:" },
      { type: "code", label: "Máy trạng thái", code: "held  (đang giữ cổ phiếu) : giữ tiếp, hoặc mua từ rest\nsold  (vừa bán hôm nay)   : bán cổ phiếu đang giữ\nrest  (không giữ, tự do)   : nghỉ tiếp, hoặc từ sold sau cooldown\n\nheld[i] = max(held[i-1], rest[i-1] - price[i])\nsold[i] = held[i-1] + price[i]\nrest[i] = max(rest[i-1], sold[i-1])" },
      { type: "code", examples: {
        C: "int maxProfit(int *prices, int n) {\n    int held = -prices[0], sold = 0, rest = 0;\n    for (int i = 1; i < n; i++) {\n        int pHeld = held, pSold = sold, pRest = rest;\n        held = pHeld > pRest - prices[i] ? pHeld : pRest - prices[i];\n        sold = pHeld + prices[i];\n        rest = pRest > pSold ? pRest : pSold;\n    }\n    return sold > rest ? sold : rest;\n}",
        Java: "public int maxProfit(int[] prices) {\n    int held = -prices[0], sold = 0, rest = 0;\n    for (int i = 1; i < prices.length; i++) {\n        int pHeld = held, pSold = sold, pRest = rest;\n        held = Math.max(pHeld, pRest - prices[i]);\n        sold = pHeld + prices[i];\n        rest = Math.max(pRest, pSold);\n    }\n    return Math.max(sold, rest);\n}",
        Python: "def maxProfit(prices):\n    held, sold, rest = -prices[0], 0, 0\n    for p in prices[1:]:\n        held, sold, rest = max(held, rest - p), held + p, max(rest, sold)\n    return max(sold, rest)",
      } },
      { type: "complexity", time: "O(n)", space: "O(1)" },
    ],
  },
  {
    id: "other-problems",
    title: "Các bài 2-D DP khác trong NeetCode",
    blocks: [
      { type: "table", head: ["Bài", "Trạng thái / ý tưởng"], rows: [
        ["Interleaving String", "`dp[i][j]` = `s3[0..i+j)` tạo được từ `s1[0..i)` và `s2[0..j)` xen kẽ"],
        ["Longest Increasing Path in a Matrix", "DFS + memo trên mỗi ô (đồ thị không chu trình vì chỉ đi lên giá trị lớn hơn)"],
        ["Distinct Subsequences", "`dp[i][j]` = số cách tạo `t[0..j)` từ `s[0..i)`"],
        ["Burst Balloons", "**Interval DP**: `dp[l][r]` = max xu khi nổ hết bóng trong (l, r); chọn bóng **nổ cuối cùng** k"],
        ["Regular Expression Matching", "`dp[i][j]` = `s[0..i)` khớp `p[0..j)`; xử lý riêng ký tự `*`"],
      ] },
    ],
  },
  {
    id: "recognition",
    title: "Nhận diện pattern & lỗi thường gặp",
    blocks: [
      { type: "list", items: [
        "Có **hai chuỗi / hai mảng** cần so sánh hoặc biến đổi → `dp[i][j]`.",
        "Có **lưới** và chỉ đi theo vài hướng cố định → `dp[r][c]`.",
        "Có **\"lượng còn lại\"** (tiền, sức chứa, tổng) → knapsack `dp[i][w]`.",
        "Nhầm kích thước bảng: dùng `(n+1) × (m+1)` để hàng/cột 0 làm base case rỗng.",
        "Lệch chỉ số: `dp[i]` nói về i ký tự đầu nên ký tự thứ i là `s[i-1]`.",
        "Tối ưu bộ nhớ nhưng ghi đè giá trị cũ còn cần dùng (hướng duyệt sai).",
      ] },
      { type: "info", kind: "important", title: "Tóm tắt", text: "2-D DP = **bảng hai chiều**, mỗi ô phụ thuộc các ô kề (trên, trái, chéo). Học thuộc ba mẫu: **Unique Paths** (lưới), **LCS / Edit Distance** (hai chuỗi), **Knapsack** (lượng còn lại)." },
    ],
  },
];
