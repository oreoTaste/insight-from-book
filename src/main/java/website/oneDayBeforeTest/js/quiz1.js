// http://paullab.co.kr/codefestival.html
// 1. 암호 해독하기
// '  + -- + - + -  '
// '  + --- + - +   '
// '  + -- + - + -  '
// '  + - + - + - + '
//  //<<정답>>
// const hint = ["  + -- + - + -  ", "  + --- + - +   ", "  + -- + - + -  ", "  + - + - + - + "];
// let result = "";
// for (str of hint) {
//   result += String.fromCharCode(parseInt(str.replace(/ /g, "").replace(/\+/g, "1").replace(/-/g, "0"), 2));
// }
// console.log(result);

const hint = ["  + -- + - + -  ", "  + --- + - +   ", "  + -- + - + -  ", "  + - + - + - + "];

const converted = hint.map((el) => String.fromCharCode(parseInt(el.replace(/ /g, "").replace(/-/g, 0).replace(/\+/g, 1), 2)));
console.log(converted.join(""));
