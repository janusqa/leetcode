class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        seen = {}
        if len(s) != len(t):
            return False

        for c in s:
            seen[c] = seen.get(c, 0) + 1

        for c in t:
            if seen.get(c) == None:
                return False

            if seen.get(c) < 1:
                return False

            seen[c] -= 1

        return True


print(Solution().isAnagram("anagram", "nagaram"))
print(Solution().isAnagram("rat", "car"))
print(Solution().isAnagram("ac", "bb"))
print(Solution().isAnagram("nl", "cx"))
print(Solution().isAnagram("dgqztusjuu", "dqugjzutsu"))
