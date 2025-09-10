const fruits = [{name : "Apple", color:"red",calories : 95},
                {name : "Orange", color:"Orange",calories : 45},
                {name : "Banana", color:"Yellow",calories : 105},
                {name : "Coconut", color:"White",calories : 159},
                {name : "Pineaple", color:"Yellow",calories : 37}];


console.log(fruits[0].name)
console.log(fruits[3].calories)


fruits.push({name:"Grapes",color:"purple",calories:62})

console.log(fruits)

fruits.pop() // Will remove last element
console.log(fruits)

fruits.splice(1,1) // Will remove index element from 1 to 1 or any number

console.log(fruits)

//------------forEach()-------------------

fruits.forEach(fruit => console.log(fruit.name))

// -----------map()------------ Takes all objects and puts them into an array
const fruitNames = fruits.map(fruit => fruit.name)
console.log(fruitNames)

// ----------filter()--------------- return an array after checking a condition 

const yellows = fruits.filter(fruit => fruit.color === "Yellow")
console.log(yellows)

const lowCalories = fruits.filter(fruit => fruit.calories<=100)
console.log(lowCalories) 

// ---------reduce () ------------------ returns only one object 

// el max es el contador el maximo, y fruit la siguiente fruta, revisamos si la fruta de ahora es mayor al max que tenemos
// si es asi, retornamos fruit, si no retornamos el max que ya hay 
const maxCalFruits = fruits.reduce((max, fruit) => fruit.calories > max.calories ? fruit : max)

console.log(maxCalFruits)