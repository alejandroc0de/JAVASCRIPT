// fetch = Function used for making HTTP requests to fetch resources. (JSONs, IMAGES, FILES) 
//         Simplifies async data fetching in JS, and use for retrieving and sending data to the web
//         fetch (url, {options})


fetchData();

async function fetchData(params) {
    try{
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)

        if(!response.ok){
            throw new Error("Could not fetch resource")
        }

        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");
        imgElement.src = pokemonSprite;
        imgElement.style.display = "block"

    }
    catch(error){
        console.log(error)
    }
    
}