/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
const combine = function (n, k) {
    const results = [];
    combinations(n, 1, k, results);
    return results;
};

const combinations = function (n, start, k, results, memo = []) {
    if (memo.length === k) {
        results.push([...memo]);
        return;
    }

    for (let i = start; i <= n; i++) {
        memo.push(i);
        combinations(n, i + 1, k, results, memo);
        memo.pop();
    }
};

console.log(combine(3, 2));
console.log(combine(4, 2));
console.log(combine(1, 1));
console.log(combine(20, 16));
