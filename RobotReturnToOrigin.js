const judgeCircle = (moves) => {
  const movement = {};
  const directions = moves.split("");
  directions.forEach((move) => {
    movement[move] ? (movement[move] += 1) : (movement[move] = 1);
  });

  return movement["R"] === movement["L"] && movement["U"] === movement["D"];
};

console.log(judgeCircle("UDRLUD"));
