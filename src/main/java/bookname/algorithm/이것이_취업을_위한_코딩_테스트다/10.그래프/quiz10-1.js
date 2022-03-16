// 서로소 구현하기
const [node, line] = '6 4'.split(' ').map(el => parseInt(el))
const GRAPH = '1 4 2 3 2 4 5 6'.split(' ').map(el => parseInt(el))

// 1. 부모는 본인 자신으로 세팅
let parent = Array.from(Array(node+1), (v,i) => i)

function find_parent(node) {
    if(parent[node] !== node) {
        parent[node] = find_parent(parent[node])
    }
    return parent[node]
}

function union(node1, node2) {
    let p1 = find_parent(node1)
    let p2 = find_parent(node2)
    parent[Math.max(p2, p1)] = Math.min(p2, p1)
}
for(let i = 0; i < line; i++) {
    // 2. union 하기
    let [node1, node2] = GRAPH.slice(i * 2, (i+1) * 2)
    union(node1, node2)
}
for(let i = 0; i < node; i++) {
    parent[i] = find_parent(i)
}
console.log(parent.slice(1,))
