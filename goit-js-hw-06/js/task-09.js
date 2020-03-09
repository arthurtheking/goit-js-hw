"Use strict";

import users from "./users.js";

const getNamesSortedByFriendsCount = users => {
    const sorted = users.sort((prev, next) => {
        return prev.friends.length - next.friends.length;
    })
    .map(user => {
        return user.name
    })
    return sorted;
  };
  
  console.log(getNamesSortedByFriendsCount(users));
  // [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]