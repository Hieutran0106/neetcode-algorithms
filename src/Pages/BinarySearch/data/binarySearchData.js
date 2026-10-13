export const toc = [
  { id: "introduction", label: "Binary Search là gì?" },
  { id: "search-basics", label: "1. Tìm kiếm cơ bản" },
  { id: "linear-search", label: "2. Linear Search" },
  { id: "requirement", label: "3. Điều kiện của Binary Search" },
  { id: "core-idea", label: "4. Ý tưởng chia đôi" },
  { id: "search-space", label: "5. Search Space" },
  { id: "left-right-mid", label: "6. Left, Right và Mid" },
  { id: "mid", label: "7. Tính Mid đúng cách" },
  { id: "dry-run-basic", label: "8. Dry Run cơ bản" },
  { id: "problem", label: "9. Bài toán Binary Search" },
  { id: "brute-force", label: "10. Vì sao Linear Search không đủ?" },
  { id: "binary-solution", label: "11. Giải bằng Binary Search" },
  { id: "dry-run-solution", label: "12. Dry Run bài toán" },
  { id: "code", label: "13. Code C / Java / Python" },
  { id: "explain-code", label: "14. Giải thích từng dòng" },
  { id: "complexity", label: "15. Complexity" },
  { id: "edge-cases", label: "16. Edge Cases" },
  { id: "mistakes", label: "17. Lỗi thường gặp" },
  { id: "recognition", label: "18. Nhận diện Binary Search" },
  { id: "summary", label: "19. Tổng kết" },
];

export const linearSearchCode = {
  C: `int linearSearch(int* nums, int numsSize, int target) {
    for (int i = 0; i < numsSize; i++) {
        if (nums[i] == target) return i;
    }
    return -1;
}`,
  Java: `class Solution {
    public int linearSearch(int[] nums, int target) {
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] == target) return i;
        }
        return -1;
    }
}`,
  Python: `def linear_search(nums, target):
    for i, value in enumerate(nums):
        if value == target:
            return i
    return -1`,
};

export const binaryBasicCode = {
  C: `int binarySearch(int* nums, int numsSize, int target) {
    int left = 0;
    int right = numsSize - 1;

    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (nums[mid] == target) return mid;
        if (nums[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}`,
  Java: `class Solution {
    public int search(int[] nums, int target) {
        int left = 0;
        int right = nums.length - 1;

        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (nums[mid] == target) return mid;
            if (nums[mid] < target) left = mid + 1;
            else right = mid - 1;
        }
        return -1;
    }
}`,
  Python: `def search(nums, target):
    left, right = 0, len(nums) - 1

    while left <= right:
        mid = left + (right - left) // 2
        if nums[mid] == target:
            return mid
        if nums[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1`,
};

export const binaryRecursiveCode = {
  C: `int binarySearch(int* nums, int left, int right, int target) {
    if (left > right) return -1;

    int mid = left + (right - left) / 2;
    if (nums[mid] == target) return mid;
    if (nums[mid] < target)
        return binarySearch(nums, mid + 1, right, target);
    return binarySearch(nums, left, mid - 1, target);
}`,
  Java: `int binarySearch(int[] nums, int left, int right, int target) {
    if (left > right) return -1;

    int mid = left + (right - left) / 2;
    if (nums[mid] == target) return mid;
    if (nums[mid] < target)
        return binarySearch(nums, mid + 1, right, target);
    return binarySearch(nums, left, mid - 1, target);
}`,
  Python: `def binary_search(nums, left, right, target):
    if left > right:
        return -1
    mid = left + (right - left) // 2
    if nums[mid] == target:
        return mid
    if nums[mid] < target:
        return binary_search(nums, mid + 1, right, target)
    return binary_search(nums, left, mid - 1, target)`,
};

export const binarySearchProblemCode = `int search(int* nums, int numsSize, int target) {
    // TODO
}`;
export const midCode = `int mid = left + (right - left) / 2;`;
export const binarySearchFinalCode = binaryBasicCode;
