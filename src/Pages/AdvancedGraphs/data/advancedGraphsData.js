export const sections = [
  {
    id: "introduction",
    title: "Advanced Graphs gồm những gì?",
    description: "Đồ thị có trọng số và các thuật toán nổi tiếng: đường đi ngắn nhất, cây khung nhỏ nhất, đường Euler.",
    blocks: [
      { type: "p", text: "Chương này dùng lại kiến thức **BFS, DFS, Union-Find, Topological Sort** ở chương Graphs, cộng thêm **Heap** để chọn cạnh/đỉnh tốt nhất. Khi cạnh có trọng số, BFS không còn tìm được đường ngắn nhất nữa." },
      { type: "table", head: ["Bài toán", "Thuật toán", "Độ phức tạp"], rows: [
        ["Đường ngắn nhất, trọng số ≥ 0", "**Dijkstra**", "O((V+E) log V)"],
        ["Đường ngắn nhất, có giới hạn số cạnh / trọng số âm", "**Bellman-Ford**", "O(V·E)"],
        ["Cây khung nhỏ nhất (MST)", "**Prim / Kruskal**", "O(E log V)"],
        ["Đi qua mỗi cạnh đúng một lần", "**Hierholzer** (Euler path)", "O(E log E)"],
        ["Suy ra thứ tự từ quan hệ", "**Topological sort**", "O(V+E)"],
      ] },
    ],
  },
  {
    id: "dijkstra",
    title: "Dijkstra – đường ngắn nhất từ một nguồn",
    blocks: [
      { type: "p", text: "Ý tưởng tham lam: luôn **mở rộng đỉnh có khoảng cách tạm thời nhỏ nhất** (dùng min-heap). Khi một đỉnh được lấy ra khỏi heap, khoảng cách của nó đã **chốt**." },
      { type: "formula", text: "nếu dist[u] + w < dist[v]  →  dist[v] = dist[u] + w, push(v)" },
      { type: "problem", title: "Network Delay Time", difficulty: "Medium", description: "Tín hiệu gửi từ nút k. Sau bao lâu thì tất cả n nút nhận được? (hoặc −1)", link: "https://neetcode.io/problems/network-delay-time" },
      { type: "code", examples: {
        C: "/* Dùng MinHeap lưu cặp (dist, node) – xem chương Heap.\n   Các bước giống Java/Python: dist[] = INF, dist[k] = 0, push(0, k);\n   pop (d, u); nếu d > dist[u] thì bỏ qua; relax các cạnh u→v. */",
        Java: "public int networkDelayTime(int[][] times, int n, int k) {\n    List<int[]>[] adj = new List[n + 1];\n    for (int i = 1; i <= n; i++) adj[i] = new ArrayList<>();\n    for (int[] t : times) adj[t[0]].add(new int[]{t[1], t[2]});\n\n    int[] dist = new int[n + 1];\n    Arrays.fill(dist, Integer.MAX_VALUE);\n    dist[k] = 0;\n    PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> a[0] - b[0]);\n    pq.offer(new int[]{0, k});            // {khoảng cách, nút}\n    while (!pq.isEmpty()) {\n        int[] cur = pq.poll();\n        int d = cur[0], u = cur[1];\n        if (d > dist[u]) continue;        // bản ghi cũ\n        for (int[] e : adj[u]) {\n            int v = e[0], nd = d + e[1];\n            if (nd < dist[v]) { dist[v] = nd; pq.offer(new int[]{nd, v}); }\n        }\n    }\n    int ans = 0;\n    for (int i = 1; i <= n; i++) {\n        if (dist[i] == Integer.MAX_VALUE) return -1;\n        ans = Math.max(ans, dist[i]);\n    }\n    return ans;\n}",
        Python: "def networkDelayTime(times, n, k):\n    adj = defaultdict(list)\n    for u, v, w in times:\n        adj[u].append((v, w))\n    dist = {i: float('inf') for i in range(1, n + 1)}\n    dist[k] = 0\n    heap = [(0, k)]\n    while heap:\n        d, u = heapq.heappop(heap)\n        if d > dist[u]:\n            continue                      # bản ghi cũ\n        for v, w in adj[u]:\n            if d + w < dist[v]:\n                dist[v] = d + w\n                heapq.heappush(heap, (dist[v], v))\n    ans = max(dist.values())\n    return -1 if ans == float('inf') else ans",
      } },
      { type: "complexity", time: "O((V + E) log V)", space: "O(V + E)" },
      { type: "info", kind: "important", title: "Giới hạn của Dijkstra", text: "Dijkstra **sai** khi có cạnh trọng số **âm**. Khi đó dùng Bellman-Ford." },
      { type: "problem", title: "Swim in Rising Water", difficulty: "Hard", description: "Đi từ (0,0) đến (n-1,n-1), thời gian ở mỗi bước bằng giá trị ô cao nhất đã đi qua. Tối thiểu bao lâu?", link: "https://neetcode.io/problems/swim-in-rising-water" },
      { type: "p", text: "Biến thể **minimax**: thay vì cộng trọng số, chi phí của đường đi là **max** dọc đường. Vẫn dùng Dijkstra với `cost = max(cost_hiện_tại, grid[nr][nc])`." },
      { type: "code", label: "Python", code: "def swimInWater(grid):\n    n = len(grid)\n    heap = [(grid[0][0], 0, 0)]\n    seen = {(0, 0)}\n    while heap:\n        t, r, c = heapq.heappop(heap)\n        if (r, c) == (n - 1, n - 1):\n            return t\n        for dr, dc in ((1,0),(-1,0),(0,1),(0,-1)):\n            nr, nc = r + dr, c + dc\n            if 0 <= nr < n and 0 <= nc < n and (nr, nc) not in seen:\n                seen.add((nr, nc))\n                heapq.heappush(heap, (max(t, grid[nr][nc]), nr, nc))" },
    ],
  },
  {
    id: "bellman-ford",
    title: "Bellman-Ford – có giới hạn số cạnh",
    blocks: [
      { type: "problem", title: "Cheapest Flights Within K Stops", difficulty: "Medium", description: "Giá rẻ nhất từ src đến dst với tối đa k điểm dừng.", link: "https://neetcode.io/problems/cheapest-flight-path" },
      { type: "p", text: "Bellman-Ford lặp **k+1 vòng**; vòng thứ i cho biết giá rẻ nhất khi dùng **tối đa i chuyến bay**. Quan trọng: mỗi vòng phải đọc từ mảng của vòng **trước** (dùng bản sao), nếu không sẽ vô tình đi nhiều hơn một cạnh trong một vòng." },
      { type: "code", examples: {
        C: "int findCheapestPrice(int n, int **flights, int m, int src, int dst, int k) {\n    int INF = 1e9, *prices = malloc(n * sizeof(int)), *tmp = malloc(n * sizeof(int));\n    for (int i = 0; i < n; i++) prices[i] = INF;\n    prices[src] = 0;\n    for (int i = 0; i <= k; i++) {\n        memcpy(tmp, prices, n * sizeof(int));\n        for (int j = 0; j < m; j++) {\n            int u = flights[j][0], v = flights[j][1], w = flights[j][2];\n            if (prices[u] != INF && prices[u] + w < tmp[v]) tmp[v] = prices[u] + w;\n        }\n        memcpy(prices, tmp, n * sizeof(int));\n    }\n    return prices[dst] == INF ? -1 : prices[dst];\n}",
        Java: "public int findCheapestPrice(int n, int[][] flights, int src, int dst, int k) {\n    int[] prices = new int[n];\n    Arrays.fill(prices, Integer.MAX_VALUE);\n    prices[src] = 0;\n    for (int i = 0; i <= k; i++) {\n        int[] tmp = prices.clone();\n        for (int[] f : flights) {\n            int u = f[0], v = f[1], w = f[2];\n            if (prices[u] != Integer.MAX_VALUE && prices[u] + w < tmp[v])\n                tmp[v] = prices[u] + w;\n        }\n        prices = tmp;\n    }\n    return prices[dst] == Integer.MAX_VALUE ? -1 : prices[dst];\n}",
        Python: "def findCheapestPrice(n, flights, src, dst, k):\n    prices = [float('inf')] * n\n    prices[src] = 0\n    for _ in range(k + 1):\n        tmp = prices[:]\n        for u, v, w in flights:\n            if prices[u] + w < tmp[v]:\n                tmp[v] = prices[u] + w\n        prices = tmp\n    return -1 if prices[dst] == float('inf') else prices[dst]",
      } },
      { type: "complexity", time: "O(k · E)", space: "O(V)" },
    ],
  },
  {
    id: "mst",
    title: "Minimum Spanning Tree (Prim / Kruskal)",
    description: "Nối tất cả đỉnh bằng các cạnh có tổng trọng số nhỏ nhất, không tạo chu trình.",
    blocks: [
      { type: "problem", title: "Min Cost to Connect All Points", difficulty: "Medium", description: "Nối n điểm trên mặt phẳng; chi phí giữa hai điểm là khoảng cách Manhattan. Tổng chi phí nhỏ nhất?", link: "https://neetcode.io/problems/min-cost-to-connect-points" },
      { type: "table", head: ["", "Kruskal", "Prim"], rows: [
        ["Ý tưởng", "Sort cạnh, thêm cạnh nhỏ nhất **không tạo chu trình** (dùng Union-Find)", "Lớn dần một cây từ một đỉnh, luôn thêm cạnh nhỏ nhất **ra ngoài cây** (dùng heap)"],
        ["Phù hợp", "Đồ thị thưa (ít cạnh)", "Đồ thị dày (đủ cạnh như bài này: E ≈ n²)"],
      ] },
      { type: "code", examples: {
        Java: "// Prim O(n² log n) cho đồ thị đầy đủ\npublic int minCostConnectPoints(int[][] p) {\n    int n = p.length, total = 0, used = 0;\n    boolean[] in = new boolean[n];\n    PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> a[0] - b[0]);\n    pq.offer(new int[]{0, 0});              // {chi phí, điểm}\n    while (used < n) {\n        int[] cur = pq.poll();\n        if (in[cur[1]]) continue;\n        in[cur[1]] = true; total += cur[0]; used++;\n        for (int j = 0; j < n; j++) if (!in[j])\n            pq.offer(new int[]{Math.abs(p[cur[1]][0] - p[j][0]) + Math.abs(p[cur[1]][1] - p[j][1]), j});\n    }\n    return total;\n}",
        Python: "def minCostConnectPoints(points):\n    n = len(points)\n    in_tree, total = [False] * n, 0\n    heap = [(0, 0)]                       # (chi phí, điểm)\n    used = 0\n    while used < n:\n        cost, i = heapq.heappop(heap)\n        if in_tree[i]:\n            continue\n        in_tree[i] = True\n        total += cost\n        used += 1\n        for j in range(n):\n            if not in_tree[j]:\n                d = abs(points[i][0] - points[j][0]) + abs(points[i][1] - points[j][1])\n                heapq.heappush(heap, (d, j))\n    return total",
        C: "/* Prim không heap O(n²): dist[i] = chi phí nhỏ nhất để nối i vào cây.\n   Mỗi lần chọn điểm chưa vào cây có dist nhỏ nhất, cộng vào tổng,\n   rồi cập nhật dist[j] = min(dist[j], manhattan(i, j)). */",
      } },
      { type: "complexity", time: "O(n² log n)", space: "O(n²)" },
    ],
  },
  {
    id: "euler",
    title: "Đường Euler (Reconstruct Itinerary)",
    blocks: [
      { type: "problem", title: "Reconstruct Itinerary", difficulty: "Hard", description: "Dùng hết mọi vé máy bay (mỗi vé một lần), xuất phát từ \"JFK\", chọn thứ tự từ điển nhỏ nhất.", link: "https://neetcode.io/problems/reconstruct-flight-path" },
      { type: "p", text: "Đây là **đường Euler** (đi qua mỗi cạnh đúng một lần). **Hierholzer**: DFS, luôn đi đến điểm đến nhỏ nhất theo từ điển; khi **hết đường đi** thì mới thêm đỉnh vào kết quả; cuối cùng **đảo ngược** kết quả." },
      { type: "code", examples: {
        Java: "public List<String> findItinerary(List<List<String>> tickets) {\n    Map<String, PriorityQueue<String>> g = new HashMap<>();\n    for (List<String> t : tickets)\n        g.computeIfAbsent(t.get(0), k -> new PriorityQueue<>()).offer(t.get(1));\n    LinkedList<String> route = new LinkedList<>();\n    dfs(\"JFK\", g, route);\n    return route;\n}\nprivate void dfs(String u, Map<String, PriorityQueue<String>> g, LinkedList<String> route) {\n    PriorityQueue<String> q = g.get(u);\n    while (q != null && !q.isEmpty()) dfs(q.poll(), g, route);\n    route.addFirst(u);                       // thêm khi hết đường → đã là thứ tự đảo\n}",
        Python: "def findItinerary(tickets):\n    g = defaultdict(list)\n    for a, b in sorted(tickets, reverse=True):\n        g[a].append(b)                       # pop() lấy đích nhỏ nhất\n    route = []\n    def dfs(u):\n        while g[u]:\n            dfs(g[u].pop())\n        route.append(u)\n    dfs('JFK')\n    return route[::-1]",
        C: "/* Cài đặt: sort vé theo (from, to) giảm dần, dùng con trỏ/stack cho mỗi sân bay;\n   dfs(u): while còn vé từ u → dfs(đích nhỏ nhất); rồi push u vào route.\n   Cuối cùng in route theo thứ tự ngược. */",
      } },
      { type: "complexity", time: "O(E log E)", space: "O(E)" },
    ],
  },
  {
    id: "alien-dictionary",
    title: "Alien Dictionary (Topological Sort nâng cao)",
    blocks: [
      { type: "problem", title: "Alien Dictionary", difficulty: "Hard", description: "Cho danh sách từ đã sắp theo thứ tự từ điển của một bảng chữ cái lạ. Suy ra thứ tự các chữ cái.", link: "https://neetcode.io/problems/foreign-dictionary" },
      { type: "steps", items: [
        { title: "Dựng cạnh", text: "So sánh **từng cặp từ liền kề**: ký tự đầu tiên khác nhau `a != b` cho cạnh a → b." },
        { title: "Trường hợp không hợp lệ", text: "Từ dài đứng trước là tiền tố của từ ngắn (vd `abc` đứng trước `ab`) → trả về \"\"." },
        { title: "Topological sort", text: "Kahn hoặc DFS; nếu có chu trình → trả về \"\"." },
      ] },
      { type: "code", label: "Python", code: "def alienOrder(words):\n    adj = {c: set() for w in words for c in w}\n    for a, b in zip(words, words[1:]):\n        if len(a) > len(b) and a.startswith(b):\n            return \"\"\n        for x, y in zip(a, b):\n            if x != y:\n                adj[x].add(y)\n                break\n    indeg = {c: 0 for c in adj}\n    for c in adj:\n        for nb in adj[c]:\n            indeg[nb] += 1\n    q = deque(c for c in adj if indeg[c] == 0)\n    res = []\n    while q:\n        c = q.popleft(); res.append(c)\n        for nb in adj[c]:\n            indeg[nb] -= 1\n            if indeg[nb] == 0:\n                q.append(nb)\n    return \"\".join(res) if len(res) == len(adj) else \"\"" },
    ],
  },
  {
    id: "recognition",
    title: "Nhận diện pattern & lỗi thường gặp",
    blocks: [
      { type: "table", head: ["Dấu hiệu trong đề", "Thuật toán"], rows: [
        ["Chi phí / thời gian nhỏ nhất, cạnh có trọng số ≥ 0", "Dijkstra"],
        ["\"Tối đa k bước / k điểm dừng\"", "Bellman-Ford (k+1 vòng) hoặc BFS có trạng thái"],
        ["Chi phí = max/min dọc đường", "Dijkstra biến thể minimax"],
        ["Nối mọi điểm với chi phí nhỏ nhất", "MST (Prim/Kruskal)"],
        ["Dùng hết mọi cạnh đúng một lần", "Euler path (Hierholzer)"],
        ["Suy ra thứ tự từ các quan hệ", "Topological sort"],
      ] },
      { type: "list", items: [
        "Quên bỏ qua bản ghi cũ trong Dijkstra (`if d > dist[u]: continue`) → chậm hoặc sai.",
        "Dùng Dijkstra với trọng số âm.",
        "Bellman-Ford không dùng bản sao mảng giữa các vòng → vượt quá k cạnh.",
        "Cộng tràn số khi dùng `INT_MAX` làm vô cực — kiểm tra `!= INF` trước khi cộng.",
      ] },
      { type: "info", kind: "important", title: "Tóm tắt", text: "Trọng số ≥ 0 → **Dijkstra + min-heap**. Có giới hạn số cạnh → **Bellman-Ford**. Nối tất cả → **MST**. Hầu hết bài là *biến thể* của các khung này — đổi cách tính chi phí hoặc trạng thái." },
    ],
  },
];
