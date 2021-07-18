from tree import Tree, TreeNode

# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    def maxDepth(self, root):
        """
        :type root: TreeNode
        :rtype: int
        """
        max_depth = 0
        queue = []
        if root:
            queue.append({"node": root, "depth": 1})
        while len(queue) > 0:
            curr_ptr = queue.pop(0)
            if curr_ptr["node"]:
                max_depth = max(max_depth, curr_ptr["depth"])
                if curr_ptr["node"].left:
                    queue.append(
                        {"node": curr_ptr["node"].left, "depth": curr_ptr["depth"] + 1}
                    )
                if curr_ptr["node"].right:
                    queue.append(
                        {"node": curr_ptr["node"].right, "depth": curr_ptr["depth"] + 1}
                    )

        return max_depth


print(Solution().maxDepth(Tree().build([3, 9, 20, None, None, 15, 7]).root))
print(Solution().maxDepth(Tree().build([1, None, 2]).root))
print(Solution().maxDepth(Tree().build([]).root))
print(Solution().maxDepth(Tree().build([0]).root))


##Test tree
# print(Tree().build([3, 9, 20, None, None, 15, 7]).to_list())
# print(Tree().build([1, None, 2]).to_list())
# print(Tree().build([]).to_list())
# print(Tree().build([0]).to_list())
