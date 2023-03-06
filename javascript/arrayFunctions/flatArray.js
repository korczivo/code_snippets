// Quick exercise of reduce and concat array functions in JavaScript
// Flattens an array up to the specified depth

const flatArray = (arr, depth = 1) => arr.reduce((a, v) =>
    a.concat(depth > 1 && Array.isArray(v) ? flatArray(v, depth - 1) : v),
  []
);

console.log(flatArray([1, [1], 1, 1])) // [ 1, 1, 1, 1 ]
console.log(flatArray([1, [1, [1, [1, 1], 1], 1], 1], 2)) // [ 1, 1, 1, [ 1, 1 ], 1, 1, 1 ]
console.log(flatArray([1, [1, [1, [1, 1], 1], 1], 1], 3)) // [1, 1, 1, 1, 1, 1, 1, 1]

const flatArrayInfinity = arr => arr.reduce((acc, curr) => (
    acc.concat(Array.isArray(curr) ? flatArrayInfinity(curr) : curr)
), [])

console.log(flatArrayInfinity([false, 2, [3, [[[[]]]], true], [5, 6, [7, 8, 8]]])) // [false,2,3,true,5,6,7,8,8]
console.log(flatArrayInfinity([1, 2, [3, 4], [5, 6, [7, 8, 8]]])) // [1,2,3,4,5,6,7,8,8]
console.log(flatArrayInfinity([[], [[], []]])) // []