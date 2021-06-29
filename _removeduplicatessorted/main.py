def removeDuplicates(nums):
    """
    :type nums: List[int]
    :rtype: int
    """

    # original_size = len(nums)
    # i = 0

    # while i < original_size and len(nums) > 1:
    #     if nums[0] == nums[1]:
    #         nums.pop(0)
    #     else:
    #         nums.append(nums.pop(0))
    #     i += 1

    # print(nums)
    # return len(nums)

    i = 0
    j = 0
    while j < len(nums):
        if nums[i] != nums[j]:
            i += 1
            nums[i] = nums[j]
        j += 1

    print(nums)
    return i + 1 if len(nums) > 0 else i


print(removeDuplicates([]))
print(removeDuplicates([10]))
print(removeDuplicates([1, 1, 2]))
print(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))
print(removeDuplicates([1, 1]))
print(removeDuplicates([1, 2, 2, 3, 3, 3, 4, 4]))
