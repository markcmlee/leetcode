// https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/

const getDecimalValue = (head) => {
  let binary = "";
  let current = head;
  while (current !== null) {
    binary += current.val;
    current = current.next;
  }
  return parseInt(binary, 2);
};
