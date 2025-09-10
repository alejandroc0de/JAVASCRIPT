class Animal{
    alive = true;
    eat(){
        console.log(`This ${this.name} is eating`)
    }
    sleep(){
        console.log(`This ${this.name} is sleeping`)
    }
}

class Rabbit extends Animal{
    name = "Rabbit";
    run(){
        console.log(`This ${this.name} is running`)  // Cada animal puede tener sus metodo unicos 
    }
}
class Fish extends Animal{
    name = "Fish"
    swim (){
        console.log(`This ${this.name} is swiming`)
    }
}
class Hawk extends Animal{
    name = "Hawk"
}


const rabbit = new Rabbit();
const fish = new Fish()
const hawk = new Hawk()

console.log(rabbit.eat())