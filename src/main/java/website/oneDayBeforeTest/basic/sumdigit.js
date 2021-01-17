function sumDigit(x) {
  let sum = 0;
  x.toString()
    .split("")
    .forEach((el) => (sum += parseInt(el)));
  return sum;
}

function recurSumDigit(x) {
  if (x.toString().length == 1) return parseInt(x);
  return parseInt(x.toString()[0]) + sumDigit(x.toString().slice(1, x.length));
}

console.log(sumDigit(12));
console.log(recurSumDigit(123456789));
