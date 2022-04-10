/**
 * @param {number} n
 * @return {string}
 */
const countAndSay = function countAndSay(n) {
    if (n == 1) return '1';

    return say(countAndSay(n - 1));
};

const say = function say(n) {
    let result = '';

    let start = 0;
    let end = start;

    while (end < n.length) {
        if (n[end] !== n[start]) {
            result = `${result}${end - start}${n[start]}`;
            start = end;
        }
        end++;
    }
    result = `${result}${end - start}${n[start]}`;

    return result;
};

console.log(countAndSay(1));
console.log(countAndSay(2));
console.log(countAndSay(3));
console.log(countAndSay(4));
