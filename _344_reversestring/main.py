from typing import List


class Solution:
    def reverseString(self, s: List[str]) -> None:
        """
        Do not return anything, modify s in-place instead.
        """
        start = 0
        end = len(s) - 1

        while start < end:
            temp = s[start]
            s[start] = s[end]
            s[end] = temp
            start += 1
            end -= 1


strings = [["h", "e", "l", "l", "o"], ["H", "a", "n", "n", "a", "h"]]

for string in strings:
    Solution().reverseString(string)
    print(string)
