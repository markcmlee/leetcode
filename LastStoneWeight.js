// https://leetcode.com/problems/last-stone-weight/

const lastStoneWeight = (stones) => {
  const smash = (array) => {
    const sorted = stones.sort((a, b) => b - a);
    const fightResult = array[0] - array[1];
    array.splice(0, 2, fightResult);
    return sorted;
  };
  while (stones.length > 1) {
    smash(stones);
  }
  return stones;
};

console.log(lastStoneWeight([2, 7, 4, 1, 8, 1]));
