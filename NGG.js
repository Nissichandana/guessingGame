
let button = document.getElementById('btn');
let outPut = document.getElementById('textBox');
let attemNumber = document.getElementById('attempts');
let rndNumber = 0;
let noOfAttempts = 0;

function initPage() {
    button = document.getElementById('btn');
    outPut = document.getElementById('textBox');
    attemNumber = document.getElementById('attempts');
    rndNumber = [Math.floor(Math.random() * 10) + 1];
    console.log("Actual Number inside init function: "+rndNumber);
    noOfAttempts = 3;
    outPut.innerHTML = " Enter Number ";
    attemNumber.innerHTML = "You have 3 attempts to guess the right number";
    playerInput.value = "";
    playerInput.focus();
    
}
// let userMsg = " "

// function genRandNum() {
//     randNumGenerated = Math.floor(Math.random() * 10) + 1;
//     guessAttempts = 1;
//     guessesRemaining = 3;
//     guessRemain.value=guessesRemaining;
//     guessField.value="";
//     guessField.focus();
//     console.log("randNumGenerated = " + randNumGenerated);
// }
let input = document.getElementById("playerInput");
input.addEventListener("keypress",function(event){
    if(event.key === "Enter"){
        event.preventDefault();
        document.getElementById("btn").click();
    }
})
button.addEventListener('click', function numGuess() {
    let input = document.getElementById('playerInput').value;
    console.log("number of attempts " + noOfAttempts);
    let guessed = false;

    if (noOfAttempts > 0) {
        console.log("number: " + rndNumber);
        console.log("Entered Numebr: "+input+"  Actual Num: "+rndNumber);

        if (isNaN(input) || input < 1 || input > 10) {
            console.log("2....");
            outPut.innerHTML = "Please Enter a Valid Number between 1 and 10";
            noOfAttempts--;
            attemNumber.innerHTML = "You have " + noOfAttempts + " attempts to guess the right number";

        } else if (input == rndNumber) {
            console.log("3....");
            outPut.innerHTML = `You guessed it right, the number was ${rndNumber} !`;
            noOfAttempts--;
            attemNumber.innerHTML = "YEPEEE.... ";
            setTimeout(()=> {
                initPage();
             }
             ,5000);
            guessed = true;
            

        } else if (parseInt(input) < parseInt(rndNumber)) {
            console.log("4....");
            outPut.innerHTML = `your guess is low !`;
            noOfAttempts--;
            attemNumber.innerHTML = "You have " + noOfAttempts + " attempts to guess the right number";

        } else if (parseInt(input) > parseInt(rndNumber)) {
            console.log("5....");
            outPut.innerHTML = 'your guess is high !';
            noOfAttempts--;
            attemNumber.innerHTML = "You have " + noOfAttempts + " attempts to guess the right number";
        }
    }
    if (noOfAttempts == 0 && !guessed) {
        attemNumber.innerHTML = "You are out of attempts. Original number was " + rndNumber;
        setTimeout(()=> {
            initPage();
         }
         ,5000);
    }
}

)

