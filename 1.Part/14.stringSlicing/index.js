// ending index is exclusive so +1

// ending index not needed if its all until the end 

// negative index will start at the end of string


// name = fullName.slice(0,4);

const fullName = "Alejandro Carrillo";

firstSpace = fullName.indexOf(" ");

let firstName = fullName.slice(0,firstSpace);
let lastName = fullName.slice(firstSpace+1);



console.log(firstName);
console.log(lastName);


// get username in an email 

const email = "carrilloalejandro0215@gmail.com";

let username = email.slice(0,email.indexOf("@"));

console.log(username);