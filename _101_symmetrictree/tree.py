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
        self.tree_array_len = 0

    def build(self, tree_array):
        tree = []
        self.tree_array_len = len(tree_array)

        i = 0
        n = 0
        node = None
        if len(tree_array) > 0 and tree_array[i] != None:
            node = TreeNode(tree_array[i])
        tree.append(node)
        self.root = node
        while 2 * n + 1 < len(tree_array) or 2 * n + 2 < len(tree_array):
            node = tree.pop(0)
            if node:
                node_left = None
                node_right = None
                if (2 * n + 1) < len(tree_array) and tree_array[2 * n + 1] != None:
                    node_left = TreeNode(tree_array[2 * n + 1])
                if (2 * n + 2) < len(tree_array) and tree_array[2 * n + 2] != None:
                    node_right = TreeNode(tree_array[2 * n + 2])
                tree.append(node_left)
                tree.append(node_right)
                node.left = node_left
                node.right = node_right
                n += 1
            i += 1

        return self

    def to_list(self):
        queue = []
        result = []
        queue.append(self.root)
        while len(queue) > 0:
            node = queue.pop(0)
            if node != None:
                result.append(node.val)
                queue.append(node.left)
                queue.append(node.right)
            else:
                if len(result) < self.tree_array_len:
                    result.append(None)
        return result
