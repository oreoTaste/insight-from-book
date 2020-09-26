//조이스틱으로 알파벳 이름을 완성하세요. 맨 처음엔 A로만 이루어져 있습니다.
//ex) 완성해야 하는 이름이 세 글자면 AAA, 네 글자면 AAAA

//조이스틱을 각 방향으로 움직이면 아래와 같습니다.
//▲ - 다음 알파벳
//▼ - 이전 알파벳 (A에서 아래쪽으로 이동하면 Z로)
//◀ - 커서를 왼쪽으로 이동 (첫 번째 위치에서 왼쪽으로 이동하면 마지막 문자에 커서)
//▶ - 커서를 오른쪽으로 이동

// https://programmers.co.kr/learn/courses/30/lessons/42860

const alph = {
  A: 0,
  B: 1,
  C: 2,
  D: 3,
  E: 4,
  F: 5,
  G: 6,
  H: 7,
  I: 8,
  J: 9,
  K: 10,
  L: 11,
  M: 12,
  N: 13,
  O: 12,
  P: 11,
  Q: 10,
  R: 9,
  S: 8,
  T: 7,
  U: 6,
  V: 5,
  W: 4,
  X: 3,
  Y: 2,
  Z: 1,
};

function solution(name) {
  var arr = name.split("");
  return getSol(arr);
}

function getSol(arr) {
  var first = arr.shift();
  if (arr.length == 0 || arr.filter((el) => el !== "A").length == 0) {
    return alph[first];
  }
  console.log(first, arr.join(""));
  return (
    alph[first] +
    1 +
    (arr.findIndex((el) => el !== "A") + 1 <=
    arr
      .slice()
      .reverse()
      .findIndex((el) => el !== "A") +
      1
      ? getSol(arr.concat("A"))
      : getSol(arr.reverse().concat("A")))
  );
}
