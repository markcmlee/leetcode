// https://leetcode.com/problems/maximum-depth-of-n-ary-tree/

const maxDepth = (root) => {
  if (!root) return 0;
  let count = 0;
  let queue = [root];

  while (queue.length) {
    let length = queue.length;
    for (let i = 0; i < length; i++) {
      let node = queue.shift();
      queue.push(...node.children);
    }
    count++;
  }
  return count;
};

//time: depth * N
//space: depends on method, bring up different levels and trees

//points to bring up: DFS vs BFS, space complexity(queue in mem vs. depth in call stack),
