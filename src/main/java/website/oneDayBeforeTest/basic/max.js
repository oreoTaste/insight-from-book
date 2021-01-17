function max(array) {
  return Math.max(...array);
}

function eachMax(array) {
  let max = array[0];
  array.forEach((val, ind, arr) => {
    if (val > max) max = val;
  });
  return max;
}

function sortMax(array) {
  array.sort((a, b) => b - a);
  return array[0];
}

function reduceMax(array) {
  const max = array.reduce((acc, val, ind) => {
    if (acc > val) return acc;
    else return val;
  }, 0);
  return max;
}
const array = [1, 6, 8, 5, 2, 6, 9, 7, 2, 0];
console.log(max(array));
console.log(eachMax(array));
console.log(sortMax(array));
console.log(reduceMax(array));
