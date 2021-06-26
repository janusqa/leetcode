'use strict';

/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function (s) {
  const romanNumerals = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  // const romanNumerals = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
  // const romanNumeralsAsInt = new Map();

  // let intValue = 0;
  // romanNumerals.forEach((numeral, index) => {
  //   if (index === 0) intValue = 1;
  //   else if (index % 2) intValue *= 5;
  //   else intValue *= 2;
  //   romanNumeralsAsInt.set(numeral, intValue);
  // });

  // return s
  //   .split('')
  //   .reverse()
  //   .reduce(
  //     (accumulator, currentValue, index, original) =>
  //       !index ||
  //       romanNumeralsInt.get(currentValue) >=
  //         romanNumeralsInt.get(original[index - 1])
  //         ? accumulator + romanNumeralsInt.get(currentValue)
  //         : accumulator - romanNumeralsInt.get(currentValue),
  //     0
  //   );

  return s
    .split('')
    .reverse()
    .reduce(
      (accumulator, currentValue, index, original) =>
        !index ||
        romanNumerals[currentValue] >= romanNumerals[original[index - 1]]
          ? accumulator + romanNumerals[currentValue]
          : accumulator - romanNumerals[currentValue],
      0
    );
};

console.log(romanToInt('III'));
console.log(romanToInt('IV'));
console.log(romanToInt('IX'));
console.log(romanToInt('LVIII'));
console.log(romanToInt('MCMXCIV'));
console.log(romanToInt('XXVII'));
