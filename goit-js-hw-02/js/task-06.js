"Use strict";

const numbers = [];
let total = 0;

const countNumbers = function(number) {
  do {
    number = prompt("Enter the number");
    numbers.push(Number(number));
  } while (number);

  numbers.pop();

  for (let num of numbers) {
    total += num;
  }

  console.log(`Your result is: ${total}`);
};

countNumbers();