// 이진탐색트리
let arr = Array.from(Array(100), (v,i) => i+1)

function binarySearch(array, start, end, target) {
    let mid = parseInt((start + end) / 2)

    if(array[mid] == target) {
        return mid
    } else if(array[mid] > target) {
        return binarySearch(array, start, mid-1, target)
    } else {
        return binarySearch(array, mid+1, end, target)
    }
}
console.log(binarySearch(arr, 0, arr.length-1, 78))