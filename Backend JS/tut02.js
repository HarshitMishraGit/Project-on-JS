//  for reading a file
// declarer a const function
const fs = require("fs");// fs is a function
// read a file using readfilesync function
let text = fs.readFileSync("sample.txt", "utf-8");
console.log(text);

// Lets apply some operations on this file like edit the contents and save it to another file

text = text.replace("HELLO", "HEY GUYS");
console.log(text);// for checking the output 
// save to another file
fs.writeFileSync("sample1.txt",text);// saving to another file



