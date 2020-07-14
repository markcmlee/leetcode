// https://leetcode.com/problems/two-city-scheduling/

const twoCitySchedCost = (costs) => {
  // sorts by differences
  return (
    costs
      .sort((a, b) => a[0] - a[1] - (b[0] - b[1]))
      // diff way to sort
      // .sort(([a1, b1], [a2, b2]) => (a1 - b1) - (a2 - b2))
      .reduce((acc, [a, b], i) => acc + (i < costs.length / 2 ? a : b), 0)
  );
};

console.log(
  twoCitySchedCost([
    [10, 20],
    [30, 200],
    [400, 50],
    [30, 20],
  ])
); // 110
