const CONF = '2 4' // 행개수, 열개수
const ARRAY = '7 3 1 8 3 3 3 4' // 행열을 나열

const conf = CONF.split(' ').map((el) => parseInt(el))
const array = ARRAY.split(' ').map((el) => parseInt(el))

// 숫자카드게임
// greedy
// 행 별로 가장 낮은 숫자를 뽑고 그중 가장 큰숫자를 선택하면 된다
let smallArr = []
for(let i = 0; i < conf[0]; i++) {
    smallArr.push(Math.min.apply(null, array.slice(conf[1] * i, conf[1] * (1 + i))))
//    smallArr.push(array.slice(conf[1] * i, conf[1] * (1 + i)).sort()[0]);
}
console.log(smallArr.sort((a,b) => b-a)[0])
