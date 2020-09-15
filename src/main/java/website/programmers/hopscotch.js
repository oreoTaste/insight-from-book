// 땅따먹기 게임
// 땅따먹기 게임의 땅(land)은 총 N행 4열로 이루어져 있고, 모든 칸에는 점수가 쓰여 있습니다.
// 1행부터 땅을 밟으며 한 행씩 내려올 때, 각 행의 4칸 중 한 칸만 밟으면서 내려와야 합니다.
//  단, 땅따먹기 게임에는 한 행씩 내려올 때, 같은 열을 연속해서 밟을 수 없는 특수 규칙이 있습니다.

// land	answer
// [[1,2,3,5],[5,6,7,8],[4,3,2,1]]	16

// https://programmers.co.kr/learn/courses/30/lessons/12913

function solution(land) {
  var dp = Array.from(Array(land.length), () => new Array(4).fill(0));
  dp[0] = land[0];
  for (let i = 1; i < land.length; i++) {
    dp[i][0] = land[i][0] + Math.max(dp[i - 1][1], dp[i - 1][2], dp[i - 1][3]);
    dp[i][1] = land[i][1] + Math.max(dp[i - 1][0], dp[i - 1][2], dp[i - 1][3]);
    dp[i][2] = land[i][2] + Math.max(dp[i - 1][0], dp[i - 1][1], dp[i - 1][3]);
    dp[i][3] = land[i][3] + Math.max(dp[i - 1][0], dp[i - 1][1], dp[i - 1][2]);
  }
  return Math.max(dp[land.length - 1][0], dp[land.length - 1][1], dp[land.length - 1][2], dp[land.length - 1][3]);
}
