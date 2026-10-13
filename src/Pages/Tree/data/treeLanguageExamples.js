// These are additive examples. The original C snippets are kept untouched.
export const nodeJavaCode = `class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;

    TreeNode(int val) {
        this.val = val;
    }
}`;

export const nodePythonCode = `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right`;

export const createNodeJavaCode = `static TreeNode createNode(int value) {
    return new TreeNode(value);
}`;

export const createNodePythonCode = `def create_node(value):
    return TreeNode(value)`;

export const createTreeJavaCode = `TreeNode root = new TreeNode(4);
root.left = new TreeNode(2);
root.right = new TreeNode(7);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(9);`;

export const createTreePythonCode = `root = TreeNode(4)
root.left = TreeNode(2)
root.right = TreeNode(7)
root.left.left = TreeNode(1)
root.left.right = TreeNode(3)
root.right.left = TreeNode(6)
root.right.right = TreeNode(9)`;

export const traversalJavaCode = `static void preorder(TreeNode root) {
    if (root == null) return;

    System.out.print(root.val + " ");
    preorder(root.left);
    preorder(root.right);
}`;

export const traversalPythonCode = `def preorder(root):
    if root is None:
        return

    print(root.val, end=" ")
    preorder(root.left)
    preorder(root.right)`;

export const invertJavaCode = `static TreeNode invertTree(TreeNode root) {
    if (root == null) return null;

    TreeNode temp = root.left;
    root.left = root.right;
    root.right = temp;

    invertTree(root.left);
    invertTree(root.right);
    return root;
}`;

export const invertPythonCode = `def invert_tree(root):
    if root is None:
        return None

    root.left, root.right = root.right, root.left
    invert_tree(root.left)
    invert_tree(root.right)
    return root`;

export const maxDepthJavaCode = `static int maxDepth(TreeNode root) {
    if (root == null) return 0;

    int leftDepth = maxDepth(root.left);
    int rightDepth = maxDepth(root.right);
    return 1 + Math.max(leftDepth, rightDepth);
}`;

export const maxDepthPythonCode = `def max_depth(root):
    if root is None:
        return 0

    left_depth = max_depth(root.left)
    right_depth = max_depth(root.right)
    return 1 + max(left_depth, right_depth)`;

export const balancedJavaCode = `static int checkHeight(TreeNode root) {
    if (root == null) return 0;

    int leftHeight = checkHeight(root.left);
    if (leftHeight == -1) return -1;

    int rightHeight = checkHeight(root.right);
    if (rightHeight == -1) return -1;

    if (Math.abs(leftHeight - rightHeight) > 1) return -1;
    return 1 + Math.max(leftHeight, rightHeight);
}

static boolean isBalanced(TreeNode root) {
    return checkHeight(root) != -1;
}`;

export const balancedPythonCode = `def check_height(root):
    if root is None:
        return 0

    left_height = check_height(root.left)
    if left_height == -1:
        return -1

    right_height = check_height(root.right)
    if right_height == -1:
        return -1

    if abs(left_height - right_height) > 1:
        return -1
    return 1 + max(left_height, right_height)


def is_balanced(root):
    return check_height(root) != -1`;
