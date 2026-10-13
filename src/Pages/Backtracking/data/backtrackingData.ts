export type CodeLanguage = "C" | "Java" | "Python";
export type CodeExamples = Partial<Record<CodeLanguage, string>>;

export const toc = [
  { id: "introduction", label: "Backtracking là gì?" },
  { id: "recursion-review", label: "1. Ôn lại Recursion" },
  { id: "call-stack", label: "2. Call Stack" },
  { id: "backtracking-definition", label: "3. Backtracking là gì?" },
  { id: "choice", label: "4. Choice" },
  { id: "state", label: "5. State" },
  { id: "undo", label: "6. Undo" },
  { id: "dfs-vs-backtracking", label: "7. DFS và Backtracking" },
  { id: "template", label: "8. Template Backtracking" },
  { id: "recognize-basic", label: "9. Khi nào dùng Backtracking?" },
  { id: "complexity-basic", label: "10. Complexity" },
  { id: "fibonacci-problem", label: "11. Fibonacci" },
  { id: "fibonacci-thinking", label: "12. Tư duy Fibonacci" },
  { id: "fibonacci-tree", label: "13. Recursion Tree Fibonacci" },
  { id: "fibonacci-dry-run", label: "14. Dry Run Fibonacci" },
  { id: "fibonacci-code", label: "15. Code Fibonacci" },
  { id: "fibonacci-optimization", label: "16. Tối ưu Fibonacci" },
  { id: "subsets-problem", label: "17. Subsets" },
  { id: "subsets-observation", label: "18. Quan sát bài toán" },
  { id: "subsets-choice", label: "19. Choose / Not Choose" },
  { id: "subsets-state", label: "20. State của Backtracking" },
  { id: "subsets-tree", label: "21. Cây quyết định" },
  { id: "subsets-dry-run", label: "22. Dry Run Subsets" },
  { id: "subsets-code", label: "23. Code Subsets" },
  { id: "subsets-complexity", label: "24. Complexity Subsets" },
  { id: "edge-cases", label: "25. Edge Cases" },
  { id: "common-mistakes", label: "26. Lỗi thường gặp" },
  { id: "recognition", label: "27. Nhận diện Pattern" },
  { id: "summary", label: "28. Tổng kết" },
] as const;

export const countdownExamples: CodeExamples = {
  C: `void countdown(int n) {
    if (n == 0) {
        return;
    }

    printf("%d ", n);
    countdown(n - 1);
}`,
  Java: `static void countdown(int n) {
    if (n == 0) {
        return;
    }

    System.out.print(n + " ");
    countdown(n - 1);
}`,
  Python: `def countdown(n):
    if n == 0:
        return

    print(n, end=" ")
    countdown(n - 1)`,
};

export const fibonacciTraceCode = `fib(5)
├── fib(4)
│   ├── fib(3)
│   │   ├── fib(2)
│   │   │   ├── fib(1)
│   │   │   └── fib(0)
│   │   └── fib(1)
│   └── fib(2)
│       ├── fib(1)
│       └── fib(0)
└── fib(3)
    ├── fib(2)
    │   ├── fib(1)
    │   └── fib(0)
    └── fib(1)`;

export const fibonacciRecursiveExamples: CodeExamples = {
  C: `int fib(int n) {
    if (n <= 1) {
        return n;
    }

    return fib(n - 1) + fib(n - 2);
}`,
  Java: `int fib(int n) {
    if (n <= 1) {
        return n;
    }

    return fib(n - 1) + fib(n - 2);
}`,
  Python: `def fib(n):
    if n <= 1:
        return n

    return fib(n - 1) + fib(n - 2)`,
};

export const fibonacciMemoExamples: CodeExamples = {
  C: `long long fibMemo(int n, long long *memo) {
    if (n <= 1) {
        return n;
    }

    if (memo[n] != -1) {
        return memo[n];
    }

    memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
    return memo[n];
}

/* Khởi tạo memo[0..n] = -1 trước khi gọi hàm. */`,
  Java: `import java.util.Arrays;

long fib(int n) {
    long[] memo = new long[n + 1];
    Arrays.fill(memo, -1L);
    return fibMemo(n, memo);
}

long fibMemo(int n, long[] memo) {
    if (n <= 1) return n;
    if (memo[n] != -1L) return memo[n];

    memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
    return memo[n];
}`,
  Python: `def fib_memo(n, memo=None):
    if memo is None:
        memo = [-1] * (n + 1)

    if n <= 1:
        return n
    if memo[n] != -1:
        return memo[n]

    memo[n] = fib_memo(n - 1, memo) + fib_memo(n - 2, memo)
    return memo[n]`,
};

export const fibonacciIterativeExamples: CodeExamples = {
  C: `long long fib(int n) {
    if (n <= 1) {
        return n;
    }

    long long prev2 = 0;
    long long prev1 = 1;

    for (int i = 2; i <= n; i++) {
        long long current = prev1 + prev2;
        prev2 = prev1;
        prev1 = current;
    }

    return prev1;
}`,
  Java: `long fib(int n) {
    if (n <= 1) return n;

    long prev2 = 0;
    long prev1 = 1;

    for (int i = 2; i <= n; i++) {
        long current = prev1 + prev2;
        prev2 = prev1;
        prev1 = current;
    }

    return prev1;
}`,
  Python: `def fib(n):
    if n <= 1:
        return n

    prev2, prev1 = 0, 1
    for _ in range(2, n + 1):
        prev2, prev1 = prev1, prev1 + prev2

    return prev1`,
};

export const subsetsDecisionCode = `def backtrack(index):
    if index == len(nums):
        result.append(path.copy())
        return

    # Không chọn nums[index]
    backtrack(index + 1)

    # Chọn nums[index]
    path.append(nums[index])
    backtrack(index + 1)
    path.pop()  # Undo`;

export const validSubsetCode = `nums = [1, 2, 3]

[]
[1]
[2]
[3]
[1, 2]
[1, 3]
[2, 3]
[1, 2, 3]`;

export const emptySubsetCode = `nums = []

Output:
[[]]`;

export const subsetsExamples: CodeExamples = {
  C: `#include <stdlib.h>

static void backtrack(
    int *nums, int numsSize, int start,
    int *path, int pathSize,
    int **result, int *returnSize, int *returnColumnSizes
) {
    /* Copy subset hiện tại vào kết quả. */
    int *subset = malloc(sizeof(int) * (pathSize > 0 ? pathSize : 1));
    for (int j = 0; j < pathSize; j++) {
        subset[j] = path[j];
    }
    result[*returnSize] = subset;
    returnColumnSizes[*returnSize] = pathSize;
    (*returnSize)++;

    for (int i = start; i < numsSize; i++) {
        path[pathSize++] = nums[i];     /* Choose */
        backtrack(nums, numsSize, i + 1, path, pathSize,
                  result, returnSize, returnColumnSizes);
        pathSize--;                    /* Undo */
    }
}

int **subsets(int *nums, int numsSize, int *returnSize,
              int **returnColumnSizes) {
    int total = 1 << numsSize;          /* 2^n subsets */
    int **result = malloc(sizeof(int *) * total);
    *returnColumnSizes = malloc(sizeof(int) * total);
    int *path = malloc(sizeof(int) * (numsSize > 0 ? numsSize : 1));
    *returnSize = 0;

    backtrack(nums, numsSize, 0, path, 0,
              result, returnSize, *returnColumnSizes);

    free(path);
    return result; /* Caller giải phóng từng subset, result và columnSizes. */
}`,
  Java: `import java.util.ArrayList;
import java.util.List;

class Solution {
    public List<List<Integer>> subsets(int[] nums) {
        List<List<Integer>> result = new ArrayList<>();
        backtrack(nums, 0, new ArrayList<>(), result);
        return result;
    }

    private void backtrack(
        int[] nums, int start, List<Integer> path,
        List<List<Integer>> result
    ) {
        result.add(new ArrayList<>(path)); // Lưu bản sao của state hiện tại.

        for (int i = start; i < nums.length; i++) {
            path.add(nums[i]);
            backtrack(nums, i + 1, path, result);
            path.remove(path.size() - 1); // Undo
        }
    }
}`,
  Python: `class Solution:
    def subsets(self, nums: list[int]) -> list[list[int]]:
        result = []
        path = []

        def backtrack(start: int) -> None:
            result.append(path.copy())  # Lưu bản sao của state hiện tại.

            for i in range(start, len(nums)):
                path.append(nums[i])
                backtrack(i + 1)
                path.pop()  # Undo

        backtrack(0)
        return result`,
};
