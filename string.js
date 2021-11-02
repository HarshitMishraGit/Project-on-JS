// let string = "Hello bhai kya haal chal hai "
// console.log(string)


// var op = prompt("Name batao")
// switch (op) {
//     case 'Harshit': { console.log("hello handsome") }
//         break;
//     case 'prabhat': { console.log("Hello Bhai") }
//         break;
// }

// define a string

let hello = "\n Hello"
let welcome = "\n Wlcome to SIT"

let outputMsg = hello + welcome
console.log(outputMsg)

//  if we add a number to a string then it add to it

let string1 = "STRING " + 100
console.log(string1)// its concatinated to the string

let number = 100
typeof (number)// it is saying number 
// if you want to convert it to the string 
// just use a function caller tostring\

let numberString = number.toString()
// check wheather it converts to string or not 
console.log(typeof (numberString))// it converts to the string

// If you want to concatinate the strings in a better way so use ` ` instead of normal way 
// when we use ` ` then we use ${vaiable } and it has a predefine space

console.log(`${hello + welcome}+ "Kya haal haal hai SIT mai"`)// when you run the code you see "" in output so we write any addition string

    //  after {} without ""
    console.log(`${hello + welcome}+ Kya haal haal hai SIT mai`)// you see the output correctly
