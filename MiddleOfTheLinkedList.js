// https://leetcode.com/problems/middle-of-the-linked-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

const middleNode = (head) => {
  let counter = 0;
  let current = head;
  while (current !== null) {
    current = current.next;
    counter++;
  }
  current = head;
  counter = Math.floor(counter / 2);
  while (counter > 0) {
    current = current.next;
    counter--;
  }
  return current;
};
