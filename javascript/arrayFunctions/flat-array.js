const myArray = [2, 3, [4, 5], [7, 7, [8, 9, [1, 1]]]];

myArray.flat(); // [2, 3, 4, 5 ,7,7, [8, 9, [1, 1]]]

myArray.flat(1); // [2, 3, 4, 5 ,7,7, [8, 9, [1, 1]]]

myArray.flat(2); // [2, 3, 4, 5 ,7,7, 8, 9, [1, 1]]

//if you dont know the depth of the array you can use infinity
myArray.flat(infinity); // [2, 3, 4, 5 ,7,7, 8, 9, 1, 1];
