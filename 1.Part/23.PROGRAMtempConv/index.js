

const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");

const result = document.getElementById("result");

let temp;
function convert(){

    if(toFahrenheit.checked){
        temp = textBox.value;
        temp = Number(temp);
        temp = temp * 9 / 5 + 32;
        result.textContent = `The temp is ${temp.toFixed(1)}°F`;

    }
    else if(toCelsius.checked){
        temp = textBox.value;
        temp = Number(temp);
        temp = (temp -32 )*(5/9);
        result.textContent = `The temp is ${temp.toFixed(1)}°C`;

    }
    else{
        result.textContent = "Select a Unit"
    }

}
