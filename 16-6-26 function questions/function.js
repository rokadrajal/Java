//  a) Without Argument & Without Return Type

// Q1. Write a named function to print "Hello World".

function printData()
{
    console.log("Hello World");
}
printData();
console.log("\n");



// Q2. Write a named function to display numbers 1 to 5.

function display()
{
    for(let i=1; i<=5; i++)
    {
        console.log(i);
    }
}

display();
console.log("\n");



// b) With Argument & Without Return Type

// Q3. Write a named function that prints a given name.

function printName(name)
{
    console.log(name);

}
printName("Radhe");
console.log("\n");



// Q4. Write a named function that prints the multiplication table of a given number.


function table1(num)
{
    for (let i = 1; i <=10; i++) {
        console.log(num,"*",i,"=",num*i);
    }
}
table1(10);
console.log("\n");


function table2(num)
{
    for (let i = 1; i <=10; i++) {
        console.log(`${num} * ${i} = ${num*i}`); 
    }
}
table2(20);
console.log("\n");




// c) Without Argument & With Return Type

// Q5. Write a named function that returns today's date.

function date()
{
    return Date();
}
console.log(date());
console.log("\n");


// Q6. Write a named function that returns a random number between 1 and 100.

function randomNumber()
{
    return Math.floor(Math.random()*100)+1;

}
console.log(randomNumber());
console.log("\n");




// d) With Argument & With Return Type

// Q7. Write a named function that returns the sum of two numbers.

function sum(n1,n2)
{
    return n1 + n2;

}
console.log("Sum is :",sum(12 , 4));
console.log("\n");



// Q8. Write a named function that returns the square of a given number.

function square(s1)
{
    return s1*s1;

}
console.log(square(10));
console.log("\n");



// Q9. Write a named function that returns the factorial of a number.

function factorial(number)
{
    var fact = 1;

    while(number > 1)
    {
        fact *= number;   // fact = 1*5 = 5 
                          //  5   = 5*4 = 20
        number--;                  

    }
    return fact;
    
   
}
console.log(factorial(5));
console.log("\n");



// Q10. Write a named function that checks whether a string is a palindrome and returns true or false.


function palindrome(str)
{
    var revstr = "";
    for (let i = str.length-1; i >=0; i--) {
       revstr += str[i];
    }

    if(revstr == str)
    {
        return true;
    }
    else
    {
        return false;
    }

}
console.log(palindrome("java"));
console.log(palindrome("madam"));
console.log("\n");

