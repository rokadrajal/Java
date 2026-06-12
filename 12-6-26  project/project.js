// find random number

let playagain = true;

while (playagain) {
    var attempt = 0;
    var maximum = 10;
    var flag = false;

    var num = parseInt(Math.random() * 100);
    console.log("Random Number :",num);


    while (attempt < maximum) {
        let number = Number(prompt("Enter the number :"));

        if (number != number) {
            alert("Please enter a valid number!");
            continue;
        }

        if (number < 1 || number > 100) {
            alert("Number must be between 1 and 100!");
            continue;
        }

        attempt++;


        if (num > number) {
            alert("Too High!");
        }
        else if (num == number) {
            alert("Congratulation! You Win!");
            alert("Total attempt :" + attempt);
            flag = true;
            break;
        }
        else {
            alert("Too Low!");
        }
    }



    if (flag == false) {
        alert("Game Over!");
        alert("Correct Number :" + num);
    }

    let choice = prompt("Do you want to play again? (yes/No)");

    if (choice === "yes") {
        playagain = true;
    }
    else {
        alert("Thank You for Playing!");
        playagain = false;
    }

}



