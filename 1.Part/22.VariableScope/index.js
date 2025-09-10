// variable scope = Where a variable is recognized or accisble 

// We can use both x with same name since x is within function is not accessible

//Function cannot look inside another functions, variables outside functions are GLOBAL
// If the variable is whitin function, local will be USED



function function1(){
    let x = 1;
    console.log(x)
}



function function2(){
    let x = 2;
    console.log(x)
}
