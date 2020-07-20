// https://leetcode.com/problems/split-a-string-in-balanced-strings/

const balancedStringSplit = (s) => {
  let count = 0;
  let balance = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "R") balance++;
    else balance--;

    if (balance === 0) count++;
  }
  return count;
};

console.log(balancedStringSplit("RLRRLLRLRL")); //4
console.log(balancedStringSplit("RLLLLRRRLR")); //3
console.log(balancedStringSplit("LLLLRRRR")); //1
console.log(balancedStringSplit("RLRRRLLRLL")); //2
