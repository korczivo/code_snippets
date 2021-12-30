const myFruits = [
  'Apple',
  'Orange',
  'Mango',
  'Banana',
  'Apple',
  'Apple',
  'Mango',
];

// first option
const countMyFruits = myFruits.reduce(
  (countFruits, fruit) => (
    countFruits[fruit] = (countFruits[fruit] || 0) + 1
  ),
  {}
);
console.log(countMyFruits);
// { Apple:3, Banana:1, Mango:2, Orange:1 }

// second option
const fruitsCounter = {};

for (const fruit of myFruits) {
  fruitsCounter[fruit] = fruitsCounter[fruit] ? fruitsCounter[fruit] + 1 : 1;
}

console.log(fruitsCounter);
// { Apple:3, Banana:1, Mango:2, Orange:1 }
