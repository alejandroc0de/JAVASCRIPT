// We can either use a window prompt, or a professional text box with buttom

let username;

// username = window.prompt("Cual es tu nombre");
// console.log(username)

document.getElementById("mysubmit").onclick = function(){
    username = document.getElementById("mytext").value;
    document.getElementById("myh1").textContent = (`Welcome ${username}`);
}

// Esto guarda el username y luego cambia el h1 text 
