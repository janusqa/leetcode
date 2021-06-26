'use strict';

/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function (strs) {
  const shortestString = Math.min(
    ...strs.map((currentValue) => currentValue.length)
  );

  const sortedStrs = strs.sort((a, b) =>
    a.localeCompare(b, 'en', { ignorePunctuation: true })
  );

  let commonPrefix = '';

  for (let i = 0; i < shortestString; i++) {
    let temp;
    for (const [j, str] of sortedStrs.entries()) {
      if (str.length > i) {
        if (!j) temp = str[i];
        else {
          if (str[i] !== temp) return commonPrefix;
        }
      }
    }
    commonPrefix += temp;
  }

  return commonPrefix;
};

console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
console.log(longestCommonPrefix(['dog', 'racecar', '', 'car']));
