'use strict';
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let answer = new List([]);
  let p = l1.head;
  let q = l2.head;
  let r = answer;
  let carry = 0;

  while (p || q) {
    const p_val = p ? p.val : 0;
    const q_val = q ? q.val : 0;
    let tally = p_val + q_val + carry;
    carry = Math.floor(tally / 10);
    tally %= 10;

    answer.addNode(tally);

    p = p ? p.next : null;
    q = q ? q.next : null;
  }
  if (carry) {
    answer.addNode(carry);
  }
  return answer.toString();
};

function ListNode(val = 0, next = null) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

class List {
  constructor(list) {
    this.head = null;
    this.tail = this.head;

    for (const val of list) {
      this.addNode(val);
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

console.log(addTwoNumbers(new List([2, 4, 3]), new List([5, 6, 4])));
console.log(addTwoNumbers(new List([0]), new List([0])));
console.log(
  addTwoNumbers(new List([9, 9, 9, 9, 9, 9, 9]), new List([9, 9, 9, 9]))
);
console.log(
  addTwoNumbers(
    new List([
      9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9,
      9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9,
      9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9,
      9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9,
    ]),
    new List([1])
  )
);
