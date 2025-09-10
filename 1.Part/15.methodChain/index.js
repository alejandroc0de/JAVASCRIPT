//Method chain

// Calling one method after another in one line 

// Esto es mucho para escribir asi que podemos hacer chains
let username = window.prompt("Enter username")

username = username.trim(" ");
let char = username.charAt(0);
char = char.toUpperCase();
let extra = username.slice(1);
extra = extra.toLowerCase();
username = char + extra;

console.log(username);

// method chaining 

username = username.trim(" ").charAt(0).toUpperCase() + username.slice(1).toLowerCase();
console.log(username);