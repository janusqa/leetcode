class Solution(object):
    def rob(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """

        # This is a modified version of Kadane Algo
        # to get maximum sum of a non-contiguos array
        local_maximum = nums[0] if len(nums) > 0 else 0
        local_maximum_cache = 0
        local_maximum_scratch = 0
        global_maximum = local_maximum

        for i in range(1, len(nums)):
            if i > 1:
                local_maximum_scratch = local_maximum
                local_maximum = max(local_maximum, nums[i] + local_maximum_cache)
                local_maximum_cache = local_maximum_scratch
            else:
                local_maximum_cache = local_maximum
                local_maximum = max(nums[i], local_maximum)

            if local_maximum > global_maximum:
                global_maximum = local_maximum

        return global_maximum


print(Solution().rob([5, 6, 10, 100, 10, 7]))
print(Solution().rob([1, 2]))
print(Solution().rob([1, 1]))
print(Solution().rob([4, 1, 2, 7, 5, 3, 1]))
print(Solution().rob([1, 2, 3, 1]))
print(Solution().rob([2, 7, 9, 3, 1]))
print(Solution().rob([1, 3, 1, 3, 100]))
