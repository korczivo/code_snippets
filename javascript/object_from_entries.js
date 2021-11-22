const map = new Map();

map.set('name', 'John');

map.set('age', 32);

Object.fromEntries(map);
// { name: 'John', age: 32 }
