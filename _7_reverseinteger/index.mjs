'use strict';
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let reversed = 0;
  const sign = x < 0 ? -1 : 1;
  x = Math.abs(x);
  while (x) {
    const remainder = x % 10;
    reversed = reversed * 10 + remainder;
    x = Math.floor(x / 10);
  }
  x = reversed * sign;

  return x <= 2 ** 31 - 1 && x >= (-2) ** 31 ? x : 0;
};

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));
console.log(reverse(0));
