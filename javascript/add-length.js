// Quick exercise split and map function in Javascript
// Let's imagine we need the length of the words it returned as an array:

const addLength = (str) => str.split(' ').map((e) => `${e} ${e.length}`);

console.log(addLength('I like oranges')) // [ 'I 1', 'like 4', 'oranges 7' ]
console.log(addLength('You can be good developer')) // [ 'You 3', 'can 3', 'be 2', 'good 4', 'developer 9' ]


