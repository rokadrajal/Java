// 1. without argument and without return type

var greeting =  ()=> {

    console.log("welcome js");
    document.write("HELLO");
    // alert("warning");

}
greeting();


// 2. with argument and without return type

let addition =  (n1,n2)=> {
    console.log("Addition :",n1+n2);
}

let addition2 =  (n1,n2)=>  console.log("Addition :",n1+n2);



addition(12 , 4);
addition2(12 , 4);



// 3. without argument and with return type

const substraction =  ()=>
{
    return 12 - 3;

}

const substraction2 =  ()=> 12 - 3;



console.log(substraction());
console.log(substraction2());


// 4. with argument and with return type

var result = (mark)=>
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


let arithmatic = function (a1,a2,operator)
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