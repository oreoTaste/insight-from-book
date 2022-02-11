let [n, sum] = '3 105'.split(' ').map(el => parseInt(el))
let coins = [3, 5, 7]
// 효율적인 화폐 구성 (난이도 중)
// 다이나믹 프로그래밍
let memoi = Array.from(Array(sum+1), (_) => Number.MIN_SAFE_INTEGER)
for(let i = 1; i < Math.min(...coins); i++) {
    memoi[i] = -1
}
coins.forEach(el => memoi[el] = 1)

function repeatFibo(sum) {
    for(let i = 1; i <= sum; i++) {
        // -1 -> continue
        // 0 -> -1
        // 1 -> +1
        if(memoi[i] == -1) {
            continue
        } else if(memoi[i] < -1) {
            memoi[i] = -1
        } else {
            coins.forEach(el => memoi[i + el] = Math.min(memoi[i] + 1, memoi[i+el] > 0 ? memoi[i+el] : Number.MAX_SAFE_INTEGER))
        }        
    }
    return memoi[sum]
}
console.log(repeatFibo(sum))
function recursiveFibo(sum) {
    if(memoi[sum] >= -1) {
        return memoi[sum]
    }
    if(coins.includes(sum)) {
        memoi[sum] = 1
        return memoi[sum]
    }
    let candidate = coins.map(el => sum - el > 0 ? recursiveFibo(sum - el) + 1 : -1)
    let min = candidate.filter(el => el > 0).length > 0 ? Math.min(...candidate.filter(el => el > 0)) : -1
    memoi[sum] = min
    return memoi[sum]
}
console.log(recursiveFibo(sum))
