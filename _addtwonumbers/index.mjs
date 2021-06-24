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
const addTwoNumbers = function (l1, l2) {
  const answer = [];
  let carry = 0;
  const size = l1.length > l2.length ? l1.length : l2.length;
  for (let i = 0; i < size; i++) {
    let tally = (l1[i] || 0) * 10 ** i + (l2[i] || 0) * 10 ** i + carry;
    if (tally >= 10 ** (i + 1)) {
      tally = tally - 10 ** (i + 1);
      carry = 10 ** (i + 1);
    } else carry = 0;
    answer.push(tally / 10 ** i);
  }
  if (carry) answer.push(carry / carry);
  return answer;
};

console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]));
console.log(addTwoNumbers([0], [0]));
console.log(addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]));
