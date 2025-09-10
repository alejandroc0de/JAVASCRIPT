// Function Expressions = They are a way to define functions as value or variables

const hello = function(){
    console.log("hello");
}

hello();


setTimeout(hello, 3000); // a timeout le pasamos hello para que la ejecute 


// O podemos crear la funcion dentro 

setTimeout(function(){
    console.log("Hello3")
}, 3000)




const numbers = [1,2,3,4,5,6];

const squares = numbers.map(function square(element){
    return Math.pow(element, 2)
}); // como sabemos map devuelve un nuevo array , pero ahora declaramos la funcion dentro del map!


console.log(squares)