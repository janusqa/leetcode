/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
const subsets = function (nums) {
    const results = [];
    combinations(nums, 0, results);
    return results;
};

const combinations = function (nums, start, results, memo = []) {
    results.push([...memo]);

    for (let i = start; i < nums.length; i++) {
        memo.push(nums[i]);
        combinations(nums, i + 1, results, memo);
        memo.pop();
    }
};

console.log(subsets([1, 2, 3]));
console.log(subsets([0]));
