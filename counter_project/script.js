
const decrementButton = document.getElementById('decrease');
const incrementButton = document.getElementById('increase');
const resetButton = document.getElementById('reset');
const counterDisplay = document.getElementById('counter');
let counter = 0;

incrementButton.onclick = function() {
    counter++;
    counterDisplay.textContent = counter;
}

decrementButton.onclick = function(){
    counter--;
    counterDisplay.textContent = counter;
}


resetButton.onclick = function(){
    counter = 0;
    counterDisplay.textContent = counter;
}


