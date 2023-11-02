
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
    console.log("Actual Number inside init function: "+number);
    noOfAttempts = 3;
    outPut.innerHTML = "Enter A Number"
    attemNumber.innerHTML = "You have 3 attempts to guess the right number";
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
        console.log("Entered Numebr: "+input+"  Actual Num: "+number);
        if (isNaN(input) || input < 1 || input > 10) {
            console.log("2....");
            outPut.innerHTML = "Please Enter a Valid Number between 1 and 10";
            noOfAttempts--;
            attemNumber.innerHTML = "You have " + noOfAttempts + " attempts to guess the right number";

        } else if (input == number) {
            console.log("3....");
            outPut.innerHTML = `You guessed it right, the number was ${number} !`;
            noOfAttempts--;
            attemNumber.innerHTML = "YEPEEE....the number was " + number + " ! ";
            setTimeout(()=> {
                initPage();
                //document.getElementById("result").innerHTML = "Hello, I am here";
             }
             ,5000);
            guessed = true;
            

        } else if (parseInt(input) < parseInt(number)) {
            console.log("4....");
            outPut.innerHTML = `you guessed too low!`;
            noOfAttempts--;
            attemNumber.innerHTML = "You have " + noOfAttempts + " attempts to guess the right number";

        } else if (parseInt(input) > parseInt(number)) {
            console.log("5....");
            outPut.innerHTML = 'you guessed too high';
            noOfAttempts--;
            attemNumber.innerHTML = "You have " + noOfAttempts + " attempts to guess the right number";
        }
    }
    if (noOfAttempts == 0 && !guessed) {
        attemNumber.innerHTML = "You are out of attempts. Original number was " + number;
        setTimeout(()=> {
            initPage();
            //document.getElementById("result").innerHTML = "Hello, I am here";
         }
         ,5000);
    }
}

)

