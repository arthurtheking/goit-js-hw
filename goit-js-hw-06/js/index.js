"Use strict";

const numbers = [1, 2, 3, 4, 5];

// numbers.forEach(function(element, index, array) {
//   console.log(element);
//   console.log(index);
//   console.log(array);
// });

// const mapped = numbers.map(function(element, index, array) {
//   return element * 2;
// });

// console.log(mapped);

// const players = [
//   { id: 1, name: "Mango", timePlayed: 310, points: 10, online: false },
//   { id: 2, name: "Poly", timePlayed: 420, points: 102, online: true },
//   { id: 3, name: "Ajax", timePlayed: 160, points: 160, online: false },
//   { id: 4, name: "Kiwi", timePlayed: 189, points: 16, online: false },
//   { id: 5, name: "Bodo", timePlayed: 271, points: 60, online: true }
// ];

// const updatedPlayers = players.map(function(player) {
//   return {
//     ...player,
//     points: player.points + player.points * 0.1
//   };
// });

// console.table(players);
// console.table(updatedPlayers);

// const idToUpd = 3;

// const foundPlayer = players.map(function(player) {
//   if (player.id === idToUpd) {
//     return {
//       ...player,
//       timePlayed: player.timePlayed + 50
//     };
//   }
// });

// console.table(foundPlayer);

// const mapp = function(array, callback) {
//   const newArray = [];

//   for (let i = 0; i < array.length; i += 1) {
//     const result = callback(array[i], i, array);
//     newArray.push(result);
//   }

//   return newArray;
// };

// const filterr = function(array, callback) {
//   const filtered = [];

//   for (let i = 0; i < array.length; i += 1) {
//     const passed = callback(array[i], i, array);

//     if (passed) {
//       newArray.push(array[i]);
//     }
//   }

//   return filtered;
// };

// reduce

// const numbers = [5, 10, 15, 20, 25];

// const total = numbers.reduce(function(acc, number) {
//   // console.log(acc)
//   // console.log(index)
//   // console.log(number)
//   // console.log(array)

//   return acc + number
// }, 0);

// console.log(total)

// const salary = {
//   mango: 150,
//   poly: 130,
//   kiwi: 111
// }

// const values = Object.values(salary);

// const totalSal = values.reduce(function(acc, x) {
//   return acc + x
// })

// console.log(totalSal)

const players = [
  { id: 1, timePlayed: 180, name: "Mango", online: false },
  { id: 2, timePlayed: 280, name: "Poly", online: true },
  { id: 3, timePlayed: 150, name: "Ajax", online: true },
  { id: 4, timePlayed: 20, name: "Kiwi", online: false },
  { id: 5, timePlayed: 120, name: "Chelsey", online: true }
];

const sortPlayersByTime = [...players];

sortPlayersByTime.sort(function(prev, next) {
  return prev.timePlayed - next.timePlayed;
  // return next.timePlayed - prev.timePlayed;
});

console.log(sortPlayersByTime);

const sortByWorstPlayers = [...players].sort(function(prev, next) {
  return prev.timePlayed - next.timePlayed;
});

console.log(sortByWorstPlayers);

const totlaTimePlayed = players.reduce(function(acc, player) {
  return acc + player.timePlayed;
}, 0);

console.log(totlaTimePlayed);

const cart = [
  { label: "Apple", price: 200, quantity: 2 },
  { label: "Lemon", price: 2300, quantity: 1 },
  { label: "Peach", price: 2100, quantity: 3 }
];

const totalAmount = cart.reduce(function(acc, prod) {
  return acc + prod.price * prod.quantity;
}, 0);

console.log(totalAmount);

const tweets = [
  { id: 000, likes: 5, tags: ["html", "css"] },
  { id: 000, likes: 15, tags: ["html", "css", "js"] },
  { id: 000, likes: 25, tags: ["html", "css", "node-js"] },
  { id: 000, likes: 32, tags: ["react", "redux"] }
];

const allTweets = tweets.reduce(function(acc, tweet) {
  acc.push(...tweet.tags);

  return acc;
}, []);

console.log(allTweets);

// const tagsStats = allTweets.reduce(function(acc, tag) {
//   acc[tag] = acc.hasOwnProperty(tag) ? (acc[tag] += 1) : 1;

//   return acc;
// }, {});

const tagsStats = allTweets.reduce(function(acc, tag) {
  return {
    ...acc,

    [tag]: acc.hasOwnProperty(tag) ? (acc[tag] += 1) : 1
  };
}, {});

console.log(tagsStats);

numbers.sort(function(prev, next) {
  return next - prev;
});

console.log(numbers);
