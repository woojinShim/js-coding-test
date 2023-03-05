let arr = [1, 2, 3, 4, 45, 6, 6];

const result = arr.reduce((prev, cur) => {
  return prev + cur;
}, 100);

console.log(result);
