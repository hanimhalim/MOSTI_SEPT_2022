// Problem 10
// 10. Write a function to print first n fibonacci numbers.
// In fibonnaci sequence, next number is the sum of previous 2 number. 
// First 2 numbers insequence are constant.
// 0, 1 is constant in fibonacci sequence.
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89 ..........

const prompt = require('prompt-sync')()

/* const number = parseInt(prompt('Enter the number of terms: '));
let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series:');

for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
} */

// program to generate fibonacci series up to a certain number

// take input from the user
const number = parseInt(prompt('Enter a positive number: '));
let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series:');
console.log(n1); // print 0
console.log(n2); // print 1

nextTerm = n1 + n2;

while (nextTerm <= number) {

    // print the next term
    console.log(nextTerm);

    n1 = n2;
    n2 = nextTerm;
    nextTerm = n1 + n2;
}