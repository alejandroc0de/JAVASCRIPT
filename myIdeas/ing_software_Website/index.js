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

            
            buton.dataset.id = element.id;
            buton.id = `${element.id}delete`
            console.log(buton.dataset.id)

            buton.addEventListener("click", async() => {
                try{
                    const res = await fetch(`/respuestas/${element.id}`, {method: "DELETE"})
                    const data = res.json();
                    console.log(data)
                    botonGetInfo.click(); // simula click para recargar lista
                }catch(err){
                    console.log(err)
                }
            })


            buton.textContent ="❌ Borrar"
            li.textContent = `${element.nombre} ${element.apellido} ${element.semestre} ${element.feedback}`
            listaIndex.appendChild(li);
            listaIndex.appendChild(buton);
        });
    }catch(err){
        console.log("Error al traes las respuestas ", err)
    }
});

