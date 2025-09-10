// Type conversion, change data type

let age = window.prompt("How old are you");

age = Number(age)

age = age + 1;

console.log(age,typeof(age));


let x = "pizza";
let y = "";

y = Boolean(y);
console.log(y) // Esto sera false, useful to check empty input

