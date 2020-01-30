"Use strict";

const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true
};

user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;

const entries = Object.entries(user);

for (let i of entries) {
  console.log(`${i[0]}: ${i[1]}`);
};
