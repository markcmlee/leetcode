// https://leetcode.com/problems/maximum-69-number/

const maximum69Number = (num) => {
  return num.toString().replace(6, 9);
};

console.log(maximum69Number(9669)); //9969
console.log(maximum69Number(9996)); //9999
console.log(maximum69Number(9999)); //9969
