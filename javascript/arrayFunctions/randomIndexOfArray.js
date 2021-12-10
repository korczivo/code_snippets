// Very useful helper function for get a random item from a JavaScript array

const items = ['banana', 'apple', 'peach', 'coconut']

const getRandom = () => items[Math.floor(Math.random() * items.length)];

console.log(getRandom()); // apple
console.log(getRandom()); // coconut
console.log(getRandom()); // apple
console.log(getRandom()); // apple
console.log(getRandom()); // coconut
