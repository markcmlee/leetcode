// https://leetcode.com/problems/flood-fill/

// const floodFill = (image, sr, sc, newColor) => {
//   const startingColor = image[sr][sc];
//   if (startingColor === newColor) return image;
//   const dfs = (sr, sc) => {
//     if (sr < 0 || sc < 0 || sr >= image.length || sc >= image[0].length) return;
//     if (image[sr][sc] !== startingColor) return;
//     image[sr][sc] = newColor;
//     dfs(sr - 1, sc);
//     dfs(sr + 1, sc);
//     dfs(sr, sc + 1);
//     dfs(sr, sc - 1);
//   };
//   dfs(sr, sc);
//   return image;
// };

//time: N^2
//space: N

//! MORE OPTIMIZED
const floodFill = (image, sr, sc, newColor, firstColor = image[sr][sc]) => {
  if (
    sr < 0 ||
    sc < 0 ||
    sr >= image.length ||
    sc >= image[sr].length ||
    image[sr][sc] !== firstColor ||
    image[sr][sc] === newColor
  ) {
    return image;
  }

  image[sr][sc] = newColor;

  floodFill(image, sr + 1, sc, newColor, firstColor);
  floodFill(image, sr - 1, sc, newColor, firstColor);
  floodFill(image, sr, sc + 1, newColor, firstColor);
  floodFill(image, sr, sc - 1, newColor, firstColor);

  return image;
};

console.log(
  floodFill(
    [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ],
    1,
    1,
    2
  )
);
