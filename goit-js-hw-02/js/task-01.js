"Use strict";

const logItems = function(array) {
  for (let item of array) {
    if (array.includes(item)) {
      console.log(`${array.indexOf(item) + 1}: ${item}`);
    }
  }
};

const names = ["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"];
const numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

logItems(names);
logItems(numbers);
