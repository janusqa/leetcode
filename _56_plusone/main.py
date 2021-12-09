class Solution(object):
    def plusOne(self, digits):
        """
        :type digits: List[int]
        :rtype: List[int]
        """
        # input = digits[::-1]
        carry = 0
        answer = []

        # for i in range(len(input)):
        for i in range(len(digits) - 1, -1, -1):
            # q = 1 if i == 0 else 0
            q = 1 if i == len(digits) - 1 else 0
            sum = digits[i] + q + carry
            carry = 1 if sum >= 10 else 0
            # answer.push(carry)
            answer.insert(0, sum % 10)
        if carry > 0:
            # answer.push(carry)
            answer.insert(0, carry)

        # return answer[::-1]
        return answer


print(Solution().plusOne([1, 2, 3]))
print(Solution().plusOne([4, 3, 2, 1]))
print(Solution().plusOne([0]))
