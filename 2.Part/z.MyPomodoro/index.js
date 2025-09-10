
let rain = document.getElementById("botonRain")
let boton45 = document.getElementById("45min")
let boton15 = document.getElementById("15min")
let boton25 = document.getElementById("25min")
let boton5 = document.getElementById("5min")
let startboton = document.getElementById("start")
let reset = document.getElementById("reset")
let cancel = document.getElementById("cancel")

let intervalo; // We have to save the actual interval 
let tiempo; 
let tiempoGiven;
let minutos;
let segundosCount = 59;

//---------------  Rin buttom logic --------------------
rain.addEventListener("click", () => {
    let rainy = document.getElementById("rainy") // save audio reference to play with it 
    if(rainy.paused){
        rainy.play();
        rain.classList.toggle("active"); // modify css sheet 
    } else{
        rainy.pause();
        rainy.currentTime = 0;
        rain.classList.remove("active");
    }
})

let successSound = document.getElementById("success")
boton45.addEventListener("click",()=>startClock(44))
boton15.addEventListener("click",()=>startClock(14))
boton25.addEventListener("click",()=>startClock(24))
boton5.addEventListener("click",()=>startClock(4))

// ---------------- Start clock modifies the inital clock after choosing an option ---------------------------
function startClock(tiempo){
    clearInterval(intervalo)
    intervalo=null
    segundosCount = 59;
    document.getElementById("pomodoro").textContent = `00:${String(tiempo).padStart(2,"0")}:59`
    tiempoGiven = parseInt(tiempo)
    minutos = tiempoGiven;
};

startboton.addEventListener("click",()=>countDown()) // Event listener for start button

reset.addEventListener("click", () => {clearInterval(intervalo) 
    document.getElementById("pause").play()
    intervalo = null     // We clean interval and set everything to 0 
    minutos = 0;
    segundosCount = 59;
    document.getElementById("pomodoro").textContent = `00:00:00`
})

cancel.addEventListener("click", () => {clearInterval(intervalo) // here we just clean interval
    document.getElementById("pause").play()
    intervalo = null
})



function countDown(){
    successSound.load() // not allowed audio after no interaction solution 
    if(!minutos || minutos<=0){
        alert("Choose a period of time first");
        return;
    }
    if(intervalo) return; // If there is an interval running we go back, make sure to save it to variable
    intervalo = setInterval(() => {
        document.getElementById("pomodoro").textContent = `00:${String(minutos).padStart(2,"0")}:${String(segundosCount).padStart(2,"0")}`; // Make sure it shows 05 and not 5 
        
        if(minutos === 0 && segundosCount === 0){
            clearInterval(intervalo)
            intervalo = null
            document.getElementById("pomodoro").textContent = `00:00:00`
            successSound.play()
            return;
        }

        segundosCount--;

        if(segundosCount<0 ){  
            minutos--
            segundosCount = 59;
        }

    },1000);
};

