// Create function and sort the given array of strings in alphabetical order, case insensitive.
// input: names - unsorted strings
// output: case-agnostic sort

const sortMe = function (names) {
  return names.sort((a, b) => {
    return a.toString().toLowerCase() > b.toString().toLowerCase() ? 1 : -1
  });
}

console.log(sortMe(["Hello", "there", "I", "fine"])) // returns [ 'fine', 'Hello', "I'm", 'there' ]
console.log(sortMe(["C", "d", "a", "B"])) // returns [ 'a', 'B', 'C', 'd' ]
console.log(sortMe([])) // returns []
