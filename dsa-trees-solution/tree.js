/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all values in the tree. */

  sumValues(node = this.root) {
    // base case: the sum of an empty tree is zero
    if (node === null) return 0;

    // all other trees: the sum of self + their children, recursively
    let sum = node.val;

    for (let child of node.children) {
      sum += this.sumValues(child);
    }

    return sum;
  }

  /** countEvens(): count all nodes in the tree that have even values. */

  countEvens(node = this.root) {
    // base case: a null node does not have an even value
    if (node === null) return 0;

    // all other trees: the even-count of self + their children, recursively
    let count = node.val % 2 === 0 ? 1 : 0;

    for (let child of node.children) {
      count += this.countEvens(child);
    }

    return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound, node = this.root) {
    // base case: a null node is not greater than lowerBound
    if (node === null) return 0;

    // all other trees: the gt-bound count of self + their child, recursively
    let count = node.val > lowerBound ? 1 : 0;

    for (let child of node.children) {
      count += this.numGreater(lowerBound, child);
    }

    return count;
  }
}

module.exports = { Tree, TreeNode };
