// 미래도시
// fwa
let [node, line] = '5 7'.split(' ').map(el => parseInt(el))
let GRAPH = '1 2 1 3 1 4 2 4 3 4 3 5 4 5'.split(' ').map(el => parseInt(el))
let [x, k] = '4 5'.split(' ').map(el => parseInt(el))
// let [node, line] = '4 2'.split(' ').map(el => parseInt(el))
// let GRAPH = '1 3 2 4'.split(' ').map(el => parseInt(el))
// let [x, k] = '3 4'.split(' ').map(el => parseInt(el))


let graph = []
for(let i = 0; i < line; i++) {
    graph.push(GRAPH.slice(i * 2, (i+1) * 2))
}

let visited = Array.from(Array(node), (_) => Array(node).fill(Number.MAX_SAFE_INTEGER))
for(let i = 0; i < node; i++){
    visited[i][i] = 0
}
graph.forEach(([start,end]) => {visited[start-1][end-1] = 1; visited[end-1][start-1] = 1})
function fwa(visited, node) {
    for(let i = 0; i < node; i++) {
        for(let j = 0; j < node; j++) {
            for(let p = 0; p < node; p++) {
                visited[j][p] = Math.min(visited[j][p], visited[j][i] + visited[i][p])
            }
        }
    }
}
fwa(visited,node)
//console.log(visited)
console.log(`${visited[0][k-1] + visited[k-1][x-1] > Number.MAX_SAFE_INTEGER ? -1 : visited[0][k-1] + visited[k-1][x-1]}건`)