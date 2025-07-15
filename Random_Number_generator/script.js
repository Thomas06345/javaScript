const button = document.getElementById("roll");
const label = document.getElementById("mylabels");
const min =1 ;
const max = 6;
let Random;

roll.onclick = function(){
    Random = Math.floor(Math.random() * max) + min;
    mylabels.textContent = Random;
}

