export const cutLongString = (str = '', length = 100, dots = true) => (
  (str?.length > length ? `${str.slice(0, length)}${dots ? '...' : ''}` : str)
);

console.log(cutLongString('test test test test', 4)) // 'test...'
console.log(cutLongString('test test test test', 50)) // 'test test test test'
