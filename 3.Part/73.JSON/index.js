// Use for exchnaging data from server and web app, it most of the time an object made of {key:value} OR [{},{},{}] Array of objects

//      JSON.stringify() converts a JS object into a JSON String, JSN.parse() = JSON String into object


const names = ["SpongeBob","Patrick","Squid","Sandy"]

const person = {
    "name": "SpongeBob",
    "age" : 30,
    "isEmployeed" : true,
    "hobbies": ["jellyfishing","driving","cooking"]
}

const jsonString = JSON.stringify(names)
const jsonPerson = JSON.stringify(person)

console.log(jsonString)
console.log(jsonPerson) // Converts to json 

const backToJS = JSON.parse(jsonPerson) // Back to JS Object
console.log(backToJS)

//GET FILES 

fetch("/73.JSON/person.json")
    .then(response => response.json())
    .then(value => console.log(value,"hello")) // this returns the JSON FILE