// check through each line in file
// find first and last digit in line 
// - there may be 1-n digits in each line.
// - in the case of 1 digit, it is both the first and last digit
// - in the case of n, only first and last

// for each line in file
// have array of digits as strings, check if char matches that
// e.g. if '1' is in ['1','2','3', '4', '5', '6','7','8','9','0']
// two variables: first and last
// initially, let first and last = first digit 
// as more digits are found in line, let last = next digit
// when end of line, add two strings first and last together
// convert this to int, and then add to sum


import * as fs from 'fs';

const fileData: string = fs.readFileSync('input.txt', 'utf-8');

// console.log(fileData)
console.log(typeof(fileData))

const digits = ['1','2','3', '4', '5', '6','7','8','9','0']
let sum = 0
let first: string = ''
let last: string = ''

for (let i= 0; i < fileData.length; i++) {
    if (fileData.charAt(i) in digits) {
        if (first == '') {
            first = fileData[i]
            last = fileData[i]
        } else {
            last = fileData[i]
        }
        console.log("first:", first)
        console.log("last:", last)
    }
    
    if (fileData.charAt(i) == '\n'){
        let combined = first + last
        console.log("combined:", combined)
        sum += parseInt(combined, 10)
        console.log("sum:",sum)
        first = ''
        last = ''
    }
}