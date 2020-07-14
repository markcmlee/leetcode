// https://leetcode.com/problems/range-sum-of-bst/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */

const rangeSumBST = (root, L, R) => {
  let sum = 0;
  if (root == null) return sum;
  if (root.val > L) {
    sum += rangeSumBST(root.left, L, R);
  }
  if (root.val <= R && root.val >= L) {
    sum += root.val;
  }
  if (root.val < R) {
    sum += rangeSumBST(root.right, L, R);
  }
  return sum;
};

console.log(rangeSumBST([10, 5, 15, 3, 7, null, 18], 7, 15)); // 32
console.log(rangeSumBST([10, 5, 15, 3, 7, 13, 18, 1, null, 6], 6, 10)); // 23
