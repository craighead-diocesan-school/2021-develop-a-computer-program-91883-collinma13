// Your code goes in this file.
function guessNumber() {
    let randomNum = Math.floor(Math.random() * 21);

    // output to consule to debug
    console.log(randomNum);
    // new revealed variable 
    let guess;
    guess = prompt("Enter a number between 0 and 20");
    // console.log("Your guess is: " + guess);

    if (guess < randomNum) {
        // if less than randomNum  
        alert("Your guess is too low");

    } else if (guess > randomNum) {
        // if greater than randomNum
        alert("Your guess is too high")

    } else if (guess == randomNum){
        // dont use single equals sign because that is the asignment operater
        alert("You guessed the number. You Win!")
    } else {
        alert("Error")
        // if the user doesnt understand and inserts words instead
    }
}
