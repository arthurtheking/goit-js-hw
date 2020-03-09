"Use strict";

import users from "./users.js";

const calculateTotalBalance = users => {
    const total = users.reduce((acc, user) => {
        return acc + user.balance
    }, 0)

    return total;
  };
  
  console.log(calculateTotalBalance(users)); // 20916