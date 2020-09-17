// 오픈채팅방 규칙 구현하기
// record
// ["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"]
// result
// ["Prodo님이 들어왔습니다.", "Ryan님이 들어왔습니다.", "Prodo님이 나갔습니다.", "Prodo님이 들어왔습니다."]

// https://programmers.co.kr/learn/courses/30/lessons/42888

function solution(record) {
  var name = new Map();
  record.forEach(function (el) {
    if (el.split(" ")[0] == "Enter" || el.split(" ")[0] == "Change") name.set(el.split(" ")[1], el.split(" ")[2]);
  });

  var answer = record
    .map(function (el) {
      var person = name.get(el.split(" ")[1]);

      var msg = el.split(" ")[0];
      switch (msg) {
        case "Enter":
          msg = "님이 들어왔습니다.";
          return [person + msg];
        case "Leave":
          msg = "님이 나갔습니다.";
          return [person + msg];
        default:
          return -1;
      }
    })
    .filter((el) => el != -1);

  return answer.flat();
}
