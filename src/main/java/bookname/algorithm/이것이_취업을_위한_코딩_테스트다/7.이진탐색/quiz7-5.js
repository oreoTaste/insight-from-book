const n = 5
const array1 = '8 3 7 9 2'.split(' ').map(el => parseInt(el))
const m = 3
const array2 = '5 7 9'.split(' ').map(el => parseInt(el))
// 부품찾기
// 이진탐색

let arr1 = array1.sort()// 이진탐색 활용

function binarySearch(arr, start, end, target) {
    let mid = parseInt((start + end)/2)

    if(arr[mid] == target) {
        return 'yes' // return mid
    }
    if(start == end) {
        return 'no' // return false
    }
    if(arr[mid] > target) {
        return binarySearch(arr, start, mid-1, target)
    } else {
        return binarySearch(arr, mid+1, end, target)
    }
}
console.log(array2.map(el => binarySearch(arr1, 0, arr1.length-1, el)))

let arr2 = Array.from(Array(1000000), (v,i) => 0) // 계수정렬 활용
array1.forEach(el => arr2[el-1] = arr2[el-1] + 1)
console.log(array2.map(el => arr2[el-1] == 0 ? 'no': 'yes'))

let map = new Map() // map, set 활용
array1.forEach(el => map.set(el, (map.get(el) || 0) + 1))
console.log(array2.map(el => map.get(el) == 1 ? 'yes' : 'no'))
