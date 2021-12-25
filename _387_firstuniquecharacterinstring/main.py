class Solution:
    def firstUniqChar(self, s: str) -> int:

        hashmap = dict()

        for char in s:
            hashmap[char] = hashmap.get(char, 0) + 1

        for idx in range(len(s)):
            if hashmap.get(s[idx], 0) <= 1:
                return idx

        return -1


print(Solution().firstUniqChar("leetcode"))
print(Solution().firstUniqChar("loveleetcode"))
print(Solution().firstUniqChar("aabb"))
print(Solution().firstUniqChar("z"))
print(Solution().firstUniqChar("aadadaad"))
print(Solution().firstUniqChar("dddccdbba"))
print(Solution().firstUniqChar("cccaabadb"))
