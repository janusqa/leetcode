class Solution(object):
    def strStr(self, haystack, needle):
        """
        :type haystack: str
        :type needle: str
        :rtype: int
        """

        i = 0
        j = 0

        while (i < len(haystack)) and (j < len(needle)):
            if haystack[i] == needle[j]:
                j += 1
            else:
                if j > 0:
                    i -= j
                j = 0
            i += 1

        if len(needle) == 0:
            return 0
        elif len(haystack) == 0 or j < len(needle):
            return -1
        else:
            return i - j


print(Solution().strStr("hello", "ll"))
print(Solution().strStr("aaaaa", "bba"))
print(Solution().strStr("", ""))
print(Solution().strStr("", "a"))
print(Solution().strStr("a", ""))
print(Solution().strStr("abc", "c"))
print(Solution().strStr("aaa", "aaaa"))
print(Solution().strStr("mississippi", "issip"))
