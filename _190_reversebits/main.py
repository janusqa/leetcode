class Solution:
    def reverseBits(self, n: int) -> int:

        # 1. get bit value in 0th position at n (n & 1)
        # 2. place this value in proper position in result. We are reversing here
        #  so it must go into 31-ith position. So:
        # a) Left Shift it (n & i) << 31- i
        # b) then set it using OR. result | (n & i) << 31- i
        # 3. Right shift n by i (n >> i) to get next target value to put in reverse postion
        # 4. Go to top and repeat 32 times
        result = 0
        for i in range(32):
            result |= ((n >> i) & 1) << 31 - i

        return result


print(Solution().reverseBits(4294967293))
