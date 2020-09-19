//n명의 권투선수가 권투 대회에 참여했고 각각 1번부터 n번까지 번호를 받았습니다. 권투 경기는 1대1 방식으로 진행이 되고, 만약 A 선수가 B 선수보다 실력이 좋다면 A 선수는 B 선수를 항상 이깁니다. 심판은 주어진 경기 결과를 가지고 선수들의 순위를 매기려 합니다. 하지만 몇몇 경기 결과를 분실하여 정확하게 순위를 매길 수 없습니다.
//선수의 수 n, 경기 결과를 담은 2차원 배열 results가 매개변수로 주어질 때 정확하게 순위를 매길 수 있는 선수의 수를 return 하도록 solution 함수를 작성해주세요.

// n 5
// results [[4, 3], [4, 2], [3, 2], [1, 2], [2, 5]]
// return 2

// https://programmers.co.kr/learn/courses/30/lessons/49191

function solution(n, results) {
  var arr = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
  for (let i = 0; i < results.length; i++) {
    var winner = results[i][0];
    var loser = results[i][1];
    arr[winner][loser] = 1;
    arr[loser][winner] = -1;
  }
  for (let m = 0; m < arr.length; m++) {
    for (let n = 0; n < arr.length; n++) {
      if (arr[m][n] > 0) {
        for (let i = 0; i < arr.length; i++) {
          if (arr[n][i] > 0) {
            arr[m][i] = 1;
            arr[i][m] = -1;
          }
        }
      } else if (arr[m][n] < 0) {
        for (let i = 0; i < arr.length; i++) {
          if (arr[n][i] < 0) {
            arr[m][i] = -1;
            arr[i][m] = 1;
          }
        }
      }
    }
  }

  var answer = 0;
  arr.forEach((val) => {
    if (val.filter((el) => el !== 0).length == n - 1) answer++;
  });
  return answer;
}
