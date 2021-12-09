/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let reversed = null;
  let temp = head ? head.next : null;

  while (head) {
    head.next = reversed;
    reversed = head;
    head = temp;
    temp = temp ? temp.next : null;
  }
  return reversed;
};

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

class List {
  constructor(list = []) {
    this.head = null;
    this.tail = this.head;

    for (const val of list) {
      this.addNode(val);
    }
  }

  addNode(val) {
    const node = new ListNode(val);
    if (this.head === null) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }

  toString() {
    let s = '';
    let curr = this.head;
    while (curr !== null) {
      s = `${s}[${curr.val}]`;
      curr = curr.next;
    }
    return s.length !== 0 ? s : '[]';
  }
}

console.log(reverseList(new List([1, 2, 3, 4, 5]).head));
console.log(reverseList(new List([1, 2]).head));
console.log(reverseList(new List([]).head));
