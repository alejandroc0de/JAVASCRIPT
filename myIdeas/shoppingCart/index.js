

const precios = {
    Camisa : 20,
    Pantalon : 40,
    Chaqueta : 70,
    Zapatos : 90,
    Corbata : 20,
    Camiseta : 15,
    CamisetaPremium : 25
};

let total = 0;

const Camisa = document.getElementById("Camisa");
const Pantalon = document.getElementById("Pantalon");
const Chaqueta = document.getElementById("Chaqueta");
const Zapatos = document.getElementById("Zapatos");
const Corbata = document.getElementById("Corbata");
const Camiseta = document.getElementById("Camiseta");
const CamisetaPremium = document.getElementById("CamisetaPremium");



function addCart(producto){
    total = total + precios[producto]
    console.log(total)
    document.getElementById("totalP").textContent = `El precio acumulado es ${total}`
}

