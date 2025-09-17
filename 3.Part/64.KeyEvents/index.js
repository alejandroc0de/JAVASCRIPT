

const myBox = document.getElementById("myBox")
const moveAmount = 10

let x = 0;
let y = 0;


document.addEventListener("keydown", (event)=>{
    myBox.textContent = "2"
    myBox.style.backgroundColor = "red"
});

document.addEventListener("keyup", (event)=>{
    myBox.textContent = "🚗"
    myBox.style.backgroundColor = "blue"
});

document.addEventListener("keydown", (event)=>{

    event.preventDefault();

    if(event.key.startsWith("Arrow")){

        switch(event.key){
            case "ArrowUp":
                y -= 10;
                break
            case "ArrowDown":
                y += 10;
                break
            case "ArrowLeft":
                x -= 10;
                break
            case "ArrowRight":
                x+= 10;
                break
        }
        myBox.style.top = `${y}px`;
        myBox.style.left = `${x}px`;

    }
})