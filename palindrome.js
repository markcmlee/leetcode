// https://leetcode.com/problems/valid-palindrome/

const isPalindrome = (s) => {
  const normal = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
  const mid = Math.floor(normal.length / 2);
  for (let i = 0; i < mid; i++) {
    if (normal[i] !== normal[normal.length - 1 - i]) return false;
  }
  return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama")); //true
console.log(isPalindrome("race a car")); //false
