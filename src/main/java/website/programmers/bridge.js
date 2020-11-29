function solution(distance, rocks, n) {
  rocks.sort((a, b) => a - b);
  rocks = [0, ...rocks, distance];
  console.log("rocks", rocks);

  console.log("-----------");
  var set = [];
  for (let i = 0; i < rocks.length - 1; i++) {
    set.push(rocks[i + 1] - rocks[i]);
  }
  if (n < 0) {
    return set.sort((a, b) => a - b)[0];
  }
  console.log("set", set);
  console.log("-----------");
  let problemSolver = [Infinity, ...set, Infinity];
  console.log(problemSolver);
  while (--n > -1) {
    const min = Math.min(...problemSolver);
    const min_idx = problemSolver.findIndex((el) => el == min);
    if (problemSolver[min_idx - 1] > problemSolver[min_idx + 1]) {
      problemSolver.splice(min_idx, 2, problemSolver[min_idx] + problemSolver[min_idx + 1]);
    } else {
      problemSolver.splice(min_idx - 1, 2, problemSolver[min_idx - 1] + problemSolver[min_idx]);
    }
  }
  console.log(problemSolver);
  return Math.min(...problemSolver);
}
