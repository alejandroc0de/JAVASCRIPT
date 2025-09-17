// It is an object that is created to represent a problem that occurs; often with user input or creating an connection. 

//          Try { }  = Encloses code that might potenttialy cause an error
//          Catch { } = Catch and handle any thrown erros from try { }
//          finally { } = Always executes, used for clean up (close connections, release sources)




try{
    console.log(x); // An error could stop the program without reaching the end 
}
catch(error){
    console.error(error);
}
finally{
    console.log("You have reach the end");
}


try{
    const dividend = Number(window.prompt("Enter a dividen: "))
    const divisor = Number(window.prompt("Enter a divisor: "))

    if(divisor==0){
        throw new Error("You cant divide by 0 ")
    }
    if(isNaN(dividend) || isNaN(divisor)){
        throw new Error("Value must be number")
    }

    result = dividend/divisor

    console.log(result)
}
catch(error){
    console.log(error)
}