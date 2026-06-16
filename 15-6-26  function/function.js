 // function initialization + declaration

function functionname() {
    //code
}

functionname();  // function calling / invoked

// type of function
// 1. without argument and without return type
// 2. with argument and without return type
// 3. without argument and with return type
// 4. with argument and with return type

// 1. without argument and without return type

function greeting() {

    console.log("welcome js");
    document.write("HELLO");
    alert("warning");

}

greeting();

function changetext() {
    document.querySelector('h1').innerHTML = 'hello';
}

changetext();




// 2. with argument and without return type
// syntax:  // function functionname (n1,n2)
            // {
            //     //code
            // }
            // functionname(11 , 23);


function addition(n1,n2) {
    console.log("Addition :",n1+n2);

}

addition(12 , 4);
// alert(addition(12 , 4));   return nathi aetle undefind aave



// 3. without argument and with return type

function substraction()
{
    return 12 - 3;

}

console.log(substraction());



// 4. with argument and with return type

function result(mark)
{
    if(mark > 35)
    {
        return "Pass";
    }
    else
    {
        return "Fail";
    }
}

console.log(result(5));
alert(result(37));  

// parent : loop
// break ;
// continue;

// parent : function
// return

function arithmatic(a1,a2,operator)
{
    switch(operator)
    {
        case "+":
            return a1+a2;

        case "-":
            return a1-a2;

        default:
             return "Please valid choice";    

    }
}

console.log(arithmatic(12 , 7 , "+"));
alert(arithmatic(10 , 8 , "-"));


//Addition only two number
function addition2(b1,b2)
{
   console.log(b1 + b2);

}
addition2(12 , 4);


function addition2(b1,b2)
{
   console.log(b1 + b2);

}
addition2(12);



//Default Parameter

function addition2(b1=0,b2=0)
{
   console.log(b1 + b2);

}
addition2(10);


