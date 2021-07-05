'use strict';

/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function (strs) {
  const shortestStringLength = strs.reduce(
    (accummulator, currentValue) =>
      currentValue.length < accummulator ? currentValue.length : accummulator,
    strs[0].length
  );

  const sortedStrs = strs.sort((a, b) =>
    a.localeCompare(b, 'en', { ignorePunctuation: true })
  );

  let commonPrefix = '';

  // Since list is sorted we need only check first and last stings
  // in list of strings. We also only need to check as many chars
  // as in the first string in sorted list, since it will be
  // the shortes string
  for (let i = 0; i < shortestStringLength; i++) {
    if (sortedStrs[0][i] !== sortedStrs[sortedStrs.length - 1][i])
      return commonPrefix;
    commonPrefix += sortedStrs[0][i];
  }

  return commonPrefix;
};

console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
console.log(longestCommonPrefix(['dog', 'racecar', '', 'car']));
console.log(longestCommonPrefix(['dogs']));
//console.log(longestCommonPrefix([]));
