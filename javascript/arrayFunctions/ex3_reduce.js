const values = [
  ["a", "b", "c"],
  ["m", "n", "o"],
  ["x", "y", "z"]
];

const fnc = (values) => values.flat();

console.log(fnc(values)); // returns [ 'a', 'b', 'c', 'm', 'n', 'o', 'x', 'y', 'z' ]
