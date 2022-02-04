let graph = [
    [],     //0
    [2,3,8],//1
    [1,7],  //2
    [1,4,5],//3
    [3,5],  //4
    [7],    //5
    [2,6,8],//6
    [1,7]   //7
]

let visited = []
let stack = []
function dfs(graph, start, visited) {
    visited.push(start)
    stack.push(start)
    if(graph[start]) {
        for(let i of graph[start]) {
            if(!visited.includes(i)) {
                stack.push(i)
            }
        }    
    }
    while(i = stack.pop()) {
        if(!visited.includes(i)) {
            dfs(graph, i, visited)
        }
    }
}
dfs(graph, 1, visited)
console.log(visited)

visited = []
let queue = []
function bfs(graph, start, visited) {
    visited.push(start)
    queue.push(start)

    if(graph[start]) {
        for(let i of graph[start]) {
            queue.push(i)
        }
    }
    
    while(i = queue.shift()) {
        if(!visited.includes(i)) {
            bfs(graph, i, visited)
        }
    }
}
bfs(graph, 1, visited)
console.log(visited)