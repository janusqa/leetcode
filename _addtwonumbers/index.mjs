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
  let r = answer;
  let p = l1;
  let q = l2;
  let carry = 0;
  let i = 0;

  while (p || q) {
    const p_val = p ? p.val : 0;
    const q_val = q ? q.val : 0;
    let tally = p_val + q_val + carry;
    if (tally >= 10) {
      tally -= 10;
      carry = 1;
    } else carry = 0;

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
    i++;
  }
  if (carry) {
    const n = new ListNode(carry, null);
    r.next = n;
    r = n;
  }
  return answer;

  // const answer = [];
  // let carry = 0;
  // const size = l1.length > l2.length ? l1.length : l2.length;
  // for (let i = 0; i < size; i++) {
  //   let tally = (l1[i] || 0) * 10 ** i + (l2[i] || 0) * 10 ** i + carry;
  //   if (tally >= 10 ** (i + 1)) {
  //     tally -= 10 ** (i + 1);
  //     carry = 10 ** (i + 1);
  //   } else carry = 0;
  //   answer.push(tally / 10 ** i);
  // }
  // if (carry) answer.push(carry / carry);
  //
  // for (let i = 0; i < size; i++) {
  //   let tally = (l1[i] || 0) + (l2[i] || 0) + carry;
  //   if (tally >= 10) {
  //     tally -= 10;
  //     carry = 1;
  //   } else carry = 0;
  //   answer.push(tally);
  // }
  // if (carry) answer.push(carry);
  //
  // return answer;
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]));
console.log(addTwoNumbers([0], [0]));
console.log(addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]));
console.log(
  addTwoNumbers(
    [
      9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9,
      9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9,
      9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9,
      9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9,
    ],
    [1]
  )
);
