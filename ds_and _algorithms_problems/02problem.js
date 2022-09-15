// Problem 02
// 2. Write a function to print all odd numbers till n

const prompt = require('prompt-sync')()

let num = parseInt(prompt('Enter your number:'))
console.log(`Odd numbers from 1 to ${num} are :`)

function printOdd(num){
    for( let i=1; i <= num ; i++){
       if(i %2 !== 0) {
        console.log(i)
       }
    }
}
console.log(printOdd(num))