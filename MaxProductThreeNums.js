// https://leetcode.com/problems/maximum-product-of-three-numbers/

const maximumProduct = (nums) => {
  const sorted = nums.sort((a, b) => b - a);
  const obvious = sorted[0] * sorted[1] * sorted[2];
  const negatives =
    sorted[sorted.length - 1] * sorted[sorted.length - 2] * sorted[0];
  return obvious > negatives ? obvious : negatives;
};

console.log(maximumProduct([1, 2, 3])); //6
console.log(maximumProduct([-4, -3, -2, -1, 60])); //720
