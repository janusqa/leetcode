from typing import List


class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        tortoise = 0
        hare = 0

        while tortoise < len(nums):
            if nums[tortoise] == 0:
                while hare < len(nums) and (nums[hare] == 0) or (hare < tortoise):
                    hare += 1
                if hare < len(nums) and nums[hare] != 0:
                    nums[tortoise] = nums[hare]
                    nums[hare] = 0
                else:
                    return

            tortoise += 1


nums_array = [[0, 1, 0, 3, 12], [0], [4, 2, 4, 0, 0, 3, 0, 5, 1, 0], [1]]
for nums in nums_array:
    Solution().moveZeroes(nums)
    print(nums)
