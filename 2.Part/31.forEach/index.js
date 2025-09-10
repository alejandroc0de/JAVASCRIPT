let numbers = [1,2,3,4,5];

let fruits = ["manzana","piña","arroz","pizza"];

let H = ""
H.u
numbers.forEach(display);

function display(element){
    console.log(element);
}


// por cada una de las frutas mandalo a la funcion display, element index and array are provided 

fruits.forEach(displayFruits)

function displayFruits(element,index,array){
    fruits[index] = element.toUpperCase()
    console.log(fruits)
}