/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
const divide = function (dividend, divisor) {
  const INT_MAX = 2 ** 31 - 1;
  const negative = (dividend < 0) ^ (divisor < 0);
  let absDividend = dividend < 0 ? -dividend : dividend;
  const absDivisor = divisor < 0 ? -divisor : divisor;

  if (divisor === 0) return negative ? -(INT_MAX + 1) : INT_MAX;
  if (dividend === -(INT_MAX + 1) && divisor === -1) return INT_MAX;
  if (absDividend === absDivisor) return negative ? -1 : 1;

  let quotient = 0;

  while (absDividend >= absDivisor) {
    let shift = 0;
    while (absDividend >= absDivisor << shift) {
      shift++;
      if (absDivisor << shift < 0) break;
    }
    quotient += 1 << (shift - 1);
    absDividend -= absDivisor << (shift - 1);
  }
  return negative ? -quotient : quotient;
};

console.log(divide(10, 3));
console.log(divide(7, -3));
console.log(divide(2147483647, 1));
console.log(divide(-2147483648, -2147483648));
console.log(divide(-2147483648, -1));
