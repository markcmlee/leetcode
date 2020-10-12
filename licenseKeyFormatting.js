// https://leetcode.com/problems/license-key-formatting/

const licenseKeyFormatting = (S, K) => {
  const string = S.replace(/-/g, '').toUpperCase();
  const stringArr = string.split('');
  for (let i = stringArr.length - 1 - K; i >= 0; i -= K) {
    stringArr[i] = stringArr[i] + '-'
  }
  return stringArr.join('')
}


console.log(licenseKeyFormatting("5F3Z-2e-9-w", 4));

console.log(licenseKeyFormatting("2-5g-3-J", 2))