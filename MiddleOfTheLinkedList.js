// https://leetcode.com/problems/middle-of-the-linked-list/

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
