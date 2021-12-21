// Mutating way
const muatatedArray = ['a','b','c','d','e'];
muatatedArray.splice(2,1)
console.log(muatatedArray) // ['a', 'b', 'd', 'e']

// Non-mutating way
const nonMuatatedArray = ['a', 'b', 'c', 'd', 'e'];
const newArray = nonMuatatedArray.filter((item, index) => !( index === 2 ));
console.log(newArray) // ['a', 'b', 'd', 'e']
