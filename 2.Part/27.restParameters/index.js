// rest op = ...(rest) allow a function to work with a lot of args by bundling them into an array
// spead = expands an array into sep elemets ; rest = bundles them into an array

function openFridge(...foods){
    console.log(foods)
}

function getFood(...foods){
    return foods;
}

const food1 = "pizza";
const food2 = "papas";
const food3 = "burger";
const food4 = "fries";


openFridge(food1,food2,food3,food4);

// log = ["pizza", "papas", "burger", "fries"] (4) It puts them into an array


const food = getFood(food1,food2,food3,food4);
console.log(food)