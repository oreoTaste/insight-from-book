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
  const arrayCopy = array.slice();
  const answer = [];
  while (arrayCopy.length > 0) {
    const element = arrayCopy.shift();
    const ind = subSort(answer, element);
    answer.splice(ind, 0, element);
  }
  return answer;
}

function mergeSort(array) {
  if (array.length <= 1) return array;
  const half = parseInt(array.length / 2);
  const firstHalf = mergeSort(array.slice(0, half));
  const secondHalf = mergeSort(array.slice(half));

  const result = [];
  while (firstHalf.length > 0 && secondHalf.length > 0) {
    if (firstHalf[0] < secondHalf[0]) {
      result.push(firstHalf.shift());
    } else {
      result.push(secondHalf.shift());
    }
  }
  while (firstHalf.length > 0) {
    result.push(firstHalf.shift());
  }
  while (secondHalf.length > 0) {
    result.push(secondHalf.shift());
  }
  return result;
}

function quickSort(array) {
  if (array.length <= 1) return array;
  const pivot = [array.shift()];
  const firstHalf = [];
  const secondHalf = [];
  for (let i in array) {
    if (array[i] < pivot) {
      firstHalf.push(array[i]);
    } else {
      secondHalf.push(array[i]);
    }
  }
  return quickSort(firstHalf).concat(pivot).concat(secondHalf);
}
const array = [1, 6, 8, 5, 2, 6, 846, 48, 41, 31, 8, 7, 987, 91, 61, 3, 49, 01, 64, 27, 37, 3, 739, 2, 9, 6];
let now = +new Date();
console.log(selectionSort(array), -now + (now = +new Date()));
console.log(insertionSort(array), -now + (now = +new Date()));
console.log(mergeSort(array), -now + (now = +new Date()));
console.log(quickSort(array), -now + (now = +new Date()));
