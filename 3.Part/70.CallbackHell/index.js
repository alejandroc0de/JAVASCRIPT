// callback hell = Situation in JS where callbacks are nested within other callbacks to the degree where
//                 the code is difficult to read. Old patters to handle async functions
//                 use promises and async/wait to avoid callback hell


function task1(callback){
    setTimeout(() => {
        console.log("task1complet");
        callback()
    }, 2000);
}

function task2(callback){
    setTimeout(() => {
        console.log("task2complet");
        callback()
    }, 1000);
}


function task3(callback){
    setTimeout(() => {
        console.log("task3complet");
        callback()
    }, 4000);
}


function task4(callback){
    setTimeout(() => {
        console.log("task4complet");
        callback()
    }, 3000);
}


// This will be executed in order, from 5 level it might become difficult 

task1(()=>{
    task2(()=>{
        task3(()=>{
            task4(()=>{
                console.log("All completed")
            })
        })
    })
})

