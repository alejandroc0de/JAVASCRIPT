// DOM = DOCUMENT OBJECT MODEL
//       Object { } that represents the page you see n the web browser and provides you with API to interact with it
//       Web browser constructs the DOM when it loads an HTML doc, and structures all the elements in a tree-like representation
//       JS can access the DOM to dynamically change the content, structure, and style of a web page.


console.dir(document)

document.title = "My website"

const username = "Alejandro "

const welcomeMsg = document.getElementById("welcome-msg")

welcomeMsg.textContent += username === ""? 'Guest':username;

// With it you can modify the doc from js 