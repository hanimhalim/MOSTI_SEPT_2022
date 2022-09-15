// Problem 09
// 9. Write a function to print the factorial of number n.
// If n=5, then factorial of 5 is5*4*3*2*1.
// If n=10, the factorial of 10 is 10*9*8*7*6*5*4*3*2*1.

const prompt = require('prompt-sync')()

let n = parseInt(prompt('Enter number:'))

function factorial(n){
    if (n == 0) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(n))






// function to find factorial
// of given number
/* function factorial(n) {
    if (n == 0) return 1;
    return n * factorial(n - 1);
  }
   
  // Driver Code
  let num = 5;
  document.write("Factorial of " + num + " is " + factorial(num)); */