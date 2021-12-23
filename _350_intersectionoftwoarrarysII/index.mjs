'use strict';

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

let build_frequency_map = function build_frequency_map(nums) {
  const frequency_map = new Map();

  for (let num of nums) {
    if (frequency_map.has(num))
      frequency_map.set(num, frequency_map.get(num) + 1);
    else frequency_map.set(num, 1);
  }
  return frequency_map;
};

let build_intersect = function build_intersect(frequency_map, nums) {
  const intersect = [];

  for (let num of nums) {
    if (frequency_map.has(num) && frequency_map.get(num) > 0) {
      intersect.push(num);
      frequency_map.set(num, frequency_map.get(num) - 1);
    }
  }
  return intersect;
};

let intersect = function (nums1, nums2) {
  if (nums1.length > nums2.length) {
    return build_intersect(build_frequency_map(nums2), nums1);
  } else {
    return build_intersect(build_frequency_map(nums1), nums2);
  }
};

console.log(intersect([1, 2, 2, 1], [2, 2]));
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));
