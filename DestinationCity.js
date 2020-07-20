// https://leetcode.com/problems/destination-city/

const destCity = (paths) => {
  const cities = new Map();
  paths.forEach((path) => {
    cities.set(path[0], cities.has(path[0]) ? 0 : 1);
    cities.set(path[1], cities.has(path[1]) ? 0 : -1);
  });
  for (const city of cities) {
    if (city[1] === -1) {
      return city[0];
    }
  }
};

console.log(
  destCity([
    ["London", "New York"],
    ["New York", "Lima"],
    ["Lima", "Sao Paulo"],
  ])
); //Sao Paulo

console.log(
  destCity([
    ["B", "C"],
    ["D", "B"],
    ["C", "A"],
  ])
); //A

console.log(destCity([["A", "Z"]])); //Z
