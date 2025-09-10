class Person{

    constructor(firstName, lastName, age){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }

    set firstName (newFirstName){
        if ( typeof newFirstName === "string" && newFirstName.length >0){
            this._firstName = newFirstName
        }
        else{
            console.error("First name must be non empty string")
        }
    }

    set lastName (newLastName){
        if ( typeof newLastName === "string" && newLastName.length >0){
            this._lastName = newLastName
        }
        else{
            console.error("last name must be non empty string")
        }
    }

    set age (newAge){
        if ( typeof newAge === "number" && newAge > 0){
            this._age = newAge
        }
        else{
            console.error("Age must be a positive number")
        }
    }

    get age(){
        return this._age
    }
    get firstName(){
        return this._firstName
    }
    get lastName(){
        return this._lastName
    }
}

const person = new Person("Andres","Ramiro",20)

console.log(person.age)
console.log(person.lastName)