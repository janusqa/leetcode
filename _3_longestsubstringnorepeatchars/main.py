class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        global_maximum = 0
        lower_boundary = 0
        upper_boundary = 0
        seen = {}

        for char in s:
            if (char in seen) and (seen[char] >= lower_boundary):
                global_maximum = max(
                    global_maximum, len(s[lower_boundary:upper_boundary])
                )
                lower_boundary = seen[char] + 1
            seen[char] = upper_boundary
            upper_boundary += 1
        return max(global_maximum, len(s[lower_boundary:upper_boundary]))


print(Solution().lengthOfLongestSubstring("abcabcbb"))
print(Solution().lengthOfLongestSubstring("bbbbb"))
print(Solution().lengthOfLongestSubstring("pwwkew"))
print(Solution().lengthOfLongestSubstring(""))
print(Solution().lengthOfLongestSubstring(" "))
print(Solution().lengthOfLongestSubstring("c"))
print(Solution().lengthOfLongestSubstring("au"))
print(Solution().lengthOfLongestSubstring("abba"))
print(Solution().lengthOfLongestSubstring("abcbbcad"))
