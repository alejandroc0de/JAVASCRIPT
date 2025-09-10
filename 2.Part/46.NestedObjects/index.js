// Nested Objects = Objects inside other objects, allows you to represent more complex data strucutures
//                  A person object could contain adress and many other objects 


const person = {
    fullName : "Spongebo",
    age : 30,
    isStudent : true,
    hobbies : ["Karate", "JellyFishing","Cooking"],
    address : {
        street : "124 Conch st.",
        city : "Bikini Bottom"
    }
}

console.log(person.fullName)
console.log(person.address.street) // This is a object within an object 

// Loop properties of nested object

for (const property in person.address){
    console.log(person.address[property])
}

