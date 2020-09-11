// https://leetcode.com/problems/kth-smallest-element-in-a-bst/

const kthSmallest = (root, k) => {
  if (root == null) return null;
  let mini = 0;
  let stack = [];
  let temp;
  while (true) {
    if (root !== null) {
      stack.push(root);
      root = root.left;
    } else {
      mini += 1;
      if (mini === k && stack.length !== 0) return stack[stack.length - 1].val;
      else temp = stack.pop();
      root = temp.right;
    }
  }
};

// traverse tree starting with the left most node
// fill array with all nodes
// if the root is null, push to stack
// else
// increase mini
// if mini = k and stack is not empty
// return last element of the stack
// if not,
// pop the last element of stack
// root is popped.right
// find kth smallest from array
