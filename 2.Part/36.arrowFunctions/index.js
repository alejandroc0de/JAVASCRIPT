// Arrow functions = A concise way to write functions expressions for simple functions you will only use once

function hello(){
    console.log("Hello")
}

const hello1 = function(){
    console.log("Hello hello")
}


const hello2 = () => console.log("hello2") // this is the arrow function 

const hello3 = (name) => console.log(`hello ${name}`)

const hello4 = (name) => {console.log(`hello ${name}`)
                        console.log("You are old")}


const callback = () => console.log("Hello World");

setTimeout(callback, 3000);


const numbers = [1,2,3,4,5,6];

const squares = numbers.map((element)=> Math.pow(element,2)) // this cubes each number 
console.log(squares)