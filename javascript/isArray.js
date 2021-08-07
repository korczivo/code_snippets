// Useful helper function for verifying a given argument is an array 🚀 🚀 🚀

function isArray(obj) {
  return Object.prototype.toString.call(obj) === '[object Array]';
}

// Usage 💪 💪 💪

console.log(isArray([])) // true ✅
console.log(isArray({})) // false ❌
console.log(isArray('string')) // false ❌
console.log(isArray(['string'])) // true ✅
console.log(isArray([{key: 'string'}])) // true ✅
