//Guessing Gmae using while loop (typescript)
let maxValue:number=100;
let randomNumber:number=Math.floor(Math.random()*maxValue) + 1;
console.log("Random number:",randomNumber);
//track guess status
let correctGuess=false;
//predefined guesses
let guesses=[3,7,5,1,10];
//iterate over guesses
let i=0;
while(!correctGuess && i<guesses.length){
    let currentGuess =guesses[i];
    if(currentGuess === randomNumber){
        console.log(correctGuess!);
        correctGuess= true;
    }else if (currentGuess <randomNumber){
        console.log("Too low!");
    }else{
        console.log("Too high!");
    }
    i++;
}