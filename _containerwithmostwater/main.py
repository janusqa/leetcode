class Solution(object):
    def maxArea(self, height):
        """
        :type height: List[int]
        :rtype: int
        """

        start = 0
        end = len(height) - 1
        max_area = 0

        while (end - start) > 0:
            max_area = max(max_area, min(height[start], height[end]) * (end - start))
            if height[start] > height[end]:
                end -= 1
            else:
                start += 1
        return max_area


print(Solution().maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))
print(Solution().maxArea([1, 1]))
print(Solution().maxArea([4, 3, 2, 1, 4]))
print(Solution().maxArea([1, 2, 1]))
print(Solution().maxArea([1, 2, 4, 3]))
print(Solution().maxArea([1, 8, 6, 2, 5, 51, 50, 4, 8, 3, 7]))
