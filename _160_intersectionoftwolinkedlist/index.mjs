var getIntersectionNode = function (headA, headB) {
  let currA = headA.head;
  let currB = headB.head;
  const lenA = headA.getLength();
  const lenB = headB.getLength();

  if (lenA > lenB) {
    for (let i = 0; i < lenA - lenB; i++) {
      currA = currA.next;
    }
  } else if (lenB > lenA) {
    for (let i = 0; i < lenB - lenA; i++) {
      currB = currB.next;
    }
  }
  while (currA !== null || currB !== null) {
    if (currA === currB) return currA;
    currA = currA.next;
    currB = currB.next;
  }
  return null;
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

getIntersectionNode(new List([4, 1, 8, 4, 5]), new List([5, 6, 1, 8, 4, 5]));
getIntersectionNode(new List([1, 9, 1, 2, 4]), new List([3, 2, 4]));
getIntersectionNode(new List([2, 6, 4]), new List([1, 5]));
getIntersectionNode(new List([1]), new List([1]));
