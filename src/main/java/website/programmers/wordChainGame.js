// 끝말잇기에서 탈락한 사람 맞추기
// 정답은 [ 번호, 차례 ] 형태로 return 해주세요

// 예시
// n	words	result
// 3	[tank, kick, know, wheel, land, dream, mother, robot, tank]	[3,3]
// 5	[hello, observe, effect, take, either, recognize, encourage, ensure, establish, hang, gather, refer, reference, estimate, executive]	[0,0]
// 2	[hello, one, even, never, now, world, draw]	[1,3]

// https://programmers.co.kr/learn/courses/30/lessons/12981

function solution(n, words) {
  words = words.filter((el) => el.length > 1);

  /* 
  answer 1)
  var answer = 0;
  words.reduce((prev, now, idx) => {
    answer = answer || (prev !== now[0] || words.slice(0, idx).indexOf(now) !== -1 ? idx : answer);
    return now[now.length - 1];
  }, "");
  console.log(answer);
  return answer ? [1 + (answer % n), 1 + Math.floor(answer / n)] : [0, 0];
  */

  /*
  answer 2)
  var fault = -1;

  for (let j = 1; j < words.length; j++) {
    if (
      !words.slice(0, j).every(function (el) {
        if (words[j] == el) {
          fault = j;
          return false;
        }
        return true;
      })
    )
      break;

    if (words[j][0] !== words[j - 1][words[j - 1].length - 1]) {
      fault = j;
      break;
    }
  }
  if (fault == -1) return [0, 0];
  return [1 + (fault % n), 1 + Math.floor(fault / n)];
  */
}
