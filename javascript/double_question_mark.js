// Double question mark operator allows you provide a default value to use when a variable expression evaluates to null or undefined.

const nullValue = null;
const result = nullValue ?? "default value";
console.log(result); // default value

//-------------//

const undefinedValue = undefined;
const result2 = undefinedValue ?? "default value";
console.log(result); // default value

//-------------//

let firstName = null;
let lastName = undefined;
let username = (firstName || lastName) ?? "Guest";

console.log(username); // "Guest"
