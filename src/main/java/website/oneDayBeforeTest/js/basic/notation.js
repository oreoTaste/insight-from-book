// http://paullab.co.kr/codefestival.html
// Playground

function toBinary(x) {
  let answer = "";
  answer = (x & 1) + answer;

  while (x > 1) {
    x = x >> 1;
    const shifted = x & 1;
    answer = shifted + answer;
  }
  console.log(answer);
}

function toNotation(x, b) {
  let answer = "";
  let mok = Math.floor(x / b);
  let namuji = x % b;
  answer = namuji + answer;

  while (mok > 1) {
    namuji = mok % b;
    mok = Math.floor(mok / b);
    answer = namuji + answer;
  }
  answer = mok + answer;
  console.log(answer);
}
function toRecursiveNotation(x, b) {
  if (x < b) {
    return x;
  }
  return "" + toNotation2(Math.floor(x / b), b) + (x % b);
}
toBinary(100);
toNotation(100, 2);
console.log(Number(String(100)).toString(2));
console.log(toRecursiveNotation(8, 2));
