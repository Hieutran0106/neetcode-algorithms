export const sections = [
  {
    id: "introduction",
    title: "Graph là gì?",
    description: "Tập đỉnh (vertex) và cạnh (edge) — mô hình cho mạng xã hội, bản đồ, lưới ô vuông, quan hệ phụ thuộc...",
    blocks: [
      { type: "p", text: "Phần lớn bài Graph trên NeetCode có thể giải bằng **ba công cụ**: **DFS**, **BFS** và **Union-Find** (cộng thêm **Topological Sort** cho đồ thị phụ thuộc). Việc quan trọng nhất là *nhìn ra đồ thị ẩn* trong đề bài." },
      { type: "table", head: ["Thuật ngữ", "Ý nghĩa"], rows: [
        ["Directed / Undirected", "Cạnh có hướng (A→B) / không hướng (A—B)"],
        ["Weighted", "Cạnh có trọng số (chương Advanced Graphs)"],
        ["Connected component", "Nhóm đỉnh nối được với nhau"],
        ["Cycle", "Đường đi quay lại đỉnh xuất phát"],
        ["DAG", "Đồ thị có hướng không có chu trình"],
      ] },
      { type: "info", kind: "tip", title: "Grid cũng là Graph", text: "Mỗi ô `(r, c)` là một đỉnh, 4 hướng lân cận là các cạnh. Rất nhiều bài \"Number of Islands\" thực chất là **đếm connected component**." },
    ],
  },
  {
    id: "representation",
    title: "Biểu diễn đồ thị",
    blocks: [
      { type: "table", head: ["Cách", "Bộ nhớ", "Kiểm tra cạnh u–v", "Duyệt hàng xóm của u"], rows: [
        ["Adjacency Matrix", "O(V²)", "O(1)", "O(V)"],
        ["Adjacency List", "O(V + E)", "O(deg u)", "O(deg u)"],
        ["Edge List", "O(E)", "O(E)", "O(E)"],
      ] },
      { type: "code", label: "Từ danh sách cạnh → adjacency list", examples: {
        C: "/* Mảng liên kết (forward star) – gọn và nhanh */\nint head[N], nxt[2 * M], to[2 * M], cnt = 0;\nmemset(head, -1, sizeof(head));\nvoid addEdge(int u, int v) {\n    to[cnt] = v; nxt[cnt] = head[u]; head[u] = cnt++;\n}\n/* Duyệt: for (int e = head[u]; e != -1; e = nxt[e]) { int v = to[e]; ... } */",
        Java: "List<List<Integer>> adj = new ArrayList<>();\nfor (int i = 0; i < n; i++) adj.add(new ArrayList<>());\nfor (int[] e : edges) {\n    adj.get(e[0]).add(e[1]);\n    adj.get(e[1]).add(e[0]);   // bỏ dòng này nếu có hướng\n}",
        Python: "adj = defaultdict(list)\nfor u, v in edges:\n    adj[u].append(v)\n    adj[v].append(u)          # bỏ dòng này nếu có hướng",
      } },
    ],
  },
  {
    id: "dfs-grid",
    title: "Pattern 1: DFS trên Grid (Islands)",
    blocks: [
      { type: "problem", title: "Number of Islands", difficulty: "Medium", description: "Đếm số hòn đảo ('1' = đất) trong lưới.", link: "https://neetcode.io/problems/count-number-of-islands" },
      { type: "steps", items: [
        { title: "Duyệt mọi ô", text: "Gặp ô đất chưa thăm → tìm thấy **một đảo mới**, tăng đếm." },
        { title: "DFS lan ra 4 hướng", text: "Đánh dấu mọi ô đất cùng đảo là đã thăm (sửa thẳng vào grid, hoặc dùng mảng visited)." },
        { title: "Điều kiện dừng", text: "Ra ngoài biên, là nước, hoặc đã thăm." },
      ] },
      { type: "code", examples: {
        C: "static void dfs(char **g, int R, int C, int r, int c) {\n    if (r < 0 || c < 0 || r >= R || c >= C || g[r][c] != '1') return;\n    g[r][c] = '0';                       /* đánh dấu đã thăm */\n    dfs(g, R, C, r + 1, c); dfs(g, R, C, r - 1, c);\n    dfs(g, R, C, r, c + 1); dfs(g, R, C, r, c - 1);\n}\nint numIslands(char **g, int R, int *colSize) {\n    int C = colSize[0], count = 0;\n    for (int r = 0; r < R; r++)\n        for (int c = 0; c < C; c++)\n            if (g[r][c] == '1') { count++; dfs(g, R, C, r, c); }\n    return count;\n}",
        Java: "public int numIslands(char[][] g) {\n    int count = 0;\n    for (int r = 0; r < g.length; r++)\n        for (int c = 0; c < g[0].length; c++)\n            if (g[r][c] == '1') { count++; dfs(g, r, c); }\n    return count;\n}\nprivate void dfs(char[][] g, int r, int c) {\n    if (r < 0 || c < 0 || r >= g.length || c >= g[0].length || g[r][c] != '1') return;\n    g[r][c] = '0';\n    dfs(g, r + 1, c); dfs(g, r - 1, c); dfs(g, r, c + 1); dfs(g, r, c - 1);\n}",
        Python: "def numIslands(grid):\n    R, C = len(grid), len(grid[0])\n    def dfs(r, c):\n        if r < 0 or c < 0 or r >= R or c >= C or grid[r][c] != '1':\n            return\n        grid[r][c] = '0'\n        dfs(r + 1, c); dfs(r - 1, c); dfs(r, c + 1); dfs(r, c - 1)\n    count = 0\n    for r in range(R):\n        for c in range(C):\n            if grid[r][c] == '1':\n                count += 1\n                dfs(r, c)\n    return count",
      } },
      { type: "complexity", time: "O(R·C)", space: "O(R·C)", spaceDescription: "Độ sâu đệ quy tối đa khi cả lưới là đất." },
      { type: "table", head: ["Biến thể", "Thay đổi so với Number of Islands"], rows: [
        ["Max Area of Island", "`dfs` trả về diện tích = 1 + tổng 4 hướng; lấy max."],
        ["Pacific Atlantic Water Flow", "DFS **ngược** từ biên Pacific và biên Atlantic (đi lên ô cao hơn hoặc bằng); đáp án là giao hai tập."],
        ["Surrounded Regions", "DFS từ các 'O' ở **biên** để đánh dấu an toàn; 'O' còn lại bị lật thành 'X'."],
      ] },
    ],
  },
  {
    id: "dfs-graph",
    title: "Pattern 2: DFS trên đồ thị & Clone Graph",
    blocks: [
      { type: "problem", title: "Clone Graph", difficulty: "Medium", description: "Sao chép sâu một đồ thị vô hướng liên thông.", link: "https://neetcode.io/problems/clone-graph" },
      { type: "p", text: "Dùng **hash map** `old → new` vừa làm `visited` vừa để tra cứu bản sao. Gặp lại một nút đã sao chép thì trả về bản sao có sẵn để không lặp vô hạn trên chu trình." },
      { type: "code", examples: {
        Java: "public Node cloneGraph(Node node) {\n    return node == null ? null : dfs(node, new HashMap<>());\n}\nprivate Node dfs(Node n, Map<Node, Node> copy) {\n    if (copy.containsKey(n)) return copy.get(n);\n    Node c = new Node(n.val);\n    copy.put(n, c);\n    for (Node nb : n.neighbors) c.neighbors.add(dfs(nb, copy));\n    return c;\n}",
        Python: "def cloneGraph(node):\n    copy = {}\n    def dfs(n):\n        if n in copy:\n            return copy[n]\n        c = Node(n.val)\n        copy[n] = c\n        for nb in n.neighbors:\n            c.neighbors.append(dfs(nb))\n        return c\n    return dfs(node) if node else None",
        C: "/* Cài đặt tương tự: mảng copy[101] (val ≤ 100) thay cho hash map.\n   Nếu copy[n->val] != NULL thì trả về luôn, ngược lại malloc nút mới,\n   lưu vào copy[], rồi đệ quy cho từng neighbor. */",
      } },
      { type: "complexity", time: "O(V + E)", space: "O(V)" },
    ],
  },
  {
    id: "bfs",
    title: "Pattern 3: BFS & Multi-source BFS",
    description: "BFS tìm đường đi ngắn nhất trên đồ thị không trọng số.",
    blocks: [
      { type: "formula", text: "BFS theo tầng  ⇒  tầng k = khoảng cách ngắn nhất k cạnh" },
      { type: "problem", title: "Rotting Oranges", difficulty: "Medium", description: "Mỗi phút cam thối làm thối các cam tươi kề bên. Sau bao nhiêu phút hết cam tươi?", link: "https://neetcode.io/problems/rotting-fruit" },
      { type: "p", text: "Đây là **multi-source BFS**: nhét **tất cả** cam thối ban đầu vào queue cùng lúc (tầng 0), rồi lan ra theo từng tầng. Số tầng = số phút." },
      { type: "code", examples: {
        Java: "public int orangesRotting(int[][] g) {\n    int R = g.length, C = g[0].length, fresh = 0, minutes = 0;\n    Queue<int[]> q = new LinkedList<>();\n    for (int r = 0; r < R; r++)\n        for (int c = 0; c < C; c++) {\n            if (g[r][c] == 2) q.offer(new int[]{r, c});\n            else if (g[r][c] == 1) fresh++;\n        }\n    int[][] dirs = {{1,0},{-1,0},{0,1},{0,-1}};\n    while (!q.isEmpty() && fresh > 0) {\n        for (int sz = q.size(); sz > 0; sz--) {      // một tầng = một phút\n            int[] cur = q.poll();\n            for (int[] d : dirs) {\n                int nr = cur[0] + d[0], nc = cur[1] + d[1];\n                if (nr >= 0 && nc >= 0 && nr < R && nc < C && g[nr][nc] == 1) {\n                    g[nr][nc] = 2; fresh--;\n                    q.offer(new int[]{nr, nc});\n                }\n            }\n        }\n        minutes++;\n    }\n    return fresh == 0 ? minutes : -1;\n}",
        Python: "def orangesRotting(grid):\n    R, C = len(grid), len(grid[0])\n    q, fresh = deque(), 0\n    for r in range(R):\n        for c in range(C):\n            if grid[r][c] == 2: q.append((r, c))\n            elif grid[r][c] == 1: fresh += 1\n    minutes = 0\n    while q and fresh:\n        for _ in range(len(q)):            # một tầng = một phút\n            r, c = q.popleft()\n            for dr, dc in ((1,0),(-1,0),(0,1),(0,-1)):\n                nr, nc = r + dr, c + dc\n                if 0 <= nr < R and 0 <= nc < C and grid[nr][nc] == 1:\n                    grid[nr][nc] = 2\n                    fresh -= 1\n                    q.append((nr, nc))\n        minutes += 1\n    return minutes if fresh == 0 else -1",
        C: "/* Dùng mảng làm queue: qr[], qc[] kích thước R*C với head/tail.\n   Xử lý theo tầng: size = tail - head; lặp size lần rồi minutes++.\n   Logic y hệt bản Java/Python. */",
      } },
      { type: "complexity", time: "O(R·C)", space: "O(R·C)" },
      { type: "table", head: ["Bài", "Điểm khởi đầu BFS"], rows: [
        ["Walls and Gates", "Tất cả **cổng** (0) cùng lúc; gán khoảng cách cho phòng trống"],
        ["Rotting Oranges", "Tất cả cam thối"],
        ["Word Ladder", "Đỉnh = từ; cạnh = hai từ khác nhau đúng 1 ký tự; BFS từ `beginWord`"],
      ] },
    ],
  },
  {
    id: "topological",
    title: "Pattern 4: Topological Sort (Course Schedule)",
    description: "Sắp xếp đỉnh của DAG sao cho mọi cạnh u→v thì u đứng trước v.",
    blocks: [
      { type: "problem", title: "Course Schedule", difficulty: "Medium", description: "Có thể học xong mọi môn không? (Đồ thị phụ thuộc có chu trình hay không.)", link: "https://neetcode.io/problems/course-schedule" },
      { type: "steps", items: [
        { title: "Tính in-degree", text: "Số môn tiên quyết còn thiếu của từng môn." },
        { title: "Queue các môn in-degree = 0", text: "Những môn có thể học ngay." },
        { title: "Kahn's algorithm", text: "Lấy một môn ra, giảm in-degree của các môn phụ thuộc; môn nào về 0 thì thêm vào queue." },
        { title: "Kết luận", text: "Số môn đã lấy ra == n → không có chu trình. Thứ tự lấy ra chính là đáp án của **Course Schedule II**." },
      ] },
      { type: "code", examples: {
        Java: "public int[] findOrder(int n, int[][] prereq) {\n    List<List<Integer>> adj = new ArrayList<>();\n    for (int i = 0; i < n; i++) adj.add(new ArrayList<>());\n    int[] indeg = new int[n];\n    for (int[] p : prereq) { adj.get(p[1]).add(p[0]); indeg[p[0]]++; }\n\n    Queue<Integer> q = new LinkedList<>();\n    for (int i = 0; i < n; i++) if (indeg[i] == 0) q.offer(i);\n\n    int[] order = new int[n]; int k = 0;\n    while (!q.isEmpty()) {\n        int u = q.poll(); order[k++] = u;\n        for (int v : adj.get(u)) if (--indeg[v] == 0) q.offer(v);\n    }\n    return k == n ? order : new int[0];\n}",
        Python: "def findOrder(n, prereq):\n    adj = [[] for _ in range(n)]\n    indeg = [0] * n\n    for a, b in prereq:            # học b trước a\n        adj[b].append(a)\n        indeg[a] += 1\n    q = deque(i for i in range(n) if indeg[i] == 0)\n    order = []\n    while q:\n        u = q.popleft()\n        order.append(u)\n        for v in adj[u]:\n            indeg[v] -= 1\n            if indeg[v] == 0:\n                q.append(v)\n    return order if len(order) == n else []",
        C: "/* Giống bản Java: dựng adjacency (forward star), mảng indeg[],\n   queue mảng; nếu số phần tử đã lấy k == n thì trả order, ngược lại trả mảng rỗng. */",
      } },
      { type: "complexity", time: "O(V + E)", space: "O(V + E)" },
    ],
  },
  {
    id: "union-find",
    title: "Pattern 5: Union-Find (Disjoint Set)",
    description: "Cấu trúc gộp nhóm và hỏi \"hai phần tử cùng nhóm không?\" gần như O(1).",
    blocks: [
      { type: "list", items: [
        "`find(x)`: trả về đại diện (root) của nhóm chứa x — dùng **path compression**.",
        "`union(a, b)`: nối hai nhóm — dùng **union by rank/size**.",
        "Union thất bại (a và b đã cùng nhóm) ⇒ cạnh (a,b) **tạo chu trình**.",
      ] },
      { type: "code", examples: {
        C: "int parent[N], rnk[N];\nint find(int x) { return parent[x] == x ? x : (parent[x] = find(parent[x])); }\nint unite(int a, int b) {\n    a = find(a); b = find(b);\n    if (a == b) return 0;\n    if (rnk[a] < rnk[b]) { int t = a; a = b; b = t; }\n    parent[b] = a;\n    if (rnk[a] == rnk[b]) rnk[a]++;\n    return 1;\n}",
        Java: "class DSU {\n    int[] p, rank;\n    DSU(int n) { p = new int[n]; rank = new int[n]; for (int i = 0; i < n; i++) p[i] = i; }\n    int find(int x) { return p[x] == x ? x : (p[x] = find(p[x])); }\n    boolean union(int a, int b) {\n        a = find(a); b = find(b);\n        if (a == b) return false;\n        if (rank[a] < rank[b]) { int t = a; a = b; b = t; }\n        p[b] = a;\n        if (rank[a] == rank[b]) rank[a]++;\n        return true;\n    }\n}",
        Python: "class DSU:\n    def __init__(self, n):\n        self.p = list(range(n))\n        self.rank = [0] * n\n    def find(self, x):\n        if self.p[x] != x:\n            self.p[x] = self.find(self.p[x])\n        return self.p[x]\n    def union(self, a, b):\n        a, b = self.find(a), self.find(b)\n        if a == b:\n            return False\n        if self.rank[a] < self.rank[b]:\n            a, b = b, a\n        self.p[b] = a\n        if self.rank[a] == self.rank[b]:\n            self.rank[a] += 1\n        return True",
      } },
      { type: "table", head: ["Bài", "Cách dùng DSU"], rows: [
        ["Number of Connected Components", "Số nhóm = n − (số lần union thành công)"],
        ["Redundant Connection", "Cạnh đầu tiên mà `union` trả về false"],
        ["Graph Valid Tree", "Hợp lệ ⇔ có đúng n−1 cạnh và không union nào thất bại"],
      ] },
      { type: "complexity", time: "O(α(n)) ≈ O(1) / thao tác", space: "O(n)", timeDescription: "α là hàm Ackermann ngược, tăng cực chậm." },
    ],
  },
  {
    id: "recognition",
    title: "Nhận diện pattern & lỗi thường gặp",
    blocks: [
      { type: "table", head: ["Dấu hiệu", "Công cụ"], rows: [
        ["Đếm vùng / diện tích / duyệt hết vùng liên thông", "DFS hoặc BFS (hoặc DSU)"],
        ["Đường đi ngắn nhất, số bước tối thiểu (không trọng số)", "**BFS**"],
        ["Nhiều điểm xuất phát đồng thời", "Multi-source BFS"],
        ["Thứ tự phụ thuộc / phát hiện chu trình có hướng", "Topological sort"],
        ["Gộp nhóm động, phát hiện cạnh thừa", "Union-Find"],
      ] },
      { type: "list", items: [
        "Quên đánh dấu visited **trước khi** push vào queue → một đỉnh bị thêm nhiều lần.",
        "Sai thứ tự index `[r][c]` / `(R, C)`.",
        "DFS đệ quy quá sâu trên đồ thị lớn → cân nhắc BFS hoặc DFS dùng stack.",
        "Đồ thị **vô hướng**: nhớ thêm cạnh hai chiều và bỏ qua cha khi DFS phát hiện chu trình.",
      ] },
      { type: "info", kind: "important", title: "Tóm tắt", text: "**DFS** để khám phá, **BFS** để đi ngắn nhất, **Topo sort** cho phụ thuộc, **Union-Find** cho gộp nhóm. Hầu hết bài Graph = chọn đúng công cụ + mô hình hóa đúng đỉnh/cạnh." },
    ],
  },
];
