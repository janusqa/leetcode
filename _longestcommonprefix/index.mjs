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
    if (!sortedStrs.every((str) => str[i] === sortedStrs[0][i]))
      return commonPrefix;
    commonPrefix += sortedStrs[0][i];
  }

  return commonPrefix;
};

console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
console.log(longestCommonPrefix(['dog', 'racecar', '', 'car']));
