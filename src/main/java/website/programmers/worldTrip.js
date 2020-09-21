// 주어진 항공권을 모두 이용하여 여행경로를 짜려고 합니다. 항상 ICN 공항에서 출발합니다.
// 항공권 정보가 담긴 2차원 배열 tickets가 매개변수로 주어질 때, 방문하는 공항 경로를 배열에 담아 return 하도록 solution 함수를 작성해주세요.

// https://programmers.co.kr/learn/courses/30/lessons/43164

function solution(tickets) {
  var arr = getTicket(tickets);
  arr.sort((a, b) => {
    var len = a.length;
    var cnt = 0;
    while (cnt <= len) {
      if (a[cnt] !== b[cnt]) return a[cnt].localeCompare(b[cnt]);
      else cnt++;
    }
  });
  return ["ICN"].concat(arr[0]);
}

function getTicket(tickets) {
  let len = tickets.length;
  let flag = Array(tickets.length).fill(0);
  var arr = [];
  const produce = (floor, city) => {
    if (tickets.length <= 0) {
      arr.push(flag.slice().flat());
      return;
    } else if (tickets.findIndex((el) => el[0] == city) < 0) {
      return;
    }

    var cities = tickets.filter((el) => el[0] == city);
    var others = tickets.filter((el) => el[0] !== city);
    for (let i = 0; i < cities.length; i++) {
      flag[floor] = cities[i][1];
      tickets = cities
        .slice(0, i)
        .concat(cities.slice(i + 1))
        .concat(others);
      produce(floor + 1, cities[i][1]);
    }
  };
  produce(0, "ICN");
  return arr;
}
