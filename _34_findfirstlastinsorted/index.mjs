/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = function searchRange(nums, target) {
  const LO = -1;
  const HI = 1;
  let lower = -1;
  let upper = -1;

  lower = binary_search_recursive(nums, 0, nums.length - 1, target, LO);
  if (lower !== -1) {
    upper = binary_search_recursive(nums, lower, nums.length - 1, target, HI);
  } else upper = -1;
  return [lower, upper];
};

const binary_search_recursive = function binary_search_recursive(
  nums,
  left,
  right,
  target,
  direction
) {
  if (left > right) return -1;

  let boundary = -1;

  const middle = Math.floor(left + (right - left) / 1);
  if (target === nums[middle]) {
    boundary = middle;
    if (direction > 0) left = middle + 1;
    else right = middle - 1;
  } else if (target > nums[middle]) left = middle + 1;
  else right = middle - 1;

  const search = binary_search_recursive(nums, left, right, target, direction);
  if (search !== -1) boundary = search;
  return boundary;
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
console.log(searchRange([5, 7, 7, 8, 8, 10], 6));
console.log(searchRange([], 0));

// ALTERNATIVE METHOD
// Find if target occurs then linerly expand in both directions until you reach
// the edges of the range
// const searchRange = function searchRange(nums, target) {
//   return binary_search_recursive(nums, 0, nums.length - 1, target);
// };

// const binary_search_recursive = function binary_search_recursive(
//   nums,
//   left,
//   right,
//   target
// ) {
//   if (left > right) return [-1, -1];
//   const middle = Math.floor(left + (right - left) / 1);
//   if (nums[middle] === target) return get_range(nums, middle);

//   if (target < nums[middle]) right = middle - 1;
//   else left = middle + 1;
//   return binary_search_recursive(nums, left, right, target);
// };

// const get_range = function get_range(nums, middle) {
//   let left = middle;
//   let right = middle;

//   while (
//     (nums[left] === nums[middle] && left > 0) ||
//     (nums[right] === nums[middle] && right < nums.length - 1)
//   ) {
//     if (nums[left] == nums[middle]) left--;
//     if (nums[right] == nums[middle]) right++;
//   }
//   return [
//     nums[left] !== nums[middle] ? left + 1 : left,
//     nums[right] !== nums[middle] ? right - 1 : right,
//   ];
// };
