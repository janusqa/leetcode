/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
// Time complexity: O(2N) = O(N)
// Space complexity: O(N)
// var isPalindrome = function (head) {
//   const stack = [];
//   let curr = head;

//   while (curr) {
//     stack.push(curr.val);
//     curr = curr.next;
//   }
//   curr = head;
//   while (stack.length > 0) {
//     if (stack.pop() !== curr.val) {
//       return false;
//     }
//     curr = curr.next;
//   }
//   return true;
// };

// Time complexity: O(N)
// Space complexity: O(1)
var isPalindrome = function (head) {
  let curr = head;
  let tail = null;
  let listLength = 0;

  // 1. find length of link list.
  //    Also mark tail of list
  while (curr) {
    tail = curr;
    curr = curr.next;
    listLength += 1;
  }

  // 2. copy items before (and up to) the middle of the list
  // to the end of the list in reverse order
  // Middle of list is defined as parseInt(listLength/2)
  // i.e the left side (middle inclusive) is always less
  // than or equal to right side after middle
  curr = head;
  for (let i = 0; i < parseInt(listLength / 2); i++) {
    head = head.next;
    curr.next = tail.next;
    tail.next = curr;
    curr = head;
  }

  // 3. if length of list is odd, move head forward else remain
  //    at current item and start comparison from item after
  //    tail forward.
  if (listLength % 2 !== 0) head = head ? head.next : null;

  // 4. set curr to point to beginning of list
  //    to start comparing to
  curr = tail ? tail.next : null;

  // 5. Do comparisons
  while (head !== tail.next) {
    if (head.val !== curr.val) return false;
    curr = curr.next;
    head = head.next;
  }

  return true;
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

console.log(isPalindrome(new List([1, 2, 2, 1]).head));
console.log(isPalindrome(new List([1, 2]).head));
console.log(isPalindrome(new List([1, 0, 1]).head));
console.log(isPalindrome(new List([1, 2, 3, 2, 1]).head));
console.log(isPalindrome(new List([1]).head));
console.log(isPalindrome(new List([1, 1]).head));
