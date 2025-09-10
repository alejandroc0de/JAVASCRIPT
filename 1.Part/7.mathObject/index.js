// Built in function that provides a collection of properties and methods for math 

console.log(Math.PI)

console.log(Math.E)

let x = 3.21;
let y = 2.99;

let z;

z = Math.round(x); // round up 
console.log(z)

z = Math.floor(y); // rounds down, ceil rounds up 
console.log(z)

z = Math.trunc(x);
console.log(z)  // elimates any decimal places


z = Math.pow(2,10); // power of 
console.log(z)

// You can also use for sin(radians), cos , tan all with radians . We can also use abs also
// we can use sign to find the sign of the number 

// find max, or min

let max = Math.max(x,y,z);
console.log(max) 

// RANDOM NUM

let randomnum = Math.floor(Math.random()* 45); // between 0 and 1 if no parameters
console.log(randomnum) 

// Random between 2 values 

const min = 10;
const maximo = 100;

let randomnum2 = Math.floor(Math.random()*(maximo-min))+min;
console.log(randomnum2);

// maximo entre min y maximo se escribe asi 