const N = 23
// 시각
// 구현문제

// 00시 00분 00초
// 24   59   59
let time = 0
// 0 -> 60*60*1초
// 1 -> 60*60*2
let start = new Date().getTime();
const getTime = (time) => {
    return [parseInt(time / 3600),  parseInt((time % 3600)/60), (time % 3600)%60]
}
let count = 0;
for(let i = 0; i < (1 + N) * 60 * 60; i++) {
    let [hr, min, sec] = getTime(i)

    if(`${hr}${min}${sec}`.includes('3')) {
        count++;
    }
}
console.log(count); let end1 = new Date().getTime();
console.log(`${end1 - start}ms 소요`)

// 더 빠른방법 (더빠르긴 하지만 시간내인건 같고 실수가 생길 여지가 많다.)
// 3이 있는 경우의 수
// ?   ??   ? 3 ->  x * 5 *  9 * 5 *  1
// ?   ??   3 ? ->  x * 5 *  9 * 1 * 10
// ?   ?3   ? ? ->  x * 5 *  1 * 6 * 10
// ?   3?   ? ? ->  x * 1 * 10 * 6 * 10
// 3   ??   ? ? ->  1 * 6 * 10 * 6 * 10
let sum = 0;
for(let i = 0; i <= N; i++) {
    if(i == 3 || i == 13 || i == 23) {
        sum += 1 * 6 * 10 * 6 * 10;
    } else {
        sum += 
        5 *  9 * 5 *  1+
        5 *  9 * 1 * 10+
        5 *  1 * 6 * 10+
        1 * 10 * 6 * 10;    
    }
}
console.log(sum); let end2 = new Date().getTime();
console.log(`${end2 - end1}ms 소요`)
