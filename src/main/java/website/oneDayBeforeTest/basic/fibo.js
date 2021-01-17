function fibo(x) {
  if (x < 3) return 1;
  let sum = 1;
  let prev = 1;
  for (let i = 3; i <= x; i++) {
    const temp = prev + sum;
    prev = sum;
    sum = temp;
  }
  return sum;
}
function recurFibo(x) {
  if (x < 3) return 1;
  return recurFibo(x - 1) + recurFibo(x - 2);
}

console.log(fibo(1), fibo(2), fibo(3), fibo(4), fibo(5), fibo(6), fibo(7), fibo(8));
console.log(recurFibo(1), recurFibo(2), recurFibo(3), recurFibo(4), recurFibo(5), recurFibo(6), recurFibo(7), recurFibo(8));
