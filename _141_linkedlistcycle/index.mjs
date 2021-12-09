/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

// *** use hasmap
// var hasCycle = function (head) {
//   const seen = new WeakMap();
//   let curr = head.head;
//   let i = 0;

//   while (curr != null) {
//     if (seen.has(curr.next)) return true;
//     seen.set(curr, i);
//     i += 1;
//     curr = curr.next;
//   }
//   return false;
// };

// *** use Floydes tortoise and Hare algorithm
// ***  in any cycle if you have one runner moving
// *** twice as fast as the other they will eventually
// *** meet
var hasCycle = function (head) {
  let tortoise = head.head;
  let hare = null;

  if (tortoise === null) return false;

  if (tortoise) hare = tortoise.next;
  //if (hare) hare = hare.next;

  while (hare !== tortoise) {
    if (hare === null) return false;

    if (tortoise) {
      tortoise = tortoise.next;
      hare = hare.next;
      if (hare) hare = hare.next;
    }
  }
  return true;
};

function ListNode(val = 0, next = null) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

class List {
  constructor(list = [], pos = -1) {
    this.head = null;
    this.tail = this.head;

    for (const val of list) {
      this.addNode(val);
    }
    if (pos >= 0) this.addCycle(pos);
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

  addCycle(pos) {
    let curr = this.head;
    let i = 0;
    while (curr !== null && i <= pos) {
      if (i === pos) this.tail.next = curr;
      i += 1;
    }
  }
}

console.log(hasCycle(new List([3, 2, 0, -4], 1)));
console.log(hasCycle(new List([1, 2], 0)));
console.log(hasCycle(new List([1])));
