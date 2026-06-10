// Ternary Operator
// syntax = (condition) ? prt1 : prt2 ;

//number +ve -ve
var num = 5;
(num>0)? console.log("positive") : console.log("nagetive");

// age and product
var age = 9;
var product = (age > 10) ? "tea" : "milk";
console.log(product);



// FUNCTION / METHOD 

// 1 . prompt
// - user input
// - default return type : string

var fname = prompt("Enter your name :");
console.log(fname, typeof fname);

var age = Number(prompt("Enter your age :")); // aavi rite teno real type lavi saki
console.log(age, typeof age);


//2 . confirm
// - choice
// - return boolean true /false

var yourresponse = confirm("are you sure ?");
console.log(yourresponse);


//3 . alert
alert("dangeras");