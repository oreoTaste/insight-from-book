// https://programmers.co.kr/learn/courses/30/lessons/42861
// n개의 섬 사이에 다리를 건설하는 비용(costs)이 주어질 때, 최소의 비용으로 모든 섬이 서로 통행 가능하도록 만들 때
// 필요한 최소 비용을 return 하도록 solution을 완성하세요.

// 다리를 여러 번 건너더라도, 도달할 수만 있으면 통행 가능하다고 봅니다.
// 예를 들어 A 섬과 B 섬 사이에 다리가 있고, B 섬과 C 섬 사이에 다리가 있으면 A 섬과 C 섬은 서로 통행 가능합니다.

function solution(n, costs) {
  var answer = 0;
  let cnt = 0;
  const parent = Array.from(Array(n), (x) => cnt++);

  const box = costs.map((el) => {
    return { start: el[0], end: el[1], cost: el[2] };
  });

  box.sort((a, b) => a.cost - b.cost);
  const getParent = (num) => {
    if (num == parent[num]) return num;
    return (parent[num] = getParent(parent[num]));
  };

  const union = (x, y) => {
    let a = getParent(x);
    let b = getParent(y);
    parent[b] = a;
  };

  for (let i = 0; i < box.length; i++) {
    let a = box[i].start;
    let b = box[i].end;
    if (getParent(a) !== getParent(b)) {
      union(a, b);
      answer += box[i].cost;
    }
  }
  return answer;
}

const result = solution(4, [
  [0, 1, 1],
  [0, 2, 2],
  [1, 2, 5],
  [1, 3, 1],
  [2, 3, 8],
]);
console.log(result);
