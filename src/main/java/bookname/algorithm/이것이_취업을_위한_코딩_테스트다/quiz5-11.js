const [n, m] = '5 6'.split(' ').map(el => parseInt(el))
const INPUT = '101010111111000001111111111111'.split('').map(el => parseInt(el))
// 미로탈출
// dfs & bfs

let input = []
for(let i = 0; i < n; i++) {
    input.push(INPUT.slice(i * m, (i+1) * m))
}
let visited = Array.from(Array(n), (v,i) => Array.from(Array(m), (v,i) => 0))
let [x, y] = [0, 0];
// visited[x][y] = 1

let dx = [1, 0, -1, 0]
let dy = [0, 1, 0, -1]
let answer = []
function dfs(input, visited, x, y, path) {
    // let stack = []
    if(x == n-1 && y == m-1) {
        if(answer.length == 0) {
            answer = [...path, [x,y]]
        } else if(answer.length > path.length){
            answer = [...path, [x,y]]
        }
        return;
    }
    if(visited[x][y] == 0) {
        visited[x][y] = 1
    } else {
        return
    }

    for(let i in dx) {
        let nx = x + dx[i]
        let ny = y + dy[i]
        if(nx >= 0 && ny >= 0 && nx < n && ny < m && input[nx][ny] == 1 && visited[nx][ny] == 0) {
            // stack.push([nx, ny])
            dfs(input, visited, nx, ny, [...path, [x,y]])
        }
    }
    // while(i = stack.pop()) {
    //     let [ix, iy] = i
    //     if(ix >= 0 && iy >= 0 && ix < n && iy < m && input[ix][iy] == 1 && visited[ix][iy] == 0) {
    //         dfs(input, visited, ix, iy, [...path, [x,y]])
    //     }
    // }
}
dfs(input, visited, x, y, [], [])
console.log(answer)

function bfs(input, visited, x, y, path) {
    let queue = []
    if(x == n-1 && y == m-1) {
        if(answer.length == 0 || answer.length > path.length) {
            answer = [...path, [x, y]]
        }
        return
    }
    if(visited[x][y] == 0) {
        visited[x][y] = 1
    } else {
        return
    }

    for(let i in dx) {
        let nx = x + dx[i]
        let ny = y + dy[i]
        if(nx >= 0 && ny >= 0 && nx < n && ny < m && input[nx][ny] == 1 && visited[nx][ny] == 0) {
            queue.push([nx, ny])
        }
    }
    while(i = queue.shift()) {
        let [ix, iy] = i
        if(ix >= 0 && iy >= 0 && ix < n && iy < m && input[ix][iy] == 1  && visited[ix][iy] == 0) {
            bfs(input, visited, ix, iy, [...path, [x, y]])
        }
    }
}
bfs(input, visited, x, y, [])
console.log(answer)