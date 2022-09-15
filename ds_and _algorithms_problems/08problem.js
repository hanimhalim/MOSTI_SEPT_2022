// Problem 08
// 8. Write a function to convert hours into minute

const prompt = require('prompt-sync')()

let hours = parseInt(prompt('Enter your hour:'))

function convertToMinute(hours) {
  let minutes = hours * 60
  console.log(minutes)
}

console.log(convertToMinute(hours) + "minute")