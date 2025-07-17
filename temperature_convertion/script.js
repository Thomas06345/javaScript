

const textBox = document.getElementById("textbox");
const tofahrenheit = document.getElementById("fahrenheit");
const toCelsius = document.getElementById("celsius");
const result =  document.getElementById("result");
let temp;

function convert(){
    if(tofahrenheit.checked){
        temp = Number(textBox.value);
        temp = (temp * 9/5) + 32;
        result.textContent= temp.toFixed(1) + " Fahrenheit"
    }
    else if(toCelsius.checked){
         temp = Number(textBox.value);
        temp = (temp - 32 )* (5/9);
        result.textContent= temp.toFixed(1) + " Celsius"
    }
    else{
        result.textContent = "select a unit"
    }


}