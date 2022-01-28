const INPUT = 'a1'

// 왕실의 나이트
// 구현 문제
let input = new Map();
input.set("x", INPUT[0].charCodeAt(0)-96).set("y", parseInt(INPUT[1]))
const getCodes = (input) => {
    let x = input.get("x");
    let y = input.get("y");
    return [[x + 2, y + 1], [x + 2, y - 1], [x - 2, y + 1], [x - 2, y - 1], [x + 1, y + 2], [x + 1, y - 2], [x - 1, y + 2], [x - 1, y - 2]]
}

let list = getCodes(input)
list = list.filter((el) => el[0] > 0 && el[1] > 0)
list = list.map((el) => [String.fromCharCode(el[0] + 96), el[1]].join(''))
console.log(list)
console.log(list.length)