//Loop control Statment
//1.Entry control loop
   // a . for loop
   // b . while loop
//2.Exit loop
   // c . do while loop
   
   
//1 . Entry control loop   
// Step : 
    // 1. Initialization
    // 2. Condition
    // 3. code
    // 4. inc/dec     variable change


// // a . for loop
// for(let i=0; i<=10; i++)
// {
//     console.log(i);
// }

// // b . while loop
// let j = 11;
// while(j<=15)
// {
//     console.log(j);
//     j++;
// }


// //2 . Exit control loop
// step:
//     1. Initialization
//     2. code
//     3. inc/dec
//     4. condition


// //c . do while loop

// let k = 51;
// do
// {
//     console.log(k);
//     k++;
// }while(k<=60);


//infinite loop

// for(;;)
// {
//     console.log("hello");
// }





let bill = 0;
let quantity = 0;
let product = [{"P_name" : "pen" , "Price":"10"},{"l_name" :"pencil","Price":"5"},{"e_name":"eraser","Price":"5"}];

for(let i=0; i<product.length; i++)  // product print karva mete
{
    alert(JSON.stringify(product[i]));
}

var choice = Number(prompt("1.for pen\n 2.for pencil\n 3.eraser\n\n Entre your choice :"));
console.log(choice);



switch(choice)
{
    case 1:
        quantity = prompt("Enter pen Quantity :");
        bill += product[0].Price*quantity;
        break;
    case 2:
        quantity = prompt("Enter pencil Quantity :");
        bill += product[1].Price*quantity;
        break;
    case 3:
        quantity = prompt("Enter eraser Quantity :");
        bill += product[2].Price*quantity;
        break;
        
}
console.log(bill);


// patern

// for(let i=0; i<=5; i++)
// {
//     var str = "";
//     for(let j=0; j<=i; j++)
//     {
//         str += "* ";
//     }
//     console.log(str);
// }

