const [n, k] = '4 6'.split(' ').map(el => parseInt(el))
let arr = '19 15 10 17'.split(' ').map(el => parseInt(el))
// 떡볶이 떡만들기 (난이도 중)
// 이진탐색

let max = Math.max(...arr)
function binarySearch(arr, min, max, target) {
    let mid = parseInt((min + max)/2)
    if(min == max || min > max) {
        return max
    }

    let sum = arr.reduce((prev, cur, array, ind) => prev + Math.max(cur - mid, 0), 0)
    if(sum == target) {
        return mid
    } else if(sum > target) {
        return binarySearch(arr, mid+1, max, target)
    } else {
        return binarySearch(arr, min, mid-1, target)
    }
}
console.log(binarySearch(arr, 0, max, 6))
