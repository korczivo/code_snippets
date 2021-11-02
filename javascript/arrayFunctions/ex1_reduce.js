const values = [
  {
   corner1: 1
  },
  {
    corner2: 2
  },
  {
    corner3: 3
  },
  {
    corner4: 4
  },
];

const parseCornerData = (values) => values.reduce((acc, curr) => [...acc, ...Object.values(curr)], []);

console.log(parseCornerData(values)); // [1, 2, 3, 4]
