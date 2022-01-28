/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  let number = 0;
  let sign = 1;
  const upperLimit = 2 ** 31 - 1;
  const lowerLimit = -(2 ** 31);

  let parsingDigit = false;

  for (let i = 0; i < s.length; i++) {
    if (s.charCodeAt(i) > 47 && s.charCodeAt(i) < 58) {
      if (!parsingDigit) {
        parsingDigit = true;
        if (i > 0 && s.charCodeAt(i - 1) === 45) sign *= -1;
      }
      number = number * 10 + (s.charCodeAt(i) - '0'.charCodeAt(0));
      if (number * sign > upperLimit) return upperLimit;
      if (number * sign < lowerLimit) return lowerLimit;
    } else {
      if (parsingDigit) break;
      else if (s.charCodeAt(i) === 45 || s.charCodeAt(i) === 43) {
        parsingDigit = true;
        sign = s.charCodeAt(i) === 45 ? -1 : 1;
      } else if (s.charCodeAt(i) !== 32) break;
    }
  }

  return number > 0 ? number * sign : number;
};

console.log(myAtoi('42'));
console.log(myAtoi('   -42'));
console.log(myAtoi('4193 with words'));
console.log(myAtoi('words and 987'));
console.log(myAtoi(''));
console.log(myAtoi(' '));
console.log(myAtoi(' + '));
console.log(myAtoi(' +-1'));
console.log(myAtoi('-91283472332'));
