const add = require('./mod');
const obj = require('./imp');
console.log(add(10, 11));        // this fxn is imported from mod.js custom module

// Below is the fxns which we imported from imp.js module as a objects 😁
console.log(obj);
console.log(obj.add(1,2));
console.log(obj.subs(1,2));
console.log(obj.mult(1,2));
console.log(obj.greet("Harshit😁"));