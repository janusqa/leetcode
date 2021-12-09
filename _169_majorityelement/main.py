from typing import List


class Solution(object):
    def majorityElement(self, nums: List[int]) -> int:

        ### Method 1
        # nums.sort()
        # count = 0
        # curr = None
        # for num in nums:
        #     if num != curr:
        #         count = 0
        #         curr = num
        #     count += 1
        #     if count > len(nums) // 2:
        #         return curr

        ### Method 2
        ### Boyer-Moore Voting Algorithm
        candidate = 0
        vote = 0

        # First pass.
        for num in nums:
            if vote == 0:
                candidate = num
            if candidate != num:
                vote -= 1
            else:
                vote += 1

        # Second pass only needed if majority
        # element not gaurenteed to exist.
        # We simply count the number of candidate
        # in array.  If larger than floor(n/2)
        # then it is verified majority
        vote = 0
        for num in nums:
            if num == candidate:
                vote += 1

        if vote > int(len(nums) / 2):
            return candidate
        else:
            return None


print(Solution().majorityElement([3, 2, 3]))
print(Solution().majorityElement([2, 2, 1, 1, 1, 2, 2]))
print(Solution().majorityElement([1, 2, 2, 1, 3, 1]))
