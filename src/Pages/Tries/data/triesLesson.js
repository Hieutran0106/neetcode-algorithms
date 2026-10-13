export const toc = [
  {
    "id": "introduction",
    "label": "Trie là gì?"
  },
  {
    "id": "string-problem",
    "label": "1. Vấn đề với String"
  },
  {
    "id": "trie-definition",
    "label": "2. Trie giải quyết gì?"
  },
  {
    "id": "trie-structure",
    "label": "3. Cấu trúc của Trie"
  },
  {
    "id": "trie-node",
    "label": "4. Trie Node"
  },
  {
    "id": "root",
    "label": "5. Root"
  },
  {
    "id": "character-path",
    "label": "6. Character và Path"
  },
  {
    "id": "prefix",
    "label": "7. Prefix là gì?"
  },
  {
    "id": "end-word",
    "label": "8. End of Word"
  },
  {
    "id": "array-children",
    "label": "9. children[26]"
  },
  {
    "id": "create-node",
    "label": "10. Tạo Trie Node bằng C"
  },
  {
    "id": "insert-basic",
    "label": "11. Insert Word"
  },
  {
    "id": "search-basic",
    "label": "12. Search Word"
  },
  {
    "id": "starts-with",
    "label": "13. StartsWith"
  },
  {
    "id": "complexity",
    "label": "14. Complexity"
  },
  {
    "id": "advantages",
    "label": "15. Ưu và nhược điểm"
  },
  {
    "id": "applications",
    "label": "16. Ứng dụng thực tế"
  },
  {
    "id": "implement-problem",
    "label": "17. Implement Trie"
  },
  {
    "id": "implement-thinking",
    "label": "18. Tư duy Implement Trie"
  },
  {
    "id": "implement-dry-run",
    "label": "19. Dry Run Implement Trie"
  },
  {
    "id": "implement-code",
    "label": "20. Code Implement Trie"
  },
  {
    "id": "dictionary-problem",
    "label": "21. Design Add and Search"
  },
  {
    "id": "dictionary-thinking",
    "label": "22. Tư duy Search với '.'"
  },
  {
    "id": "dictionary-dry-run",
    "label": "23. Dry Run Search"
  },
  {
    "id": "dictionary-code",
    "label": "24. Code Add and Search"
  },
  {
    "id": "word-search-problem",
    "label": "25. Word Search II"
  },
  {
    "id": "word-search-thinking",
    "label": "26. Trie + DFS + Backtracking"
  },
  {
    "id": "word-search-dry-run",
    "label": "27. Dry Run Word Search II"
  },
  {
    "id": "word-search-code",
    "label": "28. Code Word Search II"
  },
  {
    "id": "edge-cases",
    "label": "29. Edge Cases"
  },
  {
    "id": "common-mistakes",
    "label": "30. Lỗi thường gặp"
  },
  {
    "id": "recognition",
    "label": "31. Nhận diện Pattern"
  },
  {
    "id": "summary",
    "label": "32. Tổng kết"
  }
];

export const sections = {
  "introduction": {
    "id": "introduction",
    "number": "00",
    "title": "Trie là gì?",
    "description": "Trie là một loại Tree được tối ưu cho việc lưu trữ và truy vấn chuỗi ký tự.",
    "blocks": [
      {
        "type": "p",
        "text": "Nếu bạn đã học Tree, hãy tưởng tượng Trie là một Tree đặc biệt dành cho String. Thay vì mỗi Node lưu một số nguyên như Binary Tree, mỗi Node trong Trie thường đại diện cho một ký tự."
      },
      {
        "type": "visual",
        "name": "trie-structure"
      },
      {
        "type": "p",
        "text": "Ví dụ Trie ở trên có thể lưu các từ: cat, car và dog."
      },
      {
        "type": "callout",
        "variant": "important",
        "title": "Định nghĩa đơn giản nhất",
        "text": "Trie là một Tree trong đó đường đi từ Root xuống một Node có thể biểu diễn một Prefix hoặc một String. Trie đặc biệt hữu ích khi bài toán liên quan tới Prefix, dictionary, autocomplete hoặc search String."
      },
      {
        "type": "cards",
        "items": [
          {
            "title": "String",
            "text": "Lưu các từ hoặc chuỗi ký tự."
          },
          {
            "title": "Prefix",
            "text": "Dùng chung phần đầu của nhiều từ."
          },
          {
            "title": "Search",
            "text": "Đi theo từng ký tự thay vì quét toàn bộ từ."
          }
        ]
      }
    ]
  },
  "string-problem": {
    "id": "string-problem",
    "number": "01",
    "title": "Vấn đề khi làm việc với String",
    "description": "Hiểu vấn đề trước thì Trie mới thực sự có ý nghĩa.",
    "blocks": [
      {
        "type": "p",
        "text": "Giả sử bạn có một dictionary gồm hàng triệu từ: apple, application, apply, app, banana, band và bank."
      },
      {
        "type": "formula",
        "text": "app"
      },
      {
        "type": "p",
        "text": "Chúng ta có thể kiểm tra từng String một. Nhưng khi cần rất nhiều thao tác như kiểm tra từ có tồn tại, tìm từ bắt đầu bằng prefix, gợi ý từ bắt đầu bằng app hoặc tạo từ từ ký tự trên board, việc quét từng chuỗi có thể lặp lại nhiều thông tin."
      },
      {
        "type": "steps",
        "items": [
          {
            "title": "Từ này có tồn tại không?",
            "text": "Kiểm tra một từ cụ thể trong dictionary."
          },
          {
            "title": "Có prefix nào khớp không?",
            "text": "Tìm các từ bắt đầu bằng một chuỗi."
          },
          {
            "title": "Autocomplete",
            "text": "Gợi ý các từ bắt đầu bằng 'app'."
          },
          {
            "title": "Word Search",
            "text": "Tìm từ có thể tạo thành từ các ký tự trên board."
          }
        ]
      },
      {
        "type": "callout",
        "variant": "tip",
        "title": "Điểm khó",
        "text": "Nếu nhiều String chia sẻ chung Prefix, việc lưu từng String độc lập sẽ khiến chúng ta lặp lại rất nhiều thông tin."
      }
    ]
  },
  "trie-definition": {
    "id": "trie-definition",
    "number": "02",
    "title": "Trie giải quyết vấn đề gì?",
    "description": "Trie chia String thành các ký tự và dùng chung những Prefix giống nhau.",
    "blocks": [
      {
        "type": "p",
        "text": "Giả sử ta có ba từ: cat, car, care. Cả ba từ này đều bắt đầu bằng c → a."
      },
      {
        "type": "formula",
        "text": "c → a"
      },
      {
        "type": "p",
        "text": "Trie chỉ lưu đoạn c → a một lần rồi chia nhánh thành các ký tự tiếp theo."
      },
      {
        "type": "visual",
        "name": "trie-structure"
      },
      {
        "type": "callout",
        "variant": "important",
        "title": "Ý tưởng cốt lõi",
        "text": "Trie tận dụng việc nhiều String có chung Prefix. Đây là điểm khác biệt quan trọng nhất giữa Trie và việc chỉ lưu một danh sách String thông thường."
      }
    ]
  },
  "trie-structure": {
    "id": "trie-structure",
    "number": "03",
    "title": "Cấu trúc của Trie",
    "description": "Trie nhìn giống Tree, nhưng cách diễn giải Node lại đặc biệt hơn.",
    "blocks": [
      {
        "type": "p",
        "text": "Một Trie thường gồm Root, Children và End Of Word."
      },
      {
        "type": "cards",
        "items": [
          {
            "title": "Root",
            "text": "Node bắt đầu của toàn bộ Trie."
          },
          {
            "title": "Children",
            "text": "Các cạnh đi tới ký tự tiếp theo."
          },
          {
            "title": "End Of Word",
            "text": "Đánh dấu nơi một từ hoàn chỉnh kết thúc."
          }
        ]
      },
      {
        "type": "heading",
        "text": "Trie không lưu cả từ trên từng Node"
      },
      {
        "type": "p",
        "text": "Node thường chỉ cần biết children và isEndOfWord. Chính đường đi từ Root qua các ký tự mới tạo nên String."
      },
      {
        "type": "formula",
        "text": "children · isEndOfWord"
      }
    ]
  },
  "trie-node": {
    "id": "trie-node",
    "number": "04",
    "title": "Trie Node",
    "description": "Đây là viên gạch nhỏ nhất của Trie.",
    "blocks": [
      {
        "type": "p",
        "text": "Một Node của Trie với alphabet tiếng Anh thường có children[26], là pointer tới Node của các ký tự tiếp theo, và isEndOfWord (true / false), cho biết từ có kết thúc tại Node này hay không."
      },
      {
        "type": "code",
        "key": "trieNodeCode",
        "label": "C"
      },
      {
        "type": "code",
        "key": "trieNodeJavaCode",
        "label": "Java"
      },
      {
        "type": "code",
        "key": "trieNodePythonCode",
        "label": "Python"
      },
      {
        "type": "callout",
        "variant": "important",
        "title": "Tại sao cần isEndOfWord?",
        "text": "Hãy xét hai từ app và apple. Khi đi tới Node p thứ hai, chúng ta đã đi hết app, nhưng Trie vẫn còn có thể đi tiếp tới apple. Vì vậy phải có một flag để phân biệt “đây là prefix” và “đây là một word hoàn chỉnh”."
      }
    ]
  },
  "root": {
    "id": "root",
    "number": "05",
    "title": "Root",
    "description": "Root là Node đặc biệt ở đầu Trie.",
    "blocks": [
      {
        "type": "p",
        "text": "Root thường không đại diện cho một ký tự cụ thể."
      },
      {
        "type": "visual",
        "name": "root"
      },
      {
        "type": "p",
        "text": "Khi Insert từ cat, chúng ta bắt đầu từ Root rồi đi: root → c → a → t."
      },
      {
        "type": "formula",
        "text": "root → c → a → t"
      },
      {
        "type": "callout",
        "variant": "tip",
        "title": "Mental model",
        "text": "Root giống như điểm xuất phát. Ký tự đầu tiên của mỗi từ nằm ở các Child của Root."
      }
    ]
  },
  "character-path": {
    "id": "character-path",
    "number": "06",
    "title": "Character và Path",
    "description": "Một String trong Trie được tạo ra bởi một đường đi qua các ký tự.",
    "blocks": [
      {
        "type": "p",
        "text": "Với từ cat, đường root → c → a → t chính là representation của String cat."
      },
      {
        "type": "trie-path",
        "letters": [
          "c",
          "a",
          "t"
        ],
        "terminal": [
          2
        ]
      },
      {
        "type": "heading",
        "text": "Nếu có car thì sao?"
      },
      {
        "type": "trie-path",
        "letters": [
          "c",
          "a",
          "r"
        ],
        "terminal": [
          2
        ]
      },
      {
        "type": "p",
        "text": "Hai từ dùng chung đường c → a rồi mới tách nhánh."
      },
      {
        "type": "callout",
        "variant": "important",
        "title": "Prefix Sharing",
        "text": "Đây chính là sức mạnh của Trie: cat và car không cần lưu riêng toàn bộ ca hai lần trong cấu trúc Trie."
      }
    ]
  },
  "prefix": {
    "id": "prefix",
    "number": "07",
    "title": "Prefix là gì?",
    "description": "Prefix là phần đầu của một String.",
    "blocks": [
      {
        "type": "p",
        "text": "Với application, những Prefix hợp lệ gồm a, ap, app, appl, appli và applic."
      },
      {
        "type": "prefix-diagram"
      },
      {
        "type": "callout",
        "variant": "tip",
        "title": "Tại sao Prefix quan trọng?",
        "text": "Các bài toán như autocomplete, search suggestion hoặc kiểm tra “có từ nào bắt đầu bằng chuỗi này không?” đều phụ thuộc mạnh vào Prefix."
      }
    ]
  },
  "end-word": {
    "id": "end-word",
    "number": "08",
    "title": "End of Word",
    "description": "isEndOfWord là phần khiến Trie phân biệt Word và Prefix.",
    "blocks": [
      {
        "type": "p",
        "text": "Giả sử Trie lưu app và apple. Node p thứ hai có isEndOfWord = true vì app là một từ hoàn chỉnh. Node e cuối cùng cũng có isEndOfWord = true vì apple là một từ hoàn chỉnh."
      },
      {
        "type": "trie-path",
        "letters": [
          "a",
          "p",
          "p",
          "l",
          "e"
        ],
        "terminal": [
          2,
          4
        ]
      },
      {
        "type": "callout",
        "variant": "important",
        "title": "Prefix không đồng nghĩa với Word",
        "text": "app có thể là Prefix của apple. Nhưng app chỉ được xem là một Word nếu Node cuối của app có isEndOfWord = true."
      }
    ]
  },
  "array-children": {
    "id": "array-children",
    "number": "09",
    "title": "children[26] hoạt động như thế nào?",
    "description": "Đây là phần quan trọng nhất khi tự implement Trie bằng C.",
    "blocks": [
      {
        "type": "formula",
        "text": "a → 0  |  b → 1  |  c → 2  |  ...  |  z → 25"
      },
      {
        "type": "code",
        "key": "charIndexCode",
        "label": "C"
      },
      {
        "type": "code",
        "key": "charIndexJavaCode",
        "label": "Java"
      },
      {
        "type": "code",
        "key": "charIndexPythonCode",
        "label": "Python"
      },
      {
        "type": "heading",
        "text": "Vì sao dùng Array 26 phần tử?"
      },
      {
        "type": "p",
        "text": "Vì alphabet tiếng Anh chỉ có 26 ký tự. Node có thể trực tiếp đi tới Child tương ứng mà không cần tìm kiếm trong một List."
      },
      {
        "type": "formula",
        "text": "children[0] → a · children[1] → b · children[2] → c · ... · children[25] → z"
      },
      {
        "type": "callout",
        "variant": "tip",
        "title": "Trade-off",
        "text": "Array 26 giúp truy cập Child rất nhanh nhưng có thể tốn nhiều memory hơn nếu Trie thưa."
      }
    ]
  },
  "create-node": {
    "id": "create-node",
    "number": "10",
    "title": "Tạo Trie Node bằng C",
    "description": "Bây giờ chúng ta bắt đầu xây dựng Trie thật sự.",
    "blocks": [
      {
        "type": "code",
        "key": "createNodeCode",
        "label": "C"
      },
      {
        "type": "code",
        "key": "createNodeJavaCode",
        "label": "Java"
      },
      {
        "type": "code",
        "key": "createNodePythonCode",
        "label": "Python"
      },
      {
        "type": "heading",
        "text": "Tại sao phải khởi tạo toàn bộ children = NULL?"
      },
      {
        "type": "p",
        "text": "Một Node mới chưa có Child nào. Nếu không đặt các pointer về NULL, chúng có thể chứa giá trị rác."
      },
      {
        "type": "cards",
        "items": [
          {
            "title": "Đúng",
            "text": "children[i] = NULL nghĩa là chưa có Edge tới ký tự đó."
          },
          {
            "title": "Sai",
            "text": "Pointer rác có thể dẫn tới vùng nhớ không hợp lệ."
          }
        ]
      },
      {
        "type": "callout",
        "variant": "important",
        "title": "Root cũng là Trie Node",
        "text": "Root được tạo bằng cùng một hàm createNode(). Điểm khác chỉ là Root thường không đại diện cho một ký tự."
      }
    ]
  },
  "insert-basic": {
    "id": "insert-basic",
    "number": "11",
    "title": "Insert Word",
    "description": "Insert một String nghĩa là tạo đường đi qua từng ký tự.",
    "blocks": [
      {
        "type": "p",
        "text": "Hãy Insert cat."
      },
      {
        "type": "steps",
        "items": [
          {
            "title": "Bắt đầu tại Root",
            "text": "current = root."
          },
          {
            "title": "Đọc ký tự c",
            "text": "Tìm children['c' - 'a']. Nếu chưa có, tạo Node."
          },
          {
            "title": "Đi tới Node c",
            "text": "current trở thành Node đại diện cho c."
          },
          {
            "title": "Đọc ký tự a",
            "text": "Tạo hoặc lấy Child a."
          },
          {
            "title": "Đọc ký tự t",
            "text": "Tạo hoặc lấy Child t."
          },
          {
            "title": "Đánh dấu kết thúc",
            "text": "Đặt isEndOfWord = true tại Node t."
          }
        ]
      },
      {
        "type": "code",
        "key": "insertCode",
        "label": "C"
      },
      {
        "type": "code",
        "key": "insertJavaCode",
        "label": "Java"
      },
      {
        "type": "code",
        "key": "insertPythonCode",
        "label": "Python"
      },
      {
        "type": "callout",
        "variant": "tip",
        "title": "Insert không tạo Node thừa",
        "text": "Nếu Prefix đã tồn tại, chúng ta tái sử dụng Node cũ. Insert car sau cat sẽ tái sử dụng c và a, chỉ cần tạo nhánh r."
      }
    ]
  },
  "search-basic": {
    "id": "search-basic",
    "number": "12",
    "title": "Search Word",
    "description": "Search một từ = đi qua Trie theo từng ký tự và kiểm tra End of Word.",
    "blocks": [
      {
        "type": "p",
        "text": "Với search(\"cat\"), Node c tồn tại → tiếp tục; Node a tồn tại → tiếp tục; Node t tồn tại → tiếp tục; sau đó kiểm tra isEndOfWord. Nếu true thì tìm thấy Word."
      },
      {
        "type": "code",
        "key": "searchCode",
        "label": "C"
      },
      {
        "type": "code",
        "key": "searchJavaCode",
        "label": "Java"
      },
      {
        "type": "code",
        "key": "searchPythonCode",
        "label": "Python"
      },
      {
        "type": "heading",
        "text": "Tại sao không chỉ return true khi đi hết String?"
      },
      {
        "type": "p",
        "text": "Vì String chúng ta đang tìm có thể chỉ là Prefix của một từ dài hơn."
      },
      {
        "type": "cards",
        "items": [
          {
            "title": "search(\"app\")",
            "text": "Đúng nếu Node p cuối có isEndOfWord = true."
          },
          {
            "title": "search(\"appl\")",
            "text": "Sai nếu appl chỉ là Prefix và không phải một Word hoàn chỉnh."
          }
        ]
      }
    ]
  },
  "starts-with": {
    "id": "starts-with",
    "number": "13",
    "title": "StartsWith",
    "description": "StartsWith chỉ cần biết Prefix có tồn tại, không cần Prefix đó là một Word hoàn chỉnh.",
    "blocks": [
      {
        "type": "p",
        "text": "Ví dụ Trie chứa app, apple và application. Khi startsWith(\"appl\"), chỉ cần đi được tới Node l là đủ. Không cần kiểm tra isEndOfWord."
      },
      {
        "type": "code",
        "key": "startsWithCode",
        "label": "C"
      },
      {
        "type": "code",
        "key": "startsWithJavaCode",
        "label": "Java"
      },
      {
        "type": "code",
        "key": "startsWithPythonCode",
        "label": "Python"
      },
      {
        "type": "callout",
        "variant": "important",
        "title": "Search vs StartsWith",
        "text": "Search phải tìm thấy cả Word. StartsWith chỉ cần tìm thấy Prefix."
      }
    ]
  },
  "complexity": {
    "id": "complexity",
    "number": "14",
    "title": "Complexity của Trie",
    "description": "Trie thường phân tích theo độ dài String thay vì số lượng String.",
    "blocks": [
      {
        "type": "p",
        "text": "Gọi L là độ dài String đang xử lý."
      },
      {
        "type": "table",
        "headers": [
          "Operation",
          "Time",
          "Lý do"
        ],
        "rows": [
          [
            "Insert",
            "O(L)",
            "Đi qua từng ký tự."
          ],
          [
            "Search",
            "O(L)",
            "Đi qua từng ký tự."
          ],
          [
            "StartsWith",
            "O(L)",
            "Đi qua Prefix."
          ]
        ]
      },
      {
        "type": "heading",
        "text": "Space Complexity"
      },
      {
        "type": "p",
        "text": "Nếu tổng số ký tự của tất cả String là N, số Node của Trie tối đa có thể lên tới O(N). Với alphabet cố định 26, có thể ghi O(N × 26), và theo Big-O với alphabet là hằng số thường ghi gọn là O(N)."
      },
      {
        "type": "callout",
        "variant": "tip",
        "title": "Điểm mạnh của Trie",
        "text": "Khi String rất dài hoặc số lượng String rất lớn nhưng chúng chia sẻ nhiều Prefix, Trie có thể rất hiệu quả."
      }
    ]
  },
  "advantages": {
    "id": "advantages",
    "number": "15",
    "title": "Ưu và nhược điểm của Trie",
    "description": "Không phải bài String nào cũng nên dùng Trie.",
    "blocks": [
      {
        "type": "cards",
        "items": [
          {
            "title": "Ưu điểm",
            "text": "Search theo độ dài String. Prefix query rất tự nhiên. Dùng chung Prefix của nhiều từ. Rất phù hợp với autocomplete."
          },
          {
            "title": "Nhược điểm",
            "text": "Tốn memory hơn Hash Table trong nhiều trường hợp. Code phức tạp hơn Set / HashSet. Alphabet lớn khiến mỗi Node tốn nhiều memory. Không phải bài String nào cũng cần Trie."
          }
        ]
      },
      {
        "type": "callout",
        "variant": "important",
        "title": "Trie không phải HashMap phiên bản đẹp hơn",
        "text": "Hai cấu trúc giải quyết các trade-off khác nhau. Hash Table mạnh ở việc kiểm tra một Key cụ thể. Trie đặc biệt mạnh khi cần quan hệ giữa các Prefix."
      }
    ]
  },
  "applications": {
    "id": "applications",
    "number": "16",
    "title": "Ứng dụng thực tế",
    "description": "Trie không chỉ là một cấu trúc để giải bài LeetCode.",
    "blocks": [
      {
        "type": "cards",
        "items": [
          {
            "title": "Autocomplete",
            "text": "Nhập app rồi gợi ý apple, application, apply."
          },
          {
            "title": "Search Suggestion",
            "text": "Lấy các từ cùng Prefix để hiển thị kết quả."
          },
          {
            "title": "Dictionary",
            "text": "Kiểm tra nhanh từ có tồn tại hay không."
          },
          {
            "title": "Spell Checking",
            "text": "Đối chiếu từ nhập vào với Dictionary."
          },
          {
            "title": "IP Routing",
            "text": "Trie có biến thể dùng cho Prefix của địa chỉ."
          },
          {
            "title": "Word Search",
            "text": "Kết hợp Trie với DFS để tìm nhiều từ trên board."
          }
        ]
      }
    ]
  },
  "implement-problem": {
    "id": "implement-problem",
    "number": "17",
    "title": "NeetCode — Implement Trie",
    "description": "Bài nền tảng để hiểu toàn bộ cấu trúc Trie.",
    "blocks": [
      {
        "type": "heading",
        "text": "Implement Trie (Prefix Tree)"
      },
      {
        "type": "p",
        "text": "Xây dựng Trie hỗ trợ ba thao tác:"
      },
      {
        "type": "formula",
        "text": "insert(word) · search(word) · startsWith(prefix)"
      },
      {
        "type": "callout",
        "variant": "important",
        "title": "Đây là bài nền móng",
        "text": "Nếu hiểu rõ bài này, hai bài Trie sau sẽ dễ hơn rất nhiều vì cả hai đều xây trên ý tưởng Node → children → path → end of word."
      }
    ]
  },
  "implement-thinking": {
    "id": "implement-thinking",
    "number": "18",
    "title": "Tư duy Implement Trie",
    "description": "Hãy xây dựng Trie bằng tay trước khi viết code.",
    "blocks": [
      {
        "type": "steps",
        "items": [
          {
            "title": "Tạo Root",
            "text": "Root là Node rỗng làm điểm bắt đầu."
          },
          {
            "title": "Insert",
            "text": "Với mỗi ký tự, đi vào Child tương ứng. Nếu chưa có thì tạo Node mới."
          },
          {
            "title": "Mark Word",
            "text": "Khi tới cuối String, đặt isEndOfWord = true."
          },
          {
            "title": "Search",
            "text": "Đi theo đúng từng ký tự. Nếu thiếu Child → false."
          },
          {
            "title": "Check End",
            "text": "Đi hết String chưa đủ. Phải kiểm tra Node cuối có phải End of Word hay không."
          }
        ]
      },
      {
        "type": "trie-path",
        "letters": [
          "c",
          "a",
          "t"
        ],
        "terminal": [
          2
        ]
      },
      {
        "type": "callout",
        "variant": "tip",
        "title": "Mental model",
        "text": "Insert giống như vẽ đường. Search giống như đi lại đúng con đường đó."
      }
    ]
  },
  "implement-dry-run": {
    "id": "implement-dry-run",
    "number": "19",
    "title": "Dry Run Implement Trie",
    "description": "Insert cat rồi search cat và cap.",
    "blocks": [
      {
        "type": "steps",
        "items": [
          {
            "title": "Insert cat",
            "text": "root → c → a → t. Node t được đánh dấu End of Word."
          },
          {
            "title": "Search cat",
            "text": "c tồn tại → a tồn tại → t tồn tại → End = true. Kết quả = true."
          },
          {
            "title": "Search cap",
            "text": "c tồn tại → a tồn tại → p không tồn tại. Kết quả = false."
          },
          {
            "title": "Search prefix ca",
            "text": "c tồn tại → a tồn tại. StartsWith = true."
          },
          {
            "title": "Search ca",
            "text": "c tồn tại → a tồn tại nhưng Node a không phải End of Word. Search = false nếu chỉ lưu cat."
          }
        ]
      },
      {
        "type": "cards",
        "items": [
          {
            "title": "search(\"cat\")",
            "text": "Word tồn tại."
          },
          {
            "title": "search(\"cap\")",
            "text": "Thiếu Node p."
          },
          {
            "title": "startsWith(\"ca\")",
            "text": "Prefix tồn tại."
          }
        ]
      }
    ]
  },
  "implement-code": {
    "id": "implement-code",
    "number": "20",
    "title": "Code Implement Trie",
    "description": "Một implementation C đầy đủ cho Insert, Search và StartsWith.",
    "blocks": [
      {
        "type": "code",
        "key": "trieFullCode",
        "label": "C · Full Example"
      },
      {
        "type": "code",
        "key": "trieFullJavaCode",
        "label": "Java · Full Example"
      },
      {
        "type": "code",
        "key": "trieFullPythonCode",
        "label": "Python · Full Example"
      },
      {
        "type": "callout",
        "variant": "important",
        "title": "Phần quan trọng nhất trong code",
        "text": "Hầu hết logic nằm ở việc tính index → kiểm tra child → tạo Node nếu thiếu → di chuyển."
      }
    ]
  },
  "dictionary-problem": {
    "id": "dictionary-problem",
    "number": "21",
    "title": "NeetCode — Design Add and Search Words Data Structure",
    "description": "Bài này thêm một thử thách: ký tự . có thể đại diện cho bất kỳ ký tự nào.",
    "blocks": [
      {
        "type": "heading",
        "text": "Design Add and Search Words Data Structure"
      },
      {
        "type": "p",
        "text": "Data structure cần hỗ trợ addWord(\"bad\"), addWord(\"dad\") và search(\".ad\"). Ký tự . có thể match bất kỳ ký tự nào."
      },
      {
        "type": "formula",
        "text": "addWord(\"bad\") · addWord(\"dad\") · search(\".ad\")"
      }
    ]
  },
  "dictionary-thinking": {
    "id": "dictionary-thinking",
    "number": "22",
    "title": "Tư duy Search với '.'",
    "description": "Điểm mới của bài này là Search không còn luôn đi đúng một nhánh.",
    "blocks": [
      {
        "type": "p",
        "text": "Với .ad, ký tự đầu tiên là . nên chúng ta không biết sẽ đi vào Child nào."
      },
      {
        "type": "cards",
        "items": [
          {
            "title": "bad",
            "text": "Có thể match .ad."
          },
          {
            "title": "dad",
            "text": "Có thể match .ad."
          },
          {
            "title": "mad",
            "text": "Có thể match .ad."
          }
        ]
      },
      {
        "type": "callout",
        "variant": "important",
        "title": "Đây là lúc Trie + DFS xuất hiện",
        "text": "Khi gặp . chúng ta phải thử nhiều Child. Vì vậy Search trở thành một bài backtracking / DFS trên Trie."
      },
      {
        "type": "steps",
        "items": [
          {
            "title": "Ký tự bình thường",
            "text": "Chỉ có một Child hợp lệ → đi thẳng xuống."
          },
          {
            "title": "Gặp '.'",
            "text": "Có thể đi vào bất kỳ Child nào đang tồn tại."
          },
          {
            "title": "Thử từng nhánh",
            "text": "Nếu một nhánh trả về true thì toàn bộ Search thành công."
          },
          {
            "title": "Không nhánh nào thành công",
            "text": "Trả về false."
          }
        ]
      }
    ]
  },
  "dictionary-dry-run": {
    "id": "dictionary-dry-run",
    "number": "23",
    "title": "Dry Run Search",
    "description": "Giả sử Trie chứa bad, dad và mad.",
    "blocks": [
      {
        "type": "steps",
        "items": [
          {
            "title": "search(\".ad\")",
            "text": "Ký tự đầu tiên là . → thử tất cả Child có tồn tại."
          },
          {
            "title": "Thử b",
            "text": "b → a → d → End of Word = true."
          },
          {
            "title": "Return",
            "text": "Không cần thử d hoặc m nữa vì đã có một nhánh match."
          }
        ]
      },
      {
        "type": "formula",
        "text": ". → thử b → a → d → End → true"
      },
      {
        "type": "callout",
        "variant": "tip",
        "title": "Nếu nhánh đầu tiên fail",
        "text": "Ví dụ bad không tồn tại nhưng dad tồn tại, recursion sẽ quay lại và thử Child tiếp theo."
      }
    ]
  },
  "dictionary-code": {
    "id": "dictionary-code",
    "number": "24",
    "title": "Code Add and Search",
    "description": "Search thường dùng recursion vì ký tự . có thể tạo nhiều nhánh.",
    "blocks": [
      {
        "type": "code",
        "key": "dictionaryNodeCode",
        "label": "C · Trie Node"
      },
      {
        "type": "code",
        "key": "dictionaryNodeJavaCode",
        "label": "Java · Trie Node"
      },
      {
        "type": "code",
        "key": "dictionaryNodePythonCode",
        "label": "Python · Trie Node"
      },
      {
        "type": "code",
        "key": "dictionarySearchCode",
        "label": "C · Recursive Search"
      },
      {
        "type": "code",
        "key": "dictionarySearchJavaCode",
        "label": "Java · Recursive Search"
      },
      {
        "type": "code",
        "key": "dictionarySearchPythonCode",
        "label": "Python · Recursive Search"
      },
      {
        "type": "code",
        "key": "dictionaryFullCode",
        "label": "C · Full Example"
      },
      {
        "type": "code",
        "key": "dictionaryFullJavaCode",
        "label": "Java · Full Example"
      },
      {
        "type": "code",
        "key": "dictionaryFullPythonCode",
        "label": "Python · Full Example"
      },
      {
        "type": "callout",
        "variant": "important",
        "title": "Wildcard làm complexity thay đổi",
        "text": "Với ký tự thông thường, mỗi bước chỉ có một lựa chọn. Với ., có thể phải thử tới 26 nhánh. Worst case có thể tăng mạnh theo số lượng wildcard."
      },
      {
        "type": "formula",
        "text": "Worst Case ≈ O(26^L)"
      }
    ]
  },
  "word-search-problem": {
    "id": "word-search-problem",
    "number": "25",
    "title": "NeetCode — Word Search II",
    "description": "Đây là bài khó nhất trong nhóm Trie: kết hợp Trie, DFS và Backtracking.",
    "blocks": [
      {
        "type": "heading",
        "text": "Word Search II"
      },
      {
        "type": "p",
        "text": "Cho một board ký tự và một danh sách từ. Tìm tất cả các từ có thể tạo thành trên board. Mỗi bước chỉ được đi sang ô kề nhau theo bốn hướng và không được dùng cùng một ô hai lần trong cùng một từ."
      },
      {
        "type": "visual",
        "name": "board"
      },
      {
        "type": "callout",
        "variant": "important",
        "title": "Vì sao Trie hữu ích ở đây?",
        "text": "Nếu có hàng nghìn từ, chúng ta không muốn DFS độc lập cho từng từ. Trie cho phép chúng ta kiểm tra Prefix ngay trong quá trình DFS."
      }
    ]
  },
  "word-search-thinking": {
    "id": "word-search-thinking",
    "number": "26",
    "title": "Trie + DFS + Backtracking",
    "description": "Đây là pattern quan trọng nhất cần rút ra từ Word Search II.",
    "blocks": [
      {
        "type": "cards",
        "items": [
          {
            "title": "Trie",
            "text": "Biết Prefix nào còn khả thi."
          },
          {
            "title": "DFS",
            "text": "Đi thử các ô lân cận."
          },
          {
            "title": "Backtracking",
            "text": "Đánh dấu ô đã dùng rồi hoàn tác khi quay lại."
          }
        ]
      },
      {
        "type": "steps",
        "items": [
          {
            "title": "Đọc ký tự",
            "text": "Ví dụ ô hiện tại là o."
          },
          {
            "title": "Đi vào Trie",
            "text": "Nếu Trie không có child o → dừng ngay."
          },
          {
            "title": "Có Prefix",
            "text": "Nếu Trie có o → tiếp tục DFS các ô lân cận."
          },
          {
            "title": "Tìm được Word",
            "text": "Nếu Node Trie có thông tin End of Word → đưa Word vào kết quả."
          },
          {
            "title": "Backtrack",
            "text": "Đánh dấu ô lại như cũ để những đường đi khác có thể sử dụng nó."
          }
        ]
      },
      {
        "type": "callout",
        "variant": "tip",
        "title": "Pruning",
        "text": "Trie cho phép cắt nhánh rất sớm. Nếu Prefix hiện tại không tồn tại trong Trie, không cần DFS sâu hơn nữa."
      }
    ]
  },
  "word-search-dry-run": {
    "id": "word-search-dry-run",
    "number": "27",
    "title": "Dry Run Word Search II",
    "description": "Hãy nhìn bài toán như một cây tìm kiếm kết hợp với Trie.",
    "blocks": [
      {
        "type": "steps",
        "items": [
          {
            "title": "Chọn ô bắt đầu",
            "text": "DFS bắt đầu từ một ô bất kỳ trên board."
          },
          {
            "title": "Kiểm tra Trie",
            "text": "Nếu ký tự không xuất hiện ở vị trí hiện tại của Trie → stop."
          },
          {
            "title": "Đi tiếp",
            "text": "Nếu Prefix tồn tại, thử bốn ô hàng xóm."
          },
          {
            "title": "Tìm thấy Word",
            "text": "Node hiện tại có word → thêm vào result."
          },
          {
            "title": "Không đi được nữa",
            "text": "Restore board rồi quay lại Node trước."
          }
        ]
      },
      {
        "type": "formula",
        "text": "Board cell → Trie child → Prefix hợp lệ? → DFS 4 hướng → Word?"
      },
      {
        "type": "callout",
        "variant": "important",
        "title": "Điểm hay nhất",
        "text": "Không phải chỉ có DFS trên Board. Ta đang chạy DFS trên Board đồng thời di chuyển trong Trie."
      }
    ]
  },
  "word-search-code": {
    "id": "word-search-code",
    "number": "28",
    "title": "Code Word Search II",
    "description": "Implementation C kết hợp Trie, DFS và Backtracking.",
    "blocks": [
      {
        "type": "code",
        "key": "wordSearchTrieCode",
        "label": "C · Trie Node"
      },
      {
        "type": "code",
        "key": "wordSearchTrieJavaCode",
        "label": "Java · Trie Node"
      },
      {
        "type": "code",
        "key": "wordSearchTriePythonCode",
        "label": "Python · Trie Node"
      },
      {
        "type": "code",
        "key": "wordSearchDfsCode",
        "label": "C · DFS + Trie"
      },
      {
        "type": "code",
        "key": "wordSearchDfsJavaCode",
        "label": "Java · DFS + Trie"
      },
      {
        "type": "code",
        "key": "wordSearchDfsPythonCode",
        "label": "Python · DFS + Trie"
      },
      {
        "type": "code",
        "key": "wordSearchFullCode",
        "label": "C · Full Example"
      },
      {
        "type": "code",
        "key": "wordSearchFullJavaCode",
        "label": "Java · Full Example"
      },
      {
        "type": "code",
        "key": "wordSearchFullPythonCode",
        "label": "Python · Full Example"
      },
      {
        "type": "callout",
        "variant": "important",
        "title": "Mẹo quan trọng trong implementation",
        "text": "Sau khi tìm được một Word, code đặt next->word = NULL để cùng một Word không bị thêm nhiều lần vào kết quả khi có nhiều đường đi khác nhau."
      },
      {
        "type": "complexity",
        "time": "Phụ thuộc board + Trie",
        "space": "O(T + H)",
        "timeDescription": "Trong worst case có thể phải khám phá rất nhiều đường đi.",
        "spaceDescription": "T là số Node Trie, H là độ sâu DFS."
      }
    ]
  },
  "edge-cases": {
    "id": "edge-cases",
    "number": "29",
    "title": "Edge Cases",
    "description": "Trie có một số trường hợp đặc biệt cần kiểm tra kỹ.",
    "blocks": [
      {
        "type": "cards",
        "items": [
          {
            "title": "Trie rỗng",
            "text": "root != NULL. Search bất kỳ từ nào chưa Insert → false."
          },
          {
            "title": "Search Prefix nhưng không phải Word",
            "text": "insert(\"apple\"): search(\"app\") có thể false nhưng startsWith(\"app\") là true."
          },
          {
            "title": "Insert cùng một Word nhiều lần",
            "text": "insert(\"cat\") lặp lại không cần tạo thêm Node. Chỉ set End of Word = true."
          },
          {
            "title": "Word dài hơn Prefix",
            "text": "Với app và apple, Node p có thể vừa là End of Word vừa có Child."
          }
        ]
      }
    ]
  },
  "common-mistakes": {
    "id": "common-mistakes",
    "number": "30",
    "title": "Lỗi thường gặp",
    "description": "Những lỗi này xuất hiện rất nhiều khi tự implement Trie.",
    "blocks": [
      {
        "type": "steps",
        "items": [
          {
            "title": "Quên khởi tạo children",
            "text": "Pointer chưa được gán NULL có thể chứa địa chỉ rác."
          },
          {
            "title": "Quên isEndOfWord",
            "text": "Khi đó bạn không phân biệt được Word hoàn chỉnh và Prefix."
          },
          {
            "title": "Search trả true ngay khi đi hết String",
            "text": "Phải kiểm tra End of Word."
          },
          {
            "title": "Với '.', chỉ thử một Child",
            "text": "Wildcard có thể match nhiều ký tự nên cần DFS qua nhiều nhánh."
          },
          {
            "title": "Word Search II nhưng không Backtrack",
            "text": "Nếu không restore board sau DFS, các đường đi khác có thể bị ảnh hưởng."
          }
        ]
      },
      {
        "type": "callout",
        "variant": "tip",
        "title": "Quy tắc vàng",
        "text": "Khi làm Trie, luôn hỏi: Node này đang đại diện cho Prefix nào? Và Prefix này đã phải là một Word hoàn chỉnh chưa?"
      }
    ]
  },
  "recognition": {
    "id": "recognition",
    "number": "31",
    "title": "Nhận diện Pattern Trie",
    "description": "Đây là phần quan trọng để biết khi nào nên nghĩ tới Trie.",
    "blocks": [
      {
        "type": "cards",
        "items": [
          {
            "title": "Prefix Search",
            "text": "Keyword như prefix, startsWith, autocomplete, suggestions. Pattern: startsWith(prefix)."
          },
          {
            "title": "Dictionary",
            "text": "Lưu rất nhiều Word và cần kiểm tra Word tồn tại. Pattern: insert / search."
          },
          {
            "title": "Word Search",
            "text": "Tìm nhiều String trên board, đặc biệt khi có thể prune theo Prefix. Pattern: Trie + DFS."
          },
          {
            "title": "Wildcard Search",
            "text": "Ký tự có thể match nhiều khả năng. Pattern: . → DFS."
          }
        ]
      },
      {
        "type": "callout",
        "variant": "important",
        "title": "Câu hỏi nhận diện",
        "text": "Khi đề bài chứa các từ prefix · word dictionary · autocomplete · startsWith · wildcard · search words, hãy nghĩ tới Trie trước khi nghĩ tới cấu trúc khác."
      }
    ]
  },
  "summary": {
    "id": "summary",
    "number": "32",
    "title": "Tổng kết Tries",
    "description": "Toàn bộ kiến thức từ Node đầu tiên tới Trie + DFS.",
    "blocks": [
      {
        "type": "cards",
        "items": [
          {
            "title": "Trie",
            "text": "Tree chuyên dùng để biểu diễn String và Prefix."
          },
          {
            "title": "children",
            "text": "Lưu đường đi tới ký tự tiếp theo."
          },
          {
            "title": "End of Word",
            "text": "Phân biệt Word hoàn chỉnh và Prefix."
          },
          {
            "title": "Search",
            "text": "Đi theo từng ký tự trong Trie."
          },
          {
            "title": "DFS",
            "text": "Xuất hiện khi wildcard hoặc Word Search tạo nhiều nhánh."
          },
          {
            "title": "Pruning",
            "text": "Trie giúp dừng sớm khi Prefix không tồn tại."
          }
        ]
      },
      {
        "type": "table",
        "headers": [
          "Problem",
          "Pattern",
          "Ý tưởng chính",
          "Complexity"
        ],
        "rows": [
          [
            "Implement Trie",
            "Trie",
            "Insert / Search / StartsWith",
            "O(L)"
          ],
          [
            "Design Add and Search Words",
            "Trie + DFS",
            ". có thể match nhiều Child",
            "Worst ≈ O(26^L)"
          ],
          [
            "Word Search II",
            "Trie + DFS + Backtracking",
            "Tìm nhiều Word trên Board + Prefix Pruning",
            "Board-dependent"
          ]
        ]
      },
      {
        "type": "callout",
        "variant": "important",
        "title": "Mental model cuối cùng",
        "text": "Root → Character → Prefix → End of Word → Search → Wildcard / DFS → Trie + DFS + Backtracking."
      }
    ]
  }
};
