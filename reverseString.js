// https://leetcode.com/problems/reverse-string/

const reverseString = (s) => {
  const mid = Math.floor(s.length / 2);
  for (let i = 0; i < mid; i++) {
    const temp = s[i];
    s[i] = s[s.length - 1 - i];
    s[s.length - 1 - i] = temp;
  }
  return s;
};

console.log(reverseString(["h","e","l","l","o"])); //["o","l","l","e","h"]
console.log(reverseString(["H","a","n","n","a","h"])); //["h","a","n","n","a","H"]