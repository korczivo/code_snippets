// this is a big array of 76 items I need to split into groups of 10
const hugeArray = Array.from({ length: 76 }, (_, i) => i);

function chunkify(array, chunkSize = 10) {
  // make a new array
  const chunks = Array.from(
    // give it however many slots are needed - in our case 8
    // 1-7 with 10 items, and 8th slot will have 6
    { length: Math.ceil(array.length / chunkSize) },
    // this is a map function that will fill up our slots
    (_, i) => {
      // make a slice of 100 items
      const start = chunkSize * i;
      // slice our the piece of the array we need
      return array.slice(start, start + chunkSize);
    }
  );
  return chunks;
}

console.log(chunkify(hugeArray));
/*
[
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
  [20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
  [30, 31, 32, 33, 34, 35, 36, 37, 38, 39],
  [40, 41, 42, 43, 44, 45, 46, 47, 48, 49],
  [50, 51, 52, 53, 54, 55, 56, 57, 58, 59],
  [60, 61, 62, 63, 64, 65, 66, 67, 68, 69],
  [70, 71, 72, 73, 74, 75]
]
*/

// Source: https://twitter.com/wesbos/status/1186381082557591554/photo/1
