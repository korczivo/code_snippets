// A Narcissistic Number is a positive number which is the sum of its own digits,
// each raised to the power of the number of digits in a given base.
// In this exercise, you will restrict ourselves to decimal (base 10).

function narcissistic(value) {
  return [...value.toString()].reduce((sum, digit , i, {length}) => {
    return sum + Math.pow(digit, length)
  }, 0) === value;
}

console.log(narcissistic( 7 ), 'excepted: true')
console.log(narcissistic( 23 ), 'excepted: false')
console.log(narcissistic( 153 ), 'excepted: true')
console.log(narcissistic( 256 ), 'excepted: false')
console.log(narcissistic( 1634 ), 'excepted: true')
console.log(narcissistic( 371 ), 'excepted: true')





