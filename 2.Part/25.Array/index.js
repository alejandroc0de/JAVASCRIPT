// arrays. They hold one or more values

let fruits = ["apple","orange","banana"];

console.log(fruits);
console.log(fruits[0]);

fruits.push("coconut"); // to the end of array

fruits.pop(); // will remove last one

fruits.unshift("mango"); // add to the beginning
fruits.shift(); // to remove from beginning

let numOfFruits = fruits.length;
console.log(numOfFruits);


let index = fruits.indexOf("apple");
console.log(index); // locate an item in array


for (let fruit of fruits){
    console.log(fruit);
}

fruits.sort(); // will sort alphabetably 
fruits.sort().reverse(); // sort reverse 