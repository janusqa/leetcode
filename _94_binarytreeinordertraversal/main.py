from tree import Tree, TreeNode


class Solution(object):
    def inorderTraversal(self, root):
        """
        :type root: TreeNode
        :rtype: List[int]
        """
        result = []
        stack = []
        curr_ptr = root

        while len(stack) > 0 or curr_ptr != None:
            if curr_ptr:
                stack.append(curr_ptr)
                curr_ptr = curr_ptr.left
            else:
                curr_ptr = stack.pop()
                result.append(curr_ptr.val)
                curr_ptr = curr_ptr.right

        return result


print(Solution().inorderTraversal(Tree().build([1, None, 2, 3]).root))
print(Solution().inorderTraversal(Tree().build([]).root))
print(Solution().inorderTraversal(Tree().build([1]).root))
print(Solution().inorderTraversal(Tree().build([1, 2]).root))
print(Solution().inorderTraversal(Tree().build([1, None, 2]).root))


## Testing to_list
# print(Tree().build([1, None, 2, 3]).to_list())
# print(Tree().build([]).to_list())
# print(Tree().build([1]).to_list())
# print(Tree().build([1, 2]).to_list())
# print(Tree().build([1, None, 2]).to_list())
# print(Tree().build([3, None, 1, 2]).to_list())
