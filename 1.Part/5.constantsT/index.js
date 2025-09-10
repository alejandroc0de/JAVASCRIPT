// Variables that cant be changed 


const PI = 3.14159;
let radius;
let circumference;

document.getElementById("boton1").onclick=function(){
    radius = document.getElementById("radio").value;
    radius = Number(radius)
    circumference = 2*PI*radius;
    document.getElementById("response").textContent = `Tu circunferencia es ${circumference}`;

}
