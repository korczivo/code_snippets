// https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript

// Main goal is to implement a difference function,
// which subtracts one list from another and returns the result.

const arrayDiff = (a, b) => a.filter(item => b.every(el => item !== el));

console.log(arrayDiff([], [4,5]), "excepted: []");
console.log(arrayDiff([3,4], [3]), "excepted: [ 4 ]]");
console.log(arrayDiff([1,8,2], []), "excepted: [ 1, 8, 2 ]");
console.log(arrayDiff([1,2,3], [1,2]), "excepted: [ 3 ]");
console.log(arrayDiff([18,-7,-15,12],[-15,12,18,-7]), "excepted: []");
console.log(arrayDiff([],[]), "excepted: []");
