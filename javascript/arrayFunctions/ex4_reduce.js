const values = {
  "employees": [
    {
    "name": "Ram",
    "email": "ram@gmail.com",
    "age": 23
    },
    {
      "name": "Shyam",
      "email": "shyam23@gmail.com",
      "age": 28
    },
    {
      "name": "John",
      "email": "john@gmail.com",
      "age": 33
    },
    {
      "name": "Bob",
      "email": "bob32@gmail.com",
      "age": 41
    }
  ]
};

const fnc = ({ employees }) => employees.filter(({ age }) => age < 30).reduce((acc, {
  name,
  email
}) => ([
    ...acc,
    {
      name,
      email
    }
  ]
), []);

console.log(fnc(values)); // [ { name: 'Ram', email: 'ram@gmail.com' }, { name: 'Shyam', email: 'shyam23@gmail.com' } ]
