const car = {}
const carColor = car.name.color
console.log(carColor);
// error- "Uncaught TypeError: Cannot read property 'carColor' of undefined

// In JavaScript, you can first check if an object exists, and then try to get one of its properties, like this:
const carColor = car && car.name && car.name.color;
console.log(carColor);
// undefined - no error


// Now this new optional chaining operator will let us be even more fancy:

const newCarColor = car?.name?.color;
console.log(newCarColor)
// undefined - no error

// You can use this syntax today using @babel/plugin-proposal-optional-chaining
