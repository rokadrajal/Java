// find random number

var num = parseInt(Math.random()*100);
console.log(parseInt(Math.random()*100));

for(;;)
{
    let number = prompt("Enter the number :");

    if(num > number)
    {
        alert("Guess Higher Number");
    }
    else if(num == number)
    {
        alert("Number is Correct");
        break;
    }
    else
    {
        alert("Guess Lower Number"); 
    }
}