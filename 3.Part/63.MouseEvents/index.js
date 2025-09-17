// eventListener = listen for specific events to create interactive web pages
//                 events (click, mouseover, mouseout) .addEventListener(event, callback)

const myBox = document.getElementById("myBox");


function changeColor(event){
    event.target.style.backgroundColor = "red";
    event.target.textContent = "Ouch"
    console.log(event)
}

function changeColor1(event){
    event.target.style.backgroundColor = "green"
}



myBox.addEventListener("click", changeColor); // Here can also use arrow function 
myBox.addEventListener("mouseover",changeColor1);
myBox.addEventListener("mouseout",(event) => {
    event.target.style.backgroundColor = "lightgreen"
});

// arrow function 


const myBoton = document.getElementById("myboton");

myBoton.addEventListener("click", (event) => {
    myBox.style.backgroundColor = "blue"
})


