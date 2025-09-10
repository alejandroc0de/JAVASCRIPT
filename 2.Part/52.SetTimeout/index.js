// setTimeout() = Function that allows to schedule the execution of a function after an amount of time (Miliseconds)
//                setTimeout(callback, delay)


function sayHello(){
    console.log("hello")
}


setTimeout(sayHello,3000)


// Cancel Timeout = can cancel a timeout but we need a timeout ID

const timeoutId = setTimeout(() => console.log("Hello2"),3000)

clearTimeout(timeoutId)
