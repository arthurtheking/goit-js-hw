"Use strict";

const findBestEmployee = function(employees) {
  let quantity = 0;
  let name;
  for (let i of Object.entries(employees)) {
    if (i[1] > quantity) {
        quantity = i[1];
        name = i[0];
    }
  }

  return `${name}: ${quantity}`;
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99
  })
);

console.log(
    findBestEmployee({
      poly: 12,
      mango: 17,
      ajax: 4,
    }),
  ); // mango
  
  console.log(
    findBestEmployee({
      lux: 147,
      david: 21,
      kiwi: 19,
      chelsy: 38,
    }),
  ); // lux