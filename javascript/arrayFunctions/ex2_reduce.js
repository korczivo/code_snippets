const values = [
  {
    color: "red",
    value: "#f00"
  },
  {
    color: "green",
    value: "#0f0"
  },
  {
    color: "blue",
    value: "#00f"
  },
  {
    color: "cyan",
    value: "#0ff"
  },
  {
    color: "magenta",
    value: "#f0f"
  },
  {
    color: "yellow",
    value: "#ff0"
  },
  {
    color: "black",
    value: "#000"
  }
]

const getArrayOfColors = (values) => values.reduce((acc, curr) => {
  const color = curr['color']
  return [...acc, color];
}, [])

console.log(getArrayOfColors(values)); // [ 'red', 'green', 'blue', 'cyan', 'magenta', 'yellow', 'black' ]
