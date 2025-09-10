// Closure = a function defined inside of another function,
//           the inner function has access to the variables and scope of the outer function, They Allow for private variables 


function outer(){

    let message = "Hello"


    function inner(){
        console.log(message)
    }

    inner(); //---------We gotta make sure to call the inner in the outer function
}

// We cannot edit the variable message it has become private

outer()


// ---------------- mantain state --------------------


function increment(){
    let count = 0;
    count++;
    console.log(`Count increase to ${count}`);
}

// Cada vez que llamamos a este metodo, se resetea la variable count, la podriamos declarar afuera pero eso no seria seguro

//--------------- Podemos hacer esto ---------------------------

function createCounter(){
    let count = 0;                    // Se declara adentro, no accequible afuera
    function increment(){
    count++;
    console.log(`Count increase to ${count}`);
    }
    return{increment:increment}; // Creamos objeto llamado increment, que tiene una propiedad increment, que es el metodo que escribimos arriba
}

const counter = createCounter()

counter.increment()
counter.increment()

// Aca counter no se esta reseteando 

