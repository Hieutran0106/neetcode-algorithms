export const trieNodeCode = `#include <stdbool.h>
#include <stdlib.h>

#define ALPHABET_SIZE 26

struct TrieNode {
    struct TrieNode* children[ALPHABET_SIZE];
    bool isEndOfWord;
};`;

export const createNodeCode = `struct TrieNode* createNode() {
    struct TrieNode* node = malloc(sizeof(struct TrieNode));

    if (node == NULL) {
        return NULL;
    }

    for (int i = 0; i < ALPHABET_SIZE; i++) {
        node->children[i] = NULL;
    }

    node->isEndOfWord = false;
    return node;
}`;

export const charIndexCode = `int charToIndex(char c) {
    return c - 'a';
}`;

export const insertCode = `void insert(struct TrieNode* root, const char* word) {
    struct TrieNode* current = root;

    for (int i = 0; word[i] != '\\0'; i++) {
        int index = word[i] - 'a';
        if (current->children[index] == NULL) {
            current->children[index] = createNode();
        }
        current = current->children[index];
    }
    current->isEndOfWord = true;
}`;

export const searchCode = `bool search(struct TrieNode* root, const char* word) {
    struct TrieNode* current = root;

    for (int i = 0; word[i] != '\\0'; i++) {
        int index = word[i] - 'a';
        if (current->children[index] == NULL) {
            return false;
        }
        current = current->children[index];
    }
    return current->isEndOfWord;
}`;

export const startsWithCode = `bool startsWith(struct TrieNode* root, const char* prefix) {
    struct TrieNode* current = root;

    for (int i = 0; prefix[i] != '\\0'; i++) {
        int index = prefix[i] - 'a';
        if (current->children[index] == NULL) {
            return false;
        }
        current = current->children[index];
    }
    return true;
}`;

export const trieFullCode = `struct TrieNode* createNode() {
    struct TrieNode* node = malloc(sizeof(struct TrieNode));
    if (node == NULL) return NULL;
    for (int i = 0; i < 26; i++) node->children[i] = NULL;
    node->isEndOfWord = false;
    return node;
}

int charToIndex(char c) { return c - 'a'; }

void insert(struct TrieNode* root, const char* word) {
    struct TrieNode* current = root;
    for (int i = 0; word[i] != '\\0'; i++) {
        int index = charToIndex(word[i]);
        if (current->children[index] == NULL) current->children[index] = createNode();
        current = current->children[index];
    }
    current->isEndOfWord = true;
}

bool search(struct TrieNode* root, const char* word) {
    struct TrieNode* current = root;
    for (int i = 0; word[i] != '\\0'; i++) {
        int index = charToIndex(word[i]);
        if (current->children[index] == NULL) return false;
        current = current->children[index];
    }
    return current->isEndOfWord;
}

bool startsWith(struct TrieNode* root, const char* prefix) {
    struct TrieNode* current = root;
    for (int i = 0; prefix[i] != '\\0'; i++) {
        int index = charToIndex(prefix[i]);
        if (current->children[index] == NULL) return false;
        current = current->children[index];
    }
    return true;
}`;

export const dictionaryNodeCode = `struct TrieNode {
    struct TrieNode* children[26];
    bool isEndOfWord;
};`;

export const dictionarySearchCode = `bool searchWord(struct TrieNode* node, const char* word, int index) {
    if (node == NULL) return false;
    if (word[index] == '\\0') return node->isEndOfWord;

    char c = word[index];
    if (c != '.') {
        int childIndex = c - 'a';
        return searchWord(node->children[childIndex], word, index + 1);
    }

    for (int i = 0; i < 26; i++) {
        if (node->children[i] != NULL &&
            searchWord(node->children[i], word, index + 1)) {
            return true;
        }
    }
    return false;
}`;

export const dictionaryFullCode = `void addWord(struct TrieNode* root, const char* word) {
    struct TrieNode* current = root;
    for (int i = 0; word[i] != '\\0'; i++) {
        int index = word[i] - 'a';
        if (current->children[index] == NULL) current->children[index] = createNode();
        current = current->children[index];
    }
    current->isEndOfWord = true;
}

bool searchWord(struct TrieNode* node, const char* word, int index) {
    if (node == NULL) return false;
    if (word[index] == '\\0') return node->isEndOfWord;
    char c = word[index];
    if (c != '.') return searchWord(node->children[c - 'a'], word, index + 1);
    for (int i = 0; i < 26; i++) {
        if (node->children[i] != NULL && searchWord(node->children[i], word, index + 1)) return true;
    }
    return false;
}`;

export const wordSearchTrieCode = `struct TrieNode {
    struct TrieNode* children[26];
    char* word;
};`;

export const wordSearchDfsCode = `void dfs(char** board, int rows, int cols, int r, int c,
         struct TrieNode* node, char** result, int* returnSize) {
    if (r < 0 || r >= rows || c < 0 || c >= cols || board[r][c] == '#') return;

    char ch = board[r][c];
    int index = ch - 'a';
    if (node->children[index] == NULL) return;
    struct TrieNode* next = node->children[index];

    if (next->word != NULL) {
        result[*returnSize] = next->word;
        (*returnSize)++;
        next->word = NULL;
    }

    board[r][c] = '#';
    dfs(board, rows, cols, r - 1, c, next, result, returnSize);
    dfs(board, rows, cols, r + 1, c, next, result, returnSize);
    dfs(board, rows, cols, r, c - 1, next, result, returnSize);
    dfs(board, rows, cols, r, c + 1, next, result, returnSize);
    board[r][c] = ch;
}`;

export const wordSearchFullCode = `#include <stdbool.h>
#include <stdlib.h>
#define ALPHABET_SIZE 26

struct TrieNode {
    struct TrieNode* children[ALPHABET_SIZE];
    char* word;
};

struct TrieNode* createTrieNode() {
    struct TrieNode* node = malloc(sizeof(struct TrieNode));
    if (node == NULL) return NULL;
    for (int i = 0; i < ALPHABET_SIZE; i++) node->children[i] = NULL;
    node->word = NULL;
    return node;
}

void insertWord(struct TrieNode* root, char* word) {
    struct TrieNode* current = root;
    for (int i = 0; word[i] != '\\0'; i++) {
        int index = word[i] - 'a';
        if (current->children[index] == NULL) current->children[index] = createTrieNode();
        current = current->children[index];
    }
    current->word = word;
}

void dfs(char** board, int rows, int cols, int r, int c,
         struct TrieNode* node, char** result, int* returnSize) {
    if (r < 0 || r >= rows || c < 0 || c >= cols || board[r][c] == '#') return;
    char ch = board[r][c];
    int index = ch - 'a';
    if (node->children[index] == NULL) return;
    struct TrieNode* next = node->children[index];
    if (next->word != NULL) {
        result[*returnSize] = next->word;
        (*returnSize)++;
        next->word = NULL;
    }
    board[r][c] = '#';
    dfs(board, rows, cols, r - 1, c, next, result, returnSize);
    dfs(board, rows, cols, r + 1, c, next, result, returnSize);
    dfs(board, rows, cols, r, c - 1, next, result, returnSize);
    dfs(board, rows, cols, r, c + 1, next, result, returnSize);
    board[r][c] = ch;
}

char** findWords(char** board, int boardSize, int* boardColSize,
                 char** words, int wordsSize, int* returnSize) {
    struct TrieNode* root = createTrieNode();
    *returnSize = 0;
    for (int i = 0; i < wordsSize; i++) insertWord(root, words[i]);
    char** result = malloc(sizeof(char*) * wordsSize);
    for (int r = 0; r < boardSize; r++) {
        for (int c = 0; c < boardColSize[r]; c++) {
            dfs(board, boardSize, boardColSize[r], r, c, root, result, returnSize);
        }
    }
    return result;
}`;

export const trieNodeJavaCode = `class TrieNode {
    TrieNode[] children = new TrieNode[26];
    boolean isEndOfWord = false;
}`;
export const trieNodePythonCode = `class TrieNode:
    def __init__(self):
        self.children = [None] * 26
        self.is_end_of_word = False`;

export const createNodeJavaCode = `static TrieNode createNode() {
    return new TrieNode();
}`;
export const createNodePythonCode = `def create_node():
    return TrieNode()`;

export const charIndexJavaCode = `static int charToIndex(char c) {
    return c - 'a';
}`;
export const charIndexPythonCode = `def char_to_index(char):
    return ord(char) - ord('a')`;

export const insertJavaCode = `void insert(String word) {
    TrieNode current = root;
    for (int i = 0; i < word.length(); i++) {
        int index = word.charAt(i) - 'a';
        if (current.children[index] == null) current.children[index] = new TrieNode();
        current = current.children[index];
    }
    current.isEndOfWord = true;
}`;
export const insertPythonCode = `def insert(self, word):
    current = self.root
    for char in word:
        index = ord(char) - ord('a')
        if current.children[index] is None:
            current.children[index] = TrieNode()
        current = current.children[index]
    current.is_end_of_word = True`;

export const searchJavaCode = `boolean search(String word) {
    TrieNode current = root;
    for (int i = 0; i < word.length(); i++) {
        int index = word.charAt(i) - 'a';
        if (current.children[index] == null) return false;
        current = current.children[index];
    }
    return current.isEndOfWord;
}`;
export const searchPythonCode = `def search(self, word):
    current = self.root
    for char in word:
        index = ord(char) - ord('a')
        if current.children[index] is None:
            return False
        current = current.children[index]
    return current.is_end_of_word`;

export const startsWithJavaCode = `boolean startsWith(String prefix) {
    TrieNode current = root;
    for (int i = 0; i < prefix.length(); i++) {
        int index = prefix.charAt(i) - 'a';
        if (current.children[index] == null) return false;
        current = current.children[index];
    }
    return true;
}`;
export const startsWithPythonCode = `def starts_with(self, prefix):
    current = self.root
    for char in prefix:
        index = ord(char) - ord('a')
        if current.children[index] is None:
            return False
        current = current.children[index]
    return True`;

export const trieFullJavaCode = `class TrieNode {
    TrieNode[] children = new TrieNode[26];
    boolean isEndOfWord;
}

class Trie {
    private final TrieNode root = new TrieNode();

    public void insert(String word) {
        TrieNode current = root;
        for (char ch : word.toCharArray()) {
            int index = ch - 'a';
            if (current.children[index] == null) current.children[index] = new TrieNode();
            current = current.children[index];
        }
        current.isEndOfWord = true;
    }

    public boolean search(String word) {
        TrieNode current = root;
        for (char ch : word.toCharArray()) {
            int index = ch - 'a';
            if (current.children[index] == null) return false;
            current = current.children[index];
        }
        return current.isEndOfWord;
    }

    public boolean startsWith(String prefix) {
        TrieNode current = root;
        for (char ch : prefix.toCharArray()) {
            int index = ch - 'a';
            if (current.children[index] == null) return false;
            current = current.children[index];
        }
        return true;
    }
}`;
export const trieFullPythonCode = `class TrieNode:
    def __init__(self):
        self.children = [None] * 26
        self.is_end_of_word = False

class Trie:
    def __init__(self):
        self.root = TrieNode()

    def insert(self, word):
        current = self.root
        for char in word:
            index = ord(char) - ord('a')
            if current.children[index] is None:
                current.children[index] = TrieNode()
            current = current.children[index]
        current.is_end_of_word = True

    def search(self, word):
        current = self.root
        for char in word:
            index = ord(char) - ord('a')
            if current.children[index] is None:
                return False
            current = current.children[index]
        return current.is_end_of_word

    def starts_with(self, prefix):
        current = self.root
        for char in prefix:
            index = ord(char) - ord('a')
            if current.children[index] is None:
                return False
            current = current.children[index]
        return True`;

export const dictionaryNodeJavaCode = `class WordNode {
    WordNode[] children = new WordNode[26];
    boolean isEndOfWord;
}`;
export const dictionaryNodePythonCode = `class WordNode:
    def __init__(self):
        self.children = [None] * 26
        self.is_end_of_word = False`;

export const dictionarySearchJavaCode = `boolean searchFrom(WordNode node, String word, int index) {
    if (node == null) return false;
    if (index == word.length()) return node.isEndOfWord;
    char ch = word.charAt(index);
    if (ch != '.') return searchFrom(node.children[ch - 'a'], word, index + 1);
    for (WordNode child : node.children) {
        if (child != null && searchFrom(child, word, index + 1)) return true;
    }
    return false;
}`;
export const dictionarySearchPythonCode = `def search_from(node, word, index):
    if node is None:
        return False
    if index == len(word):
        return node.is_end_of_word
    char = word[index]
    if char != '.':
        return search_from(node.children[ord(char) - ord('a')], word, index + 1)
    for child in node.children:
        if child is not None and search_from(child, word, index + 1):
            return True
    return False`;
export const dictionaryFullJavaCode = `class WordNode {
    WordNode[] children = new WordNode[26];
    boolean isEndOfWord;
}

class WordDictionary {
    private final WordNode root = new WordNode();
    public void addWord(String word) {
        WordNode current = root;
        for (char ch : word.toCharArray()) {
            int index = ch - 'a';
            if (current.children[index] == null) current.children[index] = new WordNode();
            current = current.children[index];
        }
        current.isEndOfWord = true;
    }
    public boolean search(String word) { return searchFrom(root, word, 0); }
    private boolean searchFrom(WordNode node, String word, int index) {
        if (node == null) return false;
        if (index == word.length()) return node.isEndOfWord;
        char ch = word.charAt(index);
        if (ch != '.') return searchFrom(node.children[ch - 'a'], word, index + 1);
        for (WordNode child : node.children) {
            if (child != null && searchFrom(child, word, index + 1)) return true;
        }
        return false;
    }
}`;
export const dictionaryFullPythonCode = `class WordNode:
    def __init__(self):
        self.children = [None] * 26
        self.is_end_of_word = False

class WordDictionary:
    def __init__(self):
        self.root = WordNode()

    def add_word(self, word):
        current = self.root
        for char in word:
            index = ord(char) - ord('a')
            if current.children[index] is None:
                current.children[index] = WordNode()
            current = current.children[index]
        current.is_end_of_word = True

    def search(self, word):
        return self._search_from(self.root, word, 0)

    def _search_from(self, node, word, index):
        if node is None:
            return False
        if index == len(word):
            return node.is_end_of_word
        char = word[index]
        if char != '.':
            return self._search_from(node.children[ord(char) - ord('a')], word, index + 1)
        for child in node.children:
            if child is not None and self._search_from(child, word, index + 1):
                return True
        return False`;

export const wordSearchTrieJavaCode = `class TrieNode {
    TrieNode[] children = new TrieNode[26];
    String word;
}`;
export const wordSearchTriePythonCode = `class TrieNode:
    def __init__(self):
        self.children = [None] * 26
        self.word = None`;

export const wordSearchFullJavaCode = `import java.util.ArrayList;
import java.util.List;

class Solution {
    private static class Node {
        Node[] children = new Node[26];
        String word;
    }
    private final int[][] directions = {{1,0},{-1,0},{0,1},{0,-1}};
    public List<String> findWords(char[][] board, String[] words) {
        Node root = new Node();
        for (String word : words) {
            Node cur = root;
            for (char ch : word.toCharArray()) {
                int idx = ch - 'a';
                if (cur.children[idx] == null) cur.children[idx] = new Node();
                cur = cur.children[idx];
            }
            cur.word = word;
        }
        List<String> result = new ArrayList<>();
        for (int r = 0; r < board.length; r++)
            for (int c = 0; c < board[0].length; c++) dfs(board, r, c, root, result);
        return result;
    }
    private void dfs(char[][] board, int r, int c, Node node, List<String> result) {
        if (r < 0 || c < 0 || r >= board.length || c >= board[0].length || board[r][c] == '#') return;
        int idx = board[r][c] - 'a';
        Node next = node.children[idx];
        if (next == null) return;
        if (next.word != null) { result.add(next.word); next.word = null; }
        char saved = board[r][c]; board[r][c] = '#';
        for (int[] d : directions) dfs(board, r + d[0], c + d[1], next, result);
        board[r][c] = saved;
    }
}`;
export const wordSearchFullPythonCode = `class TrieNode:
    def __init__(self):
        self.children = [None] * 26
        self.word = None

class Solution:
    def findWords(self, board, words):
        root = TrieNode()
        for word in words:
            node = root
            for char in word:
                idx = ord(char) - ord('a')
                if node.children[idx] is None:
                    node.children[idx] = TrieNode()
                node = node.children[idx]
            node.word = word

        result = []
        rows, cols = len(board), len(board[0])
        def dfs(r, c, node):
            if r < 0 or r >= rows or c < 0 or c >= cols or board[r][c] == '#':
                return
            idx = ord(board[r][c]) - ord('a')
            child = node.children[idx]
            if child is None:
                return
            if child.word is not None:
                result.append(child.word)
                child.word = None
            char = board[r][c]
            board[r][c] = '#'
            dfs(r - 1, c, child); dfs(r + 1, c, child)
            dfs(r, c - 1, child); dfs(r, c + 1, child)
            board[r][c] = char

        for r in range(rows):
            for c in range(cols):
                dfs(r, c, root)
        return result`;


export const wordSearchDfsJavaCode = `private void dfs(char[][] board, int r, int c, Node node, List<String> result) {
    if (r < 0 || c < 0 || r >= board.length || c >= board[0].length || board[r][c] == '#') return;
    Node next = node.children[board[r][c] - 'a'];
    if (next == null) return;
    if (next.word != null) { result.add(next.word); next.word = null; }
    char saved = board[r][c];
    board[r][c] = '#';
    dfs(board, r - 1, c, next, result);
    dfs(board, r + 1, c, next, result);
    dfs(board, r, c - 1, next, result);
    dfs(board, r, c + 1, next, result);
    board[r][c] = saved;
}`;

export const wordSearchDfsPythonCode = `def dfs(board, r, c, node, result):
    if r < 0 or r >= len(board) or c < 0 or c >= len(board[0]) or board[r][c] == '#':
        return
    child = node.children[ord(board[r][c]) - ord('a')]
    if child is None:
        return
    if child.word is not None:
        result.append(child.word)
        child.word = None
    char = board[r][c]
    board[r][c] = '#'
    dfs(board, r - 1, c, child, result)
    dfs(board, r + 1, c, child, result)
    dfs(board, r, c - 1, child, result)
    dfs(board, r, c + 1, child, result)
    board[r][c] = char`;
