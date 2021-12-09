from typing import List


class Solution:
    def singleNumber(self, nums: List[int]) -> int:

        if len(nums) < 2:
            return nums[0]

        nums.sort()

        single_number = {"number": None, "seen": 0}
        for num in nums:
            if (single_number["seen"]) and (num == single_number["number"]):
                single_number["seen"] += 1
            else:
                if single_number["seen"] == 1:
                    return single_number["number"]
                else:
                    single_number["number"] = num
                    single_number["seen"] = 1

        return single_number["number"]


print(Solution().singleNumber([2, 2, 1]))
print(Solution().singleNumber([4, 1, 2, 1, 2]))
print(Solution().singleNumber([1]))
