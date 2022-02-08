/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = function (head, n) {
  let after = head;
  let before = head;
  let after_move_count = 0;
  let before_move_count = 0;

  while (after !== null) {
    after = after.next;
    if (after) after_move_count++;
    if (after_move_count - before_move_count > n) {
      before = before.next;
      before_move_count++;
    }
  }

  if (after_move_count === n - 1) head = head.next;
  else before.next = before.next ? before.next.next : null;

  return head;
};

function ListNode(val = 0, next = null) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

class List {
  constructor(list = []) {
    this.head = null;
    this.tail = this.head;

    for (const val of list) {
      this.addNode(val);
    }
  }

  getLength() {
    let i = 0;
    let curr = this.head;
    while (curr !== null) {
      curr = curr.next;
      i += 1;
    }
    return i;
  }

  static toString(head) {
    let s = '';
    let curr = head;
    while (curr !== null) {
      s = `${s}[${curr.val}]`;
      curr = curr.next;
    }
    return s.length !== 0 ? s : '[]';
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
}

console.log(List.toString(removeNthFromEnd(new List([1, 2, 3, 4, 5]).head, 2)));
console.log(List.toString(removeNthFromEnd(new List([1]).head, 1)));
console.log(List.toString(removeNthFromEnd(new List([1, 2]).head, 1)));
console.log(List.toString(removeNthFromEnd(new List([1, 2]).head, 2)));
