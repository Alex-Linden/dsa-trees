/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth(node = this.root) {
    if (!node) return 0;

    return Math.min(
      this.minDepth(node.left),
      this.minDepth(node.right)
    ) + 1;
  }




  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth(node = this.root) {
    if (!node) return 0;

    return Math.max(
      this.maxDepth(node.left),
      this.maxDepth(node.right)
    ) + 1;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound, node = this.root) {
    if (node === null) return null;
    let toVisitStack = [node];
    let nextLarger = node.val;

    while (toVisitStack.length) {
      let current = toVisitStack.pop();

      if (current.right)
        toVisitStack.push(current.right);

      if (current.left)
        toVisitStack.push(current.left);

      if (lowerBound < current.val && current.val < nextLarger) {
        nextLarger = current.val;
      }
    }

    return lowerBound < nextLarger ? nextLarger : null;

  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {
  }

}

module.exports = { BinaryTree, BinaryTreeNode };
