
class Person{
    constructor(name, age, ...address){

        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}

// ... spread first makes it an array and then we use it again to pass every item as an arg to the con
//.    constructor of the adress

class Address {
    constructor(street,city,country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person("Alejo",30,"124 Conch st","Bikini Bottom","Int. Waters")

const person2 = new Person("Patrick",37,"128 Counch st","Bikini Bottom","Int. Waters")

const person3 = new Person("Squid",46,"126 Counch st","Bikini Bottom","Int. Waters")


console.log(person1.name)
console.log(person1.address.city)