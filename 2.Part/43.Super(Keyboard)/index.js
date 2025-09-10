// super = Keyword used in classes to call the constructor or access the properties and methods of a parent


// Entonces, antes de que los hijos empiecen a agregar propiedades debemos llamar al constructor de la clase padre, si la clase padre
//           tiene objetos, debemos pasarselos antes de hacer cualquier cosa. 

class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    move(speed){
        console.log(`This ${this.name} is moving at a speed of ${speed}`);
    }

}

class Rabbbit extends Animal{
    constructor(name, age, runSpeed){
        super(name,age);
        this.runSpeed = runSpeed
    }

    run(){
        super.move(this.runSpeed) // Aca dentro de una funct, accedemos a metodos de el parent
    }
}

class Fish extends Animal{
    constructor(name, age, swimSpeed){
        super(name,age);
        this.swimSpeed = swimSpeed
    }
}

class Hawk extends Animal{
    constructor(name, age, flySpeed){
        super(name,age);
        this.flySpeed = flySpeed
    }
}

const rabbit = new Rabbbit("Rabbit",1,25)
const fish = new Fish("Fish",2,12)
const hawk = new Hawk("Hawk",3,50)

console.log(rabbit.age)
rabbit.run()