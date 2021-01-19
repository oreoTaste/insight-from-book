// http://paullab.co.kr/codefestival.html
// 5. 단서를 찾아서!
// const graph = {
//   100: new Set([67, 66]),
//   67: new Set([100, 82, 63]),
//   66: new Set([100, 73, 69]),
//   82: new Set([67, 61, 79]),
//   63: new Set([67]),
//   73: new Set([66]),
//   69: new Set([66, 65, 81]),
//   61: new Set([82]),
//   79: new Set([82, 87, 77]),
//   65: new Set([69, 84, 99]),
//   81: new Set([69]),
//   87: new Set([79, 31, 78]),
//   77: new Set([79]),
//   84: new Set([65]),
//   99: new Set([65]),
//   31: new Set([87]),
//   78: new Set([87]),
// };
// //<<정답>>
// function solution(graph) {
//   const big_DFS = (graph, start) => {
//     let visited = [];
//     let stack = [start];

//     while (stack) {
//       let n = 0;
//       n = stack.pop();
//       if (!visited.includes(n)) {
//         visited.push(n);
//         let 차집합 = [...graph[n]].filter((el) => !visited.includes(el) && !stack.includes(el));
//         차집합.sort((a, b) => a - b);
//         stack.push(...차집합);
//         if (stack.length <= 0 || 차집합.length <= 0) {
//           break;
//         }
//       }
//     }
//     return visited;
//   };
//   const small_DFS = (graph, start) => {
//     let visited = [];
//     let stack = [start];

//     while (stack) {
//       let n = 0;
//       n = stack.pop();
//       if (!visited.includes(n)) {
//         visited.push(n);
//         let 차집합 = [...graph[n]].filter((el) => !visited.includes(el));
//         차집합.sort((a, b) => b - a);
//         stack.push(...차집합);
//         if (stack.length <= 0 || 차집합.length <= 0) {
//           break;
//         }
//       }
//     }
//     return visited;
//   };
//   console.log(String.fromCharCode(...big_DFS(graph, 100)));
//   console.log(String.fromCharCode(...small_DFS(graph, 100)));
// }
// solution(graph);

const graph = {
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
function pathToSmall(graph, start) {
  const visited = [];
  const stack = [start];
  while (stack.length > 0) {
    const next = stack.pop();
    if (!visited.includes(next)) visited.push(next);
    let candidate = [...graph[next]];
    candidate = candidate.filter((el) => !visited.includes(el) && !stack.includes(el));
    candidate.sort();
    if (candidate.length > 0) stack.push(candidate[0]);
    if (candidate.length <= 0) break;
  }
  return visited;
}
function pathToBig(graph, start) {
  const visited = [];
  const stack = [start];
  while (stack.length > 0) {
    const next = stack.pop();
    if (!visited.includes(next)) visited.push(next);
    let candidate = [...graph[next]];
    candidate = candidate.filter((el) => !visited.includes(el) && !stack.includes(el));
    candidate.sort((a, b) => b - a);
    if (candidate.length > 0) stack.push(candidate[0]);
    if (candidate.length <= 0) break;
  }
  return visited;
}
console.log(String.fromCharCode(...pathToSmall(graph, 100)));
console.log(String.fromCharCode(...pathToBig(graph, 100)));
