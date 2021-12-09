class Solution:
    def hammingWeight(self, n: int) -> int:
        count = 0
        for i in range(32):
            # if ((n >> i) & 1) == 1:
            #     count += 1
            # faster than above commented lines
            count += (n >> i) & 1

        return count


print(Solution().hammingWeight(int("00000000000000000000000000001011", 2)))
print(Solution().hammingWeight(int("00000000000000000000000010000000", 2)))
print(Solution().hammingWeight(int("11111111111111111111111111111101", 2)))
