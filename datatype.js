// object

let animal = {
    name: "kutta",
    legs :4,
    eyes : 2,
    family : "kutta"
    
}

// Dot Notation
console.log(animal.name)

// Bracket Notation
console.log(animal["name"])
// We use bracket notation if we want to pass a variable through it
let legsProp = "legs"

console.log(animal[legsProp])// like this we can pass a variable through it

//Array

let selectBooks = ["A brief history of time", "Theory of everything", "Lost man"]
console.log(selectBooks)

console.log(selectBooks[2])

//Fuction

function NamasteWorld() {
    
    console.log("Hello World")

}
//We just declare Fuction

NamasteWorld()         // we can pass parameter also & () is important to call it a fxn

function Hello(name) {
    console.log("Hello " + name)          // we declare this function with a variable name
}
                    
Hello("Harshit")// Hello Harshit

function add(a, b) {
    return a + b;
}

console.log(add(2, 3))

// console.log()----------this itself is a object.function
console.log("Hello World")
console.log("Hi Anubhav")