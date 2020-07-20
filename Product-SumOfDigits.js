// https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/

const subtractProductAndSum = (n) => {
  const string = n.toString();
  let product = Number(string[0]);
  let sum = Number(string[0]);
  for (let i = 1; i < string.length; i++) {
    product *= Number(string[i]);
    sum += Number(string[i]);
  }
  return product - sum;
};

const subtractProductAndSum2 = (n) => {
  let sum = 0;
  let product = 1;
  while (n > 0) {
    const mod = n % 10;
    sum += mod;
    product *= mod;
    n = Math.floor(n / 10);
  }
  return product - sum;
};

// Best solution
const subtractProductAndSum3 = (n) => {
  let result = (n + "").split("").reduce(
    (a, b) => {
      return [a[0] * b, a[1] + +b];
    },
    [1, 0]
  );
  return result[0] - result[1];
};

console.log(subtractProductAndSum(234)); //15
console.log(subtractProductAndSum(4421)); //21
