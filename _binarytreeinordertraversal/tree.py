# Definition for a binary tree node.
class TreeNode(object):
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Tree(object):
    def __init__(self):
        object.__init__(self)
        self.root = None

    def build(self, tree_array):
        stack = []
        stack.append(TreeNode())
        for i in range(len(tree_array)):
            if len(stack) > 0:
                node = stack.pop()
            if tree_array[i] != None:
                if i == 0:
                    self.root = node
                    node.val = tree_array[i]
                    stack.append(node)
                elif i % 2 == 0:
                    node.right = TreeNode(tree_array[i])
                    stack.append(node.right)
                else:
                    node.left = TreeNode(tree_array[i])
                    stack.append(node.left)
        return self

    def to_list(self):
        stack = []
        result = []
        stack.append(self.root)
        while len(stack) > 0:
            node = stack.pop()
            if node != None:
                result.append(node.val)
                if node.right:
                    stack.append(node.right)
                if node.left:
                    stack.append(node.left)
        return result
