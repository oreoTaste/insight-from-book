const MAP = '4 4'.split(' ').map(el => parseInt(el))
const USER = '1 1 0'.split(' ').map(el => parseInt(el))
const DETAIL = '1 1 1 1 1 0 0 1 1 1 0 1 1 1 1 1'.split(' ').map(el => parseInt(el))

// 게임개발 (난이도 중)
// 구현문제
const [n, m] = MAP
let [x, y, direction] = USER

let detail = []
for(let i = 0; i < n; i++) {
    detail.push(DETAIL.slice(m * i, m * (i+1)))
}
let visited = Array.from(Array(n), (v,i) => Array.from(Array(m), (v,i) => 0))
visited[x][y] = 1

let count = 1
let turned = 0

// 북 동 남 서
let dx = [-1, 0, 1, 0]
let dy = [0, 1, 0, -1]

function turnLeft() {
    direction--;
    if(direction == -1) {
        direction = 3
    }
}

while(true) {
    console.log(x, y, direction)
    turnLeft()
    let nx = x + dx[direction]
    let ny = y + dy[direction]
    if(detail[nx][ny] != undefined && detail[nx][ny] == 0 && visited[nx][ny] == 0) { // 왼쪽으로 갈수있는데 안갔으면 간다
        x = nx
        y = ny
        visited[x][y] = 1
        turned = 0
        count++
        continue
    } else { // 왼쪽으로 못가거나, 왼쪽으로 갈수있는데 갔으면
        turned++
    }
    if(turned == 4) {
        turned = 0
        nx = x - dx[direction]
        ny = y - dy[direction]
        if(detail[nx][ny] == 0) {//뒤가 육지라면
            x = nx
            y = ny
        } else {
            break;
        }
    }
    // 4방향 모두 간곳이거나 바다라면 뒤로 이동한다
    // 뒤가 바다라면은 끝낸다.
}
console.log(count)