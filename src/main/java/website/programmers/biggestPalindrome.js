//앞뒤를 뒤집어도 똑같은 문자열을 팰린드롬(palindrome)이라고 합니다.
//문자열 s가 주어질 때, s의 부분문자열(Substring)중 가장 긴 팰린드롬의 길이를 return 하는 solution 함수를 완성해 주세요.

// https://programmers.co.kr/learn/courses/30/lessons/12904

function solution(s) {
  if (s.length == 1) return 1;
  var oddcenter = getOddCenter(s);
  var paircenter = getPairCenter(s);
  var arr = [];

  if (oddcenter == -1) {
    if (paircenter == -1) {
      return 1;
    } else {
      arr.push(getPairMax(s, paircenter));
    }
  } else {
    if (paircenter == -1) {
      arr.push(getOddMax(s, oddcenter));
    } else {
      arr.push(getOddMax(s, oddcenter));
      arr.push(getPairMax(s, paircenter));
    }
  }
  arr = arr.flat();
  arr.sort((a, b) => b - a);
  return arr[0];
}

function getPairMax(s, center) {
  var arr = [];
  center.forEach((el) => {
    for (let i = 0; i < s.length; i++) {
      if (s[el - i] == s[el + 1 + i] && el + 1 + i < s.length && el - i >= 0) {
        continue;
      } else {
        arr.push(2 * i);
        break;
      }
    }
  });
  return arr;
}

function getOddMax(s, center) {
  var arr = [];
  center.forEach((el) => {
    for (let i = 0; i < s.length; i++) {
      if (s[el + i] == s[el - i] && el + i < s.length && el - i >= 0) {
        continue;
      } else {
        arr.push(2 * i - 1);
        break;
      }
    }
  });
  return arr;
}

function getOddCenter(s) {
  var bool = false;
  var center = [];
  for (let i = 0; i < s.length - 2; i++) {
    if (s[i] == s[i + 2]) {
      bool = true;
      center.push(i + 1);
    }
  }
  if (!bool) return -1;
  else return center;
}

function getPairCenter(s) {
  var bool = false;
  var center = [];
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] == s[i + 1]) {
      bool = true;
      center.push(i);
    }
  }
  if (!bool) return -1;
  else return center;
}
