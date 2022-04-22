/**
 * @param {number[]} nums
 * @return {number[][]}
 */

const permute = function (nums) {
    if (nums.length === 0) return [[]];

    const permutations = [];

    for (let i = 0; i < nums.length; i++) {
        const chosenEl = nums[i];
        const rest = [...nums.slice(0, i), ...nums.slice(i + 1)];
        const permutationsWithoutChosenEl = permute(rest);
        permutationsWithoutChosenEl.forEach((permutation) => {
            permutations.push([chosenEl, ...permutation]);
        });
    }
    return permutations;
};

console.log(permute([1, 2, 3]));
console.log(permute([0, 1]));
console.log(permute([1]));
