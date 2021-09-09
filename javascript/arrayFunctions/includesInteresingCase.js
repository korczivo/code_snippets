// To be honest it unusual usage of includes, but it works!

const phil = { name: 'Phil' };

const persons = [phil, { name: 'Jane' }];

console.log(persons.includes(phil)) // true

