//const { NotImplementedError } = require('../extensions/index.js');

//const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */

// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.length = 0;
//   }
//
//   add(value) {
//     if (this.length === 0) {
//       this.head = new ListNode(value);
//     } else {
//       let current = this.head;
//
//       // move to the last node
//       while(current.next) {
//         current = current.next;
//       }
//
//       current.next = new ListNode(value);
//     }
//
//     this.length++;
//   }
//
//   get(position) {
//     if (position < 0 || this.length <= position ) {
//       return;
//     }
//
//     let current = this.head;
//     let index = 0;
//
//     while (index < position) {
//       current = current.next;
//       index++;
//     }
//
//     return current.value;
//   }
//
//   removeAt(position) {
//     if (position < 0 || position >= this.length) {
//       return null;
//     }
//
//     let current = this.head;
//
//     if (position === 0) {
//       this.head = current.next;
//     } else {
//       let prev = null;
//       let index = 0;
//
//       while (index < position) {
//         prev = current;
//         current = current.next;
//         index++;
//       }
//
//       prev.next = current.next;
//     }
//
//     this.length--;
//     return current.value;
//   }
//
//   remove(element) {
//     this.removeAt( this.indexOf(element) );
//   }
//
//   indexOf(element) {
//     let current = this.head;
//     let index = 0;
//
//     while (current) {
//       if (current.value === element) {
//         return index;
//       }
//
//       current = current.next;
//       index++;
//     }
//
//     return -1;
//   }
//
//   size() {
//     return this.length;
//   }
//
//   isEmpty() {
//     return this.length === 0;
//   }
//
//   print() {
//     let current = this.head;
//
//     while(current) {
//       console.log(current.value);
//       current = current.next;
//     }
//   }
// }
//
// let list = new LinkedList();
//
// function addItems(l) {
//   for (let i=0; i<l.length; i++) {
//     list.add(l[i]);
//   }
//   list.print();
// }
//
// let result = [];
// function removeItems(k) {
//   let current = list.head;
//   let index = 0;
//
//   while (current) {
//     result.push(current);
//     if (current.value === k) {
//       list.removeAt(list.indexOf(k))
//       result.pop();
//     }
//
//     current = current.next;
//     index++;
//
//   }
//   list.print();
//   return result;
//
// }
//
// function removeKFromList(l, k) {
//   addItems(l);
//   removeItems(k);
// }

function removeKFromList( l, k ) {
  let list = l;
  let prev;
  while (list.next) {
    if (list.value === k) {
      list.value = list.next.value;
      list.next = list.next.next;
    } else {
      prev = list;
      list = list.next
    }
  }
  if (list.value === k) {
    prev.next = null;
  }
  return l;
}

module.exports = {
  removeKFromList
};
