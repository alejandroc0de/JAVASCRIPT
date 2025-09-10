// string manipulation 


let username = "carrilloalejandro0215  ";

// First char 

char = username.charAt(0);
console.log(char);

let indexof = username.indexOf("j");
console.log(indexof);

// largo de string 

let largo = username.length;
console.log(largo) ;

// Trim string

username = username.trim(); // remove white spaces 
console.log(username);

username = username.toUpperCase();
console.log(username);

username = username.repeat(2);
console.log(username);

// starts with  and endswith 

let result = username.startsWith(" ");
console.log(result);

including = username.includes(" ");
console.log(including)

// Now lets eliminate chars in a string 

let phoneNumber = "123-456-7890";

phoneNumber = phoneNumber.replaceAll("-","");
console.log(phoneNumber);

// pad start ( Hace que el string sea 15 de largo, y usa 0 para rellenar al incio )

phoneNumber = phoneNumber.padStart(15,0);
console.log(phoneNumber);
