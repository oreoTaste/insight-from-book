let n = 3
// 바닥공사
// 다이나믹 프로그래밍 (틀림)

let memoi = Array.from(Array(n+1), (_) => 0)
memoi[1] = 1
memoi[2] = 3

function repeatFibo(n) {
    for(let i = 3; i <= n; i++) {
        memoi[i] = memoi[i-1] + memoi[i-2] * 2
    }
    return memoi[n]
}
console.log(repeatFibo(n))

function recursiveFibo(n) {
    if(memoi[n] != 0) {
        return memoi[n]
    }
    return memoi[n] = recursiveFibo(n-1) + recursiveFibo(n-2) * 2
}
console.log(recursiveFibo(n))