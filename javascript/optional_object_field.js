const user = {
  name: 'John',
  age: 20,
}

const results = {
  ...user,
  ...(user.age >= 18 && {isLegalAge: true})
}

// if user.age === 20 results equal:
// { name: 'John', age: 20, isLegalAge: true }

// if user.age === 15 results equal:
// { name: 'John', age: 20 }
