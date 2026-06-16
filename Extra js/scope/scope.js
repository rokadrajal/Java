// Type of Scope : 
// 1. Global Scope 
// 2. Local Scope
    // i. function scope
    // ii. Lexical Scope   //remaining


// global = var;
// Local = let , const    

var a = 10;
console.log("Before a :",a);

if(1)
{
    var a = 200; // global ganay
    console.log("inside a :",a);

}
console.log("After a :",a);



var b = 10;
console.log("Before b :",b);

if(1)
{
    let b = 100; // global ganay
    console.log("inside b :",b);

}
console.log("After b :",b);



// for(var i=0; i<5; i++)
// {
//     console.log(i);
// }
// console.log("value of i :",i);



for(let i=0; i<5; i++)
{
    console.log(i);
}
console.log("value of ii :",i);

// let a4 = 10 and let a4 = 100   =>  run thy
// let a4 = 10 and var a4 = 100   =>  error aave

// let a4 = 12;

// console.log("Before : ",a4);
// if(1){
//     var a4 = 200;   // var gloal 6e aetle te game tya access kari sakay js ne aem lage 6e ke let a4 = 12; and var a4 = 200 6e aetle error aape 6e
//     let c = 3;
//     console.log("Inner If : ",a4);
// }
// console.log("After :",a4);


// Local scope
// 1. function scope

function greeting()
{
    var r = 12;
    console.log(r);
}
greeting();
    // console.log(r);






