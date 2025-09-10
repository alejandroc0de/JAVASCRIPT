// accepts a callback and applies a function to each element of an array, then return new array


const numbers = [1,2,3,4,5]

const squeares = numbers.map(square) // adiferencia de foreach DEVUELVE un nuevo array, no es el mismo 

function square(element){
    return Math.pow(element,2);
}


console.log(numbers);
console.log(squeares);

// for each cambia los valores originales
