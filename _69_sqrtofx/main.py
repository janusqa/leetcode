class Solution(object):
    def mySqrt(self, x):
        """
        :type x: int
        :rtype: int
        """
        if x == 0:
            return 0

        x = abs(x)

        a = []

        # step 1 (divide number in pairs from units first)
        while x != 0:
            a.insert(0, x % 100)
            x = x // 100
        dividend_part = a[0]

        # step 2 (find perfect square of first pair)
        perfect_square = 1
        squared = 1
        while squared <= dividend_part:
            perfect_square += 2
            squared += perfect_square
        quotient_part = perfect_square // 2
        divisor = quotient_part
        sqrt = quotient_part

        # step 3 (multiply above, then add below)
        # iteratively calculate the sqrt digit by digit
        # until you run out of pairs from above.
        i = 1
        while i < len(a):
            # multiply above
            dividend_part = (dividend_part - quotient_part * divisor) * 100 + a[i]

            # add below
            divisor = divisor + quotient_part
            # guess y by trial and error. The following is gaurenteed
            # 0 <= y <= 9
            y = 0
            while (((divisor * 10) + y) * y <= dividend_part) and (y < 10):
                y += 1
            divisor = divisor * 10 + (y - 1)
            quotient_part = divisor % 10

            sqrt = (sqrt * 10) + (quotient_part)

            i += 1

        return sqrt


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
