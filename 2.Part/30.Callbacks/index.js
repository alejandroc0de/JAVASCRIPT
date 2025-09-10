// callback = a function that is passed as an arg to another function 

//            used to handle asynchronous operations:
//            1. Reading a file 2. Network requests 3.Interacting with data base

//.          when you are done, call this next 


function hello(callback){
    console.log("hello");  // por ej si esto tuviera un timeout de 3sg entonces goodbye iria primero
    callback();
}

function goodbye(){
    console.log("goodbye");
}

hello(goodbye); // aca le pasamos goodbye y la llamamos como callback



//////////////////////////////////////////////////////////////////////////////

sum(5,6,displayPage)

function sum(x,y, callback){
    let result = x+y;
    callback(result);

}

function displayConsole(result){
    console.log(result)
}

function displayPage(result){
    document.getElementById("myh1").textContent = result
}
