let [node, line] = '4 7'.split(' ').map(el => parseInt(el))
let GRAPH = '1 2 4 1 4 6 2 1 3 2 3 7 3 1 5 3 4 4 4 3 2'.split(' ').map(el => parseInt(el))
// 플로이드 워셜 알고리즘

let visited = Array.from(Array(node), (_) => Array(node).fill(Number.MAX_SAFE_INTEGER))

for(let i = 0; i < line; i++) {
    let [start, end, dist] = GRAPH.slice(i * 3, (i+1) * 3)
    visited[start - 1][end - 1] = dist
}

function fwa() {
    // 1. 자기 자신으로 가는건 모두 0이다
    for(let i = 0; i < visited.length; i++) {
        visited[i][i] = 0
    }

    // 2. 하나의 원소마다 꺼내서 이것을 거쳐가는 경우와 길이를 비교한다
    for(let i = 0; i < visited.length; i++) {
        for(let j = 0; j < visited.length; j++) {
            if(i == j) {
                continue;
            }
            for(let k = 0; k < visited.length; k++) {
                if(j == k) {
                    continue
                }
                visited[j][k] = Math.min(visited[j][k], visited[j][i] + visited[i][k])
            }
        }
    }
}

fwa()
console.log(visited)
