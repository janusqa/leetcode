/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

const search = function search(nums, target) {
  return binary_search_recursive_customized(nums, 0, nums.length - 1, target);
};

const binary_search_recursive_customized =
  function binary_search_recursive_customized(nums, left, right, target) {
    // When we divide the array since its a sorted rotated arrary
    // One half is guarentted to be sorted while the other is undsorted
    // given that that half is rotated.  We will first check to see
    // if our target is in the sorted half of arrary otherwise we
    // futher subdivide the rotated part which will again produce
    // two halves. One sorted the other unsorted, and repeat.
    if (left > right) return -1;
    const middle = Math.floor(left + (right - left) / 2);
    if (nums[middle] === target) return middle;

    if (nums[middle] >= nums[left]) {
      // Left arrary is sorted.  Lets check there first else check right side
      if (nums[left] <= target && target < nums[middle]) right = middle - 1;
      else left = middle + 1;
    } else {
      // Right array is sorted. Lets check there first else check left side
      if (nums[middle] < target && target <= nums[right]) left = middle + 1;
      else right = middle - 1;
    }
    return binary_search_recursive_customized(nums, left, right, target);
  };

// console.log(search([4, 5, 6, 7, 0, 1, 2], 6));
// console.log(search([4, 5, 6, 7, 0, 1, 2], 3));
// console.log(search([4, 5, 6, 7, 10, 0, 1, 2], 0));
// console.log(search([1], 0));
console.log(search([3, 1], 1));

// Classic Binary Search Example
// const binary_search = function binary_search(nums, target) {
//   let left = 0;
//   let right = nums.length - 1;

//   while (left <= right) {
//     const middle = Math.floor(left + (right - left) / 2);
//     if (nums[middle] === target) return middle;
//     if (nums[middle] > target) right = middle - 1;
//     else left = middle + 1;
//   }
//   return null;
// };

// Recursive Binary Search Example
// const binary_search_recursive = function binary_search_recursive(
//   nums,
//   left,
//   right,
//   target
// ) {
//   if (left > right) return null;

//   const middle = Math.floor(left + (right - left) / 2);
//   if (target === nums[middle]) return middle;

//   if (target > nums[middle]) left = middle + 1;
//   else right = middle - 1;

//   return binary_search_recursive(nums, left, right, target);
// };

// Classic Binary Search Example
// console.log(binary_search([1, 2, 4, 5, 6, 7], 5));
// const nums = [1, 2, 4, 5, 6, 7];
// console.log(binary_search_recursive(nums, 0, nums.length - 1, 5));
