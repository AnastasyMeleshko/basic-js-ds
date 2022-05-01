//const { NotImplementedError } = require('../extensions/index.js');

 const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.head = null;
  }

  root() {
    return this.head;
  }

  add(data) {
    function addData (node, value) {
      if (!node) {
        return new Node( value );
      } else if ( value < node.data ) {
        node.left = addData( node.left, value );
      } else {
        node.right = addData( node.right, value );
      }
      return node
    }
    this.head = addData( this.head, data );
  }

  has(data) {
    return this.find(data) != null;
  }

  find(data) {
    let node = this.head;
    while ( node ) {
      if ( data < node.data ) {  // move left
        node = node.left;
      } else if ( data > node.data ) { // move right
        node = node.right;
      } else {
        return node;
      }
    }
    return null;
  }

  remove(data) {
    this.head = removeNode(this.head, data);
    function removeNode(node, value) {
      if (!node) {
        return null;
      }
      if (value < node.data) {
        node.left = removeNode(node.left, value);
        return node;
      } else if (value > node.data) {
        node.right = removeNode(node.right, value);
        return node;
      } else {
        if (!node.left && !node.right) { // list
          return null;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }
        let maxiLeft = node.left;
        while (maxiLeft.right) {
          maxiLeft = maxiLeft.right;
        }
        node.data = maxiLeft.data;
        node.left = removeNode(node.left, maxiLeft.data);
        return node;
      }
    }
  }

  min() {
    if (!this.head) {
      return;
    }
    let node = this.head;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (!this.head) {
      return;
    }
    let node = this.head;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};
