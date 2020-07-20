// https://leetcode.com/problems/decompress-run-length-encoded-list/

const decompressRLElist = (nums) => {
  const result = [];
  for (let i = 1; i < nums.length; i += 2) {
    result.push(...new Array(nums[i - 1]).fill(nums[i]));
  }
  return result;
};

console.log(decompressRLElist([1, 2, 3, 4])); //[2, 4, 4, 4]
console.log(decompressRLElist([1, 1, 2, 3])); //[1, 3, 3]
