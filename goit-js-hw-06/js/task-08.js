"Use strict";

import users from "./users.js";

const getUsersWithFriend = (users, friendName) => {
  let filtered = [];
  users.filter(user => {
    user.friends.includes(friendName) ? filtered.push(user.name) : null;
  });
  return filtered;
};

console.log(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]
