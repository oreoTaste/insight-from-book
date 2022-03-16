// 사이클 확인하기
const [node, line] = '3 3'.split(' ').map(el => parseInt(el))
const GRAPH = '1 2 1 3 2 3'.split(' ').map(el => parseInt(el))

let parent = Array.from(Array(node+1), (v, i) => i)

function find_parent(node) {
    if(parent[node] !== node) {
        parent[node] = find_parent(parent[node])
    }
    return parent[node]
}
function union(node1, node2) {
    let p1 = find_parent(node1)
    let p2 = find_parent(node2)
    parent[Math.max(p1, p2)] = Math.min(p1, p2)
}
for(let i = 0; i < line; i++) {
    let [start, end] = GRAPH.slice(i * 2, (i+1) * 2)
    if(parent[start] == parent[end]) {
        console.log("사이클!")
        break;
    }
    union(start, end)
}
