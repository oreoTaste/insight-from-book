// 0 또는 양의 정수가 주어졌을때, 정수를 이어붙여 만들 수 있는 가장 큰 수를 알아내기
// 예를 들어, 주어진 정수가 [6, 10, 2]라면 [6102, 6210, 1062, 1026, 2610, 2106]를 만들 수 있고, 이중 가장 큰 수는 6210입니다.
// numbers의 길이는 1 이상 100,000 이하입니다.
// numbers의 원소는 0 이상 1,000 이하입니다.
// 정답이 너무 클 수 있으니 문자열로 바꾸어 return 합니다.

// https://programmers.co.kr/learn/courses/30/lessons/42746

function solution(numbers) {
  numbers.sort(function (a, b) {
    a = a.toString();
    b = b.toString();
    if (parseInt(a + b) < parseInt(b + a)) return 1;
    else return -1;
  });
  var answer = numbers.join("");
  if (answer[0] == 0) answer = "0";
  return answer;
}
solution(6, 10, 2);
