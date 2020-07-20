// https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/

const maxProduct = (nums) => {
  const sorted = nums.sort((a, b) => b - a);
  return (sorted[0] - 1) * (sorted[1] - 1);
};

console.log(maxProduct([3, 4, 5, 2])); //12
console.log(maxProduct([1, 5, 4, 5])); //16
console.log(maxProduct([3, 7])); //12
