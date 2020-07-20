// https://leetcode.com/problems/jewels-and-stones/

const numJewelsInStones = (J, S) => {
  let counter = 0;
  for (let i = 0; i < J.length; i++) {
    for (let j = 0; j < S.length; j++) {
      if (J[i] === S[j]) counter++;
    }
  }
  return counter;
};

// Better solution
const numJewelsInStones2 = (J, S) => {
  const jewels = new Set(J);
  return S.split("").reduce((acc, curr) => acc + jewels.has(curr), 0);
};

console.log(numJewelsInStones("aA", "aAAbbbb")); //3
console.log(numJewelsInStones("z", "ZZ")); //0
