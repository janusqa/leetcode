/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = function (digits) {
  const keymap = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  };
  const result = combinations(digits, keymap);
  return result.length === 1 && result[0].length == 0 ? [] : result;
};

const combinations = (digits, keymap) => {
  if (digits.length === 0) return [''];

  const cominbations_full = [];

  const first = keymap[digits[0]];
  const rest = digits.slice(1);
  for (let char of first) {
    const combinations_rest = combinations(rest, keymap);
    combinations_rest.forEach((comb) => {
      cominbations_full.push(`${char}${comb}`);
    });
  }

  return cominbations_full;
};

// Research for generation combinations based
// on a string of characters. It's not useful
// for this problem
const combinations_1 = (str) => {
  if (str.length === 0) return [''];
  const first = str[0];
  const rest = str.slice(1);
  const combinations_with_rest = combinations(rest);
  const combinations_with_first = [];
  combinations_with_rest.forEach((comb) => {
    combinations_with_first.push(`${first}${comb}`);
  });
  return [...combinations_with_rest, ...combinations_with_first];
};

console.log(letterCombinations('23'));
console.log(letterCombinations(''));
console.log(letterCombinations('2'));
// console.log(letterCombinations('23456789'));
