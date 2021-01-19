// http://paullab.co.kr/codefestival.html
// 6. 밭의 비밀
// const array1 = [
//   [1, 0, 0, 0, 0],
//   [0, 0, 1, 0, 1],
//   [0, 0, 1, 0, 1],
//   [0, 0, 1, 0, 1],
//   [0, 0, 1, 0, 1],
// ];
// const array2 = [
//   [0, 0, 0, 0, 1],
//   [0, 0, 0, 0, 3],
//   [0, 0, 0, 0, 4],
//   [0, 2, 0, 0, 2],
//   [4, 5, 0, 2, 0],
// ];
// // <<정답>>
// const spin = (array2) => {
//   const spinArray = [];
//   for (let i = 0; i < array2.length; i++) {
//     const row = [];
//     for (let j = 0; j < array2[0].length; j++) {
//       row.push(array2[j][array2[0].length - 1 - i]);
//     }
//     spinArray.push(row);
//   }
//   return spinArray;
// };
// function solution(array1, array2) {
//   const spinArray = spin(array2);

//   const answer = [];
//   for (let i = 0; i < array1.length; i++) {
//     const row = [];
//     for (let j = 0; j < array1[i].length; j++) {
//       row.push(array1[i][j] + spinArray[i][j]);
//     }
//     answer.push(parseInt(row.join(""), 8));
//   }
//   console.log(String.fromCharCode(...answer));
// }
// solution(array1, array2);

const array1 = [
  [1, 0, 0, 0, 0],
  [0, 0, 1, 0, 1],
  [0, 0, 1, 0, 1],
  [0, 0, 1, 0, 1],
  [0, 0, 1, 0, 1],
];
const array2 = [
  [0, 0, 0, 0, 1],
  [0, 0, 0, 0, 3],
  [0, 0, 0, 0, 4],
  [0, 2, 0, 0, 2],
  [4, 5, 0, 2, 0],
];
function twist90(array) {
  const twist = Array.from(Array(5), (_) => []);
  for (const row in array) {
    for (const column in array[row]) {
      // 0 0 => 0 4
      // 0 1 => 1 4
      twist[row][column] = array[column][array[row].length - 1 - row];
    }
  }
  return twist;
}

function solution(array1, array2) {
  const twisted = twist90(array2);
  const arrayCombined = Array.from(Array(5), (_) => []);
  for (const row in array1) {
    for (const column in array1[row]) {
      arrayCombined[row][column] = array1[row][column] + twisted[row][column];
    }
  }
  const hint = arrayCombined.map((el) => String.fromCharCode(parseInt(el.join(""), 8))).join("");
  return hint;
}
console.log(solution(array1, array2));
