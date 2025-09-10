// useful to save switches 

let day = 1;

switch(day){
    case 1:
        console.log("It is monday");
        break;
    case 2:
        console.log("It is Tuesday");
        break;
    case 3:
        console.log("It is wednesday");
        break;
    default:
        console.log("Numero incorrecto de dia");
        break;
}


// We have to use break otherwise we dont break the switch and the whole code following will run

let testScore = 72;
let letterGrade;

// We can also evaluate if a condition is true

switch(true){
    case testScore >= 90:
        letterGrade = "A";
        break;
    case testScore >=80:
        letterGrade = "B";
        break;
    case testScore >= 70:
        letterGrade = "C";
        break;
}

console.log(letterGrade)