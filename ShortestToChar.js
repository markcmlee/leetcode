// https://leetcode.com/problems/shortest-distance-to-a-character/

const shortestToChar = (S, C) => {
  const result = [];
  for (let i = 0; i < S.length; i++) {
    for (let j = 0; j < S.length; j++) {
      if (S[i + j] === C || S[i - j] === C) {
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
