// Synchronous  = Executes lines by line in a sequential manner

// Asynchronous = Allows multiple operations to be performed concurrently without waiting
//                (I/O operations, network requests, fetching data) this could take some time
//                Handled with : Callbacks, Promise, Async / Wait


func1(func2)


function func1(callback){
    setTimeout(() => {
        console.log("Task 1"); 
        callback()
    },3000)}

function func2(){
    console.log("Task 2")
    console.log("Task 3")
    console.log("Task 4")
} 
