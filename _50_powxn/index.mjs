/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
const myPow = function myPow(x, n) {
    if (x === 1) return 1;
    if (x === 0) return 0;
    if (n === 0) return 1;
    if (n === 1) return x;

    if (n % 2 === 0) {
        const result = myPow(x, Math.abs(n) / 2) ** 2;
        return n > 0 ? result : 1 / result;
    } else {
        const result = myPow(x, (Math.abs(n) - 1) / 2) ** 2;
        return n > 0 ? result * x : 1 / (result * x);
    }
};

console.log(myPow(0.00001, 2147483647));
console.log(myPow(2, -2));
console.log(myPow(2, -2147483648));
