//스트리밍 사이트에서 장르 별로 가장 많이 재생된 노래를 두 개씩 모아 베스트 앨범을 출시하려 합니다. 노래는 고유 번호로 구분하며, 노래를 수록하는 기준은 다음과 같습니다.
//1. 속한 노래가 많이 재생된 장르를 먼저 수록합니다.
//2. 장르 내에서 많이 재생된 노래를 먼저 수록합니다.
//3. 장르 내에서 재생 횟수가 같은 노래 중에서는 고유 번호가 낮은 노래를 먼저 수록합니다.
// 노래의 장르를 나타내는 문자열 배열 genres와 노래별 재생 횟수를 나타내는 정수 배열 plays가 주어질 때, 베스트 앨범에 들어갈 노래의 고유 번호를 순서대로 return 하도록 solution 함수를 완성하세요.

// https://programmers.co.kr/learn/courses/30/lessons/42579

function solution(genres, plays) {
  // concatenation
  var arr = Array(genres.length);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = Array(genres[i], plays[i]);
  }
  // get Genre set
  var genre = new Set();
  genres.forEach((el) => genre.add(el));
  var genre_arr = Array.from(genre);

  // check summary as per Genre
  var summary = [];
  genre_arr.forEach((e1) => {
    var sum = arr.reduce((acc, val, idx) => {
      if (val[0] == e1) {
        return acc + val[1];
      } else return acc;
    }, 0);
    summary.push([e1, sum]);
  });
  summary.sort((a, b) => b[1] - a[1]);

  // collect best 1, 2 from each Genre
  var answer = [];
  summary.forEach((e1) => {
    var element = arr.filter((el) => el[0] == e1[0]).sort((a, b) => b[1] - a[1]);
    if (element.length > 1) {
      answer.push(arr.findIndex((el) => el == element[0]));
      answer.push(arr.findIndex((el) => el == element[1]));
    } else {
      answer.push(arr.findIndex((el) => el == element[0]));
    }
  });
  return answer;
}
