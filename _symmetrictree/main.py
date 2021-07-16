from tree import TreeNode, Tree

# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    def isSymmetric(self, root):
        """
        :type root: TreeNode
        :rtype: bool
        """
        stack = []
        left_ptr = root.left
        right_ptr = root.right

        while len(stack) > 0 or left_ptr != None or right_ptr != None:
            lval = left_ptr.val if left_ptr else None
            rval = right_ptr.val if right_ptr else None
            if lval != rval:
                return False
            if left_ptr:
                stack.append(left_ptr.left)
            if right_ptr:
                stack.append(right_ptr.right)
            if left_ptr:
                stack.append(left_ptr.right)
            if right_ptr:
                stack.append(right_ptr.left)

            left_ptr = stack.pop() if len(stack) > 0 else None
            right_ptr = stack.pop() if len(stack) > 0 else None

        return True


print(Solution().isSymmetric(Tree().build([1, 2, 2, 3, 4, 4, 3]).root))
print(Solution().isSymmetric(Tree().build([1, 2, 2, None, 3, None, 3]).root))
# print(
#     Solution().isSymmetric(
#         TreeNode(
#             1,
#             TreeNode(2, TreeNode(3, None, None), TreeNode(4, None, None)),
#             TreeNode(2, TreeNode(4, None, None), TreeNode(3, None, None)),
#         )
#     )
# )

# print(
#     Solution().isSymmetric(
#         TreeNode(
#             1,
#             TreeNode(2, None, TreeNode(3, None, None)),
#             TreeNode(2, None, TreeNode(3, None, None)),
#         )
#     )
# )


# # Testing to_list
# print(Tree().build([1, 2, 2, 3, 4, 4, 3]).to_list())
# print(Tree().build([1, 2, 2, None, 3, None, 3]).to_list())
# print(Tree().build([3, None, 1, 2]).to_list())
