// 카펫 모양 기억해내기
// 카펫의 중앙에는 노란색으로 칠해져 있고, 테두리 1줄은 갈색으로 칠해져 있는 격자 모양 카펫을 봤습니다.
// 이때 카펫의 가로, 세로 길이 구하기

// 제한사항
// 갈색 격자의 수 brown은 8 이상 5,000 이하인 자연수입니다.
// 노란색 격자의 수 yellow는 1 이상 2,000,000 이하인 자연수입니다.
// 카펫의 가로 길이는 세로 길이와 같거나, 세로 길이보다 깁니다.
// 입출력 예
// brown	yellow	return
// 10	2	[4, 3]
// 8	1	[3, 3]
// 24	24	[8, 6]

// https://programmers.co.kr/learn/courses/30/lessons/42842

function solution(brown, yellow) {
  // yellow 약수 구하기 (직사각형 구하기)
  var yellow_arr = [];
  for (let i = 1; i <= Math.sqrt(yellow); i++) {
    if (yellow % i == 0) yellow_arr.push([yellow / i, i]);
  }

  // yellow + brown 약수 구하기 (직사각형 구하기)
  var brown_arr = [];
  for (let i = 3; i <= Math.sqrt(brown + yellow); i++) {
    if ((brown + yellow) % i == 0) brown_arr.push([(brown + yellow) / i, i]);
  }

  // yellow 직사각형과 brown 직사각형 크기 부합여부 확인
  for (let i = 0; i < brown_arr.length; i++) {
    for (let j = 0; j < yellow_arr.length; j++) {
      if (brown_arr[i][0] == yellow_arr[j][0] + 2 && brown_arr[i][1] == yellow_arr[j][1] + 2) return [brown_arr[i][0], brown_arr[i][1]];
    }
  }
}
