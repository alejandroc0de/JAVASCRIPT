// It is a shortcut for if statements as if asking a question 
// condition? codeIftrue : codeifFALSE


let age = 20;
let message = age >=18? "You are an adult" : "Eres menor";

console.log(message);

let time = 10;

let greeting = time < 12? "Good morning" : "Good afternoon";
console.log(greeting);

let isStudent = true;

let message2 = isStudent? "You are a student" : "Go to study";
console.log(message2);


let purchase = 125;

let discount = purchase>=100? 10:0;
console.log(`Your final price is ${purchase-((purchase/100)*discount)}`);