// spread op == .. allows an iterable such as an array or string to be expanded into separate elemets

let numbers = [1,2,3,4,5];

// greates val, without the ... we cannot pass an array, we have to kinda open the box and take all the contents


let maximum = Math.max(...numbers);

console.log(maximum);

let minimun = Math.min(...numbers);
console.log(minimun);


// el spread divide todo lo del string y luego lo unimos con un dash

let username = "Alejandro";
let letters = [...username].join("-")
console.log(letters);


let fruits = ["Apple","Orange","Banana"];
console.log(fruits);

let vegetables = ["carrots","salary"];

// using this we can COMBINE an array 

let copyFruits = [...fruits, ...vegetables];

console.log(copyFruits);

