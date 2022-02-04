const [n, k] = '5 3'.split(' ').map(el => parseInt(el))
const array1 = '1 2 5 4 3'.split(' ').map(el => parseInt(el))
const array2 = '5 5 6 6 5'.split(' ').map(el => parseInt(el))
// 두 배열의 원소교체
// 정렬

let arr1 = array1.sort()
let arr2 = array2.sort((a,b) => b-a)

// console.log(arr1, arr2)

for(let i = 0; i < k; i++) {
    if(arr1[i] < arr2[i]) {
        let tmp = arr1[i]
        arr1[i] = arr2[i]
        arr2[i] = tmp    
    }
}
console.log(arr1.reduce((prev, cur, ind) => prev + cur, 0))
