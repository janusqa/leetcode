# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution(object):
    def mergeTwoLists(self, l1, l2):
        """
        :type l1: ListNode
        :type l2: ListNode
        :rtype: ListNode
        """
        # return f"List1: {l1.to_string()}, List2: {l2.to_string()}"

        p = l1.head
        q = l2.head
        r = List()
        while p != None or q != None:
            if p is None:
                r.add_node(q.val)
                q = q.next
            elif q is None:
                r.add_node(p.val)
                p = p.next
            elif p.val == q.val:
                r.add_node(p.val)
                r.add_node(q.val)
                p = p.next
                q = q.next
            elif p.val > q.val:
                r.add_node(q.val)
                q = q.next
            elif p.val < q.val:
                r.add_node(p.val)
                p = p.next

        return r.to_string()


class ListNode(object):
    def __init__(self, val=0, next=None):
        object.__init__(self)
        self.val = val
        self.next = next


class List(object):
    def __init__(self, list=[]):
        object.__init__(self)
        self.head = None
        self.tail = self.head
        for item in list:
            self.add_node(item)

    def to_string(self):
        s = ""
        curr = self.head
        while curr is not None:
            s = f"{s}[{curr.val}]"
            curr = curr.next
        return s if (len(s) != 0) else "[]"

    def add_node(self, val):
        node = ListNode(val)
        if self.head is None:
            self.head = node
            self.tail = self.head
        else:
            self.tail.next = node
            self.tail = node


print(Solution().mergeTwoLists(List([1, 2, 4]), List([1, 3, 4])))
print(Solution().mergeTwoLists(List([]), List([])))
print(Solution().mergeTwoLists(List([]), List([0])))
