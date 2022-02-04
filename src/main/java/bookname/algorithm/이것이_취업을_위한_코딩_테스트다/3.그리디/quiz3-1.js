const TOTAL_CHANGE = 3290;
// 거스름 돈 계산하기
// greedy
// 큰동전은 작은 동전의 배수이기때문에 큰동전을 최대한 많이 사용할 수록 항상 동전의 개수가 적다
// 500원짜리 = 100원짜리 * 5 , 500원짜리 = 50원짜리 * 10, 500원짜리 = 10원짜리 * 50
// 100원짜리 = 50원짜리 * 2, 100원짜리 = 10원짜리 * 10
// 50원짜리 = 10원짜리 * 5     
let coins = new Map();

const devide = (dividend, divisor) => [parseInt(dividend / divisor), dividend % divisor];

coins.set(500, devide(TOTAL_CHANGE, 500)[0])
coins.set(100, devide(TOTAL_CHANGE - coins.get(500) * 500, 100)[0])
coins.set(50, devide(TOTAL_CHANGE - coins.get(500) * 500 - coins.get(100) * 100, 50)[0])
coins.set(10, devide(TOTAL_CHANGE - coins.get(500) * 500 - coins.get(100) * 100 - coins.get(50) * 50, 10)[0])

for(let [key, val] of coins.entries()) {
    console.log(`${key}원 : ${val}개`)
}
