const min = 1;
const max = 100;
const answer = Math.floor(Math.random()*(max - min + 1)) + min;

let attempts = 0;
let guess;
let run = true;

while(run){

    guess = window.prompt(`use a number between ${min} - ${max}`);
    guess = Number(guess);

    if(isNaN(guess)){
        window.alert("enter valid number");
    }else if(guess < min || guess > max){
        window.alert("enter number within range");
    }else{
        attempts++;
        if(guess < answer){
            window.alert("too low ");
        }else if(guess > answer){
            window.alert("too high ");
        }else{
            window.alert(`yay you won. Total attempts was ${attempts}`);
             run = false;
        }
    }
}