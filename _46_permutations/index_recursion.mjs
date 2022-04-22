/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function (nums) {
    if (nums.length === 0) return [[]];

    const allPermutations = [];

    const firstEl = nums[0];
    const rest = nums.slice(1);

    const permsWithoutFirst = permute(rest);

    permsWithoutFirst.forEach((perm) => {
        for (let i = 0; i <= perm.length; i++) {
            const permWithFirst = [
                ...perm.slice(0, i),
                firstEl,
                ...perm.slice(i),
            ];
            allPermutations.push(permWithFirst);
        }
    });

    return allPermutations;
};

console.log(permute([1, 2, 3]));
console.log(permute([0, 1]));
console.log(permute([1]));
