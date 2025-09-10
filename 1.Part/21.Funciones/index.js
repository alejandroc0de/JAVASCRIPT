// Functions 


function happyBirthday(username,age){
    console.log(`Happy birthday to ${username}`);
    console.log("Happy Birthday dear you");
    console.log(`You are ${age} years old`)
}

// calling function and passing args 

happyBirthday("Alejo",25);


// return function 

function add(x,y){
    let result = x+y;
    return result
}

console.log(add(2,3));

function isEven(number){
    return number % 2 === 0? true:false;
}
console.log(isEven(20))