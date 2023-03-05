function solution(s) {
  let answer;
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") stack.push(s[i]);
    else {
      if (s[i - 1] === "(") answer += stack.length;
      else answer += 1;
      stack.pop();
    }
  }

  return answer;
}

let str = "()(((()())(())()))(())";
console.log(solution(str));
