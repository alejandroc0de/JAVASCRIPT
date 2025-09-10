// checked determines if button is checked 

const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterBtn = document.getElementById("masterBtn");
const amexBtn = document.getElementById("amexBtn");

const mySubmit = document.getElementById("mySubmit");
const paymentResult = document.getElementById("paymentResult");
const subResult = document.getElementById("subResult");

mySubmit.onclick = function(){

    if(myCheckBox.checked){
        subResult.textContent = `You are subscribed`;

    }
    else{
        subResult.textContent = `You are not subcribed`;
    }

    if(visaBtn.checked){
        paymentResult.textContent = `You paid with Visa`;
    }
    else if(masterBtn.checked){
        paymentResult.textContent = `You paid with Master`;
    }
    else if(amexBtn.checked){
        paymentResult.textContent = `You paid with Amex`;
    }
    else{
        paymentResult.textContent = `You must select payment`;
    }
}

