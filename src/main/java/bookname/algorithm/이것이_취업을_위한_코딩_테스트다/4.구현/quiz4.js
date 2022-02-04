const N = 17 // 피제수 dividend
const K = 4 // 제수 divisor

let dividend = N;
let divisor = K;
// 1이 될때까지
// greedy
// 나누는 숫자가 2이상이라면 나누는것이 빼는것보다 숫자를 항상 더 작게 만든다
let cnt = 0;
while(dividend > 1) {
    if(dividend % divisor == 0) {
        dividend /= divisor
    } else {
        dividend--;
    }
    cnt++;
}
console.log(`${cnt}회 수행`)