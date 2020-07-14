// https://leetcode.com/problems/shortest-distance-to-a-character/

const shortestToChar = (S, C) => {
  const result = [];
  const split = S.split("");
  for (let i = 0; i < split.length; i++) {
    for (let j = 0; j < split.length; j++) {
      if (split[i + j] === C || split[i - j] === C) {
        result.push(j);
        break;
      }
    }
  }
  return result;
};

console.log(shortestToChar("loveleetcode", "e"));
// [l, o, v, e, l, e, e, t, c, o, d, e]
// [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]
