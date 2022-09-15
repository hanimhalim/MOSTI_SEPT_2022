// Problem 03
// 3. Write a function to print all even numbers till n

const prompt = require('prompt-sync')()

let num = parseInt(prompt('Enter your number:'))
console.log(`Even numbers from 1 to ${num} are :`)

function printEven(num){
    for( let i=1; i <= num ; i++){
       if(i %2 === 0) {
        console.log(i)
       }
    }
}
console.log(printEven(num))