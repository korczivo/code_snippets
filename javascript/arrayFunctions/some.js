const persons = [
  {
    name: 'Person 1',
    age: 16
  },
  {
    name: 'Person 2',
    age: 20
  },
];

const adultPersonExists = persons.some(person => person.age > 18);

if (adultPersonExists) {
  console.log("Adult person exists")
}
