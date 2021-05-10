// An example of map chaining

const files = ['foo.txt ', '.bar', '   ', 'baz.foo'];
const filePaths = files
  .map(file => file.trim())
  .filter(Boolean)
  .map(fileName => `~/cool_app/${fileName}`);

console.log(filePaths);



