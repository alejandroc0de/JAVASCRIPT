// Logical ops = used to combine or manipulate boolean values

// AND = &&
// OR = ||
// NOT = !


const temp = 20;

if(temp > 0){
    console.log("The weather is ok");
}
else if(temp <= 30){
    console.log("The weather is good");
}
else{
    console.log("The weather is very bad");
}

// We can simply this, We join 2 conditions, both have to be true 

if (temp>0 && temp<=30){
    console.log("The weather is good");
}

const isSunny = true;

// IF IT IS NOTTT SUNNY 

if(!isSunny){
    console.log("It is cloudy");
}
else{
    console.log("It is sunny");
}

