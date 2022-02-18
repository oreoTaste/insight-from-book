// 다익스트라 알고리즘
const [node, path] = '6 11'.split(' ').map(el => parseInt(el))
const start = 1
const GRAPH = '1 2 2 1 3 5 1 4 1 2 3 3 2 4 2 3 2 3 3 6 5 4 3 3 4 5 1 5 3 1 5 6 2'.split(' ').map(el => parseInt(el))

let graph = new Map();
for(let i = 0; i < path; i++) {
    let [begin, end, dist] = GRAPH.slice(3 * i, 3 * (i+1))
    graph.set(begin, [[end, dist], ...graph.get(begin) || []])
}

let visited = Array.from(Array(node +1), (_)=> Number.MAX_SAFE_INTEGER)
let confirm = Array.from(Array(node +1), (_)=> false)
visited[0]=0
confirm[0]=true

function getSmallestNode() {
    let min = Number.MAX_SAFE_INTEGER
    let nd = Number.MAX_SAFE_INTEGER
    for(let i = 0; i < visited.length; i++) {
        if(visited[i] < min && visited[i] !== 0 && !confirm[i]) {
            min = visited[i]
            nd = i
        }
    }

    if(nd != Number.MAX_SAFE_INTEGER) {
        confirm[nd] = true
    }
    return nd
}
function dijkstra(start) {
    visited[start]=0
    confirm[start]=true
        
    for(let [end, dist] of graph.get(start)) {
        if(!confirm[end]) {
            visited[end] = dist            
        }
    }

    for(let i = 0; i < node; i++) {
        let nd = getSmallestNode()

        for(let [end, dist] of graph.get(nd) || []) {
            if(visited[end] > dist + visited[nd]) { // 끝값까지 원래거리 > 끝값까지 거리 + nd까지의 거리 라면
                visited[end] =  dist + visited[nd]
            }
        }
    }
}

dijkstra(start)
console.log(visited.slice(1,))
