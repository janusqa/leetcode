class Solution(object):
    def romanToInt(self, s):
        roman_numerals = {
            "I": 1,
            "V": 5,
            "X": 10,
            "L": 50,
            "C": 100,
            "D": 500,
            "M": 1000,
        }

        numerals = [numeral for numeral in s][::-1]
        accumulator = 0
        for i, numeral in enumerate(numerals):
            if i == 0 or (roman_numerals[numeral] >= roman_numerals[numerals[i - 1]]):
                accumulator += roman_numerals[numeral]
            else:
                accumulator -= roman_numerals[numeral]
        return accumulator


print(Solution().romanToInt("III"))
print(Solution().romanToInt("IV"))
print(Solution().romanToInt("IX"))
print(Solution().romanToInt("LVIII"))
print(Solution().romanToInt("MCMXCIV"))
print(Solution().romanToInt("XXVII"))
