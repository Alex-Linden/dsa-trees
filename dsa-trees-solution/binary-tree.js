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

  // this is a stack or recursion problem; we'll use recursion

  minDepth(node = this.root) {
    // base case: a non-existent node has height of zero
    if (!node) return 0;

    // else: height = 1 (for us) + smaller of left or right path
    return Math.min(
        this.minDepth(node.left),
        this.minDepth(node.right)
    ) + 1;
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  // this is a stack or recursion problem; we'll use recursion

  maxDepth(node = this.root) {
    // base case: a non-existent node has height of zero
    if (!node) return 0;

    // else: height = 1 (for us) + larger of left or right path
    return Math.max(
      this.maxDepth(node.left),
      this.maxDepth(node.right)
    ) + 1;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  // this could be done with recursion, a stack, or a queue --- a queue would
  // be a poor choice unless you use a LinkedList, since a JS array is a poor
  // choice for a queue. For variety, we'll use a stack rather than recursion.

  nextLarger(lowerBound) {
    if (!this.root) return null;

    let stack = [this.root];
    let closest = Infinity;

    while (stack.length) {
      let node = stack.pop();

      if (node.val > lowerBound && node.val < closest) closest = node.val;

      if (node.left) stack.push(node.left);
      if (node.right) stack.push(node.right);
    }

    return closest === Infinity ? null : closest;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {
    function findLevelAndParent(
      nodeToFind,
      currentNode,
      level = 0,
      data = { level: 0, parent: null }
    ) {
      if (data.parent) return data;
      if (currentNode.left === nodeToFind || currentNode.right === nodeToFind) {
        data.level = level + 1;
        data.parent = currentNode;
      }
      if (currentNode.left) {
        findLevelAndParent(nodeToFind, currentNode.left, level + 1, data);
      }
      if (currentNode.right) {
        findLevelAndParent(nodeToFind, currentNode.right, level + 1, data);
      }
      return data;
    }

    let node1Info = findLevelAndParent(node1, this.root);
    let node2Info = findLevelAndParent(node2, this.root);

    let sameLevel =
      node1Info && node2Info && node1Info.level === node2Info.level;
    let differentParents =
      node1Info && node2Info && node1Info.parent !== node2Info.parent;
    return sameLevel && differentParents;
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
