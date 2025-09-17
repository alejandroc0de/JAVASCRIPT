

myButton = document.getElementById("myButton");
myImage = document.getElementById("myImage");

myButton.addEventListener("click", (event)=>{


    if(myImage.style.display === "none"){
        myImage.style.display = "block"
        myButton.textContent = "Hide"
    }
    else
    {
    myImage.style.display = "none"
    myButton.textContent  = "show"
    }


} )