/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
  return [
    ...new Set(
      nums.reduce((accumulator, candidate, index1) => {
        const complement = nums.findIndex(
          (num, index2) => num === target - candidate && index1 !== index2
        );
        if (complement !== -1) accumulator.push(index1, complement);
        return accumulator;
      }, [])
    ),
  ];
};

var twoSum2 = function (nums, target) {
  let complement;
  let i = 0;

  while (nums.length && (!complement || complement === -1)) {
    complement = nums.findIndex(
      (num, index) => num === target - nums[i] && index !== i
    );
    if (complement === -1) i++;
  }

  return [i, complement];
};

var twoSum3 = function (nums, target) {
  const candidates = new Map();

  for (const [index, num] of nums.entries()) {
    const complement = target - num;
    if (candidates.has(complement)) return [candidates.get(complement), index];
    candidates.set(num, index);
  }
};

console.log(twoSum3([-3, 4, 3, 90], 0));
console.log(twoSum3([2, 7, 11, 15], 9));
console.log(twoSum3([15, 8, 2, 11, 15, 7], 9));
console.log(twoSum3([3, 2, 4], 6));
console.log(twoSum3([3, 3], 6));
