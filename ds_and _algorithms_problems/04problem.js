// Problem 04
// 4. Write a function to calculate area of the circle where
// radius is input and formula is A=pi x square of radius

const prompt =require('prompt-sync')()

let radius = parseFloat(prompt('Input the radius of the circle:'))

function circleArea(radius) {
    // area of circle = pi * radius *radius
    let area = Math.PI * (radius* radius)
    console.log(area)
    console.log(Math.round(area*100)/100)
}

console.log(circleArea(radius))