// https://leetcode.com/problems/fibonacci-number/

const fib = (N) => {
  const memo = {};
  if (memo[N]) return memo[N];
  if (N === 0) return 0;
  if (N === 1) return 1;
  if (N === 2) return 1;
  const fibn = fib(N - 1) + fib(N - 2);
  memo[N] = fibn;
  return fibn;
};

// Better solution
const fib2 = (N) => {
  return N < 2 ? N : fib(N - 2) + fib(N - 1);
};

console.log(fib(2)); //1
console.log(fib(3)); //2
console.log(fib(4)); //3
