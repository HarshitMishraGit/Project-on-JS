
//  first we have to prompt user to input some values

var maggie = prompt("How many maggies do you want")// since we taking input from user so it is variable type
var pan = prompt("How many cup of cups of water do you want to add")


// Declare a function 
// function nameOfFunction(parameter1,parameter2){
    //declare local variable and assign some value

function maggies(maggie, pan) {
    let i = "your maggie ready in " + maggie * 2 + " minutes with " + pan + " cups of water"
    return i;
}

let nashta = maggies(maggie, pan);
alert(nashta)
 