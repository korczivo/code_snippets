// Helper function for check a given argument is a number 🚀 🚀 🚀

// 🤓 🤓 🤓
function isNumber(n){
    return !isNaN(parseFloat(n)) && isFinite(n) && typeof n === 'number';
}

console.log(isNumber('abc')) // false
console.log(isNumber('100')) // false
console.log(isNumber(100)) // true ✅
console.log(isNumber([])) // false
console.log(isNumber({})) // false
