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
    const temp = sortedStrs[0][i];
    if (!sortedStrs.every((str) => str[i] === temp)) return commonPrefix;
    // for (const str of sortedStrs) {
    //   if (str[i] !== temp) return commonPrefix;
    // }
    commonPrefix += temp;
  }

  return commonPrefix;
};

console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
console.log(longestCommonPrefix(['dog', 'racecar', '', 'car']));
