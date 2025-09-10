

function createGame(){

    // Todo este codigo esta bien pero podriamos hacer closure para hacerlo privado
    let score = 0;

    function increaseScore(points){
        score = score + points
        console.log(`+${points}.pts`)
    }

    function decreaseScore(points){
        score = score - points
        console.log(`-${points}.pts`)
    }
    function getScore(){
        return score;
    }

    
    return {increaseScore,decreaseScore,getScore}
}

const game = createGame(); // Usamos los metodos de game, que le retornamos en el return arriba

game.increaseScore(5);
game.decreaseScore(3);
game.increaseScore(4);

console.log(game.getScore())
