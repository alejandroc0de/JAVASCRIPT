// Async / Await = Async: Makes a function return a promise
//                 Await : Makes an async function wait for a promise

//                  Allows you to write code async in a sync way, "Async" doesnt have resolve or reject args
//                  Everything after wait is placed in an event queue



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


async function doChores(){
    try{
        const walkDogResult = await walkDog();
        console.log(walkDogResult)
        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult);
        const takeOutTrashResult = await takeOutTrash();
        console.log(takeOutTrashResult);
    }catch(error){
        console.log(error)
    }
    }
doChores()