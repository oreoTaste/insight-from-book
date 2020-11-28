// // https://programmers.co.kr/learn/courses/30/lessons/42884
// 고속도로를 이동하는 모든 차량이 고속도로를 이용하면서 단속용 카메라를 한 번은 만나도록 카메라를 설치하려고 합니다.

// 고속도로를 이동하는 차량의 경로 routes가 매개변수로 주어질 때, 모든 차량이 한 번은 단속용 카메라를 만나도록 하려면
//  최소 몇 대의 카메라를 설치해야 하는지를 return 하도록 solution 함수를 완성하세요.

function solution(routes) {
  routes.sort((a, b) => a[1] - b[1]);
  var min = routes[0][1];
  var size = 1;
  for (let route of routes) {
    if (route[0] > min) {
      size++;
      min = route[1];
    }
  }
  return size;
}

const result = solution([
  [-20, 15],
  [-14, -5],
  [-18, -13],
  [-5, -3],
]);
console.log(result, result == 2);
