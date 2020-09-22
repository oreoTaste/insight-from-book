// 가로 길이가 2이고 세로의 길이가 1인 직사각형모양의 타일이 있습니다. 이 직사각형 타일을 이용하여 세로의 길이가 2이고 가로의 길이가 n인 바닥을 가득 채우려고 합니다. 타일을 채울 때는 다음과 같이 2가지 방법이 있습니다.
// 1. 타일을 가로로 배치 하는 경우
// 2. 타일을 세로로 배치 하는 경우
// 직사각형의 가로의 길이 n이 매개변수로 주어질 때, 이 직사각형을 채우는 방법의 수를 return 하는 solution 함수를 완성해주세요.

// https://programmers.co.kr/learn/courses/30/lessons/12900

function solution(n) {
  if (n == 1) return 1;
  if (n == 2) return 2;

  var arr = Array(n + 1);
  arr[1] = 1;
  arr[2] = 2;
  for (let i = 3; i <= n; i++) {
    arr[i] = (arr[i - 1] + arr[i - 2]) % 1000000007;
  }
  return arr[n];
}
