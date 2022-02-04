const CONF = '5 8 3' // 배열의 개수, 총 더하는 횟수, 연속으로 더할 수 있는 횟수
const ARRAY = '2 4 5 4 6' //배열

// 더해서 가장 큰수 구하기
// greedy
// 더할 수 있는 횟수가 정해져있기 때문에 가장 큰수를 최대한 많이 더하는 것이 큰수를 만드는 방법이다
const conf = CONF.split(' ')
const array = ARRAY.split(' ').sort((a,b) => b-a)

// normal
let sum = 0;
for(let i = 0; i < conf[1]; i++) {
    // 0,1,2,[3],4,5,6,[7],8,9,10,[11]...
    // 1,2,3,[4],5,6,7,[8],9,10,11,[12]
    if((i+1) % conf[2] == 0) {
        sum += parseInt(array[1])
    } else {
        sum += parseInt(array[0])
    }
}
console.log(sum)

// faster
console.log(parseInt(array[0]) * 
            parseInt(conf[1]) - 
            parseInt(parseInt(conf[1]) / (parseInt(conf[2]) + 1))
            )
