const botonGetInfo = document.getElementById("botonGetInfo");

botonGetInfo.addEventListener("click", async() => {

    try{
        const res = await fetch('/respuestas')
        const data = await res.json();
        console.log(data)

        const listaIndex = document.getElementById("listaShow")
        listaIndex.innerHTML = ""; // Limpia antes de volver a pintar 

        data.forEach(element => {
            const li = document.createElement("li");
            const buton = document.createElement("button");
            buton.textContent ="❌ Borrar"
            li.textContent = `${element.nombre} ${element.apellido} ${element.semestre} ${element.feedback}`
            listaIndex.appendChild(li);
            listaIndex.appendChild(buton);
        });
    }catch(err){
        console.log("Error al traes las respuestas ", err)
    }
});