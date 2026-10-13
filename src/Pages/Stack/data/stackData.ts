export const toc = [
  {
    id: "introduction",
    label: "Stack là gì?",
  },
  {
    id: "lifo",
    label: "1. LIFO là gì?",
  },
  {
    id: "operations",
    label: "2. Các thao tác của Stack",
  },
  {
    id: "array-implementation",
    label: "3. Stack bằng Array",
  },
  {
    id: "complexity",
    label: "4. Complexity",
  },
  {
    id: "when-to-use",
    label: "5. Khi nào dùng Stack?",
  },
  {
    id: "valid-parentheses",
    label: "6. Valid Parentheses",
  },
  {
    id: "problem-understanding",
    label: "7. Hiểu đề bài",
  },
  {
    id: "brute-force",
    label: "8. Vì sao cách đơn giản chưa tốt?",
  },
  {
    id: "stack-solution",
    label: "9. Giải bằng Stack",
  },
  {
    id: "dry-run",
    label: "10. Dry Run",
  },
  {
    id: "solution-code",
    label: "11. Code C",
  },
  {
    id: "common-mistakes",
    label: "12. Lỗi thường gặp",
  },
  {
    id: "summary",
    label: "13. Tổng kết",
  },
];

export const stackBasicCode = `#include <stdio.h>

int main() {
    int stack[5];
    int top = -1;

    // Push
    stack[++top] = 10;
    stack[++top] = 20;
    stack[++top] = 30;

    printf("%d\\n", stack[top]);

    return 0;
}`;

export const stackOperationsCode = `#include <stdio.h>

int main() {
    int stack[5];
    int top = -1;

    // PUSH
    stack[++top] = 10;
    stack[++top] = 20;
    stack[++top] = 30;

    // PEEK
    printf("Top: %d\\n", stack[top]);

    // POP
    top--;

    printf("Top after pop: %d\\n", stack[top]);

    return 0;
}`;

export const stackImplementationCode = `#include <stdio.h>
#include <stdbool.h>

#define CAPACITY 5

typedef struct {
    int items[CAPACITY];
    int top;
} Stack;

void initStack(Stack* stack) {
    stack->top = -1;
}

bool isEmpty(Stack* stack) {
    return stack->top == -1;
}

bool isFull(Stack* stack) {
    return stack->top == CAPACITY - 1;
}

void push(Stack* stack, int value) {
    if (isFull(stack)) {
        return;
    }

    stack->items[++stack->top] = value;
}

int pop(Stack* stack) {
    if (isEmpty(stack)) {
        return -1;
    }

    return stack->items[stack->top--];
}

int peek(Stack* stack) {
    if (isEmpty(stack)) {
        return -1;
    }

    return stack->items[stack->top];
}`;

export const validParenthesesSimpleCode = `bool isValid(char* s) {
    while (/* còn cặp ngoặc */) {

        if (/* là () */ ||
            /* là [] */ ||
            /* là {} */) {

            // Xóa cặp ngoặc hợp lệ
        }
    }

    return /* không còn ngoặc */;
}`;

export const validParenthesesStackCode = `#include <stdbool.h>
#include <stdlib.h>
#include <string.h>

bool isValid(char* s) {
    int n = strlen(s);

    char* stack = malloc(n * sizeof(char));

    int top = -1;

    for (int i = 0; i < n; i++) {
        char c = s[i];

        // Nếu là ngoặc mở
        if (c == '(' ||
            c == '[' ||
            c == '{') {

            stack[++top] = c;
        }

        // Nếu là ngoặc đóng
        else {
            // Không có ngoặc mở để ghép
            if (top == -1) {
                free(stack);
                return false;
            }

            char open = stack[top--];

            if ((c == ')' && open != '(') ||
                (c == ']' && open != '[') ||
                (c == '}' && open != '{')) {

                free(stack);
                return false;
            }
        }
    }

    bool result = (top == -1);

    free(stack);

    return result;
}`;

export const validParenthesesFixedStackCode = `#include <stdbool.h>
#include <stdlib.h>
#include <string.h>

bool isValid(char* s) {
    int n = strlen(s);

    char* stack = malloc(n * sizeof(char));
    int top = -1;

    for (int i = 0; i < n; i++) {
        char c = s[i];

        if (c == '(' ||
            c == '[' ||
            c == '{') {

            stack[++top] = c;
            continue;
        }

        if (top == -1) {
            free(stack);
            return false;
        }

        char open = stack[top--];

        if (c == ')' && open != '(') {
            free(stack);
            return false;
        }

        if (c == ']' && open != '[') {
            free(stack);
            return false;
        }

        if (c == '}' && open != '{') {
            free(stack);
            return false;
        }
    }

    bool valid = (top == -1);

    free(stack);

    return valid;
}`;

export type CodeLanguage = "C" | "Java" | "Python";
export type CodeExample = { language: CodeLanguage; code: string };

export function normalizeCode(code: string): string {
  return code.replace(/\s+/g, " ").trim();
}

const pushSnippet = "stack[++top] = value;";
const popSnippet = "int value = stack[top--];";
const peekSnippet = "int value = stack[top];";

export const codeExamplesBySource = new Map<string, CodeExample[]>([
  [
    normalizeCode(stackBasicCode),
    [
      { language: "C", code: stackBasicCode },
      {
        language: "Java",
        code: `public class Main {
    public static void main(String[] args) {
        int[] stack = new int[5];
        int top = -1;

        // Push
        stack[++top] = 10;
        stack[++top] = 20;
        stack[++top] = 30;

        System.out.println(stack[top]);
    }
}`,
      },
      {
        language: "Python",
        code: `stack = [None] * 5
top = -1

# Push
top += 1
stack[top] = 10
top += 1
stack[top] = 20
top += 1
stack[top] = 30

print(stack[top])`,
      },
    ],
  ],
  [
    normalizeCode(stackOperationsCode),
    [
      { language: "C", code: stackOperationsCode },
      {
        language: "Java",
        code: `public class Main {
    public static void main(String[] args) {
        int[] stack = new int[5];
        int top = -1;

        // PUSH
        stack[++top] = 10;
        stack[++top] = 20;
        stack[++top] = 30;

        // PEEK
        System.out.println("Top: " + stack[top]);

        // POP
        top--;

        System.out.println("Top after pop: " + stack[top]);
    }
}`,
      },
      {
        language: "Python",
        code: `stack = [None] * 5
top = -1

# PUSH
top += 1
stack[top] = 10
top += 1
stack[top] = 20
top += 1
stack[top] = 30

# PEEK
print(f"Top: {stack[top]}")

# POP
top -= 1

print(f"Top after pop: {stack[top]}")`,
      },
    ],
  ],
  [
    normalizeCode(stackImplementationCode),
    [
      { language: "C", code: stackImplementationCode },
      {
        language: "Java",
        code: `class Stack {
    private static final int CAPACITY = 5;
    private final int[] items = new int[CAPACITY];
    private int top = -1;

    boolean isEmpty() {
        return top == -1;
    }

    boolean isFull() {
        return top == CAPACITY - 1;
    }

    void push(int value) {
        if (isFull()) return;
        items[++top] = value;
    }

    int pop() {
        if (isEmpty()) return -1;
        return items[top--];
    }

    int peek() {
        if (isEmpty()) return -1;
        return items[top];
    }
}`,
      },
      {
        language: "Python",
        code: `class Stack:
    CAPACITY = 5

    def __init__(self):
        self.items = [0] * self.CAPACITY
        self.top = -1

    def is_empty(self):
        return self.top == -1

    def is_full(self):
        return self.top == self.CAPACITY - 1

    def push(self, value):
        if self.is_full():
            return
        self.top += 1
        self.items[self.top] = value

    def pop(self):
        if self.is_empty():
            return -1
        value = self.items[self.top]
        self.top -= 1
        return value

    def peek(self):
        if self.is_empty():
            return -1
        return self.items[self.top]`,
      },
    ],
  ],
  [
    normalizeCode(pushSnippet),
    [
      { language: "C", code: pushSnippet },
      { language: "Java", code: pushSnippet },
      { language: "Python", code: "stack.append(value)" },
    ],
  ],
  [
    normalizeCode(popSnippet),
    [
      { language: "C", code: popSnippet },
      { language: "Java", code: popSnippet },
      { language: "Python", code: "value = stack.pop()" },
    ],
  ],
  [
    normalizeCode(peekSnippet),
    [
      { language: "C", code: peekSnippet },
      { language: "Java", code: peekSnippet },
      { language: "Python", code: "value = stack[-1]" },
    ],
  ],
  [
    normalizeCode(validParenthesesSimpleCode),
    [
      { language: "C", code: validParenthesesSimpleCode },
      {
        language: "Java",
        code: `boolean isValid(String s) {
    while (s.contains("()") || s.contains("[]") || s.contains("{}")) {
        s = s.replace("()", "").replace("[]", "").replace("{}", "");
    }
    return s.isEmpty();
}`,
      },
      {
        language: "Python",
        code: `def is_valid(s):
    while "()" in s or "[]" in s or "{}" in s:
        s = s.replace("()", "").replace("[]", "").replace("{}", "")
    return s == ""`,
      },
    ],
  ],
  [
    normalizeCode(validParenthesesStackCode),
    [
      { language: "C", code: validParenthesesStackCode },
      {
        language: "Java",
        code: `public static boolean isValid(String s) {
    int n = s.length();
    char[] stack = new char[n];
    int top = -1;

    for (int i = 0; i < n; i++) {
        char c = s.charAt(i);

        if (c == '(' || c == '[' || c == '{') {
            stack[++top] = c;
        } else {
            if (top == -1) return false;

            char open = stack[top--];
            if ((c == ')' && open != '(') ||
                (c == ']' && open != '[') ||
                (c == '}' && open != '{')) {
                return false;
            }
        }
    }

    return top == -1;
}`,
      },
      {
        language: "Python",
        code: `def is_valid(s):
    stack = []

    for char in s:
        if char in "([{":
            stack.append(char)
        else:
            if not stack:
                return False

            opening = stack.pop()
            if ((char == ")" and opening != "(") or
                (char == "]" and opening != "[") or
                (char == "}" and opening != "{")):
                return False

    return len(stack) == 0`,
      },
    ],
  ],
  [
    normalizeCode(validParenthesesFixedStackCode),
    [
      { language: "C", code: validParenthesesFixedStackCode },
      {
        language: "Java",
        code: `public static boolean isValid(String s) {
    char[] stack = new char[s.length()];
    int top = -1;

    for (int i = 0; i < s.length(); i++) {
        char c = s.charAt(i);

        if (c == '(' || c == '[' || c == '{') {
            stack[++top] = c;
            continue;
        }

        if (top == -1) return false;
        char open = stack[top--];

        if (c == ')' && open != '(') return false;
        if (c == ']' && open != '[') return false;
        if (c == '}' && open != '{') return false;
    }

    return top == -1;
}`,
      },
      {
        language: "Python",
        code: `def is_valid(s):
    stack = []

    for char in s:
        if char in "([{":
            stack.append(char)
            continue

        if not stack:
            return False

        opening = stack.pop()
        if char == ")" and opening != "(":
            return False
        if char == "]" and opening != "[":
            return False
        if char == "}" and opening != "{":
            return False

    return len(stack) == 0`,
      },
    ],
  ],
]);
