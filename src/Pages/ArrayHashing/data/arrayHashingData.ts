export const toc = [
  { id: "introduction", label: "Array & Hashing là gì?" },
  { id: "array", label: "1. Array cơ bản" },
  { id: "hashing", label: "2. Hashing là gì?" },
  { id: "hash-set", label: "3. Hash Set" },
  { id: "hash-map", label: "4. Hash Map" },
  { id: "contains-duplicate", label: "5. Contains Duplicate" },
  { id: "valid-anagram", label: "6. Valid Anagram" },
  { id: "two-sum", label: "7. Two Sum" },
  { id: "summary", label: "8. Tổng kết" },
];

export const containsDuplicateBruteForceCode = `#include <stdbool.h>

bool containsDuplicate(int* nums, int numsSize) {
    for (int i = 0; i < numsSize; i++) {
        for (int j = i + 1; j < numsSize; j++) {
            if (nums[i] == nums[j]) {
                return true;
            }
        }
    }

    return false;
}`;

export const containsDuplicateSortCode = `#include <stdbool.h>
#include <stdlib.h>

int compare(const void* a, const void* b) {
    int x = *(const int*)a;
    int y = *(const int*)b;

    if (x < y) return -1;
    if (x > y) return 1;

    return 0;
}

bool containsDuplicate(int* nums, int numsSize) {
    qsort(nums, numsSize, sizeof(int), compare);

    for (int i = 1; i < numsSize; i++) {
        if (nums[i] == nums[i - 1]) {
            return true;
        }
    }

    return false;
}`;

export const containsDuplicateHashCode = `#include <stdbool.h>
#include <stdint.h>
#include <stdlib.h>

typedef struct {
    int key;
    bool used;
} SetEntry;

unsigned int hashInt(int key) {
    uint32_t x = (uint32_t)key;

    x ^= x >> 16;
    x *= 0x7feb352d;
    x ^= x >> 15;
    x *= 0x846ca68b;
    x ^= x >> 16;

    return x;
}

bool setContains(SetEntry* table, int capacity, int key) {
    unsigned int index = hashInt(key) % capacity;

    while (table[index].used) {
        if (table[index].key == key) {
            return true;
        }

        index = (index + 1) % capacity;
    }

    return false;
}

void setInsert(SetEntry* table, int capacity, int key) {
    unsigned int index = hashInt(key) % capacity;

    while (table[index].used) {
        if (table[index].key == key) {
            return;
        }

        index = (index + 1) % capacity;
    }

    table[index].key = key;
    table[index].used = true;
}

bool containsDuplicate(int* nums, int numsSize) {
    int capacity = numsSize * 2 + 1;

    SetEntry* table = calloc(capacity, sizeof(SetEntry));

    if (table == NULL) {
        return false;
    }

    for (int i = 0; i < numsSize; i++) {
        if (setContains(table, capacity, nums[i])) {
            free(table);
            return true;
        }

        setInsert(table, capacity, nums[i]);
    }

    free(table);

    return false;
}`;

export const validAnagramCode = `#include <stdbool.h>
#include <string.h>

bool isAnagram(char* s, char* t) {
    int sLength = strlen(s);
    int tLength = strlen(t);

    if (sLength != tLength) {
        return false;
    }

    int count[26] = {0};

    for (int i = 0; i < sLength; i++) {
        count[s[i] - 'a']++;
        count[t[i] - 'a']--;
    }

    for (int i = 0; i < 26; i++) {
        if (count[i] != 0) {
            return false;
        }
    }

    return true;
}`;

// Bản cũ chỉ là khung và luôn return false; đây là bản sort đầy đủ.
export const validAnagramBruteForceCode = `#include <stdbool.h>
#include <stdlib.h>
#include <string.h>

int compareChar(const void* a, const void* b) {
    return *(const char*)a - *(const char*)b;
}

bool isAnagram(char* s, char* t) {
    int n = strlen(s);

    if (n != (int)strlen(t)) {
        return false;
    }

    // Copy ra để không sửa chuỗi gốc
    char* sortedS = malloc(n + 1);
    char* sortedT = malloc(n + 1);

    if (sortedS == NULL || sortedT == NULL) {
        free(sortedS);
        free(sortedT);
        return false;
    }

    strcpy(sortedS, s);
    strcpy(sortedT, t);

    qsort(sortedS, n, sizeof(char), compareChar);
    qsort(sortedT, n, sizeof(char), compareChar);

    bool result = strcmp(sortedS, sortedT) == 0;

    free(sortedS);
    free(sortedT);

    return result;
}`;

export const twoSumBruteForceCode = `#include <stdlib.h>

int* twoSum(int* nums, int numsSize, int target, int* returnSize) {
    int* result = malloc(2 * sizeof(int));

    *returnSize = 0;

    for (int i = 0; i < numsSize; i++) {
        for (int j = i + 1; j < numsSize; j++) {
            if (nums[i] + nums[j] == target) {
                result[0] = i;
                result[1] = j;

                *returnSize = 2;

                return result;
            }
        }
    }

    return result;
}`;

export const twoSumHashCode = `#include <stdbool.h>
#include <stdint.h>
#include <stdlib.h>

typedef struct {
    int key;
    int value;
    bool used;
} MapEntry;

unsigned int hashInt(int key) {
    uint32_t x = (uint32_t)key;

    x ^= x >> 16;
    x *= 0x7feb352d;
    x ^= x >> 15;
    x *= 0x846ca68b;
    x ^= x >> 16;

    return x;
}

bool mapGet(MapEntry* table, int capacity, int key, int* value) {
    unsigned int index = hashInt(key) % capacity;

    while (table[index].used) {
        if (table[index].key == key) {
            *value = table[index].value;
            return true;
        }

        index = (index + 1) % capacity;
    }

    return false;
}

void mapPut(MapEntry* table, int capacity, int key, int value) {
    unsigned int index = hashInt(key) % capacity;

    while (table[index].used) {
        if (table[index].key == key) {
            table[index].value = value;
            return;
        }

        index = (index + 1) % capacity;
    }

    table[index].key = key;
    table[index].value = value;
    table[index].used = true;
}

int* twoSum(int* nums, int numsSize, int target, int* returnSize) {
    int* result = malloc(2 * sizeof(int));

    *returnSize = 0;

    int capacity = numsSize * 2 + 1;

    MapEntry* table = calloc(capacity, sizeof(MapEntry));

    if (table == NULL) {
        return result;
    }

    for (int i = 0; i < numsSize; i++) {
        int complement = target - nums[i];
        int previousIndex;

        if (mapGet(table, capacity, complement, &previousIndex)) {
            result[0] = previousIndex;
            result[1] = i;

            *returnSize = 2;

            free(table);

            return result;
        }

        mapPut(table, capacity, nums[i], i);
    }

    free(table);

    return result;
}`;

export const arrayAccessCode = `int nums[4] = {3, 4, 5, 6};

printf("%d", nums[2]);

// Output:
// 5`;

export const linearSearchCode = `for (int i = 0; i < n; i++) {
    if (nums[i] == target) {
        return i;
    }
}`;

export type CodeLanguage = "C" | "Java" | "Python";
export type CodeExample = { language: CodeLanguage; code: string };

// So sánh theo nội dung đã chuẩn hóa khoảng trắng để dùng được cả với snippet viết trực tiếp trong JSX.
export function normalizeCode(code: string): string {
  return code.replace(/\s+/g, " ").trim();
}

const languageExamples: Array<[string, CodeExample[]]> = [
  [
    containsDuplicateBruteForceCode,
    [
      { language: "C", code: containsDuplicateBruteForceCode },
      {
        language: "Java",
        code: `class Solution {
    public boolean containsDuplicate(int[] nums) {
        for (int i = 0; i < nums.length; i++) {
            for (int j = i + 1; j < nums.length; j++) {
                if (nums[i] == nums[j]) {
                    return true;
                }
            }
        }
        return false;
    }
}`,
      },
      {
        language: "Python",
        code: `def contains_duplicate(nums):
    for i in range(len(nums)):
        for j in range(i + 1, len(nums)):
            if nums[i] == nums[j]:
                return True
    return False`,
      },
    ],
  ],
  [
    containsDuplicateSortCode,
    [
      { language: "C", code: containsDuplicateSortCode },
      {
        language: "Java",
        code: `import java.util.Arrays;

class Solution {
    public boolean containsDuplicate(int[] nums) {
        Arrays.sort(nums);
        for (int i = 1; i < nums.length; i++) {
            if (nums[i] == nums[i - 1]) {
                return true;
            }
        }
        return false;
    }
}`,
      },
      {
        language: "Python",
        code: `def contains_duplicate(nums):
    nums.sort()
    for i in range(1, len(nums)):
        if nums[i] == nums[i - 1]:
            return True
    return False`,
      },
    ],
  ],
  [
    containsDuplicateHashCode,
    [
      { language: "C", code: containsDuplicateHashCode },
      {
        language: "Java",
        code: `import java.util.HashSet;
import java.util.Set;

class Solution {
    public boolean containsDuplicate(int[] nums) {
        Set<Integer> seen = new HashSet<>();
        for (int num : nums) {
            if (!seen.add(num)) {
                return true;
            }
        }
        return false;
    }
}`,
      },
      {
        language: "Python",
        code: `def contains_duplicate(nums):
    seen = set()
    for num in nums:
        if num in seen:
            return True
        seen.add(num)
    return False`,
      },
    ],
  ],
  [
    validAnagramBruteForceCode,
    [
      { language: "C", code: validAnagramBruteForceCode },
      {
        language: "Java",
        code: `import java.util.Arrays;

class Solution {
    public boolean isAnagram(String s, String t) {
        if (s.length() != t.length()) {
            return false;
        }
        char[] a = s.toCharArray();
        char[] b = t.toCharArray();
        Arrays.sort(a);
        Arrays.sort(b);
        return Arrays.equals(a, b);
    }
}`,
      },
      {
        language: "Python",
        code: `def is_anagram(s, t):
    if len(s) != len(t):
        return False
    return sorted(s) == sorted(t)`,
      },
    ],
  ],
  [
    validAnagramCode,
    [
      { language: "C", code: validAnagramCode },
      {
        language: "Java",
        code: `class Solution {
    public boolean isAnagram(String s, String t) {
        if (s.length() != t.length()) {
            return false;
        }

        int[] count = new int[26];
        for (int i = 0; i < s.length(); i++) {
            count[s.charAt(i) - 'a']++;
            count[t.charAt(i) - 'a']--;
        }

        for (int value : count) {
            if (value != 0) {
                return false;
            }
        }
        return true;
    }
}`,
      },
      {
        language: "Python",
        code: `def is_anagram(s, t):
    if len(s) != len(t):
        return False

    count = [0] * 26
    for i in range(len(s)):
        count[ord(s[i]) - ord('a')] += 1
        count[ord(t[i]) - ord('a')] -= 1

    return all(value == 0 for value in count)`,
      },
    ],
  ],
  [
    twoSumBruteForceCode,
    [
      { language: "C", code: twoSumBruteForceCode },
      {
        language: "Java",
        code: `class Solution {
    public int[] twoSum(int[] nums, int target) {
        for (int i = 0; i < nums.length; i++) {
            for (int j = i + 1; j < nums.length; j++) {
                if (nums[i] + nums[j] == target) {
                    return new int[] { i, j };
                }
            }
        }
        return new int[0];
    }
}`,
      },
      {
        language: "Python",
        code: `def two_sum(nums, target):
    for i in range(len(nums)):
        for j in range(i + 1, len(nums)):
            if nums[i] + nums[j] == target:
                return [i, j]
    return []`,
      },
    ],
  ],
  [
    twoSumHashCode,
    [
      { language: "C", code: twoSumHashCode },
      {
        language: "Java",
        code: `import java.util.HashMap;
import java.util.Map;

class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> seen = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            if (seen.containsKey(complement)) {
                return new int[] { seen.get(complement), i };
            }
            seen.put(nums[i], i);
        }
        return new int[0];
    }
}`,
      },
      {
        language: "Python",
        code: `def two_sum(nums, target):
    seen = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], i]
        seen[num] = i
    return []`,
      },
    ],
  ],
  [
    arrayAccessCode,
    [
      { language: "C", code: arrayAccessCode },
      {
        language: "Java",
        code: `int[] nums = {3, 4, 5, 6};

System.out.println(nums[2]);

// Output:
// 5`,
      },
      {
        language: "Python",
        code: `nums = [3, 4, 5, 6]

print(nums[2])

# Output:
# 5`,
      },
    ],
  ],
  [
    linearSearchCode,
    [
      { language: "C", code: linearSearchCode },
      {
        language: "Java",
        code: `for (int i = 0; i < n; i++) {
    if (nums[i] == target) {
        return i;
    }
}`,
      },
      {
        language: "Python",
        code: `for i in range(n):
    if nums[i] == target:
        return i`,
      },
    ],
  ],
];

export const codeExamplesBySource = new Map<string, CodeExample[]>(
  languageExamples.map(([source, examples]): [string, CodeExample[]] => [
    normalizeCode(source),
    examples,
  ]),
);
