// Element selectors = Methods used to target and manipulate HTML elements, They allow you to select one or multiple
//                     HTML elements from the DOM 



const myHeading = document.getElementById("my-heading");

myHeading.style.backgroundColor = "yellow";
myHeading.style.textAlign = "center";


//-------------------GET BY CLASS ------------------------------
const fruits = document.getElementsByClassName("fruits");

fruits[0].style.backgroundColor = "yellow"
fruits[1].style.backgroundColor = "blue"
fruits[2].style.backgroundColor = "pink"


// with the for we can iterate tru all of them 

for(let fruit of fruits){
    fruit.style.border = "solid 2px" 
}

Array.from(fruits).forEach(fruit => {
    fruit.style.backgroundColor = "green"
}) // return as array

//---------------GET BY TAG --------------------------


const H4elements = document.getElementsByTagName("h4")

H4elements[0].style.backgroundColor = "yellow";
H4elements[1].style.backgroundColor = "lightblue";

for(let i of H4elements){
    i.style.border = "dotted 1px"
}

const listedItems = document.getElementsByTagName("li")

for (let item of listedItems){
    item.style.backgroundColor = "lightgreen"
}

// You can typecast as array Array.from(collection).methods... and you can use array methods

//-----------------Query Selector--------------------------
// First element or null

const element1 = document.querySelector(".fruits");
element1.style.backgroundColor = "pink";


//----------------QuerySelectorAll()------------------------
// returns nodelist , nodelist DO HAVE for each method 

const fruits1 = document.querySelectorAll(".fruits");
fruits1[1].style.backgroundColor = "grey";


