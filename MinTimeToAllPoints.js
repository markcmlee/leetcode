// https://leetcode.com/problems/minimum-time-visiting-all-points/

const minTimeToVisitAllPoints = (points) => {
  if (points.length < 2) return 0;
  let counter = 0;
  for (let i = 1; i < points.length; i++) {
    const x = Math.abs(points[i - 1][0] - points[i][0]);
    const y = Math.abs(points[i - 1][1] - points[i][1]);
    counter += Math.max(x, y);
  }
  return counter;
};

console.log(
  minTimeToVisitAllPoints([
    [1, 1],
    [3, 4],
    [-1, 0],
  ])
); //7

console.log(
  minTimeToVisitAllPoints([
    [3, 2],
    [-2, 2],
  ])
); //5
