function sum1(x) {
  if (x <= 1) return 1;
  return x + solution(x - 1);
}

function sum2(x) {
  answer = 0;
  for (let i = 1; i <= x; i++) {
    answer += i;
  }
  return answer;
}

function sum3(x) {
  return (x * (x + 1)) / 2;
}
