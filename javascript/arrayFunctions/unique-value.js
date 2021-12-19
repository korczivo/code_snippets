const numbers = [1, 1, 3, 2, 5, 3, 4, 7, 7, 7, 8];

//Ex1
const unieqNumbers = numbers.filter((v, i, a) => a.indexOf(v) === i);
console.log(unieqNumbers); //[1,3,2,5,4,7,8]

//Ex2
const unieqNumbers2 = Array.from(new Set(numbers));
console.log(unieqNumbers2); //[1,3,2,5,4,7,8]

//Ex3
const unieqNumbers3 = [...new Set(numbers)];
console.log(unieqNumbers3); //[1,3,2,5,4,7,8]

//EX4 lodash
const unieqNumbers4 = _.uniq(numbers);
console.log(unieqNumbers4); //[1,3,2,5,4,7,8]
