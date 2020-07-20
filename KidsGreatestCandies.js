// https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/

const kidsWithCandies = (candies, extraCandies) => {
  const max = Math.max(...candies);
  return candies.map((kid) => kid + extraCandies >= max);
};

console.log(kidsWithCandies([2, 3, 5, 1, 3], 3)); //[t, t, t, f, t]
console.log(kidsWithCandies([4, 2, 1, 1, 2], 1)); //[t, f, f, f, f]
console.log(kidsWithCandies([12, 1, 12], 10)); //[12, 1, 12]
