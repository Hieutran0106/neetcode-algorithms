export const sections = [
  {
    id: "introduction",
    title: "Thao tác bit để làm gì?",
    description: "Làm việc trực tiếp trên biểu diễn nhị phân: nhanh, không tốn bộ nhớ phụ, và cho ra nhiều lời giải O(1) space rất gọn.",
    blocks: [
      { type: "p", text: "Máy tính lưu số nguyên dưới dạng nhị phân. Các phép toán bit chạy **trực tiếp trên phần cứng** nên rất nhanh. Trên NeetCode, nhóm Bit Manipulation có ít bài nhưng đều dựa vào **một số trick cố định** — học thuộc là giải được." },
      { type: "table", head: ["Toán tử", "Ký hiệu", "Quy tắc", "Ví dụ (4 bit)"], rows: [
        ["AND", "`a & b`", "1 nếu **cả hai** là 1", "1100 & 1010 = 1000"],
        ["OR", "`a | b`", "1 nếu **ít nhất một** là 1", "1100 | 1010 = 1110"],
        ["XOR", "`a ^ b`", "1 nếu **khác nhau**", "1100 ^ 1010 = 0110"],
        ["NOT", "`~a`", "Đảo mọi bit", "~0101 = 1010"],
        ["Dịch trái", "`a << k`", "Nhân với 2ᵏ", "0011 << 1 = 0110"],
        ["Dịch phải", "`a >> k`", "Chia nguyên cho 2ᵏ", "0110 >> 1 = 0011"],
      ] },
      { type: "info", kind: "tip", title: "Số nguyên có dấu", text: "Số âm dùng **bù 2** (two's complement). `>>` giữ bit dấu (arithmetic shift) trong C/Java; Java có thêm `>>>` (dịch phải không dấu). Python có số nguyên **không giới hạn độ dài** nên cần `& 0xFFFFFFFF` khi mô phỏng 32 bit." },
    ],
  },
  {
    id: "xor",
    title: "Tính chất XOR – vũ khí số 1",
    blocks: [
      { type: "formula", text: "a ^ a = 0     a ^ 0 = a     a ^ b = b ^ a     (a^b)^c = a^(b^c)" },
      { type: "p", text: "Từ đó: XOR một dãy số, **các cặp giống nhau triệt tiêu nhau**, chỉ còn lại phần tử xuất hiện lẻ lần." },
      { type: "problem", title: "Single Number", difficulty: "Easy", description: "Mọi phần tử xuất hiện hai lần trừ một phần tử xuất hiện một lần. Tìm phần tử đó với O(1) bộ nhớ.", link: "https://neetcode.io/problems/single-number" },
      { type: "code", examples: {
        C: "int singleNumber(int *nums, int n) {\n    int x = 0;\n    for (int i = 0; i < n; i++) x ^= nums[i];\n    return x;\n}",
        Java: "public int singleNumber(int[] nums) {\n    int x = 0;\n    for (int n : nums) x ^= n;\n    return x;\n}",
        Python: "def singleNumber(nums):\n    x = 0\n    for n in nums:\n        x ^= n\n    return x",
      } },
      { type: "complexity", time: "O(n)", space: "O(1)" },
      { type: "problem", title: "Missing Number", difficulty: "Easy", description: "Mảng chứa n số phân biệt trong [0, n]. Tìm số bị thiếu.", link: "https://neetcode.io/problems/missing-number" },
      { type: "p", text: "XOR tất cả chỉ số `0..n` với tất cả phần tử: mọi số có mặt đều xuất hiện **hai lần** và triệt tiêu, chỉ còn số thiếu. (Hoặc dùng tổng: `n(n+1)/2 − sum`.)" },
      { type: "code", examples: {
        C: "int missingNumber(int *nums, int n) {\n    int x = n;\n    for (int i = 0; i < n; i++) x ^= i ^ nums[i];\n    return x;\n}",
        Java: "public int missingNumber(int[] nums) {\n    int x = nums.length;\n    for (int i = 0; i < nums.length; i++) x ^= i ^ nums[i];\n    return x;\n}",
        Python: "def missingNumber(nums):\n    x = len(nums)\n    for i, v in enumerate(nums):\n        x ^= i ^ v\n    return x",
      } },
    ],
  },
  {
    id: "count-bits",
    title: "Đếm bit 1 (Hamming weight)",
    blocks: [
      { type: "problem", title: "Number of 1 Bits", difficulty: "Easy", description: "Đếm số bit 1 trong biểu diễn nhị phân của số nguyên không dấu 32 bit.", link: "https://neetcode.io/problems/number-of-one-bits" },
      { type: "formula", text: "n & (n - 1)  =  xóa bit 1 thấp nhất của n" },
      { type: "code", label: "Ví dụ", code: "n     = 1011000\nn - 1 = 1010111     (bit 1 thấp nhất → 0, các bit 0 bên dưới → 1)\nn & (n-1) = 1010000  → đã xóa đúng một bit 1" },
      { type: "p", text: "Lặp `n &= n - 1` đến khi `n == 0`; số lần lặp = số bit 1. Chạy đúng **k lần** với k là số bit 1 (nhanh hơn duyệt đủ 32 bit)." },
      { type: "code", examples: {
        C: "int hammingWeight(uint32_t n) {\n    int count = 0;\n    while (n) { n &= n - 1; count++; }\n    return count;\n}",
        Java: "public int hammingWeight(int n) {\n    int count = 0;\n    while (n != 0) { n &= n - 1; count++; }\n    return count;\n}",
        Python: "def hammingWeight(n):\n    count = 0\n    while n:\n        n &= n - 1\n        count += 1\n    return count",
      } },
      { type: "problem", title: "Counting Bits", difficulty: "Easy", description: "Với mỗi i từ 0 đến n, trả về số bit 1 của i.", link: "https://neetcode.io/problems/counting-bits" },
      { type: "formula", text: "bits[i] = bits[i >> 1] + (i & 1)" },
      { type: "p", text: "`i >> 1` là `i` bỏ bit cuối (đã tính từ trước), cộng thêm bit cuối `i & 1`. Đây là DP một chiều trên bit." },
      { type: "code", examples: {
        C: "int *countBits(int n, int *retSize) {\n    int *bits = calloc(n + 1, sizeof(int));\n    for (int i = 1; i <= n; i++) bits[i] = bits[i >> 1] + (i & 1);\n    *retSize = n + 1;\n    return bits;\n}",
        Java: "public int[] countBits(int n) {\n    int[] bits = new int[n + 1];\n    for (int i = 1; i <= n; i++) bits[i] = bits[i >> 1] + (i & 1);\n    return bits;\n}",
        Python: "def countBits(n):\n    bits = [0] * (n + 1)\n    for i in range(1, n + 1):\n        bits[i] = bits[i >> 1] + (i & 1)\n    return bits",
      } },
      { type: "complexity", time: "O(n)", space: "O(n)" },
    ],
  },
  {
    id: "reverse-bits",
    title: "Đọc và ghi từng bit (Reverse Bits)",
    blocks: [
      { type: "problem", title: "Reverse Bits", difficulty: "Easy", description: "Đảo ngược thứ tự 32 bit của một số nguyên không dấu.", link: "https://neetcode.io/problems/reverse-bits" },
      { type: "steps", items: [
        { title: "Lấy bit thấp nhất của n", text: "`bit = (n >> i) & 1` hoặc `n & 1` rồi `n >>= 1`." },
        { title: "Đặt vào vị trí đối xứng", text: "Bit thứ i của n đi vào vị trí `31 - i` của kết quả: `res |= bit << (31 - i)`." },
      ] },
      { type: "code", examples: {
        C: "uint32_t reverseBits(uint32_t n) {\n    uint32_t res = 0;\n    for (int i = 0; i < 32; i++) {\n        uint32_t bit = (n >> i) & 1;\n        res |= bit << (31 - i);\n    }\n    return res;\n}",
        Java: "public int reverseBits(int n) {\n    int res = 0;\n    for (int i = 0; i < 32; i++) {\n        int bit = (n >>> i) & 1;      // >>> để không giữ bit dấu\n        res |= bit << (31 - i);\n    }\n    return res;\n}",
        Python: "def reverseBits(n):\n    res = 0\n    for i in range(32):\n        bit = (n >> i) & 1\n        res |= bit << (31 - i)\n    return res",
      } },
      { type: "complexity", time: "O(32) = O(1)", space: "O(1)" },
      { type: "table", head: ["Thao tác", "Biểu thức"], rows: [
        ["Đọc bit thứ i", "`(n >> i) & 1`"],
        ["Bật bit thứ i", "`n | (1 << i)`"],
        ["Tắt bit thứ i", "`n & ~(1 << i)`"],
        ["Đảo bit thứ i", "`n ^ (1 << i)`"],
        ["Kiểm tra lũy thừa của 2", "`n > 0 && (n & (n - 1)) == 0`"],
        ["Bit 1 thấp nhất", "`n & -n`"],
      ] },
    ],
  },
  {
    id: "add-without-plus",
    title: "Cộng hai số không dùng + (Sum of Two Integers)",
    blocks: [
      { type: "problem", title: "Sum of Two Integers", difficulty: "Medium", description: "Tính a + b mà không dùng toán tử + hoặc −.", link: "https://neetcode.io/problems/sum-of-two-integers" },
      { type: "p", text: "Cộng hai bit: **XOR cho bit tổng (không nhớ)**, **AND rồi dịch trái 1 cho phần nhớ (carry)**. Lặp lại đến khi không còn carry." },
      { type: "formula", text: "a + b = (a ^ b) + ((a & b) << 1)" },
      { type: "code", examples: {
        C: "int getSum(int a, int b) {\n    while (b != 0) {\n        unsigned int carry = (unsigned int)(a & b) << 1;  /* tránh UB khi dịch số âm */\n        a ^= b;\n        b = carry;\n    }\n    return a;\n}",
        Java: "public int getSum(int a, int b) {\n    while (b != 0) {\n        int carry = (a & b) << 1;\n        a ^= b;\n        b = carry;\n    }\n    return a;\n}",
        Python: "def getSum(a, b):\n    MASK, MAX = 0xFFFFFFFF, 0x7FFFFFFF   # mô phỏng số 32 bit\n    while b:\n        a, b = (a ^ b) & MASK, ((a & b) << 1) & MASK\n    return a if a <= MAX else ~(a ^ MASK)  # đổi về số âm nếu bit dấu = 1",
      } },
      { type: "info", kind: "info", title: "Vì sao Python phức tạp hơn?", text: "Số nguyên Python không bị tràn nên số âm không tự \"quấn vòng\" ở 32 bit. Ta dùng mặt nạ `0xFFFFFFFF` để giữ 32 bit thấp, rồi đổi lại thành số âm nếu bit thứ 31 là 1." },
      { type: "complexity", time: "O(1)", space: "O(1)", timeDescription: "Tối đa 32 vòng lặp." },
    ],
  },
  {
    id: "reverse-integer",
    title: "Reverse Integer & kiểm tra tràn số",
    blocks: [
      { type: "problem", title: "Reverse Integer", difficulty: "Medium", description: "Đảo các chữ số của số nguyên 32 bit có dấu; trả về 0 nếu kết quả tràn khỏi 32 bit.", link: "https://neetcode.io/problems/reverse-integer" },
      { type: "p", text: "Bài này thiên về **số học** nhưng thuộc nhóm Bit Manipulation vì phải kiểm soát tràn 32 bit. Tách từng chữ số bằng `% 10` và `/ 10`, **kiểm tra tràn trước khi nhân 10**." },
      { type: "code", examples: {
        C: "int reverse(int x) {\n    int res = 0;\n    while (x != 0) {\n        int digit = x % 10;\n        x /= 10;\n        if (res > INT_MAX / 10 || (res == INT_MAX / 10 && digit > 7)) return 0;\n        if (res < INT_MIN / 10 || (res == INT_MIN / 10 && digit < -8)) return 0;\n        res = res * 10 + digit;\n    }\n    return res;\n}",
        Java: "public int reverse(int x) {\n    int res = 0;\n    while (x != 0) {\n        int digit = x % 10;\n        x /= 10;\n        if (res > Integer.MAX_VALUE / 10 || (res == Integer.MAX_VALUE / 10 && digit > 7)) return 0;\n        if (res < Integer.MIN_VALUE / 10 || (res == Integer.MIN_VALUE / 10 && digit < -8)) return 0;\n        res = res * 10 + digit;\n    }\n    return res;\n}",
        Python: "def reverse(x):\n    sign = -1 if x < 0 else 1\n    res = int(str(abs(x))[::-1]) * sign\n    return res if -2**31 <= res <= 2**31 - 1 else 0",
      } },
      { type: "complexity", time: "O(log₁₀ |x|)", space: "O(1)" },
    ],
  },
  {
    id: "recognition",
    title: "Nhận diện pattern & lỗi thường gặp",
    blocks: [
      { type: "table", head: ["Dấu hiệu trong đề", "Trick"], rows: [
        ["Mọi phần tử xuất hiện chẵn lần, một phần tử lẻ lần; O(1) space", "XOR toàn bộ"],
        ["Đếm số bit 1 / kiểm tra lũy thừa của 2", "`n & (n - 1)`"],
        ["Tính cho 0..n theo số bit", "`bits[i] = bits[i >> 1] + (i & 1)`"],
        ["Cộng / trừ / nhân không dùng toán tử", "XOR + AND + dịch bit"],
        ["Tập con nhỏ (n ≤ 20)", "**Bitmask**: mỗi bit = chọn / không chọn"],
      ] },
      { type: "list", items: [
        "Ưu tiên toán tử: `a & b == c` bị hiểu thành `a & (b == c)` → **luôn đặt ngoặc**.",
        "Dịch bit số âm trong C là hành vi không xác định (dịch trái) hoặc phụ thuộc cài đặt → dùng `unsigned`.",
        "Java: dùng `>>>` khi cần dịch phải logic; `>>` sẽ kéo theo bit dấu.",
        "Python: không tràn số nên phải tự dùng mặt nạ 32 bit.",
        "Quên rằng `1 << 31` tràn `int` → dùng `1L << k` / `1LL << k` khi k ≥ 31.",
      ] },
      { type: "info", kind: "important", title: "Tóm tắt", text: "Năm công cụ: **XOR (triệt tiêu)**, **n & (n−1)**, **dịch bit để duyệt/đặt bit**, **XOR + carry để cộng**, **bitmask cho tập con**. Gặp đề O(1) space liên quan tính chẵn lẻ hoặc nhị phân → thử bit trước." },
    ],
  },
];
