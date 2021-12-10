// How to remove duplicates from array in JavaScript?

const items = ["Cars", "Cars", "Smartphone", "Cars", "Tablet"];

const uniqueItems = [...new Set(items)];

console.log(uniqueItems) // ["Cars", "Smartphone", "Tablet"]

