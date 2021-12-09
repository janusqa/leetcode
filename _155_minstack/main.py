class MinStack:
    def __init__(self):
        self.min_stack = {}
        self.index = None
        self.min_index = None

    def push(self, val: int) -> None:
        if self.index is not None:
            self.index += 1
        else:
            self.index = 0
        next_min = self.index
        if self.min_index is not None:
            if val < self.min_stack[f"{self.min_index}"]["val"]:
                next_min = self.min_index
                self.min_index = self.index
        else:
            self.min_index = self.index

        self.min_stack[f"{self.index}"] = {"val": val, "next_min": next_min}
        print("push: ", self.min_stack)

    def pop(self) -> None:
        if self.index is not None:
            if self.index == self.min_index:
                self.min_index = self.min_stack[f"{self.index}"]["next_min"]
            del self.min_stack[f"{self.index}"]
            if self.index > 0:
                self.index -= 1
            else:
                self.index = None
                self.min_index = None
        print("pop: ", self.min_stack)

    def top(self) -> int:
        if self.index is not None:
            return self.min_stack[f"{self.index}"]["val"]

    def getMin(self) -> int:
        if self.min_index is not None:
            return self.min_stack[f"{self.min_index}"]["val"]


obj = MinStack()
obj.push(2147483646)
obj.push(2147483646)
obj.push(2147483647)
print("top: ", obj.top())
obj.pop()
print("min: ", obj.getMin())
obj.pop()
print("min: ", obj.getMin())
obj.pop()
obj.push(2147483647)
print("top: ", obj.top())
print("min: ", obj.getMin())
obj.push(-2147483648)
print("top: ", obj.top())
print("min: ", obj.getMin())
obj.pop()
print("min: ", obj.getMin())


# Your MinStack object will be instantiated and called as such:
# obj = MinStack()
# obj.push(val)
# obj.pop()
# param_3 = obj.top()
# param_4 = obj.getMin()
