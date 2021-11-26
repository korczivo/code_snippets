const fruits = ['orange', 'apple', 'banana'];

const {length, 0: first, [length -1]: last} = fruits;

console.log(first) // orange
console.log(last) // banana

// ------------------

const {1: middle} = fruits;

console.log(middle) // apple

// ------------------

const { length, [Math.floor(length / 2)]: middle} = fruits;

console.log(middle) // apple
