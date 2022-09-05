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

  /** sumValues(): add up all of the values in the tree. */

  sumValues(stack = [this.root]) {
    if (stack[0] === null) return 0;
    let toVisitStack = stack;
    if (toVisitStack.length === 0) return 0;

    let current = toVisitStack.pop();

    if (current.children) {
      for (let child of current.children)
        toVisitStack.push(child);
    }

    return current.val + this.sumValues(toVisitStack);

  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens(stack = [this.root]) {
    if (stack[0] === null) return 0;
    let toVisitStack = stack;
    if (toVisitStack.length === 0) return 0;

    let current = toVisitStack.pop();

    if (current.children) {
      for (let child of current.children)
        toVisitStack.push(child);
    }
    if (current.val % 2 === 0) {
      return 1 + this.countEvens(toVisitStack);
    }
    return 0 + this.countEvens(toVisitStack);
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    let toVisitQueue = [this.root];
    if(this.root === null) return 0
    let countGreater = 0;

    while (toVisitQueue.length) {
      let current = toVisitQueue.shift();

      if (current.val > lowerBound)
        countGreater++;

      for (let child of current.children)
        toVisitQueue.push(child);
    }
    return countGreater;
  }
}


module.exports = { Tree, TreeNode };
