// Problem 05
// 5. Write a function to convert minute into seconds

const prompt = require('prompt-sync')()

let minutes = parseInt(prompt('Enter your minute:'))

function convertToSeconds(minutes) {
  let seconds = minutes * 60
  console.log(seconds)
}

console.log(convertToSeconds(minutes) + "second")