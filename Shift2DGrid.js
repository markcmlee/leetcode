// https://leetcode.com/problems/shift-2d-grid/

const shiftGrid = (grid, k) => {
  const flat = grid.flat();
  const result = [];
  for (let i = 0; i < k; i++) {
    const popped = flat.pop();
    flat.splice(0, 0, popped);
  }
  while (flat.length > 0) {
    result.push(flat.splice(0, grid[0].length));
  }
  return result;
};

console.log(
  shiftGrid(
    [
      [3, 8, 1, 9],
      [19, 7, 2, 5],
      [4, 6, 11, 10],
      [12, 0, 21, 13],
    ],
    4
  )
);
