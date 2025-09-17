

// Create element 

const newH1 = document.createElement("h1");
newH1.id = "myH1"
newH1.style.color = "red"       //CSS CHANGES 
newH1.style.textAlign = "center"



// add atributes 

newH1.textContent = " i like pizza"

// Append to DOM

document.body.prepend(newH1);
document.getElementById("box1").append(newH1); // ahora lo metimos al box1, will append as last child. 

const box2 = document.getElementById("box2")
// document.body.insertBefore(newH1, box2)       // This will insert the element box 2 

// REMOVE HTML ELEMENT 

document.getElementById("box1").append(newH1);  // We have to access the box 1 to be able to remove its child 
document.getElementById("box1").removeChild(newH1)



//-------------------------Part 2 --------------------------------

const newListItem = document.createElement("li");

newListItem.textContent = "coconut";
document.body.append(newListItem);
newListItem.style.fontWeight = "bold";
newListItem.style.backgroundColor = "green"

const list = document.getElementById("fruits").append(newListItem) // this appends to the list 


const newListItem1 = document.createElement("li")
newListItem1.textContent = "pizza"
newListItem1.style.backgroundColor = "lightblue"

document.getElementById("fruits").insertBefore(newListItem1,newListItem); // insert before an item 