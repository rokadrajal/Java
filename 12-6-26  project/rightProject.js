
for (; ;) {
    var count = 0;
    var max = 10;
    var flag = false;

    var num = Math.floor(Math.random() * 100) + 1;

    while (count < max) {
        var number = Number(prompt("Entre the number :"));
        count++;

        
        if(number > 100)
        {
            alert("Please Entre the valid number :");
        }


        if (number < 1 || number > 100) {
            alert("Number must be between 1 to 100!");
        }



        if (number > num) {
            alert("Too High!");
        }
        else if (number < num) {
            alert("Too low!");
        }
        else {
            alert("Congratulation!You Win");
            alert("Total attempt :" + count);
            flag = true;
            break;
        }



    }


    if (flag == false) {
        alert("Game Over");
    }

    var choice = prompt("Do you want to play again? (yes/No) :");

    if(choice == "no")
    {
        alert("Thank You for Playing!");
        break; 
    }
   

}