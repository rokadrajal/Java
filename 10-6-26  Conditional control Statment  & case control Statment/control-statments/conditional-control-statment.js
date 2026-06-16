console.log("Control Statement : ");

// 1. Conditional Control Statement
        //  1. if Statement
          /*
            if(condition){
                //code condition true
            }
          */

        //  2. if-else Statement
        /*
            if(condition){
                //code   condition true
            }else{
                //code2    condition false
            }
        */

        //  3. Ladder Statement / else-if Statement
        /*
            if(condition1){
                //code   condition1 true
            }else if(condition2){
                //code3 condition2 true
            }else{
                //code2   both condition false
            }
        */


        //  4. Nested if-else Statement
        /*
            if(condition){
                if(condiition 2){
                    // code    condition 1 condition2 true
                }else{
                    //code     condtion 1 true condition 2 false    
                }
            }else{
                //code2    condition false
            }
        */


let num1 = Number(prompt("Enter the number1 :"));            
let num2 = Number(prompt("Enter the number2 :"));            
let num3 = Number(prompt("Enter the number3 :"));  


if(num1 > num2)
{
    if(num1 > num3)
    {
        document.querySelector('h1').innerHTML = "num1 is highest";
    }
    else if(num1 == num3)
    {
        document.querySelector('h1').innerHTML = "num1 and num3 both are same and highest";
    }
    else
    {
        document.querySelector('h1').innerHTML = "num3 is highest";
    }
}
else if(num1 == num2)
{
    if(num2 > num3)
    {
        document.querySelector('h1').innerHTML = "num1 and num2 both are same and highest";
    }
    else if(num2 == num3)
    {
        document.querySelector('h1').innerHTML = "All are Equal";
    }
    else
    {
        document.querySelector('h1').innerHTML = "num3 is highest";
    }

}
else
{
    if(num2 > num3)
    {
        document.querySelector('h1').innerHTML = "num2 is highest";
    }
    else if(num2 == num3)
    {
        document.querySelector('h1').innerHTML = "num2 and num3 both are same and highest";
    }
    else
    {
        document.querySelector('h1').innerHTML = "num3 is highest";
    }
}



// truthy 
// if(true){
//     // code 
// }else{
//     //code 
// }

// if(true);{     
//     console.log(true); bane print thay
// }{
//     console.log(false);
// }

// if(0)    single line hoy tyare {} no karo to chale
//     console.log(true);
//     console.log("Extra");  <== no chale second line 6e aetle 
// else
//     console.log(false);




