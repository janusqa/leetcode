class Solution(object):
    def __init__(self):
        object.__init__(self)
        self.cache = {}

    def climbStairs(self, n):
        """
        :type n: int
        :rtype: int
        """

        ## brute force depth first search
        # distinct_paths = 0
        # search_domain = []
        # search_domain.append(n)

        # while len(search_domain) > 0:
        #     node = search_domain.pop()
        #     if node - 2 >= 0:
        #         search_domain.append(node - 2)
        #     if node - 1 >= 0:
        #         search_domain.append(node - 1)
        #     if node == 0:
        #         distinct_paths += 1

        # return distinct_paths

        ## fibonacci sequence with recursion and memoization (caching)
        # if n in self.cache:
        #     return self.cache[n]

        # if n <= 2:
        #     value = n
        # else:
        #     value = self.climbStairs(n - 1) + self.climbStairs(n - 2)
        # self.cache[n] = value
        # return value

        ## Dynamic Programming

        if n <= 2:
            return n

        one_step_down = 2
        two_step_down = 1
        for i in range(3, n + 1):
            cache = one_step_down
            one_step_down = one_step_down + two_step_down
            two_step_down = cache

        return one_step_down


print(Solution().climbStairs(2))
print(Solution().climbStairs(3))
print(Solution().climbStairs(45))
print(Solution().climbStairs(100))
