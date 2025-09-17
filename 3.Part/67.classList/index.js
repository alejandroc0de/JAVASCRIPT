// classList = element property in JS used to interact with an elements list of classes 

// add(),remove(),toggle(),replace(),contains()


const myboton = document.getElementById("myBoton");
myboton.classList.add("enabled"); 
myboton.classList.remove("enabled");  //Esto añade a el boton la class enable o no 



myboton.addEventListener("mouseover", (event) =>{ // Tenemos estas clases en el CSS entonces cuando se las añadimos las classes del CSS le aplican al boton 
    myboton.classList.add("hover"); 
})

myboton.addEventListener("mouseout", (event) =>{
    myboton.classList.remove("hover"); 
})


myboton.classList.add("enabled")


myboton.addEventListener("click", (event) =>{
    
    if(event.target.classList.contains ("disabled")){
        event.target.textContent = "Stop clicking "
    }
    else{
        event.target.classList.replace("enabled","disabled")
    }
})