// https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/

const finalPrices = (prices) => {
  const result = [];
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] <= prices[i]) {
        result.push(prices[i] - prices[j]);
        break;
      }
      if (j === prices.length - 1) {
        result.push(prices[i]);
      }
    }
  }
  result.push(prices[prices.length - 1]);
  return result;
};

console.log(finalPrices([8, 4, 6, 2, 3])); //[4, 2, 4, 2, 3]
console.log(finalPrices([1, 2, 3, 4, 5])); //[1, 2, 3, 4, 5]
console.log(finalPrices([10, 1, 1, 6])); //[9, 0, 1, 6]
