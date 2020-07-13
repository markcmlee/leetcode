// https://leetcode.com/problems/lemonade-change/

const lemonadeChange = (bills) => {
  const tally = {};
  for (let i = 0; i < bills.length; i++) {
    tally[bills[i]] ? (tally[bills[i]] += 1) : (tally[bills[i]] = 1);
    if (bills[i] === 10) {
      if (tally[5] >= 1) {
        tally[5] -= 1;
      } else return false;
    }
    if (bills[i] === 20) {
      if (tally[10] >= 1 && tally[5] >= 1) {
        tally[10] -= 1;
        tally[5] -= 1;
      } else if (tally[5] >= 3) {
        tally[5] -= 3;
      } else return false;
    }
  }
  return true;
};

console.log(lemonadeChange([5, 5, 5, 10, 20])); // true
console.log(lemonadeChange([5, 5, 10])); // true
console.log(lemonadeChange([10, 10])); // false
console.log(lemonadeChange([5, 5, 10, 10, 20])); // false
console.log(lemonadeChange([5, 5, 5, 5, 10, 5, 10, 10, 10, 20])); // true
console.log(lemonadeChange([5, 5, 5, 5, 20, 20, 5, 5, 5, 5])); // false

const obj = { test: 0 };
console.log(!obj["test"]);
