
let btn = document.getElementById('btn');;
let outPut = document.getElementById('outPutText');;
let attemNumber = document.getElementById('attempts');
let number = 0;
let noOfAttempts = 0;

function initPage() {
    btn = document.getElementById('btn');
    outPut = document.getElementById('outPutText');
    attemNumber = document.getElementById('attempts')
    number = [Math.floor(Math.random() * 10) + 1];
    console.log("Number inside init function: "+number);
    noOfAttempts = 3;
    outPut.innerHTML = "Enter A Number"
    userInput.value = "";
    userInput.focus();
    //location.reload();
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

btn.addEventListener('click', function guessNum() {
    let input = document.getElementById('userInput').value;
    console.log("number of attempts " + noOfAttempts);
    let guessed = false;

    if (noOfAttempts > 0) {
        console.log("number: " + number);
        console.log(input);
        if (isNaN(input) || input < 1 || input > 10) {
            outPut.innerHTML = "Please Enter a Valid Number between 1 and 10";
            noOfAttempts--;
            attemNumber.innerHTML = "You have " + noOfAttempts + " attempts to guess the right number";

        } else if (input == number) {
            outPut.innerHTML = `You guessed it right, the number was ${number} !`;
            noOfAttempts--;
            attemNumber.innerHTML = "YEPEEE....";
            guessed = true;
            initPage();

        } else if (input < number) {
            outPut.innerHTML = `you guessed too low!`;
            noOfAttempts--;
            attemNumber.innerHTML = "You have " + noOfAttempts + " attempts to guess the right number";
            
        } else if (input > number) {
            outPut.innerHTML = 'you guessed too high';
            noOfAttempts--;
            attemNumber.innerHTML = "You have " + noOfAttempts + " attempts to guess the right number";
        }
    }
    if (noOfAttempts == 0 && !guessed) {
        attemNumber.innerHTML = "You are out of attempts. Original number was " + number;
        initPage();
    }
}

)

