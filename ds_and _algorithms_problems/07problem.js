// Problem 07
// 7. Write a function to convert age(in year) to the days.
// Assume that there are 365 days in 1 year.

const prompt = require('prompt-sync')()

console.log('Enter your date of birth')
let dateBorn = parseInt(prompt('Enter your date:'))
let monthBorn = parseInt(prompt('Enter your month:'))
let yearBorn = parseInt(prompt('Enter your year:'))

//cari age birth dia bila. dah dapat dalam tahun baru convert p days. 
//macam kena dua function
// to get your age
function getAge(yearBorn,monthBorn,dateBorn) {
    let currentDate = new Date()
    let currentMonth = 1 + currentDate.getMonth()
    let currentYear = currentDate.getFullYear()
    let age = currentYear - yearBorn
    //console.log(age)
    return age * 365 //convert to days
}

let calculatedAge = getAge(yearBorn,monthBorn,dateBorn)
console.log(calculatedAge)