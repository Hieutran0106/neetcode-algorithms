export const toc = [
  { id: "introduction", label: "Linked List là gì?" },
  { id: "array-vs-linked-list", label: "1. Array vs Linked List" },
  { id: "node", label: "2. Node là gì?" },
  { id: "head-null", label: "3. Head và NULL" },
  { id: "pointer", label: "4. Pointer trong Linked List" },
  { id: "create-node", label: "5. Tạo Node bằng C" },
  { id: "traversal", label: "6. Duyệt Linked List" },
  { id: "insert", label: "7. Insert Node" },
  { id: "delete", label: "8. Delete Node" },
  { id: "search", label: "9. Search" },
  { id: "complexity", label: "10. Complexity" },
  { id: "types", label: "11. Các loại Linked List" },
  { id: "mistakes-before-problems", label: "12. Lỗi Pointer thường gặp" },
  { id: "reverse-problem", label: "13. Reverse Linked List" },
  { id: "reverse-thinking", label: "14. Tư duy Reverse" },
  { id: "reverse-dry-run", label: "15. Dry Run Reverse" },
  { id: "reverse-code", label: "16. Code Reverse" },
  { id: "merge-problem", label: "17. Merge Two Sorted Lists" },
  { id: "merge-thinking", label: "18. Tư duy Merge" },
  { id: "merge-dry-run", label: "19. Dry Run Merge" },
  { id: "merge-code", label: "20. Code Merge" },
  { id: "edge-cases", label: "21. Edge Cases" },
  { id: "common-mistakes", label: "22. Lỗi thường gặp" },
  { id: "recognition", label: "23. Nhận diện Pattern" },
  { id: "summary", label: "24. Tổng kết" },
];

export const nodeCode = {
  C: `struct ListNode {
    int val;
    struct ListNode* next;
};`,
  Java: `class ListNode {
    int val;
    ListNode next;

    ListNode(int val) {
        this.val = val;
        this.next = null;
    }
}`,
  Python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next`,
};

export const createNodeCode = {
  C: `struct ListNode* createNode(int value) {
    struct ListNode* node = malloc(sizeof(struct ListNode));
    if (node == NULL) return NULL;
    node->val = value;
    node->next = NULL;
    return node;
}`,
  Java: `static ListNode createNode(int value) {
    return new ListNode(value);
}`,
  Python: `def create_node(value):
    return ListNode(value)`,
};

export const traversalCode = {
  C: `void printList(struct ListNode* head) {
    struct ListNode* current = head;
    while (current != NULL) {
        printf("%d ", current->val);
        current = current->next;
    }
}`,
  Java: `static void printList(ListNode head) {
    ListNode current = head;
    while (current != null) {
        System.out.print(current.val + " ");
        current = current.next;
    }
}`,
  Python: `def print_list(head):
    current = head
    while current is not None:
        print(current.val, end=" ")
        current = current.next`,
};

export const insertHeadCode = {
  C: `struct ListNode* newNode = createNode(10);
newNode->next = head;
head = newNode;`,
  Java: `ListNode newNode = new ListNode(10);
newNode.next = head;
head = newNode;`,
  Python: `new_node = ListNode(10)
new_node.next = head
head = new_node`,
};

export const insertAfterCode = {
  C: `struct ListNode* newNode = createNode(30);
newNode->next = current->next;
current->next = newNode;`,
  Java: `ListNode newNode = new ListNode(30);
newNode.next = current.next;
current.next = newNode;`,
  Python: `new_node = ListNode(30)
new_node.next = current.next
current.next = new_node`,
};

export const deleteCode = {
  C: `struct ListNode* target = current->next;
current->next = target->next;
free(target);`,
  Java: `ListNode target = current.next;
current.next = target.next;
// Java tự quản lý bộ nhớ bằng garbage collector.`,
  Python: `target = current.next
current.next = target.next
# Python tự quản lý bộ nhớ.`,
};

export const searchCode = {
  C: `bool contains(struct ListNode* head, int target) {
    struct ListNode* current = head;
    while (current != NULL) {
        if (current->val == target) return true;
        current = current->next;
    }
    return false;
}`,
  Java: `static boolean contains(ListNode head, int target) {
    ListNode current = head;
    while (current != null) {
        if (current.val == target) return true;
        current = current.next;
    }
    return false;
}`,
  Python: `def contains(head, target):
    current = head
    while current is not None:
        if current.val == target:
            return True
        current = current.next
    return False`,
};

export const reverseCode = {
  C: `struct ListNode* reverseList(struct ListNode* head) {
    struct ListNode* prev = NULL;
    struct ListNode* current = head;
    while (current != NULL) {
        struct ListNode* next = current->next;
        current->next = prev;
        prev = current;
        current = next;
    }
    return prev;
}`,
  Java: `class Solution {
    public ListNode reverseList(ListNode head) {
        ListNode prev = null;
        ListNode current = head;
        while (current != null) {
            ListNode next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        return prev;
    }
}`,
  Python: `class Solution:
    def reverseList(self, head):
        prev = None
        current = head
        while current is not None:
            next_node = current.next
            current.next = prev
            prev = current
            current = next_node
        return prev`,
};

export const reverseDetailedCode = {
  C: `struct ListNode* reverseList(struct ListNode* head) {
    struct ListNode* prev = NULL;
    struct ListNode* current = head;
    while (current != NULL) {
        // 1. Lưu Node kế tiếp
        struct ListNode* next = current->next;
        // 2. Đảo mũi tên
        current->next = prev;
        // 3. Di chuyển prev
        prev = current;
        // 4. Di chuyển current
        current = next;
    }
    return prev;
}`,
  Java: `public ListNode reverseList(ListNode head) {
    ListNode prev = null;
    ListNode current = head;
    while (current != null) {
        ListNode next = current.next; // 1. Lưu Node kế tiếp
        current.next = prev;          // 2. Đảo mũi tên
        prev = current;               // 3. Di chuyển prev
        current = next;               // 4. Di chuyển current
    }
    return prev;
}`,
  Python: `def reverseList(self, head):
    prev = None
    current = head
    while current is not None:
        next_node = current.next  # 1. Lưu Node kế tiếp
        current.next = prev       # 2. Đảo mũi tên
        prev = current            # 3. Di chuyển prev
        current = next_node       # 4. Di chuyển current
    return prev`,
};

export const mergeCode = {
  C: `struct ListNode* mergeTwoLists(struct ListNode* list1, struct ListNode* list2) {
    struct ListNode dummy;
    struct ListNode* tail = &dummy;
    dummy.next = NULL;

    while (list1 != NULL && list2 != NULL) {
        if (list1->val <= list2->val) {
            tail->next = list1;
            list1 = list1->next;
        } else {
            tail->next = list2;
            list2 = list2->next;
        }
        tail = tail->next;
    }

    tail->next = (list1 != NULL) ? list1 : list2;
    return dummy.next;
}`,
  Java: `class Solution {
    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        ListNode dummy = new ListNode(0);
        ListNode tail = dummy;

        while (list1 != null && list2 != null) {
            if (list1.val <= list2.val) {
                tail.next = list1;
                list1 = list1.next;
            } else {
                tail.next = list2;
                list2 = list2.next;
            }
            tail = tail.next;
        }

        tail.next = (list1 != null) ? list1 : list2;
        return dummy.next;
    }
}`,
  Python: `class Solution:
    def mergeTwoLists(self, list1, list2):
        dummy = ListNode(0)
        tail = dummy

        while list1 and list2:
            if list1.val <= list2.val:
                tail.next = list1
                list1 = list1.next
            else:
                tail.next = list2
                list2 = list2.next
            tail = tail.next

        tail.next = list1 if list1 else list2
        return dummy.next`,
};

export const mergeWithoutDummyCode = {
  C: `struct ListNode* mergeTwoLists(struct ListNode* list1, struct ListNode* list2) {
    struct ListNode* head = NULL;
    struct ListNode* tail = NULL;
    while (list1 != NULL && list2 != NULL) {
        struct ListNode* selected;
        if (list1->val <= list2->val) {
            selected = list1;
            list1 = list1->next;
        } else {
            selected = list2;
            list2 = list2->next;
        }
        if (head == NULL) head = tail = selected;
        else { tail->next = selected; tail = selected; }
    }
    if (tail != NULL) tail->next = (list1 != NULL) ? list1 : list2;
    else head = (list1 != NULL) ? list1 : list2;
    return head;
}`,
  Java: `public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
    ListNode head = null, tail = null;
    while (list1 != null && list2 != null) {
        ListNode selected;
        if (list1.val <= list2.val) {
            selected = list1;
            list1 = list1.next;
        } else {
            selected = list2;
            list2 = list2.next;
        }
        if (head == null) head = tail = selected;
        else { tail.next = selected; tail = selected; }
    }
    ListNode rest = (list1 != null) ? list1 : list2;
    if (tail != null) tail.next = rest;
    else head = rest;
    return head;
}`,
  Python: `def mergeTwoLists(self, list1, list2):
    head = tail = None
    while list1 and list2:
        if list1.val <= list2.val:
            selected, list1 = list1, list1.next
        else:
            selected, list2 = list2, list2.next
        if head is None:
            head = tail = selected
        else:
            tail.next = selected
            tail = selected
    rest = list1 if list1 else list2
    if tail is not None:
        tail.next = rest
    else:
        head = rest
    return head`,
};
