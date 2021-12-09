/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function (node) {
  // copy value of node following node to be deleted
  // to value of node to be deleted.
  // now remove node following node to be deleted
  node.val = node.next ? node.next.val : node.val;
  node.next = node.next ? node.next.next : null;

  // ** brute force copy each value to previous node
  // let curr = node.next ? node.next : null;
  // while (curr) {
  //   node.val = curr.val;
  //   if (curr.next) node = curr;
  //   else node.next = curr.next;
  //   curr = curr.next;
  // }
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

  getNode(val) {
    let curr = this.head;
    while (curr) {
      if (curr.val === val) return curr;
      curr = curr.next;
    }
    return curr;
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

let list = new List([4, 5, 1, 9]);
deleteNode(list.getNode(5));
console.log(list.toString());
list = new List([4, 5, 1, 9]);
deleteNode(list.getNode(1));
console.log(list.toString());
list = new List([1, 2, 3, 4]);
deleteNode(list.getNode(3));
console.log(list.toString());
list = new List([0, 1]);
deleteNode(list.getNode(0));
console.log(list.toString());
list = new List([-3, 5, -99]);
deleteNode(list.getNode(-3));
console.log(list.toString());
