const [n, m] = '4 5'.split(' ').map(el => parseInt(el))
const ICE = '00110000111111100000'.split('').map(el => parseInt(el))
// 음료수 얼려먹기
// dfs & bfs

let ice = []
for(let i = 0; i < n; i++) {
    ice.push(ICE.slice(m * i, m * (i+1)))
}
let visited = Array.from(Array(n), (v,i) => Array.from(Array(m), (v,i) => 0))
// console.log(ice, visited)

let dx = [-1, 0, 0, 1]
let dy = [0, -1, 1, 0]
let queue = visited.slice(0, visited.length)

function bfs(ice, x, y, visited) {
    let flag = false
    if(ice[x][y] == 0 && visited[x][y] == 0) { // 얼음이고 
        visited[x][y] = 1
        flag = true
    } else if(ice[x][y] == 0) {
        visited[x][y] = 1
    }
    for(let i in dx) {
        let nx = x + dx[i]
        let ny = y + dy[i]
        if(nx >= 0 && ny >= 0 && nx < n && ny < m && ice[nx][ny] == 0) {
            queue.push([nx, ny])
        }
    }
    while(i = queue.shift()) {
        let [ix, iy] = i
        if(ix >= 0 && iy >= 0 && ix < n && iy < m && visited[ix][iy] == 0) {
            bfs(ice, ix, iy, visited)
        }
    }
    return flag
}

// let count = 0
// for(let i = 0; i < n; i++) {
//     for(let j = 0; j < m; j++) {
//         if(ice[i][j] == 0 && visited[i][j] == 0 && bfs(ice, i, j, visited)) {
//             count++
//         }
//     }
// }
// console.log(count)
let stack = visited.slice(0, visited.length)
function dfs(ice, x, y, visited) {
    let flag = false
    // 얼음이면 visited에 올리기
    if(ice[x][y] == 0 && visited[x][y] == 0) {
        visited[x][y] = 1
        flag = true
    }

    // 주변 얼음인지 확인하기
    for(let i in dx) {
        let nx = x+dx[i]
        let ny = y+dy[i]
        if(nx >= 0 && ny >= 0 && nx < n && ny < m && ice[nx][ny] == 0) {
            stack.push([nx, ny])
        }
    }
    // dfs
    while(i = stack.pop()) {
        let [ix, iy] = i
        if(ix >= 0 && iy >= 0 && ix < n && iy < m && visited[ix][iy] == 0) {
            dfs(ice, ix, iy, visited)
        }
    }
    return flag
}
let count = 0
for(let i = 0; i < n; i++) {
    for(let j = 0; j < m; j++) {
        if(ice[i][j] == 0 && visited[i][j] == 0 && dfs(ice, i, j, visited)) {
            count++
        }
    }
}
console.log(count)
