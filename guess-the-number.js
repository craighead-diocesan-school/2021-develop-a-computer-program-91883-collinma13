// Your code goes in this file.

// function getName
function getName() {
    // user types in there name 
    let username = prompt('what is your name')
    // replys hello (your name) lets play guess the number
    alert('Hello ' + username + ' lets play guess the number')
}
// second function
function playGame() {
    let rerun = 'yes'
    while (rerun == 'yes') {
        // starts game with a alert message 
        alert('You are playing guess the number. Pick a number between 1 and 20! ')
        // grabs name from function 1 
        getName()

        let randomNum = Math.floor(Math.random() * 20) + 1
        alert(randomNum)

        // 2+ variables
        let maxTries = 3
        let counter = 0

        // while loop
        // if counter 
        while (counter <= maxTries) {
            let guess = prompt("Enter a number between 1 and 20")
            if (!isNaN(guess)) {
                if (guess == randomNum) {
                    alert('correct ')
                    counter += maxTries + 1
                } else {
                    counter += counter + 1
                    alert('incorrect')
                }
            }else {
                alert('error!') 
            }  
        }
        rerun = prompt('do you want to play again? ')
    }
}
