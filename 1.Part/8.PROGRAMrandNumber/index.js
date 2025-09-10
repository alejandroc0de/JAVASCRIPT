const generateNumber = document.getElementById("generateNumber");

generateNumber.onclick = function(){
    let numero = Math.floor(Math.random()*1000);
    document.getElementById("numeroGenerado").textContent = numero
}