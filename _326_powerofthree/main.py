class Solution:
    def isPowerOfThree(self, n: int) -> bool:

        if n < 1:
            return False

        # Niave solution
        while n % 3 == 0:
            n /= 3
        return n == 1


print(Solution().isPowerOfThree(27))
print(Solution().isPowerOfThree(0))
print(Solution().isPowerOfThree(9))
print(Solution().isPowerOfThree(45))
print(Solution().isPowerOfThree(1))
print(Solution().isPowerOfThree(59049))
