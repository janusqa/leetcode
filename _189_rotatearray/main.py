from typing import List


class Solution:
    def rotate(self, nums: List[int], k: int) -> List[int]:
        """
        Do not return anything, modify nums in-place instead.
        """

        # Normalize k
        # # re-calculate k such that if it is greater than
        # length of array we translate it to a number
        # 0 <= k <= len(nums) as it just wraps
        # if k > len(nums):
        k = k % len(nums)
        self.reverse(nums, 0, len(nums) - 1)
        self.reverse(nums, 0, k - 1)
        self.reverse(nums, k, len(nums) - 1)
        return nums

    def reverse(self, nums, start, end):

        while start < end:
            temp = nums[start]
            nums[start] = nums[end]
            nums[end] = temp
            start += 1
            end -= 1


print(Solution().rotate([1, 2, 3, 4, 5, 6, 7], 3))
print(Solution().rotate([-1, -100, 3, 99], 2))
