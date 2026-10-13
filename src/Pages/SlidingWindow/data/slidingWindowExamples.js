// Các đoạn C ban đầu được giữ nguyên; Java và Python được thêm làm ví dụ minh họa.
export const basicWindowCode = {
  C: `int left = 0;
int right = 0;

while (right < n) {


// Thêm phần tử mới vào Window
right++;

// Nếu Window không hợp lệ
// thì thu nhỏ từ bên trái
while (/* invalid */) {
    left++;
}

// Window hiện tại hợp lệ
// xử lý kết quả


}`,
  Java: `int left = 0;
int right = 0;

while (right < n) {
    // Thêm phần tử mới vào Window
    right++;

    // Nếu Window không hợp lệ thì thu nhỏ từ bên trái
    while (/* invalid */) {
        left++;
    }

    // Window hiện tại hợp lệ: xử lý kết quả
}`,
  Python: `left = 0
right = 0

while right < n:
    # Thêm phần tử mới vào Window
    right += 1

    # Nếu Window không hợp lệ thì thu nhỏ từ bên trái
    while invalid:
        left += 1

    # Window hiện tại hợp lệ: xử lý kết quả`,
};

export const fixedWindowCode = {
  C: `int windowSum = 0;

// Tạo Window đầu tiên
for (int i = 0; i < k; i++) {
windowSum += nums[i];
}

// Trượt Window
for (int right = k; right < n; right++) {
windowSum += nums[right];
windowSum -= nums[right - k];
}`,
  Java: `int windowSum = 0;

// Tạo Window đầu tiên
for (int i = 0; i < k; i++) {
    windowSum += nums[i];
}

// Trượt Window
for (int right = k; right < n; right++) {
    windowSum += nums[right];
    windowSum -= nums[right - k];
}`,
  Python: `window_sum = 0

# Tạo Window đầu tiên
for i in range(k):
    window_sum += nums[i]

# Trượt Window
for right in range(k, n):
    window_sum += nums[right]
    window_sum -= nums[right - k]`,
};

export const variableWindowCode = {
  C: `int left = 0;

for (int right = 0; right < n; right++) {


// Mở rộng Window
// bằng cách thêm nums[right]

while (/* Window không hợp lệ */) {
    // Loại nums[left]
    left++;
}

// Window [left ... right]
// hiện đang hợp lệ


}`,
  Java: `int left = 0;

for (int right = 0; right < n; right++) {
    // Mở rộng Window bằng cách thêm nums[right]

    while (/* Window không hợp lệ */) {
        // Loại nums[left]
        left++;
    }

    // Window [left ... right] hiện đang hợp lệ
}`,
  Python: `left = 0

for right in range(n):
    # Mở rộng Window bằng cách thêm nums[right]

    while not window_is_valid():
        # Loại nums[left]
        left += 1

    # Window [left ... right] hiện đang hợp lệ`,
};

export const stockBruteForceCode = {
  C: `int maxProfit(
int* prices,
int pricesSize
) {
int maxProfit = 0;


for (int buy = 0;
     buy < pricesSize;
     buy++) {

    for (int sell = buy + 1;
         sell < pricesSize;
         sell++) {

        int profit =
            prices[sell] - prices[buy];

        if (profit > maxProfit) {
            maxProfit = profit;
        }
    }
}

return maxProfit;


}`,
  Java: `public int maxProfit(int[] prices) {
    int maxProfit = 0;

    for (int buy = 0; buy < prices.length; buy++) {
        for (int sell = buy + 1; sell < prices.length; sell++) {
            int profit = prices[sell] - prices[buy];
            if (profit > maxProfit) {
                maxProfit = profit;
            }
        }
    }

    return maxProfit;
}`,
  Python: `def max_profit(prices):
    max_profit = 0

    for buy in range(len(prices)):
        for sell in range(buy + 1, len(prices)):
            profit = prices[sell] - prices[buy]
            if profit > max_profit:
                max_profit = profit

    return max_profit`,
};

export const stockTwoPointerCode = {
  C: `int maxProfit(
int* prices,
int pricesSize
) {
int left = 0;
int right = 1;


int maxProfit = 0;

while (right < pricesSize) {

    if (prices[right] > prices[left]) {
        int profit =
            prices[right] - prices[left];

        if (profit > maxProfit) {
            maxProfit = profit;
        }
    } else {
        left = right;
    }

    right++;
}

return maxProfit;


}`,
  Java: `public int maxProfit(int[] prices) {
    int left = 0;
    int right = 1;
    int maxProfit = 0;

    while (right < prices.length) {
        if (prices[right] > prices[left]) {
            int profit = prices[right] - prices[left];
            if (profit > maxProfit) {
                maxProfit = profit;
            }
        } else {
            left = right;
        }

        right++;
    }

    return maxProfit;
}`,
  Python: `def max_profit(prices):
    left = 0
    right = 1
    max_profit = 0

    while right < len(prices):
        if prices[right] > prices[left]:
            profit = prices[right] - prices[left]
            if profit > max_profit:
                max_profit = profit
        else:
            left = right

        right += 1

    return max_profit`,
};

export const stockMinPriceCode = {
  C: `int maxProfit(
int* prices,
int pricesSize
) {
int minPrice = prices[0];
int maxProfit = 0;


for (int i = 1;
     i < pricesSize;
     i++) {

    int profit =
        prices[i] - minPrice;

    if (profit > maxProfit) {
        maxProfit = profit;
    }

    if (prices[i] < minPrice) {
        minPrice = prices[i];
    }
}

return maxProfit;


}`,
  Java: `public int maxProfit(int[] prices) {
    int minPrice = prices[0];
    int maxProfit = 0;

    for (int i = 1; i < prices.length; i++) {
        int profit = prices[i] - minPrice;
        if (profit > maxProfit) {
            maxProfit = profit;
        }
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        }
    }

    return maxProfit;
}`,
  Python: `def max_profit(prices):
    min_price = prices[0]
    max_profit = 0

    for price in prices[1:]:
        profit = price - min_price
        if profit > max_profit:
            max_profit = profit
        if price < min_price:
            min_price = price

    return max_profit`,
};
