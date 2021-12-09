from typing import List


class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        ## Trial 1
        count = 0
        for i in range(len(nums) + 1):
            count += i
            if i < len(nums):
                count -= nums[i]
        return count

        ## Trial 2 - using xor
        # count = 0
        # for i in range(len(nums) + 1):
        #     if i < len(nums):
        #         count ^= i ^ nums[i]
        #     else:
        #         count ^= i
        # return count


print(Solution().missingNumber([3, 0, 1]))
print(Solution().missingNumber([0, 1]))
print(Solution().missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]))
print(Solution().missingNumber([0]))
