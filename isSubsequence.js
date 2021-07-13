// https://leetcode.com/problems/is-subsequence/

const isSubsequence = (s, t) => {
  let i = 0;
  let j = 0;

  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) i++;
    j++;
  }

  return i === s.length;
};

console.log(isSubsequence("abc", "ahbgdc")); // true
console.log(isSubsequence("acx", "ahbgdc")); // false
