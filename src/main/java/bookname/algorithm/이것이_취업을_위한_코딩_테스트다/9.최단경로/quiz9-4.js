// 미래도시
// fwa
let [node, line] = '5 7'.split(' ').map(el => parseInt(el))
let GRAPH = '1 2 1 3 1 4 2 4 3 4 3 5 4 5'.split(' ').map(el => parseInt(el))
let [x, k] = '4 5'.split(' ').map(el => parseInt(el))
// let [node, line] = '4 2'.split(' ').map(el => parseInt(el))
// let GRAPH = '1 3 2 4'.split(' ').map(el => parseInt(el))
// let [x, k] = '3 4'.split(' ').map(el => parseInt(el))

let visited = Array.from(Array(node), (_) => Array(node).fill(Number.MAX_SAFE_INTEGER))
console.log(visited)

for(let i = 0; i < line; i++) {
    let [start, end] = GRAPH.slice(i * 2, (i+1) * 2)
    visited[start - 1][end - 1] = 1
    visited[end - 1][start - 1] = 1
}

function fwa() {
    // 1. 자기자신까지의 거리는 0이다.
    for(let i = 0; i < node; i++) {
        visited[i][i] = 0
    }

    // 2. 경유지를 하나 선택하고 거기를 거쳐가는 경우의 수 생각하기
    for(let i = 0; i < node; i++) {
        for(let j = 0; j < node; j++) {
            if(i == j) {
                continue
            }
            for(let k = 0; k < node; k++) {
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
console.log(`${visited[0][k-1] + visited[k-1][x-1] >= Number.MAX_SAFE_INTEGER ? -1 : visited[0][k-1] + visited[k-1][x-1]}`)
