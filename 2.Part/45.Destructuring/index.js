// destructuring = extract the value from arrays and objects, then assign them to variables in a convenient
//                 way. [] = For arrays / {} = for object destructuring 


// Swap the value of 2 variables 

let a = 1;
let b = 2;

[a,b] = [b,a]
// Ahora a tiene el valor de b / y be tiene el valor de a


// SWAP 2 ELEMENTS IN AN ARRAY

const colors = ["red","green","blue","black","white"];
[colors[0],colors[4]] = [colors[4],colors[0]];
console.log(colors)


// ASSIGN ARRAY ELEMENTS TO VARIABLES

const colors2 = ["red","green","blue","black","white"];
const [firstColor, secondColor,thirdColor,...extraColors] = colors;

console.log(firstColor)
console.log(secondColor)
console.log(thirdColor)
console.log(extraColors) // Asigna los colores en orden a las variables y el resto lo guarda en un array


// EXTRACT VALUES FROM OBJECTS 

const person1 = {
    firstName : "Sponge",
    lastName : "Square",
    age : 30,
    job : "Fry Cook"
}

const person2 = {
    firstName : "Patrick",
    lastName : "Star",
    age : 34
}

const {firstName, lastName, age, job} = person1;
console.log(firstName)
console.log(job) // Asi que podemos sacar los valores del objeto a variabes


// DESTRUCTURE IN FUNCTION PARAMETERS

function displayPerson({firstName,lastName,age,job="Unemployed"}){
    console.log(`name : ${firstName}, ${lastName}`)
    console.log(`age: ${age}`)
}
displayPerson(person2) // Entonces cuaando le pasamos la persona2 todos los atributos se descomponenen, y se guardan en las variables, por eso el {}