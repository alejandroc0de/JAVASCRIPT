//Promises = An object that manages async operations, wrap a promise object around {async code}
//           "I promise to return a value"  Pending -> Resolved or Rejected 
//            New Promise ((resolve,rejected)=> {async code})

// Do these chores in order 1.walk, 2.Clean kitchen 3.Take out trash


function walkDog(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{

        const dogWalked = true;
        
        if(dogWalked){
            resolve("You walk the dog");
        }
        else{
            reject("You did not walk the dog");
        }

        },1500)
    })
}


function cleanKitchen(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
        
        const kitchenCleaned = true;

        if(kitchenCleaned){
            resolve("You clean the kitchen");
        }else{
            reject("You did not clean the kitchen");
        }
        },2500)
    })
}

function takeOutTrash(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{

        const trashTaken = false;
        
        if(trashTaken){
            resolve("You take out the trash");
        }else{
            reject("Trash was not taken out");
        }
        },500)
    })
}


walkDog().then(value => {console.log(value); return cleanKitchen()})
        .then(value => {console.log(value); return takeOutTrash()})
        .then(value => {console.log(value); console.log("You finished")})
        .catch(error => console.log(error));



        
// you need catch for catching the errors