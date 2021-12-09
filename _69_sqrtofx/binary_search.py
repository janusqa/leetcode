class Solution(object):
    def mySqrt(self, x):
        """
        :type x: int
        :rtype: int
        """
        if x < 2:
            return x

        lower = 1
        upper = x

        while lower < upper:
            mid = lower + ((upper - lower) // 2)

            if mid * mid == x:
                return int(mid)
            elif mid * mid > x:
                upper = mid
            else:
                lower = mid + 1

        return int(lower - 1)


print(Solution().mySqrt(5184))
print(Solution().mySqrt(2209))
print(Solution().mySqrt(550696))
print(Solution().mySqrt(55696))
print(Solution().mySqrt(0))
print(Solution().mySqrt(1))
print(Solution().mySqrt(4))
print(Solution().mySqrt(8))
print(Solution().mySqrt(9))
print(Solution().mySqrt(36))
print(Solution().mySqrt(64))
print(Solution().mySqrt(2 ** 31 - 1))
print(Solution().mySqrt(2147395599))
print(Solution().mySqrt(2147395600))
print(Solution().mySqrt(82))
