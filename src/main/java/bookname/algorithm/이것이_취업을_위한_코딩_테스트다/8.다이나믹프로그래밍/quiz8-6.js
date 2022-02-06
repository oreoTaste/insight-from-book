const arr = '1315'.split('').map(el => parseInt(el))
// 개미전사
// 다이나믹프로그래밍
let memoi = Array.from(Array(arr.length), (_) => 0)

function recursiveFibo(arr, ind) {
    if(ind == 0) {
        memoi[0] = arr[0]
        return memoi[0]
    } else if(ind == 1) {
        memoi[1] = Math.max(arr[0], arr[1])
        return memoi[1]
    }
    memoi[ind] = Math.max(recursiveFibo(arr, ind-2) + arr[ind], recursiveFibo(arr, ind-1))
    return memoi[ind]
}
function repeatFibo(arr, ind) {
    memoi[0] = arr[0]
    memoi[1] = Math.max(arr[0], arr[1])

    for(let i = 2; i <= ind; i++) {
        memoi[i] = Math.max(memoi[i-2] + arr[i], memoi[i-1])
    }
    return memoi[ind]
}

console.log(recursiveFibo(arr, arr.length-1))
console.log(repeatFibo(arr, arr.length-1))
console.log(memoi)