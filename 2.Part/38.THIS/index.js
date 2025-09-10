// Help us reference a variable within the enviroment we are in 

const person1 = {
    name : "SpongeBob",
    favFood : "Burger",
    sayHello : function(){console.log(`Hello i like ${this.favFood}`)},
    eat : function(){console.log(`This ${this.name} is eating ${this.favFood}`)},
}


const person2 = {
    name : "Patrick",
    favFood : "Pizza",
    sayHello : function(){console.log(`Hello i like ${this.favFood}`)},
    eat : function(){console.log(`This ${this.name} is eating ${this.favFood}`)},
}



person1.sayHello()
person1.eat()

person2.eat() // Como estamos en el contexto de person2 usamos sus metodos 