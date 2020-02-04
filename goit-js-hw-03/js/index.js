"Use strict";

// const hotel = {
//     name: 'Sunset resort',
//     stars: 5,
//     capacity: 200,
//     someMethod() {
//         console.log(`I'm method`);
//     },
// };

// const key = 'stars';
// console.log(hotel)
// console.log(hotel.stars)

// // Arrays and FN === Objects;

// слева рест - справа спред

const a = {
  x: 1,
  y: 2
};

const b = {
  x: 0,
  z: 2
};

const c = { ...a, ...b };
console.log(c);

const e = [12, 2, 3];
const y = [1, 4];

const g = [...e, ...y]

console.log(g)

// Spread :
// 1 при передаче аргументов
// 2 в правой части присваивания


const hotel = {
    name: 'Resort',
    stars: 5,
    place: {
        country: 'Ukraine',
        city: 'Lviv'
    },
    price: 900,
};

const {name, stars, place: {country, city}, price} = hotel;

console.log(name, stars, country, price, city)