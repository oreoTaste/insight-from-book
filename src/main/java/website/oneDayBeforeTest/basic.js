// http://paullab.co.kr/codefestival.html
// Playground

function sum(x) {
  // 1.
  //   if (x <= 1) return 1;
  //   return x + solution(x - 1);
  // 2.
  //   return (x * (x + 1)) / 2;
  // 3.
  //   answer = 0;
  //   for (let i = 1; i <= x; i++) {
  //     answer += i;
  //   }
  //   return answer;
}

// function toBinary(x) {
//   let answer = "";
//   answer = (x & 1) + answer;

//   while (x > 1) {
//     x = x >> 1;
//     const shifted = x & 1;
//     answer = shifted + answer;
//   }
//   console.log(answer);
// }

// function toNotation(x, b) {
//   let answer = "";
//   let mok = Math.floor(x / b);
//   let namuji = x % b;
//   answer = namuji + answer;

//   while (mok > 1) {
//     namuji = mok % b;
//     mok = Math.floor(mok / b);
//     answer = namuji + answer;
//   }
//   answer = mok + answer;
//   console.log(answer);
// }
// function toRecursiveNotation(x, b) {
//   if (x < b) {
//     return x;
//   }
//   return "" + toNotation2(Math.floor(x / b), b) + (x % b);
// }
// toBinary(100);
// toNotation(100, 2);
// console.log(Number(String(100)).toString(2));
// console.log(toRecursiveNotation(8, 2));

// function reverse(str) {
//   return str.split("").reverse().join("");
// }
// function recurReverse(str) {
//   if (str.length <= 1) return str;
//   return str[str.length - 1] + recurReverse(str.slice(0, str.length - 1));
// }
// console.log(reverse("123456789"));
// console.log(recurReverse("123456789"));

// function sumDigit(x) {
//   let sum = 0;
//   x.toString()
//     .split("")
//     .forEach((el) => (sum += parseInt(el)));
//   return sum;
// }
// function recurSumDigit(x) {
//   if (x.toString().length == 1) return parseInt(x);
//   return parseInt(x.toString()[0]) + sumDigit(x.toString().slice(1, x.length));
// }
// console.log(sumDigit(12));
// console.log(recurSumDigit(123456789));

// function fibo(x) {
//   if (x < 3) return 1;
//   let sum = 1;
//   let prev = 1;
//   for (let i = 3; i <= x; i++) {
//     const temp = prev + sum;
//     prev = sum;
//     sum = temp;
//   }
//   return sum;
// }
// function recurFibo(x) {
//   if (x < 3) return 1;
//   return recurFibo(x - 1) + recurFibo(x - 2);
// }

// console.log(fibo(1), fibo(2), fibo(3), fibo(4), fibo(5), fibo(6), fibo(7), fibo(8));
// console.log(recurFibo(1), recurFibo(2), recurFibo(3), recurFibo(4), recurFibo(5), recurFibo(6), recurFibo(7), recurFibo(8));

// function max(array) {
//   return Math.max(...array);
// }
// function eachMax(array) {
//   let max = array[0];
//   array.forEach((val, ind, arr) => {
//     if (val > max) max = val;
//   });
//   return max;
// }
// function sortMax(array) {
//   array.sort((a, b) => b - a);
//   return array[0];
// }
// function reduceMax(array) {
//   const max = array.reduce((acc, val, ind) => {
//     if (acc > val) return acc;
//     else return val;
//   }, 0);
//   return max;
// }
// const array = [1, 6, 8, 5, 2, 6, 9, 7, 2, 0];
// console.log(max(array));
// console.log(eachMax(array));
// console.log(sortMax(array));
// console.log(reduceMax(array));

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
}
function subSort(answer, element) {
  for (let el in answer) {
    if (element < answer[el]) {
      return el;
    }
  }
  return answer.length;
}
function insertionSort(array) {
  const answer = [];
  while (array.length > 0) {
    const element = array.shift();
    const ind = subSort(answer, element);
    answer.splice(ind, 0, element);
  }
  return answer;
}
const array = [1, 6, 8, 5, 2, 6, 9, 7, 2, 0];
console.log(selectionSort(array));
console.log(insertionSort(array));
