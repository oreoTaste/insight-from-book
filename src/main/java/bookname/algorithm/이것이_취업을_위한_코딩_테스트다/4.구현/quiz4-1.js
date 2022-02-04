const SIZE = 5 // 행열크기
const INPUT = 'R R R U D D'.split(' ') // LRUD로 이동위치

// 상하좌우
// 구현문제
let position = new Map()
position.set("x", 1).set("y", 1)

const move = (size, position, str) => {
    let x = position.get("x");
    let y = position.get("y");
    if(str == "L" && y > 1) {
        position.set("y", y-1);
    } else if(str == "R" && y <= size) {
        position.set("y", y+1);
    } else if(str == "U" && x > 1) {
        position.set("x", x-1);
    } else if(str == "D" && x <= size) {
        position.set("x", x+1);
    } else {// 움직이지 못한 사례
    }
}

INPUT.forEach((el) => move(SIZE, position, el));
console.log(`${position.get("x")}, ${position.get("y")}`)
