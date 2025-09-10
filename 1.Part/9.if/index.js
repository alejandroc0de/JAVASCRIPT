let age =19;

if(age >= 18){
    console.log("You are old enough");

}
else{
    console.log("You are too little");
}

let time = 9;

if(time<12){
    console.log("Good Morning");
}
else{
    console.log("Good Afternoon");
}

let isStudent = true;

if(isStudent){
    console.log("Bievenido Estudiante");
}
else{
    console.log("You are not a student");
}

let ageDriver = 19;
let hasLicense = false;

//nested if 


if(ageDriver>=16){
    console.log("Edad confirmada")
    if(hasLicense){
        console.log("Si puedes manejar con la licencia");
    }
    else{
        console.log("Aun no tienes licencia");

    }
}
else{
    console.log("Necesitas ser mayor de 16");
}

// else if 

if(age>=16){
    console.log("Si puedes entrar al sitio");
}
else if(age<=0){
    console.log("No puedes tener menos de 0 años")
}