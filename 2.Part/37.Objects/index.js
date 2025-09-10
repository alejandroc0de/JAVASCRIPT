// object a collections of properties and methods.


const person = {
    firstName : "SpongeBob",
    lastName : "SquarePants",
    age : 30,
    isEmployed: true,
    sayHello : function(){console.log("Hi im sponge bob")},
}

person.sayHello(); // And you can call the methods it has 
console.log(person.firstName); // you access the properties 


const personPatrick = {
    firstName : "Patrick",
    lastName : "Star",
    age : 42,
    isEmployed : false,
    sayHello: () => console.log("Hello im patrick"),
}

console.log(personPatrick.isEmployed);
personPatrick.sayHello();