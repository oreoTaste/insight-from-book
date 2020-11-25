// https://programmers.co.kr/learn/courses/30/lessons/49189
// n개의 노드가 있는 그래프가 있습니다. 각 노드는 1부터 n까지 번호가 적혀있습니다.
// 1번 노드에서 가장 멀리 떨어진 노드의 갯수를 구하려고 합니다. 가장 멀리 떨어진 노드란
// 최단경로로 이동했을 때 간선의 개수가 가장 많은 노드들을 의미합니다.

// 노드의 개수 n, 간선에 대한 정보가 담긴 2차원 배열 vertex가 매개변수로 주어질 때,
// 1번 노드로부터 가장 멀리 떨어진 노드가 몇 개인지를 return 하도록 solution 함수를 작성해주세요.

function solution(n, edge) {
  const graph = getGraph(n, edge);
  const visited = Array(n).fill(false);
  const dist = Array(n).fill(0);
  const tracking = [{ point: 0, distance: 0 }];
  visited[0] = true;
  BFS(graph, tracking, visited, dist);
  const max = Math.max(...dist);
  return dist.filter((el) => el == max).length;
}

const BFS = (graph, tracking, visited, dist) => {
  while (tracking.length) {
    const { point, distance } = tracking.shift();
    const next = graph[point];
    for (let i = 0; i < next.length; i++) {
      const index = next[i] - 1;
      if (!visited[index]) {
        visited[index] = true;
        tracking.push({ point: index, distance: distance + 1 });
      }
    }
    dist[point] = distance;
  }
};

const getGraph = (n, edge) => {
  var graph = Array.from(Array(n), (_) => []);
  while (edge.length) {
    const [from, to] = edge.shift();
    graph[from - 1].push(to);
    graph[to - 1].push(from);
  }
  return graph;
};

const result = solution(6, [
  [3, 6],
  [4, 3],
  [3, 2],
  [1, 3],
  [1, 2],
  [2, 4],
  [5, 2],
]);

console.log(result, result == 3);
