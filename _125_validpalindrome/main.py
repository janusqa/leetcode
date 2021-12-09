class Solution:
    def isPalindrome(self, s: str) -> bool:

        ## Cheat solution
        # s_palindrome = "".join([char for char in s.lower() if char.isalnum()])
        # if len(s) < 2:
        #     return True
        # return s_palindrome == s_palindrome[::-1]

        start = 0
        end = len(s) - 1
        while start < end:
            while not self.isalphanum(s[start]) and (start < end):
                start += 1
            while not self.isalphanum(s[end]) and (end > start):
                end -= 1
            if s[start].lower() != s[end].lower():
                return False

            start += 1
            end -= 1
        return True

    def isalphanum(self, c: str) -> bool:
        return (
            (ord("A") <= ord(c) <= ord("Z"))
            or (ord("a") <= ord(c) <= ord("z"))
            or (ord("0") <= ord(c) <= ord("9"))
        )


print(Solution().isPalindrome("A man, a plan, a canal: Panama"))
print(Solution().isPalindrome("race a car"))
print(Solution().isPalindrome(" "))
print(Solution().isPalindrome(".,"))
