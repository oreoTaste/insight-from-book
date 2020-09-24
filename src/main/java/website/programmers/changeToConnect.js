// 두 개의 단어 begin, target과 단어의 집합 words가 있습니다. 아래와 같은 규칙을 이용하여 begin에서 target으로 변환하는 가장 짧은 변환 과정을 찾으려고 합니다.
// 1. 한 번에 한 개의 알파벳만 바꿀 수 있습니다.
// 2. words에 있는 단어로만 변환할 수 있습니다.
// 예를 들어 begin이 hit, target가 cog, words가 [hot,dot,dog,lot,log,cog]라면 hit -> hot -> dot -> dog -> cog와 같이 4단계를 거쳐 변환할 수 있습니다.

// https://programmers.co.kr/learn/courses/30/lessons/43163

function solution(begin, target, words) {
  if (words.findIndex((el) => el == target) < 0) return 0;
  var arr = change(begin, target, words, 0);
  if (arr.length == 0) return 0;
  return arr.reduce((acc, val) => {
    if (val.length < acc.length) return val;
    else return acc;
  }).length;
}

function change(begin, target, words) {
  let flag = [];
  var arr = [];
  const produce = (begin, words, floor) => {
    if (begin == target) {
      arr.push(flag.slice(0, floor));
      return;
    }
    if (words.length < 0) return;

    for (let i = 0; i < begin.length; i++) {
      var changed = begin.slice(0, i) + begin.slice(i + 1);
      if (target.slice(0, i) + target.slice(i + 1) == changed) {
        flag[floor] = target;
        produce(
          target,
          words.filter((el) => el !== target),
          floor + 1
        );
      } else {
        var idx = words.findIndex((el) => el.slice(0, i) + el.slice(i + 1) == changed);
        if (idx < 0) continue;
        else {
          if (words.filter((el) => el.slice(0, i) + el.slice(i + 1) == changed).length > 1) {
            var index_list = [];
            words.reduce((acc, el, ind) => {
              if (el.slice(0, i) + el.slice(i + 1) == changed) index_list.push(ind);
            });
            index_list.forEach((id) => {
              flag[floor] = words[id];
              produce(
                words[id],
                words.filter((el) => el !== words[id]),
                floor + 1
              );
            });
          } else {
            flag[floor] = words[idx];
            produce(
              words[idx],
              words.filter((el) => el !== words[idx]),
              floor + 1
            );
          }
        }
      }
    }
  };
  produce(begin, words, 0);
  return arr;
}
