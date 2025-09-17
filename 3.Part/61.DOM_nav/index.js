// DOM NAV

// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children



//------------First Element Child----------------

//Por ejemplo en un UL los hijos serian los listed items

const element = document.getElementById("fruits")
const firstChild = element.firstElementChild;
firstChild.style.backgroundColor = "yellow" // First child changes 


//-------------- .lastElementChild---------------
const ulElements = document.querySelectorAll("ul") // Seleccionamos todos los ul, y query retorna nodelist (forEach method)
ulElements.forEach(ulElement => {
    const lastChild = ulElement.lastElementChild;
    lastChild.style.backgroundColor = "green"
})

// --------------- .nextElementSibling--------------

const element1 = document.getElementById("apple") // el next sibling seria orange pues es el que sigue 
const element1Sibling = element1.nextElementSibling;
element1Sibling.style.backgroundColor = "grey" // aca actualizamos el hermano siguiente de apple (orange)


//------------------ .parentElement  / .children  -----------------
// we will get the element that contains it, children will get the children of the parent, children returns collection (non array / USE TYPECAST TO ARRAY)

const element2 = document.getElementById("apple");
const parent = element2.parentElement;
parent.style.backgroundColor = "yellow"

