// http://paullab.co.kr/codefestival.html
// 2. 돌건너기
// 돌의내구도 = [5, 3, 4, 1, 3, 8, 3];
// 독 = [
//   {
//     이름: "루비독",
//     나이: "95년생",
//     점프력: "3",
//     몸무게: "4",
//   },
//   {
//     이름: "피치독",
//     나이: "95년생",
//     점프력: "3",
//     몸무게: "3",
//   },
//   {
//     이름: "씨-독",
//     나이: "72년생",
//     점프력: "2",
//     몸무게: "1",
//   },
//   {
//     이름: "코블독",
//     나이: "59년생",
//     점프력: "1",
//     몸무게: "1",
//   },
// ];
// //<<정답>>
// const suceedDogs = [];
// for (obj of 독) {
//   let start = -1;
//   while (true) {
//     start += parseInt(obj.점프력);
//     // 생존여부 확인
//     if (start >= 돌의내구도.length) {
//       suceedDogs.push(obj.이름);
//       break;
//     }

//     // 내구도 계산
//     // 뛰기전
//     if (돌의내구도[start] <= 0) {
//       break;
//     } else {
//       돌의내구도[start] -= parseInt(obj.몸무게);
//     }
//     // 뛴이후
//     if (돌의내구도[start] < 0) {
//       break;
//     }
//   }
// }
// console.log("생존자 :", suceedDogs);

돌의내구도 = [5, 3, 4, 1, 3, 8, 3];
독 = [
  {
    이름: "루비독",
    나이: "95년생",
    점프력: "3",
    몸무게: "4",
  },
  {
    이름: "피치독",
    나이: "95년생",
    점프력: "3",
    몸무게: "3",
  },
  {
    이름: "씨-독",
    나이: "72년생",
    점프력: "2",
    몸무게: "1",
  },
  {
    이름: "코블독",
    나이: "59년생",
    점프력: "1",
    몸무게: "1",
  },
];

let winner = [];
for (const idx in 독) {
  let start = -1;
  while (true) {
    start += parseInt(독[idx]["점프력"]);
    if (start >= 돌의내구도.length) {
      // 통과
      winner.push(독[idx]["이름"]);
      break;
    }
    if (돌의내구도[start] <= 0) {
      break;
    }
    돌의내구도[start] -= parseInt(독[idx]["몸무게"]);
    if (돌의내구도[start] < 0) {
      break;
    }
  }
}
console.log(winner);
