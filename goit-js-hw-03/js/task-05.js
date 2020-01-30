"Use strict";

const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 }
];

const getAllPropValues = function(arr, prop) {
  let props = [];
  for (let values of arr) {
    for (let val of Object.entries(values)) {
      if (val[0] === prop) {
        props.push(val[1]);
      }
    }
  }
  return props;
};

/*
   * Вызовы функции для проверки работоспособности твоей реализации.
//    */
console.log(getAllPropValues(products, "name")); // ['Радар', 'Сканер', 'Дроид', 'Захват']

console.log(getAllPropValues(products, "quantity")); // [4, 3, 7, 2]

console.log(getAllPropValues(products, "category")); // []
