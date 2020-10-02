//124 나라가 있습니다. 124 나라에서는 10진법이 아닌 다음과 같은 자신들만의 규칙으로 수를 표현합니다.

//124 나라에는 자연수만 존재합니다.
//124 나라에는 모든 수를 표현할 때 1, 2, 4만 사용합니다.
/*
10진법	124 나라
1	1	
2	2	
3	4	
4	11	
5	12	
6	14
7	21
8	22
9	24
10	41
*/

// https://programmers.co.kr/learn/courses/30/lessons/12899

function solution(n) {
  var result = "";
  while (n > 0) {
    result = (n % 3 == 0 ? 4 : n % 3) + result;
    n = n % 3 == 0 ? Math.floor(n / 3) - 1 : Math.floor(n / 3);
  }
  return result;
}

solution(10);
