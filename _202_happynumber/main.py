class Solution:
    def isHappy(self, n: int) -> bool:

        tortoise = n
        hare = self.compute_next(n)

        while (hare != 1) and (tortoise != hare):
            tortoise = self.compute_next(tortoise)
            hare = self.compute_next(self.compute_next(hare))

        return hare == 1

    def compute_next(self, n: int) -> int:
        count = 0
        while n > 0:
            count += (n % 10) ** 2
            n = int(n / 10)
        return count


print(Solution().isHappy(19))
print(Solution().isHappy(6))
print(Solution().isHappy(1))
