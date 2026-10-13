export const nodeCode = `struct TreeNode {
    int val;
    struct TreeNode* left;
    struct TreeNode* right;
};`;

export const createNodeCode = `struct TreeNode* createNode(int value) {
    struct TreeNode* node = malloc(sizeof(struct TreeNode));

    node->val = value;
    node->left = NULL;
    node->right = NULL;

    return node;
}`;

export const createTreeCode = `struct TreeNode* root = createNode(4);

root->left = createNode(2);
root->right = createNode(7);

root->left->left = createNode(1);
root->left->right = createNode(3);

root->right->left = createNode(6);
root->right->right = createNode(9);`;

export const traversalCode = `void preorder(struct TreeNode* root) {
    if (root == NULL) {
        return;
    }

    printf("%d ", root->val);

    preorder(root->left);
    preorder(root->right);
}`;

export const invertCode = `struct TreeNode* invertTree(struct TreeNode* root) {
    if (root == NULL) {
        return NULL;
    }

    struct TreeNode* temp = root->left;

    root->left = root->right;
    root->right = temp;

    invertTree(root->left);
    invertTree(root->right);

    return root;
}`;

export const maxDepthCode = `int maxDepth(struct TreeNode* root) {
    if (root == NULL) {
        return 0;
    }

    int leftDepth = maxDepth(root->left);
    int rightDepth = maxDepth(root->right);

    if (leftDepth > rightDepth) {
        return leftDepth + 1;
    }

    return rightDepth + 1;
}`;

export const balancedCode = `int checkHeight(struct TreeNode* root) {
    if (root == NULL) {
        return 0;
    }

    int leftHeight = checkHeight(root->left);

    if (leftHeight == -1) {
        return -1;
    }

    int rightHeight = checkHeight(root->right);

    if (rightHeight == -1) {
        return -1;
    }

    if (leftHeight - rightHeight > 1 || rightHeight - leftHeight > 1) {
        return -1;
    }

    return 1 + (leftHeight > rightHeight ? leftHeight : rightHeight);
}

bool isBalanced(struct TreeNode* root) {
    return checkHeight(root) != -1;
}`;
