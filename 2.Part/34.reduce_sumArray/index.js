// .reduce() = reduces elements of an array to single value



const prices = [12,34,23,4,5];

const total = prices.reduce(sum);


function sum(previus, next){
    return previus+next
}


// va retornando un numero, hasta que llega al final del array, como va sumando los numeros, el numero final
// es el total de la suma

console.log(total)


const grades = [111,75,50,90,80,65,95];

const maximun = grades.reduce(getMax);

function getMax(accumulator, element){
    return(Math.max(accumulator,element))
}

//va retornando el maximo hasta que llega al final, si ponemos min pues devuelve el minimo

console.log(maximun)