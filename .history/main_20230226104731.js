let userList = [
  { name: "a", age: 23 },
  { name: "s", age: 84 },
  { name: "f", age: 2 },
  { name: "w", age: 12 },
  { name: "g", age: 68 },
  { name: "h", age: 63 },
  { name: "w", age: 9 },
];

const result = userList.reduce((prev, cur) => {
  if (cur.age < 19) {
    prev.push(cur.name);
  }
  return prev;
}, []);

console.log(result);
