// 중요도가 높은 문서를 먼저 인쇄 작업을 수행합니다.
// 1. 인쇄 대기목록의 가장 앞에 있는 문서(J)를 대기목록에서 꺼냅니다.
// 2. 나머지 인쇄 대기목록에서 J보다 중요도가 높은 문서가 한 개라도 존재하면 J를 대기목록의 가장 마지막에 넣습니다.
// 3. 그렇지 않으면 J를 인쇄합니다.

function solution(priorities, location) {
  // using recursive
  return getPriority2(priorities, location);
  // using loop
  return (
    getPriority(priorities, location)
      .split(" ")
      .findIndex((el) => el.includes(">")) + 1
  );
}

function getPriority(priorities, location) {
  if (priorities.length == 1 && location == 0) return ">" + priorities[0];
  if (priorities.length == 1) return priorities[0];

  if (priorities.filter((el) => el > priorities[0]).length == 0) {
    if (location == 0) {
      let temp = priorities.shift();
      return ">" + temp + " " + getPriority(priorities, -1);
    }
    location = location - 1;
    let temp = priorities.shift();
    return temp + " " + getPriority(priorities, location);
  } else {
    if (location == 0) location = priorities.length - 1;
    else location = location - 1;
    var temp = priorities.shift();
    priorities.push(temp);
    return getPriority(priorities, location);
  }
}

function getPriority2(priorities, location) {
  const arr = priorities.map((value, index) => ({ index, value }));
  var result = [];
  while (arr.length > 0) {
    const first_el = arr.shift();
    if (arr.some((el) => el.value > first_el.value)) {
      arr.push(first_el);
    } else {
      result.push(first_el);
    }
  }
  return result.findIndex((el) => el.index == location) + 1;
}
