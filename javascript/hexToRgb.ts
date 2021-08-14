// Helper function for converting hex code to rgb string

const hexToRgb = (code : string) => `rgb(${code.match(/\w\w/g).map(x => +`0x${x}`)})`

console.log(hexToRgb('#ffffff')) // rgb(255,255,255)
console.log(hexToRgb('#000000')) // rgb(0,0,0)
console.log(hexToRgb('#25ab1e')) // rgb(37,171,30)
