// 최대공약수 (largest common multiple) 구하기
// + 최소공배수 (greatest common divisor)

// arr	result
// [2,6,8,14]	168
// [1,2,3]	6

function solution(arr) {
  return arr.reduce((acc, val) => (acc * val) / gcd(acc, val));
}

function gcd(acc, val) {
  return acc % val == 0 ? val : gcd(val, acc % val);
}
