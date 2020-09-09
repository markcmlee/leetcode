// shortest distance between words
const solution = (array, word1, word2) => {
  let index1;
  let index2;
  let difference = Infinity;

  for (let i = 0; i < array.length; i++) {
    if (array[i] == word1) index1 = i;
    if (array[i] == word2) index2 = i;
    if (Math.abs(index1 - index2) < difference) {
      difference = Math.abs(index1 - index2);
    }
  }

  return difference;
};

console.log(
  solution(
    ["practice", "makes", "perfect", "coding", "makes"],
    "coding",
    "practice"
  )
);

console.log(
  solution(
    ["practice", "makes", "perfect", "coding", "makes"],
    "makes",
    "coding"
  )
);

console.log(solution(["a", "a", "b", "b"], "a", "b"));

//logger
// const Logger = function () {
//   cache = {};
// };

// Logger.prototype.shouldPrintMessage = function (timestamp, message) {
//   for (let i = 1; i < 10; i++) {
//     if (cache[timestamp - i] === message) {
//       return false;
//     }
//   }
//   cache[timestamp] = message;
//   return true;
// };
const Logger = function () {
  this.map = {};
  this.shouldPrintMessage = (ts, m) =>
    map[m] >= 0 && ts - map[m] < 10 ? false : ((this.map[m] = ts), true);
};

const obj = new Logger();

const param1 = obj.shouldPrintMessage(2, "foo");
console.log(param1);

const param2 = obj.shouldPrintMessage(4, "foo");
console.log(param2);
