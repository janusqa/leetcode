from typing import List


class Solution:
    def singleNumber(self, nums: List[int]) -> List[int]:

        if len(nums) < 3:
            return nums

        nums.sort()

        single_number = {"number": None, "seen": 0, "result": []}
        for num in nums:
            if (single_number["seen"]) and (num == single_number["number"]):
                single_number["seen"] += 1
            else:
                if single_number["seen"] == 1:
                    single_number["result"].append(single_number["number"])
                    single_number["number"] = num
                else:
                    single_number["number"] = num
                    single_number["seen"] = 1

        if single_number["seen"] == 1:
            single_number["result"].append(num)

        return single_number["result"]


print(Solution().singleNumber([1, 2, 1, 3, 2, 5]))
print(Solution().singleNumber([-1, 0]))
print(Solution().singleNumber([0, 1]))
print(Solution().singleNumber([0, 1, 1, 2]))
