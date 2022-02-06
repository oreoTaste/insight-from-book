const n = 26
// 1로만들기
// 5로 나누거나, 3으로 나누거나 2로나누거나 1을빼서 1을 만드는 최소 횟수는?
// 다이나믹 프로그래밍
// 1 : 0회
// 2 : 1회
// 3 : 1회
// 4 : 2회
// 5 : 1회
// 6 : 2회
// 7 : 3회
// 8 : 3회
// 9 : 2회
// ...

let memoi = Array.from(Array(n + 1), (_) => 0)
memoi[0] = 0
memoi[1] = 0
memoi[2] = 1
memoi[3] = 1
memoi[5] = 1

function recursiveFibo(n) { // top-down
    if(memoi[n] !== 0) {
        return memoi[n]
    }

    let min = Number.MAX_SAFE_INTEGER
    if(n % 5 == 0) {
        min = Math.min(min, recursiveFibo(n/5) + 1)
    }
    if(n % 3 == 0) {
        min = Math.min(min, recursiveFibo(n/3) + 1)
    }
    if(n % 2 == 0) {
        min = Math.min(min, recursiveFibo(n/2) + 1)
    }
    min = Math.min(min, recursiveFibo(n-1) + 1)

    memoi[n] = min
    return min
}
function repeatFibo(n) { // bottom-up
    for(let i = 4; i <= n; i++) {
        let min = Number.MAX_SAFE_INTEGER
        if(i % 5 == 0) {
            min = Math.min(min, memoi[i/5] + 1)
        }
        if(i % 3 == 0) {
            min = Math.min(min, memoi[i/3] + 1)
        }
        if(i % 2 == 0) {
            min = Math.min(min, memoi[i/2] + 1)
        }
        min = Math.min(min, memoi[i-1] + 1)
        memoi[i] = min
    }
    return memoi[n]
}
console.log(recursiveFibo(n))
console.log(repeatFibo(n))
