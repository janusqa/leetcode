class Solution:
    def generate(self, numRows):
        pascals_triangle = []

        for i in range(numRows):
            if i == 0:
                pascals_triangle.append([1])
            elif i == 1:
                pascals_triangle.append([1, 1])
            else:
                row = [1]
                for j in range(len(pascals_triangle[i - 1]) - 1):
                    row.append(
                        pascals_triangle[i - 1][j] + pascals_triangle[i - 1][j + 1]
                    )
                row.append(1)
                pascals_triangle.append(row)

        return pascals_triangle


print(Solution().generate(30))
