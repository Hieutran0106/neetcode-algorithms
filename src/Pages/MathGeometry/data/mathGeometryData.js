export const sections = [
  {
    id: "introduction",
    title: "Math & Geometry trên NeetCode",
    description: "Nhóm bài \"mẹo\": không có thuật toán mới, nhưng cần quan sát toán học hoặc xử lý ma trận cẩn thận.",
    blocks: [
      { type: "p", text: "Các bài trong nhóm này chia thành ba dạng: **thao tác trên ma trận** (xoay, xoắn ốc, đặt về 0), **số học** (cộng/nhân số lớn, lũy thừa nhanh, chu trình) và **hình học tọa độ** (đếm hình vuông). Phần lớn không khó về thuật toán, mà khó ở **chi tiết cài đặt và biên**." },
      { type: "table", head: ["Dạng", "Bài", "Ý chính"], rows: [
        ["Ma trận", "Rotate Image, Spiral Matrix, Set Matrix Zeroes", "Quản lý chỉ số / biên, làm tại chỗ (in-place)"],
        ["Số học", "Happy Number, Plus One, Pow(x, n), Multiply Strings", "Chu trình, carry, chia để trị"],
        ["Hình học", "Detect Squares", "Hash map đếm điểm + kiểm tra đường chéo"],
      ] },
    ],
  },
  {
    id: "matrix-rotate",
    title: "Pattern 1: Xoay ma trận (Rotate Image)",
    blocks: [
      { type: "problem", title: "Rotate Image", difficulty: "Medium", description: "Xoay ma trận n×n 90° theo chiều kim đồng hồ, làm tại chỗ.", link: "https://neetcode.io/problems/rotate-matrix" },
      { type: "formula", text: "Xoay 90° phải  =  Transpose  +  Đảo từng hàng" },
      { type: "code", label: "Ví dụ 3×3", code: "1 2 3        1 4 7        7 4 1\n4 5 6   →    2 5 8   →    8 5 2\n7 8 9        3 6 9        9 6 3\n gốc        transpose    đảo mỗi hàng" },
      { type: "code", examples: {
        C: "void rotate(int **m, int n) {\n    for (int i = 0; i < n; i++)              /* transpose */\n        for (int j = i + 1; j < n; j++) {\n            int t = m[i][j]; m[i][j] = m[j][i]; m[j][i] = t;\n        }\n    for (int i = 0; i < n; i++)              /* đảo từng hàng */\n        for (int l = 0, r = n - 1; l < r; l++, r--) {\n            int t = m[i][l]; m[i][l] = m[i][r]; m[i][r] = t;\n        }\n}",
        Java: "public void rotate(int[][] m) {\n    int n = m.length;\n    for (int i = 0; i < n; i++)\n        for (int j = i + 1; j < n; j++) {\n            int t = m[i][j]; m[i][j] = m[j][i]; m[j][i] = t;\n        }\n    for (int[] row : m)\n        for (int l = 0, r = n - 1; l < r; l++, r--) {\n            int t = row[l]; row[l] = row[r]; row[r] = t;\n        }\n}",
        Python: "def rotate(m):\n    n = len(m)\n    for i in range(n):\n        for j in range(i + 1, n):\n            m[i][j], m[j][i] = m[j][i], m[i][j]\n    for row in m:\n        row.reverse()",
      } },
      { type: "complexity", time: "O(n²)", space: "O(1)" },
      { type: "info", kind: "tip", title: "Các phép xoay khác", text: "Xoay **trái** 90° = transpose + đảo từng **cột** (hoặc đảo hàng rồi transpose). Xoay 180° = đảo hàng và đảo cột." },
    ],
  },
  {
    id: "spiral",
    title: "Pattern 2: Duyệt xoắn ốc (Spiral Matrix)",
    blocks: [
      { type: "problem", title: "Spiral Matrix", difficulty: "Medium", description: "Trả về các phần tử của ma trận theo thứ tự xoắn ốc từ ngoài vào trong.", link: "https://neetcode.io/problems/spiral-matrix" },
      { type: "p", text: "Dùng bốn biên `top, bottom, left, right`; đi hết một cạnh thì **thu hẹp biên** tương ứng. Điều kiện `top <= bottom` và `left <= right` phải **kiểm tra lại** trước hai cạnh cuối để tránh lặp khi ma trận chỉ còn một hàng / một cột." },
      { type: "code", examples: {
        C: "int *spiralOrder(int **m, int R, int *colSize, int *retSize) {\n    int C = colSize[0], k = 0;\n    int *res = malloc(sizeof(int) * R * C);\n    int top = 0, bot = R - 1, left = 0, right = C - 1;\n    while (top <= bot && left <= right) {\n        for (int j = left; j <= right; j++) res[k++] = m[top][j];\n        top++;\n        for (int i = top; i <= bot; i++) res[k++] = m[i][right];\n        right--;\n        if (top <= bot) { for (int j = right; j >= left; j--) res[k++] = m[bot][j]; bot--; }\n        if (left <= right) { for (int i = bot; i >= top; i--) res[k++] = m[i][left]; left++; }\n    }\n    *retSize = k;\n    return res;\n}",
        Java: "public List<Integer> spiralOrder(int[][] m) {\n    List<Integer> res = new ArrayList<>();\n    int top = 0, bot = m.length - 1, left = 0, right = m[0].length - 1;\n    while (top <= bot && left <= right) {\n        for (int j = left; j <= right; j++) res.add(m[top][j]);\n        top++;\n        for (int i = top; i <= bot; i++) res.add(m[i][right]);\n        right--;\n        if (top <= bot) { for (int j = right; j >= left; j--) res.add(m[bot][j]); bot--; }\n        if (left <= right) { for (int i = bot; i >= top; i--) res.add(m[i][left]); left++; }\n    }\n    return res;\n}",
        Python: "def spiralOrder(m):\n    res = []\n    top, bot, left, right = 0, len(m) - 1, 0, len(m[0]) - 1\n    while top <= bot and left <= right:\n        res += m[top][left:right + 1]\n        top += 1\n        for i in range(top, bot + 1):\n            res.append(m[i][right])\n        right -= 1\n        if top <= bot:\n            res += m[bot][left:right + 1][::-1]\n            bot -= 1\n        if left <= right:\n            for i in range(bot, top - 1, -1):\n                res.append(m[i][left])\n            left += 1\n    return res",
      } },
      { type: "complexity", time: "O(R·C)", space: "O(1)", spaceDescription: "Không tính mảng kết quả." },
    ],
  },
  {
    id: "set-zeroes",
    title: "Pattern 3: Đánh dấu tại chỗ (Set Matrix Zeroes)",
    blocks: [
      { type: "problem", title: "Set Matrix Zeroes", difficulty: "Medium", description: "Nếu một ô bằng 0 thì đặt cả hàng và cột chứa nó thành 0, làm tại chỗ.", link: "https://neetcode.io/problems/set-zeroes-in-matrix" },
      { type: "steps", items: [
        { title: "Dùng hàng 0 và cột 0 làm bộ nhớ", text: "Ô `m[i][0]` đánh dấu \"hàng i cần xóa\", ô `m[0][j]` đánh dấu \"cột j cần xóa\"." },
        { title: "Nhớ riêng hàng 0 / cột 0", text: "Hai biến bool ghi lại xem **chính hàng 0 / cột 0** có chứa số 0 ban đầu không, vì các ô này bị dùng làm cờ." },
        { title: "Điền 0 từ trong ra ngoài", text: "Duyệt các ô **trong** (i ≥ 1, j ≥ 1) theo cờ; cuối cùng xử lý hàng 0 và cột 0." },
      ] },
      { type: "code", examples: {
        Java: "public void setZeroes(int[][] m) {\n    int R = m.length, C = m[0].length;\n    boolean row0 = false, col0 = false;\n    for (int j = 0; j < C; j++) if (m[0][j] == 0) row0 = true;\n    for (int i = 0; i < R; i++) if (m[i][0] == 0) col0 = true;\n    for (int i = 1; i < R; i++)\n        for (int j = 1; j < C; j++)\n            if (m[i][j] == 0) { m[i][0] = 0; m[0][j] = 0; }\n    for (int i = 1; i < R; i++)\n        for (int j = 1; j < C; j++)\n            if (m[i][0] == 0 || m[0][j] == 0) m[i][j] = 0;\n    if (row0) for (int j = 0; j < C; j++) m[0][j] = 0;\n    if (col0) for (int i = 0; i < R; i++) m[i][0] = 0;\n}",
        Python: "def setZeroes(m):\n    R, C = len(m), len(m[0])\n    row0 = any(m[0][j] == 0 for j in range(C))\n    col0 = any(m[i][0] == 0 for i in range(R))\n    for i in range(1, R):\n        for j in range(1, C):\n            if m[i][j] == 0:\n                m[i][0] = m[0][j] = 0\n    for i in range(1, R):\n        for j in range(1, C):\n            if m[i][0] == 0 or m[0][j] == 0:\n                m[i][j] = 0\n    if row0:\n        for j in range(C): m[0][j] = 0\n    if col0:\n        for i in range(R): m[i][0] = 0",
        C: "/* Giống bản Java: 2 cờ row0/col0, dùng hàng 0 & cột 0 làm cờ đánh dấu,\n   điền 0 cho các ô trong, rồi xử lý hàng 0 / cột 0 cuối cùng. */",
      } },
      { type: "complexity", time: "O(R·C)", space: "O(1)" },
    ],
  },
  {
    id: "number-tricks",
    title: "Pattern 4: Số học – chu trình & carry",
    blocks: [
      { type: "problem", title: "Happy Number", difficulty: "Easy", description: "Lặp: thay n bằng tổng bình phương các chữ số. n là \"happy\" nếu cuối cùng về 1; ngược lại sẽ rơi vào chu trình.", link: "https://neetcode.io/problems/non-cyclical-number" },
      { type: "p", text: "Dãy số hoặc về 1 hoặc **lặp vô hạn** → bài toán **phát hiện chu trình**. Dùng `set` các giá trị đã gặp, hoặc **Floyd (slow/fast)** như trong chương Linked List để O(1) space." },
      { type: "code", examples: {
        C: "static int next(int n) {\n    int s = 0;\n    while (n) { int d = n % 10; s += d * d; n /= 10; }\n    return s;\n}\nbool isHappy(int n) {\n    int slow = n, fast = next(n);\n    while (fast != 1 && slow != fast) {\n        slow = next(slow);\n        fast = next(next(fast));\n    }\n    return fast == 1;\n}",
        Java: "public boolean isHappy(int n) {\n    int slow = n, fast = next(n);\n    while (fast != 1 && slow != fast) {\n        slow = next(slow);\n        fast = next(next(fast));\n    }\n    return fast == 1;\n}\nprivate int next(int n) {\n    int s = 0;\n    while (n > 0) { int d = n % 10; s += d * d; n /= 10; }\n    return s;\n}",
        Python: "def isHappy(n):\n    def nxt(x):\n        return sum(int(c) ** 2 for c in str(x))\n    slow, fast = n, nxt(n)\n    while fast != 1 and slow != fast:\n        slow, fast = nxt(slow), nxt(nxt(fast))\n    return fast == 1",
      } },
      { type: "problem", title: "Plus One", difficulty: "Easy", description: "Cộng 1 vào số lớn được lưu thành mảng các chữ số.", link: "https://neetcode.io/problems/plus-one" },
      { type: "p", text: "Duyệt từ **phải sang trái**: chữ số < 9 thì +1 và dừng; chữ số = 9 thì thành 0 và nhớ sang trái. Nếu hết mảng vẫn còn nhớ (999 → 1000) thì chèn 1 vào đầu." },
      { type: "code", label: "Python", code: "def plusOne(digits):\n    for i in range(len(digits) - 1, -1, -1):\n        if digits[i] < 9:\n            digits[i] += 1\n            return digits\n        digits[i] = 0\n    return [1] + digits" },
      { type: "problem", title: "Multiply Strings", difficulty: "Medium", description: "Nhân hai số nguyên không âm cho dưới dạng chuỗi (không dùng BigInteger).", link: "https://neetcode.io/problems/multiply-strings" },
      { type: "p", text: "Nhân thủ công như trên giấy: chữ số `a[i]` × `b[j]` đóng góp vào hai vị trí **`res[i+j+1]`** (chữ số) và **`res[i+j]`** (nhớ). Kết quả có tối đa `n + m` chữ số." },
      { type: "code", examples: {
        Java: "public String multiply(String a, String b) {\n    if (a.equals(\"0\") || b.equals(\"0\")) return \"0\";\n    int n = a.length(), m = b.length();\n    int[] res = new int[n + m];\n    for (int i = n - 1; i >= 0; i--)\n        for (int j = m - 1; j >= 0; j--) {\n            int sum = (a.charAt(i) - '0') * (b.charAt(j) - '0') + res[i + j + 1];\n            res[i + j + 1] = sum % 10;\n            res[i + j] += sum / 10;\n        }\n    StringBuilder sb = new StringBuilder();\n    for (int d : res) if (!(sb.length() == 0 && d == 0)) sb.append(d);\n    return sb.toString();\n}",
        Python: "def multiply(a, b):\n    if a == '0' or b == '0':\n        return '0'\n    n, m = len(a), len(b)\n    res = [0] * (n + m)\n    for i in range(n - 1, -1, -1):\n        for j in range(m - 1, -1, -1):\n            s = int(a[i]) * int(b[j]) + res[i + j + 1]\n            res[i + j + 1] = s % 10\n            res[i + j] += s // 10\n    return ''.join(map(str, res)).lstrip('0')",
        C: "/* int res[n + m] = {0}; hai vòng for lùi như Java;\n   sau đó bỏ các số 0 ở đầu rồi chuyển sang chuỗi ký tự. Time O(n·m). */",
      } },
      { type: "complexity", time: "O(n·m)", space: "O(n+m)" },
    ],
  },
  {
    id: "fast-power",
    title: "Pattern 5: Lũy thừa nhanh (Pow(x, n))",
    blocks: [
      { type: "problem", title: "Pow(x, n)", difficulty: "Medium", description: "Tính xⁿ với n nguyên (có thể âm).", link: "https://neetcode.io/problems/pow-x-n" },
      { type: "formula", text: "x^n = (x^(n/2))²   nếu n chẵn     x^n = x · x^(n-1)   nếu n lẻ" },
      { type: "p", text: "Mỗi bước giảm n một nửa → **O(log n)** thay vì O(n). Với n < 0: tính `x^|n|` rồi lấy nghịch đảo. Cẩn thận `n = −2³¹` khi đổi dấu trong ngôn ngữ 32 bit (dùng kiểu 64 bit)." },
      { type: "code", examples: {
        C: "double myPow(double x, int n) {\n    long long e = n;\n    if (e < 0) { x = 1 / x; e = -e; }\n    double res = 1;\n    while (e) {\n        if (e & 1) res *= x;      /* bit hiện tại là 1 */\n        x *= x;\n        e >>= 1;\n    }\n    return res;\n}",
        Java: "public double myPow(double x, int n) {\n    long e = n;\n    if (e < 0) { x = 1 / x; e = -e; }\n    double res = 1;\n    while (e > 0) {\n        if ((e & 1) == 1) res *= x;\n        x *= x;\n        e >>= 1;\n    }\n    return res;\n}",
        Python: "def myPow(x, n):\n    if n < 0:\n        x, n = 1 / x, -n\n    res = 1.0\n    while n:\n        if n & 1:\n            res *= x\n        x *= x\n        n >>= 1\n    return res",
      } },
      { type: "complexity", time: "O(log n)", space: "O(1)" },
      { type: "info", kind: "tip", title: "Lũy thừa modulo", text: "Cùng khung này nhưng nhân xong lấy `% MOD` ở mỗi bước — công cụ chuẩn khi đề yêu cầu \"in kết quả modulo 10⁹+7\"." },
    ],
  },
  {
    id: "detect-squares",
    title: "Pattern 6: Hình học tọa độ (Detect Squares)",
    blocks: [
      { type: "problem", title: "Detect Squares", difficulty: "Medium", description: "Thêm điểm liên tục; truy vấn: có bao nhiêu cách chọn 3 điểm đã có để cùng điểm truy vấn tạo thành **hình vuông song song trục**.", link: "https://neetcode.io/problems/count-squares" },
      { type: "steps", items: [
        { title: "Đếm điểm", text: "Hash map `(x, y) → số lần xuất hiện` (điểm có thể được thêm nhiều lần)." },
        { title: "Chọn điểm đối diện đường chéo", text: "Với điểm truy vấn `(qx, qy)`, mỗi điểm `(px, py)` thỏa `|px − qx| == |py − qy| > 0` là một đỉnh đối diện." },
        { title: "Kiểm tra hai đỉnh còn lại", text: "Hai đỉnh còn lại là `(qx, py)` và `(px, qy)`. Số hình vuông thêm vào = tích số lần xuất hiện của ba đỉnh." },
      ] },
      { type: "code", examples: {
        Java: "class DetectSquares {\n    private final Map<String, Integer> cnt = new HashMap<>();\n    private final List<int[]> pts = new ArrayList<>();\n    private String key(int x, int y) { return x + \",\" + y; }\n\n    public void add(int[] p) {\n        cnt.merge(key(p[0], p[1]), 1, Integer::sum);\n        pts.add(p);\n    }\n\n    public int count(int[] q) {\n        int qx = q[0], qy = q[1], res = 0;\n        for (int[] p : pts) {\n            int px = p[0], py = p[1];\n            if (Math.abs(px - qx) != Math.abs(py - qy) || px == qx) continue;\n            res += cnt.getOrDefault(key(qx, py), 0) * cnt.getOrDefault(key(px, qy), 0);\n        }\n        return res;\n    }\n}",
        Python: "class DetectSquares:\n    def __init__(self):\n        self.cnt = Counter()\n        self.pts = []\n\n    def add(self, point):\n        p = tuple(point)\n        self.cnt[p] += 1\n        self.pts.append(p)\n\n    def count(self, point):\n        qx, qy = point\n        res = 0\n        for px, py in self.pts:\n            if abs(px - qx) != abs(py - qy) or px == qx:\n                continue\n            res += self.cnt[(qx, py)] * self.cnt[(px, qy)]\n        return res",
        C: "/* Dùng bảng đếm cnt[x][y] (tọa độ 0..1000) và danh sách điểm đã thêm.\n   count(): với mỗi điểm p có |px-qx| == |py-qy| và px != qx,\n   cộng cnt[qx][py] * cnt[px][qy]. */",
      } },
      { type: "complexity", time: "add: O(1), count: O(n)", space: "O(n)" },
      { type: "info", kind: "info", title: "Vì sao duyệt danh sách điểm (có lặp)?", text: "Mỗi lần điểm `p` xuất hiện lại trong `pts`, nó đóng góp một đỉnh đối diện khác nhau. Nhân với `cnt` của hai đỉnh còn lại cho đúng số tổ hợp." },
    ],
  },
  {
    id: "recognition",
    title: "Nhận diện pattern & lỗi thường gặp",
    blocks: [
      { type: "table", head: ["Dấu hiệu", "Hướng giải"], rows: [
        ["Xoay / lật ma trận tại chỗ", "Transpose + đảo hàng/cột"],
        ["Duyệt ma trận theo hình đặc biệt", "4 biên top/bottom/left/right"],
        ["Dãy biến đổi \"lặp lại\" → về 1 hay vòng?", "Set hoặc Floyd (phát hiện chu trình)"],
        ["Số quá lớn / chuỗi chữ số", "Mô phỏng phép toán thủ công với carry"],
        ["xⁿ, n rất lớn", "Lũy thừa nhanh O(log n)"],
        ["Điểm trên mặt phẳng, hình song song trục", "Hash map đếm điểm + kiểm tra đường chéo"],
      ] },
      { type: "list", items: [
        "Quên cập nhật `top++ / right-- ...` hoặc không kiểm tra lại điều kiện giữa các cạnh khi duyệt xoắn ốc.",
        "Đổi `n` thành `-n` bị tràn khi `n = INT_MIN`.",
        "Quên số 0 ở đầu / trường hợp 999 → 1000 trong các bài cộng/nhân chuỗi.",
        "Dùng hàng/cột 0 làm cờ nhưng quên lưu trạng thái ban đầu của chúng.",
        "So sánh số thực bằng `==` — nên dùng sai số cho phép (epsilon) nếu cần.",
      ] },
      { type: "info", kind: "important", title: "Tóm tắt", text: "Math & Geometry = **quan sát + cài đặt cẩn thận**. Học thuộc: transpose+reverse, 4 biên cho xoắn ốc, cờ trong chính ma trận, Floyd cho chu trình số, nhân thủ công với `i+j`, lũy thừa nhanh, đếm điểm bằng hash map." },
    ],
  },
];
