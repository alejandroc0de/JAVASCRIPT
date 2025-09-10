// .filter() = creates a new array by filtering out elements


let num = [1,2,3,4,5,6,7]

let evenNum = num.filter(isEven);

function isEven(element){
    return element % 2 ===0; // esto es un if, retorna true or false
}

console.log(evenNum)


// la funcion DEBE retornar boolean, si es true se agrega al arreglo si no, no se arregla al nuevo array