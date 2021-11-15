// // create a object

let obj = {
    add: (a, b) => (a + b),
    mult: (a, b) => (a * b),
    subs: (a, b) => (a - b),
    greet: (a) => {
        console.log(a);
        console.log(`${a} wish you have a very Good Morning`);
    }
    
}
// console.log(obj.add(2, 3));
// console.log(obj.subs(2, 3));
// console.log(obj.mult(2, 3));

module.exports = obj; // exporting the object
