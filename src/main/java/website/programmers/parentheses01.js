// 문제 설명
// '('와 ')'로 이루어진 문자열을 입력받으면, 이를 아래 규칙에 따라 수정 후 반환하기
// 1. 입력이 빈 문자열인 경우, 빈 문자열을 반환합니다.
// 2. 문자열 w를 두 "균형잡힌 괄호 문자열" u, v로 분리합니다. 단, u는 "균형잡힌 괄호 문자열"로 더 이상 분리할 수 없어야 하며, v는 빈 문자열이 될 수 있습니다.
// 3. 문자열 u가 "올바른 괄호 문자열" 이라면 문자열 v에 대해 1단계부터 다시 수행합니다.
// 3-1. 수행한 결과 문자열을 u에 이어 붙인 후 반환합니다.
// 4. 문자열 u가 "올바른 괄호 문자열"이 아니라면 아래 과정을 수행합니다.
//  4-1. 빈 문자열에 첫 번째 문자로 '('를 붙입니다.
//  4-2. 문자열 v에 대해 1단계부터 재귀적으로 수행한 결과 문자열을 이어 붙입니다.
//  4-3. ')'를 다시 붙입니다.
//  4-4. u의 첫 번째와 마지막 문자를 제거하고, 나머지 문자열의 괄호 방향을 뒤집어서 뒤에 붙입니다.
//  4-5. 생성된 문자열을 반환합니다.

function parentheses01(p) {
  if (p == "") return "";
  if (checkValid(p)) return p;
  var point;
  var result = "";
  for (let i = 2; i <= p.length; i += 2) {
    if (checkLengthEqual(p.slice(0, i))) {
      point = i;
      break;
    }
  }
  if (checkValid(p.slice(0, point))) {
    result += p.slice(0, point);
    result += parentheses01(p.slice(point));
  } else {
    let temp = p
      .slice(0, point)
      .split("")
      .reduce(function (acc, val) {
        if (val == "(") {
          return acc + ")";
        } else {
          return acc + "(";
        }
      });
    result += "(" + parentheses01(p.slice(point)) + ")" + temp.slice(1, point - 1);
  }
  return result;
}

function checkLengthEqual(p) {
  return p.split("").filter((el) => el == ")").length == p.split("").filter((el) => el == "(").length;
}

function checkValid(p) {
  if (p.startsWith(")") || p.endsWith("(")) {
    return false;
  }
  var result = true;
  const test = p.split("").reduce(function (acc, val, index) {
    if (index == 1) {
      acc = 1;
    }
    if (acc < 0) {
      result = false;
    }
    if (val == "(") {
      return acc + 1;
    } else {
      return acc - 1;
    }
  });
  if (!result) return false;
  return true;
}

parentheses01("(())))(())");