/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
const combine = function (n, k) {
    const nums = Array.from(Array(n).keys(), (key) => (key += 1));
    const results = { combinations: new Set() };
    combinations(nums, k, results);
    return [...results.combinations];
};

const combinations = function (nums, k, results) {
    if (nums.length === 0) return [[]];

    const chosentEl = nums[0];
    const rest = nums.slice(1);
    const combinationsWithoutChosenEl = combinations(rest, k, results);
    const combinationsWithChosenEl = [];
    combinationsWithoutChosenEl.forEach((combinationWithOutChosenEl) => {
        const combinationWithChosenEl = [
            ...combinationWithOutChosenEl,
            chosentEl,
        ];
        combinationsWithChosenEl.push(combinationWithChosenEl);
        if (combinationWithOutChosenEl.length === k)
            results['combinations'].add(combinationWithOutChosenEl);
        if (combinationWithChosenEl.length === k)
            results['combinations'].add(combinationWithChosenEl);
    });

    return [...combinationsWithoutChosenEl, ...combinationsWithChosenEl];
};

console.log(combine(4, 2));
// console.log(combine(1, 1));
//console.log(combine(20, 16));
