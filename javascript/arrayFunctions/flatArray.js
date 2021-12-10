// Quick exercise of reduce and concat array functions in JavaScript
// Flattens an array up to the specified depth

const flatArray = (arr, depth = 1) => arr.reduce((a, v) =>
    a.concat(depth > 1 && Array.isArray(v) ? flatArray(v, depth - 1) : v),
  []
);

console.log(flatArray([1, [1], 1, 1])) // [ 1, 1, 1, 1 ]
console.log(flatArray([1, [1, [1, [1, 1], 1], 1], 1], 2)) // [ 1, 1, 1, [ 1, 1 ], 1, 1, 1 ]
console.log(flatArray([1, [1, [1, [1, 1], 1], 1], 1], 3)) // [1, 1, 1, 1, 1, 1, 1, 1]

