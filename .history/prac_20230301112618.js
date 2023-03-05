function solution(s) {
  let answer;
  stack = [];
  for (let x of s) {
    if (!isNaN(x)) console.log(x);
  }
  return answer;
}

let str = "352+*9-";
console.log(solution(str));
