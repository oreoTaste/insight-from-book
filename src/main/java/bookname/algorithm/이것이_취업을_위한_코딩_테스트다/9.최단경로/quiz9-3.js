let [node, line] = '4 7'.split(' ').map(el => parseInt(el))
let GRAPH = '1 2 4 1 4 6 2 1 3 2 3 7 3 1 5 3 4 4 4 3 2'.split(' ').map(el => parseInt(el))
// 플로이드 워셜 알고리즘

let graph = []
for(let i = 0; i < line; i++) {
    graph.push(GRAPH.slice(i * 3, (i+1)*3))
}

let visited = Array.from(Array(node), (_) => Array(node).fill(Number.MAX_SAFE_INTEGER))
for(let i = 0; i < node; i++) {
    visited[i][i] = 0
}
graph.forEach(([start, end, dist]) => visited[start-1][end-1] = dist)

console.log(visited.slice(0,visited.length))

function fwa(visited, node) {
    for(let p = 0; p < node; p++) {
        for(let i = 0; i < node; i++) {
            for(let j = 0; j < node; j++) {
                visited[i][j] = Math.min(visited[i][j], visited[i][p] + visited[p][j])
            }
        }
    }
    console.log(visited.slice(0,visited.length))
}
fwa(visited, node)
