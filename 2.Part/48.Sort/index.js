// sort () = Method used to sort elements of an array in place, pero usa sort de strings, no de numeros


let fruits = ["apple","orange","banana","coconut","pineaple"]

fruits.sort();

console.log(fruits)


let numbers = [1,2,3,4,5,6,7,8,9,10]

numbers.sort((a,b) => a - b) // funcion para hacer sort en orden, al reves es (b - a)
console.log(numbers)


const people = [{name : "sponge", age : 30, gpa: 3.0},
                {name : "patrick", age : 37, gpa: 1.5},
                {name : "squid", age : 51, gpa: 2.5},
                {name : "sandy", age : 27, gpa: 4.0}
]

// Podemos hacer el sort basados en la edad

people.sort ((a,b) => a.age - b.age);

console.log(people)