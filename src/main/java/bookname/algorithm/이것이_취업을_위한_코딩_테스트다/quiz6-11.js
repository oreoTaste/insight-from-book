const n = 2
const INPUT = '홍길동 95 이순신 77'.split(' ')
// 성적이 낮은 순서로 학생 출력하기

console.log(INPUT)
let input = []
for(let i = 0; i < INPUT.length/2; i++) {
    input.push(INPUT.slice(i * 2, i * 2 + 2))
}

input.sort((a,b) => parseInt(a[1]) - parseInt(b[1]))
console.log(input.map((el) => el[0]))