class Solution(object):
    def merge(self, nums1, m, nums2, n):
        """
        :type nums1: List[int]
        :type m: int
        :type nums2: List[int]
        :type n: int
        :rtype: None Do not return anything, modify nums1 in-place instead.
        """

        ## Foward scan
        # i = 0
        # j = 0
        # while j < n:
        #     if i < m:
        #         if nums1[i] > nums2[j]:
        #             temp = nums1[i]
        #             nums1[i] = nums2[j]
        #             nums2[j] = temp
        #         i += 1
        #     else:
        #         temp = nums1[i]
        #         nums1[i] = nums2[j]
        #         nums2[j] = temp
        #         m += 1
        #         j += 1
        #         i = j

        ## Backwards scan
        n1i = m - 1
        n2i = n - 1
        n1n2i = m + n - 1
        while n2i >= 0:
            if n1i >= 0 and nums1[n1i] >= nums2[n2i]:
                nums1[n1n2i] = nums1[n1i]
                n1i -= 1
            else:
                nums1[n1n2i] = nums2[n2i]
                n2i -= 1
            n1n2i -= 1

        return nums1


print(Solution().merge([0, 1, 2, 3, 0, 0, 0], 4, [2, 5, 6], 3))
print(Solution().merge([1], 1, [], 0))
print(Solution().merge([0], 0, [1], 1))
print(Solution().merge([0], 0, [0], 1))
print(Solution().merge([1, 2, 3, 7, 0, 0, 0, 0], 4, [0, 2, 5, 6], 4))
print(Solution().merge([-1, 3, 0, 0, 0, 0, 0], 2, [0, 0, 1, 2, 3], 5))
print(Solution().merge([4, 5, 6, 0, 0, 0], 3, [1, 2, 3], 3))
print(
    Solution().merge(
        [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
        ],
        0,
        [
            -50,
            -50,
            -48,
            -47,
            -44,
            -44,
            -37,
            -35,
            -35,
            -32,
            -32,
            -31,
            -29,
            -29,
            -28,
            -26,
            -24,
            -23,
            -23,
            -21,
            -20,
            -19,
            -17,
            -15,
            -14,
            -12,
            -12,
            -11,
            -10,
            -9,
            -8,
            -5,
            -2,
            -2,
            1,
            1,
            3,
            4,
            4,
            7,
            7,
            7,
            9,
            10,
            11,
            12,
            14,
            16,
            17,
            18,
            21,
            21,
            24,
            31,
            33,
            34,
            35,
            36,
            41,
            41,
            46,
            48,
            48,
        ],
        63,
    )
)
