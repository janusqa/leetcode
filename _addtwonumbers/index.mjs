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
  let answer = null;
  let p = l1.head;
  let q = l2.head;
  let r = answer;
  let carry = 0;

  while (p || q) {
    const p_val = p ? p.val : 0;
    const q_val = q ? q.val : 0;
    let tally = p_val + q_val + carry;
    carry = Math.floor(tally / 10);
    tally = tally % 10;

    // if (tally >= 10) {
    //   tally -= 10;
    //   carry = 1;
    // } else carry = 0;

    const n = new ListNode(tally, null);
    if (answer === null) {
      answer = n;
      r = answer;
    } else {
      r.next = n;
      r = n;
    }

    p = p ? p.next : null;
    q = q ? q.next : null;
  }
  if (carry) {
    const n = new ListNode(carry, null);
    r.next = n;
    r = n;
  }
  return answer;
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function List(list) {
  this.head = null;
  let curr = this.head;
  for (const element of list) {
    const n = new ListNode(element, null);
    if (this.head == null) {
      this.head = n;
      curr = this.head;
    } else {
      curr.next = n;
      curr = n;
    }
  }
}

console.log(new List([9, 9, 9, 9, 9, 9, 9]).head);

// console.log(addTwoNumbers(new List([2, 4, 3]), new List([5, 6, 4])));
// console.log(addTwoNumbers(new List([0]), new List([0])));
// console.log(
//   addTwoNumbers(new List([9, 9, 9, 9, 9, 9, 9]), new List([9, 9, 9, 9]))
// );
// console.log(
//   addTwoNumbers(
//     new List([
//       9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9,
//       9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9,
//       9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9,
//       9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9,
//     ]),
//     new List([1])
//   )
// );
