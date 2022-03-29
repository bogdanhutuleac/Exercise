const add7 = function (num) {
  return num + 7;
};
console.log(add7(3));
const multiply = (num1, num2) => {
  return num1 * num2;
};
console.log(multiply(2, 7));

function capitalize(str) {
  return str.slice(0, 1).toUpperCase() + str.slice(1);
}

console.log(capitalize("numbers"));

const lastLetter = (str) => {
  return str.slice(-1);
};

console.log(lastLetter("asdas"));
