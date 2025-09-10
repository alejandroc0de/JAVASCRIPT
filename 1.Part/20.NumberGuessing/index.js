

const minNum = 1 ;
const maxNum = 100 ;

const answer = Math.floor(Math.random()*(maxNum-minNum +1)+ minNum);
console.log(answer);


let attemps = 0;
let guess; 
let running = true;

while(running){
    guess = window.prompt("What ur guess 0-100");
    guess = Number(guess);

    if(isNaN(guess)){
        window.alert("Please enter a valid number");
    }
    else{
        attemps++;
        if(guess<answer){
            console.log("Too low");
        }
        else if(guess>answer){
            console.log("Too high")
        }
        else if(guess==answer){
            console.log("Correcto");
            running = false;
        }
    }
}
