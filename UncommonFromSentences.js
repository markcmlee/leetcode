// https://leetcode.com/problems/uncommon-words-from-two-sentences/

const uncommonFromSentences = (A, B) => {
  const words = {};
  const result = [];
  const wordsArray = A.split(" ").concat(B.split(" "));
  wordsArray.forEach((word) =>
    words[word] ? (words[word] += 1) : (words[word] = 1)
  );
  for (let word in words) {
    if (words[word] === 1) {
      result.push(word);
    }
  }
  return result;
};
