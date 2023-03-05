function solution(s) {
  let answer;
  let stack = [];
  for (let x of s) {
    if (x === "(") stack.push(x);
  }

  return answer;
}

let str = "()(((()())(())()))(())";
console.log(solution(str));
