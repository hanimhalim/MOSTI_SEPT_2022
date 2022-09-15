// Problem 01
// 1. Write a function to find the sum of 2 numbers

const prompt = require('prompt-sync')()

let num1 = parseInt(prompt('Enter first number:'))
let num2 = parseInt(prompt('Enter second number:'))


//function
function number(num1,num2) {
    let sum = num1+num2
    return ( sum );
}

console.log('Result:'+ number(num1,num2))