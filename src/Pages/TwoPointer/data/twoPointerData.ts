export const toc = [
  {
    id: "introduction",
    label: "Two Pointer là gì?",
  },
  {
    id: "pointer",
    label: "1. Pointer là gì?",
  },
  {
    id: "two-pointers",
    label: "2. Vì sao cần hai Pointer?",
  },
  {
    id: "opposite-direction",
    label: "3. Hai Pointer từ hai đầu",
  },
  {
    id: "same-direction",
    label: "4. Hai Pointer cùng chiều",
  },
  {
    id: "when-to-use",
    label: "5. Khi nào dùng Two Pointer?",
  },
  {
    id: "valid-palindrome",
    label: "6. Valid Palindrome",
  },
  {
    id: "problem",
    label: "7. Hiểu đề bài",
  },
  {
    id: "brute-force",
    label: "8. Cách chưa tối ưu",
  },
  {
    id: "pattern",
    label: "9. Nhận diện Two Pointer",
  },
  {
    id: "dry-run",
    label: "10. Dry Run",
  },
  {
    id: "solution",
    label: "11. Code C",
  },
  {
    id: "explain-code",
    label: "12. Giải thích từng phần",
  },
  {
    id: "edge-cases",
    label: "13. Edge Cases",
  },
  {
    id: "mistakes",
    label: "14. Lỗi thường gặp",
  },
  {
    id: "summary",
    label: "15. Tổng kết",
  },
];

export const pointerBasicCode = {
  C: "int numbers[5] = {10, 20, 30, 40, 50};\r\n\r\nint left = 0;\r\nint right = 4;\r\n\r\n// left đang ở numbers[0]\r\n// right đang ở numbers[4]",
  Java: "int[] numbers = {10, 20, 30, 40, 50};\n\nint left = 0;\nint right = numbers.length - 1;\n\n// left đang ở numbers[0]\n// right đang ở numbers[4]",
  Python: "numbers = [10, 20, 30, 40, 50]\n\nleft = 0\nright = len(numbers) - 1\n\n# left đang ở numbers[0]\n# right đang ở numbers[4]",
} as const;

export const oppositeDirectionCode = {
  C: "int left = 0;\r\nint right = n - 1;\r\n\r\nwhile (left < right) {\r\n\r\n\r\n// xử lý numbers[left]\r\n// xử lý numbers[right]\r\n\r\nleft++;\r\nright--;\r\n\r\n\r\n}",
  Java: "int left = 0;\nint right = n - 1;\n\nwhile (left < right) {\n    // xử lý numbers[left]\n    // xử lý numbers[right]\n\n    left++;\n    right--;\n}",
  Python: "left = 0\nright = n - 1\n\nwhile left < right:\n    # xử lý numbers[left]\n    # xử lý numbers[right]\n\n    left += 1\n    right -= 1",
} as const;

export const sameDirectionCode = {
  C: "int left = 0;\r\n\r\nfor (int right = 0; right < n; right++) {\r\n\r\n\r\n// right khám phá dữ liệu mới\r\n\r\nif (/* điều kiện */) {\r\n    left++;\r\n}\r\n\r\n\r\n}",
  Java: "int left = 0;\n\nfor (int right = 0; right < n; right++) {\n    // right khám phá dữ liệu mới\n\n    if (/* điều kiện */) {\n        left++;\n    }\n}",
  Python: "left = 0\n\nfor right in range(n):\n    # right khám phá dữ liệu mới\n\n    if điều_kiện:\n        left += 1",
} as const;

export const palindromeBruteForceCode = {
  C: "// Ý tưởng:\r\n// 1. Lọc bỏ ký tự không phải chữ/số\r\n// 2. Chuyển tất cả về lowercase\r\n// 3. Tạo chuỗi mới\r\n// 4. So sánh chuỗi với phiên bản đảo ngược\r\n\r\n// Ví dụ:\r\n// \"A man, a plan, a canal: Panama\"\r\n// =>\r\n// \"amanaplanacanalpanama\"",
  Java: "// Ý tưởng:\n// 1. Lọc bỏ ký tự không phải chữ/số\n// 2. Chuyển tất cả về lowercase\n// 3. Tạo chuỗi mới\n// 4. So sánh chuỗi với phiên bản đảo ngược\n\n// Ví dụ:\n// \"A man, a plan, a canal: Panama\"\n// =>\n// \"amanaplanacanalpanama\"",
  Python: "# Ý tưởng:\n# 1. Lọc bỏ ký tự không phải chữ/số\n# 2. Chuyển tất cả về lowercase\n# 3. Tạo chuỗi mới\n# 4. So sánh chuỗi với phiên bản đảo ngược\n\n# Ví dụ:\n# \"A man, a plan, a canal: Panama\"\n# =>\n# \"amanaplanacanalpanama\"",
} as const;

export const palindromeStackCode = {
  C: "// Có thể dùng Stack để:\r\n// 1. Push từng ký tự\r\n// 2. Pop ngược lại\r\n// 3. So sánh với chuỗi ban đầu\r\n\r\n// Nhưng cách này cần thêm bộ nhớ O(n)\r\n// và không cần thiết cho bài toán này.",
  Java: "// Có thể dùng Stack để:\n// 1. Push từng ký tự\n// 2. Pop ngược lại\n// 3. So sánh với chuỗi ban đầu\n\n// Nhưng cách này cần thêm bộ nhớ O(n)\n// và không cần thiết cho bài toán này.",
  Python: "# Có thể dùng Stack để:\n# 1. Push từng ký tự\n# 2. Pop ngược lại\n# 3. So sánh với chuỗi ban đầu\n\n# Nhưng cách này cần thêm bộ nhớ O(n)\n# và không cần thiết cho bài toán này.",
} as const;

export const validPalindromeCode = {
  C: "#include <stdbool.h>\r\n#include <string.h>\r\n\r\nbool isAlphaNumeric(char c) {\r\nreturn\r\n(c >= 'a' && c <= 'z') ||\r\n(c >= 'A' && c <= 'Z') ||\r\n(c >= '0' && c <= '9');\r\n}\r\n\r\nchar toLowerCase(char c) {\r\nif (c >= 'A' && c <= 'Z') {\r\nreturn c - 'A' + 'a';\r\n}\r\n\r\n\r\nreturn c;\r\n\r\n\r\n}\r\n\r\nbool isPalindrome(char* s) {\r\nint left = 0;\r\nint right = strlen(s) - 1;\r\n\r\n\r\nwhile (left < right) {\r\n\r\n    while (\r\n        left < right &&\r\n        !isAlphaNumeric(s[left])\r\n    ) {\r\n        left++;\r\n    }\r\n\r\n    while (\r\n        left < right &&\r\n        !isAlphaNumeric(s[right])\r\n    ) {\r\n        right--;\r\n    }\r\n\r\n    if (\r\n        toLowerCase(s[left]) !=\r\n        toLowerCase(s[right])\r\n    ) {\r\n        return false;\r\n    }\r\n\r\n    left++;\r\n    right--;\r\n}\r\n\r\nreturn true;\r\n\r\n\r\n}",
  Java: "static boolean isAlphaNumeric(char c) {\n    return (c >= 'a' && c <= 'z') ||\n           (c >= 'A' && c <= 'Z') ||\n           (c >= '0' && c <= '9');\n}\n\nstatic char toLowerCaseAscii(char c) {\n    if (c >= 'A' && c <= 'Z') {\n        return (char) (c - 'A' + 'a');\n    }\n    return c;\n}\n\nstatic boolean isPalindrome(String s) {\n    int left = 0;\n    int right = s.length() - 1;\n\n    while (left < right) {\n        while (left < right && !isAlphaNumeric(s.charAt(left))) {\n            left++;\n        }\n        while (left < right && !isAlphaNumeric(s.charAt(right))) {\n            right--;\n        }\n\n        if (toLowerCaseAscii(s.charAt(left)) !=\n            toLowerCaseAscii(s.charAt(right))) {\n            return false;\n        }\n\n        left++;\n        right--;\n    }\n    return true;\n}",
  Python: "def is_alphanumeric(c):\n    return (\"a\" <= c <= \"z\") or (\"A\" <= c <= \"Z\") or (\"0\" <= c <= \"9\")\n\ndef to_lower_case_ascii(c):\n    if \"A\" <= c <= \"Z\":\n        return chr(ord(c) - ord(\"A\") + ord(\"a\"))\n    return c\n\ndef is_palindrome(s):\n    left = 0\n    right = len(s) - 1\n\n    while left < right:\n        while left < right and not is_alphanumeric(s[left]):\n            left += 1\n        while left < right and not is_alphanumeric(s[right]):\n            right -= 1\n\n        if to_lower_case_ascii(s[left]) != to_lower_case_ascii(s[right]):\n            return False\n\n        left += 1\n        right -= 1\n\n    return True",
} as const;

export const simplifiedPalindromeCode = {
  C: "bool isPalindrome(char* s) {\r\nint left = 0;\r\nint right = strlen(s) - 1;\r\n\r\n\r\nwhile (left < right) {\r\n\r\n    // Bỏ qua ký tự không hợp lệ\r\n    while (left < right && !isAlphaNumeric(s[left])) {\r\n        left++;\r\n    }\r\n\r\n    while (left < right && !isAlphaNumeric(s[right])) {\r\n        right--;\r\n    }\r\n\r\n    // So sánh hai đầu\r\n    if (toLowerCase(s[left]) !=\r\n        toLowerCase(s[right])) {\r\n        return false;\r\n    }\r\n\r\n    // Hai ký tự hợp lệ giống nhau\r\n    left++;\r\n    right--;\r\n}\r\n\r\nreturn true;\r\n\r\n\r\n}",
  Java: "static boolean isPalindrome(String s) {\n    int left = 0;\n    int right = s.length() - 1;\n\n    while (left < right) {\n        // Bỏ qua ký tự không hợp lệ\n        while (left < right && !isAlphaNumeric(s.charAt(left))) {\n            left++;\n        }\n        while (left < right && !isAlphaNumeric(s.charAt(right))) {\n            right--;\n        }\n\n        // So sánh hai đầu\n        if (toLowerCaseAscii(s.charAt(left)) !=\n            toLowerCaseAscii(s.charAt(right))) {\n            return false;\n        }\n\n        // Hai ký tự hợp lệ giống nhau\n        left++;\n        right--;\n    }\n    return true;\n}",
  Python: "def is_palindrome(s):\n    left = 0\n    right = len(s) - 1\n\n    while left < right:\n        # Bỏ qua ký tự không hợp lệ\n        while left < right and not is_alphanumeric(s[left]):\n            left += 1\n        while left < right and not is_alphanumeric(s[right]):\n            right -= 1\n\n        # So sánh hai đầu\n        if to_lower_case_ascii(s[left]) != to_lower_case_ascii(s[right]):\n            return False\n\n        # Hai ký tự hợp lệ giống nhau\n        left += 1\n        right -= 1\n\n    return True",
} as const;
