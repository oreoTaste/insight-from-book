//N진수 게임
//튜브가 활동하는 코딩 동아리에서는 전통적으로 해오는 게임이 있다. 이 게임은 여러 사람이 둥글게 앉아서 숫자를 하나씩 차례대로 말하는 게임인데, 규칙은 다음과 같다.

//숫자를 0부터 시작해서 차례대로 말한다. 첫 번째 사람은 0, 두 번째 사람은 1, … 열 번째 사람은 9를 말한다.
//10 이상의 숫자부터는 한 자리씩 끊어서 말한다. 즉 열한 번째 사람은 10의 첫 자리인 1, 열두 번째 사람은 둘째 자리인 0을 말한다.

//https://programmers.co.kr/learn/courses/30/lessons/17687

function solution(n, t, m, p) {
  var arr = [];
  for (let i = 0; i < t * m; i++) {
    arr.push(i);
  }
  arr = arr.map((e1) => {
    return getBinary(e1, n);
  });
  arr = arr.join("");
  var answer = [];
  for (let i = p - 1; i < p - 1 + m * t; i += m) {
    answer.push(arr[i]);
  }
  return answer.join("");
}

const alph = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: "A",
  11: "B",
  12: "C",
  13: "D",
  14: "E",
  15: "F",
  16: "G",
};

function getBinary(e1, n) {
  var arr = [];
  while (e1 >= n) {
    arr.push(alph[e1 % n]);
    e1 = Math.floor(e1 / n);
  }
  arr.push(alph[e1]);

  return arr.reverse().join("");
}
