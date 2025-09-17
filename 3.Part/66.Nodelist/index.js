// Node list = Static collection of html elements by (id, class, element)
//             Can be created using querySelectorAll(), similar to array, and wont update auto 


let botones = document.querySelectorAll(".botones") // class name or id or element type 

console.log(botones)

botones.forEach(boton => {
    boton.style.backgroundColor = "yellow";
    boton.textContent = "Hello"
});


// Even listener para cambiar algo en todos los botones 

botones.forEach(boton => {
    boton.addEventListener("click",(event) => {
        boton.textContent = " hhhh"
    })
}
)

// Add element 

const newBoton = document.createElement("button"); //Create element 

newBoton.textContent = "Boton5" //Add attributes 
newBoton.classList = "botones"

// Append to dom 

document.body.appendChild(newBoton) // this wont be added to the nodelist, we need to add manually 

botones = document.querySelectorAll(".botones")
console.log(botones)


// Esto tampoco los borrara de la nodelist hay que borrarlo de la nodelist
botones.forEach(boton => {
    boton.addEventListener("click", (event) => {
        event.target.remove();
        //Fix 
        botones = document.querySelectorAll(".botones")
        console.log(botones)
    })
})