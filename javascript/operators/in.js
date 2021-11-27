const arr = [1, 2, 3];

if (1 in arr) {
  console.log('1 is in array') // returns "1 is in array"
}

// -----

const obj = {
  name: 'John'
}

if ('name' in obj) {
  console.log('key exists') // returns "key exists"
}
