// https://programmers.co.kr/learn/courses/30/lessons/43162
// 네트워크란 컴퓨터 상호 간에 정보를 교환할 수 있도록 연결된 형태를 의미합니다. 예를 들어, 컴퓨터 A와 컴퓨터 B가 직접적으로 연결되어있고,
//  컴퓨터 B와 컴퓨터 C가 직접적으로 연결되어 있을 때 컴퓨터 A와 컴퓨터 C도 간접적으로 연결되어 정보를 교환할 수 있습니다.
//  따라서 컴퓨터 A, B, C는 모두 같은 네트워크 상에 있다고 할 수 있습니다.

// 컴퓨터의 개수 n, 연결에 대한 정보가 담긴 2차원 배열 computers가 매개변수로 주어질 때, 네트워크의 개수를 return 하도록 solution 함수를 작성하시오.

// DFS 알고리즘
function solution(n, computers) {
  const visited = Array.from(Array(n), (_) => false);
  let cnt = 0;
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      cnt++;
      dfs(n, i, computers, visited);
    }
  }
  return cnt;
}

const dfs = (n, i, computers, visited) => {
  visited[i] = true;
  for (let idx = 0; idx < n; idx++) {
    if (!visited[idx] && computers[i][idx] > 0 && i != idx) {
      dfs(n, idx, computers, visited);
    }
  }
};

//BFS 알고리즘
/*
function solution(n, computers) {
  const graph = getGraph(n, computers);
  let visited = Array.from(Array(n), (_) => false);
  let group = Array.from(Array(n), (_) => null);
  let cnt = 0;
  group[0] = cnt;
  let tracking = [{ point: 0, mygroup: cnt }];
  BFS(visited, tracking, graph, group);

  let ind = group.findIndex((el) => el == null);
  while (ind >= 0) {
    tracking.push({ point: ind, mygroup: ++cnt });
    BFS(visited, tracking, graph, group);
    ind = group.findIndex((el) => el == null);
  }

  let typeCnt = 0;
  var type = group[0];
  while(group.length) {
      typeCnt++;
      group = group.filter(el => el !== type);
      type = group[0];
  }
  return typeCnt;
}

const BFS = (visited, tracking, graph, group) => {
  while (tracking.length) {
    const { point, mygroup } = tracking.shift();
    if (visited[point]) {
      continue;
    } else {
      visited[point] = true;
      group[point] = mygroup;
    }

    let next = graph.filter((el) => el.start == point);
    for (let i = 0; i < next.length; i++) {
      tracking.push({ point: next[i].end, mygroup: mygroup });
    }
    next = graph.filter((el) => el.end == point);
    for (let i = 0; i < next.length; i++) {
      tracking.push({ point: next[i].start, mygroup: mygroup });
    }
  }
};
const getGraph = (n, computers) => {
  const graph = [];
  for (let i = 0; i < computers.length; i++) {
    for (let j = 0; j < computers[i].length; j++) {
      if (i == j) continue;
      if (computers[i][j] > 0) {
        graph.push({ start: i, end: j });
      }
    }
  }
  return graph;
};
*/

// findUnion 알고리즘
/*
function solution(n, computers) {
  const graph = getGraph(n, computers);
  let cnt = 0;
  const parent = Array.from(Array(n), (_) => cnt++);

  const getParent = (n) => {
    if (n == parent[n]) return n;
    return (parent[n] = getParent(parent[n]));
  };

  const union = (a, b) => {
    let x = getParent(a);
    let y = getParent(b);
    parent[y] = x;
  };

  var size = n;
  while (graph.length) {
    const { start, end } = graph.shift();
    if (getParent(start) != getParent(end)) {
      union(start, end);
      size--;
    }
  }
  //   console.log(graph);
  return size;
}
const getGraph = (n, computers) => {
  const graph = [];
  for (let i = 0; i < computers.length; i++) {
    for (let j = 0; j < computers[i].length; j++) {
      if (i == j) continue;
      if (computers[i][j] > 0) {
        graph.push({ start: i, end: j });
      }
    }
  }
  return graph;
};
*/

const result = solution(3, [
  [1, 1, 0],
  [1, 1, 1],
  [0, 1, 1],
]);
console.log(result);
