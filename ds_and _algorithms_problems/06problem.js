// Problem 06
// 6. Write a function to calculate area of the rectangle where
// width and height of the rectangle are input

const prompt = require('prompt-sync')()

let width = parseFloat(prompt('Enter your width:'))
let height = parseFloat(prompt('Enter your height:'))

function rectangleArea(width,height) {
    // area of rectangle
    let area = (width * height)
    console.log(area)
}

console.log("Area of the rectangle:" + rectangleArea(width,height) + "<br>")