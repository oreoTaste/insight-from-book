// http://paullab.co.kr/codefestival.html
// 4. 자리를 양보해가며!
// 페이지 = ["척추동물", "어류", "척추동물", "무척추동물", "파충류", "척추동물", "어류", "파충류"];
// //<<정답>>
// function solution(페이지) {
//   let array = [];
//   let minute = 0;
//   let second = 0;
//   for (let i = 0; i < 페이지.length; i++) {
//     console.log(array);
//     if (array.length <= 0) {
//       array.push({ client: 페이지[i], cnt: 1 });
//       minute += 1;
//     } else {
//       if (array.find((el) => el.client === 페이지[i])) {
//         const targetIndex = array.findIndex((el) => el.client === 페이지[i]);
//         array[targetIndex].cnt += 1;
//         const target = array.splice(targetIndex, 1);
//         array.push(...target);
//         second += 1;
//       } else {
//         if (array.length < 3) {
//           array.push({ client: 페이지[i], cnt: 1 });
//           minute += 1;
//         } else {
//           array.shift();
//           array.push({ client: 페이지[i], cnt: 1 });
//           minute += 1;
//         }
//       }
//     }
//   }
//   console.log(`${minute}분 ${second}초 소요됨`);
//   console.log(array);
// }
// solution(페이지);

페이지 = ["척추동물", "어류", "척추동물", "무척추동물", "파충류", "척추동물", "어류", "파충류"];
const queue = [];
let min = 0;
let sec = 0;
for (const animal of 페이지) {
  if (queue.length < 3) {
    if (queue.find((el) => el.animal === animal)) {
      const idx = queue.findIndex((el) => el.animal === animal);
      queue[idx].cnt += 1;
      queue.push(...queue.splice(idx, 1));
      sec += 1;
    } else {
      queue.push({ animal: animal, cnt: 1 });
      min += 1;
    }
  } else {
    if (queue.find((el) => el.animal === animal)) {
      const idx = queue.findIndex((el) => el.animal === animal);
      queue[idx].cnt += 1;
      queue.push(...queue.splice(idx, 1));
      sec += 1;
    } else {
      queue.shift();
      queue.push({ animal: animal, cnt: 1 });
      min += 1;
    }
  }
}
console.log(`${min}분 ${sec}초 소요`);
