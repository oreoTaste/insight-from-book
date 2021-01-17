function onelineDfs(tree, start) {
  const visited = [];
  const stack = [start];
  while (stack.length > 0) {
    const next = stack.pop(); // this is point
    if (!visited.includes(next)) {
      visited.push(next);
      if (tree[next]) {
        stack.push(...tree[next]);
      }
    }
  }
  return visited;
}
function multilineDfs(tree, start) {
  const answer = [];
  const row = [start];

  const DFS = (tree, start, row) => {
    const next = [];
    if (!tree[start]) {
      answer.push(row);
      return;
    }
    next.push(...tree[start]);
    if (next.length <= 0) {
      answer.push(row);
      return;
    }

    const cnt = next.filter((el) => !row.includes(el));
    if (cnt <= 0) {
      answer.push(row.slice());
      return;
    }

    for (const element of next) {
      if (!row.includes(element)) {
        DFS(tree, element, [...row, element]);
      }
    }
  };
  DFS(tree, start, row);
  return answer;
}
function onelineBfs(tree, start) {
  const visited = [];
  const queue = [start];
  while (queue.length > 0) {
    const next = queue.shift(); // this is point
    if (!visited.includes(next)) {
      visited.push(next);
      if (tree[next]) queue.push(...tree[next]);
    }
  }
  return visited;
}
function onelineBfsArrow(tree, start) {
  const visited = [];
  const bucket = [start];
  const queue = [];
  while (bucket.length > 0 || queue.length > 0) {
    if (queue.length <= 0) {
      const bucketElement = bucket.filter((el) => !queue.includes(el) && !visited.includes(el));
      if (bucketElement.length == 0) {
        break;
      }
      queue.push(...bucketElement);
      visited.push("←");
    }
    while (queue.length > 0) {
      const next = queue.shift(); // this is point
      if (!visited.includes(next)) {
        visited.push(next);
        if (tree[next]) {
          const nextElement = [...tree[next]].filter((el) => !bucket.includes(el));
          if (nextElement.length > 0) {
            bucket.push(...nextElement);
          }
        }
      }
    }
  }
  return visited;
}
function multilineBfs(tree, start) {
  const answer = [];
  const visited = [];
  const row = [start];
  const Bfs = (tree, row, visited) => {
    if (row.length > 0) {
      visited.push(...row);
      answer.push(row);
    }

    const next = [];
    row.forEach((el) => {
      if (tree[el]) {
        next.push(...tree[el]);
      }
    });
    if (next.length > 0)
      Bfs(
        tree,
        next.filter((el) => !visited.includes(el)),
        visited
      );
  };
  Bfs(tree, row, visited);
  return answer;
}
const tree = {
  100: new Set([67, 66]),
  67: new Set([100, 82, 63]),
  66: new Set([100, 73, 69]),
  82: new Set([67, 61, 79]),
  63: new Set([67]),
  73: new Set([66]),
  69: new Set([66, 65, 81]),
  61: new Set([82]),
  79: new Set([82, 87, 77]),
  65: new Set([69, 84, 99]),
  81: new Set([69]),
  87: new Set([79, 31, 78]),
  77: new Set([79]),
  84: new Set([65]),
  99: new Set([65]),
  31: new Set([87]),
  78: new Set([87]),
};
function test(testStr, func, tree, start) {
  let now = +new Date();
  for (var i = 0; i < 100000; i++) {
    func(tree, start);
  }
  console.warn(`${-now + (now = +new Date())}.ms 소요 : ${testStr}`);
  console.log(">>", func(tree, start));
}
console.log("------------------------------------DFS------------------------------------");
test("oneline Dfs", onelineDfs, tree, 100);
test("multiline Dfs", multilineDfs, tree, 100);
console.log("------------------------------------BFS------------------------------------");
test("oneline Bfs", onelineBfs, tree, 100);
test("oneline Bfs Arrow", onelineBfsArrow, tree, 100);
test("multiline Bfs", multilineBfs, tree, 100);
