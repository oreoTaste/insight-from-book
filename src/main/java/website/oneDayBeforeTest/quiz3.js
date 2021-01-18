// http://paullab.co.kr/codefestival.html
// 3. 섬으로 건너가라
// 대기인원 = 14000605;
// 출력  5년 1월 413일 11시 0분 (+현재시간)
// 대기인원 = 12000202;
// 출력 4년 3월 24일 11시 33분 (+현재시간)
// <<정답>>
// const jan = 0b10000000000;
// const feb = 0b11000000000;
// const mar = 0b11100000000;
// const apr = 0b11110000000;
// const may = 0b11111000000;
// const jun = 0b11111100000;
// const jul = 0b11111110000;
// const aug = 0b11111111000;
// const sep = 0b11111111100;
// const oct = 0b11111111110;
// const peoplePerDate = (21 - 9) * (1 * 25 + 5 * 15);
// // 9, 9:10 9:20 9:30 9:40 9:50
// // 10
// // 11
// // ...
// // 20
// const peoplePerHour = 1 * 25 + 5 * 15;

// const yearMonthDate = (date) => {
//   const year = Math.floor(date / oct);
//   let leftover = date - year * oct;

//   let month;
//   if (leftover < jan) {
//     month = 0;
//     leftover -= 0;
//   } else if (leftover < feb) {
//     month = 1;
//     leftover -= jan;
//   } else if (leftover < mar) {
//     month = 2;
//     leftover -= feb;
//   } else if (leftover < apr) {
//     month = 3;
//     leftover -= mar;
//   } else if (leftover < may) {
//     month = 4;
//     leftover -= apr;
//   } else if (leftover < jun) {
//     month = 5;
//     leftover -= may;
//   } else if (leftover < jul) {
//     month = 6;
//     leftover -= jun;
//   } else if (leftover < aug) {
//     month = 7;
//     leftover -= jul;
//   } else if (leftover < sep) {
//     month = 8;
//     leftover -= aug;
//   } else if (leftover < oct) {
//     month = 9;
//     leftover -= sep;
//   } else {
//     month = 10;
//     leftover += oct;
//   }
//   return year + "년 " + month + "월 " + leftover + "일 ";
// };

// const hourMin = (people) => {
//   let hour;
//   for (let i = 1; i <= 12; i++) {
//     if (people < peoplePerHour * i) {
//       hour = i - 1;
//       people -= peoplePerHour * hour;
//       break;
//     }
//   }
//   hour += 9;

//   let min;
//   for (let i = 0; i < 6; i++) {
//     if (people < 25 + 15 * i) {
//       min = i * 10;
//       break;
//     }
//   }
//   min += new Date().getMinutes();
//   if (min >= 60) {
//     hour += 1;
//     min -= 60;
//   }
//   return hour + "시 " + min + "분";
// };
// 대기인원 = 12000202;
// 라이캣 = 대기인원 + 2;
// const 라이캣기다린날 = Math.floor(라이캣 / peoplePerDate);
// const 라이캣남은인원 = 라이캣 % peoplePerDate;
// console.log(`${yearMonthDate(라이캣기다린날)}${hourMin(라이캣남은인원)}`);

// 대기인원 = 14000605;
// 출력  5년 1월 413일 11시 0분 (+현재시간)
// 정각에 25명, 10분마다 15명
// 9시 ~ 21시

const myTurn = 14000605;
const peoplePerHour = 1 * 25 + 5 * 15; // 100
const peoplePerDate = 12 * peoplePerHour; // 1200
const datePerYear = 0b11111111110;

const totalDatesPerMonth = (month) => {
  if (month == 0) return 0;
  else return 2 ** (11 - month) * ((month * (month + 1)) / 2);
};
const yearMonthDate = (date) => {
  const year = parseInt(date / datePerYear);
  let month = 0;
  let leftover = parseInt(date % datePerYear);
  // 1024 1538 ... 2월
  for (let i = 10; i >= 1; i--) {
    if (leftover < totalDatesPerMonth(11 - i)) {
      leftover -= totalDatesPerMonth(month);
      break;
    } else {
      month = 11 - i;
      continue;
    }
  }
  return `${year}년 ${month}월 ${leftover}일`;
};
const hourMinSec = (people) => {
  const hour = 9 + parseInt(people / peoplePerHour);
  let min = 0;
  const leftover = parseInt(people % peoplePerHour);
  for (let i = 0; i < 6; i++) {
    // 25 40 55 70 85 ...
    if (leftover > 15 * i + 25) {
      min = 10 * i;
    } else {
      return `${hour}시 ${min + new Date().getMinutes()}분`;
    }
  }
};
console.log(`${yearMonthDate(parseInt(myTurn / peoplePerDate))} ${hourMinSec(parseInt(myTurn % peoplePerDate))}에 배를 탑니다`);
