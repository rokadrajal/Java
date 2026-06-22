// String : It's a Collection of Chars.

// // using Double Quote : 
var fname = "Ram";
console.log(fname,typeof fname);

// // using Single Quote : 
var alpha = 'abcd';
console.log(alpha,typeof alpha);

// // using Backtick :   string formating  multiline string
var lname = `Shah`;
console.log(lname,typeof lname);


var fname = "ram";
var age = 18;

console.log("Your name is ",fname,".","Your age is ",age,".");
console.log('Your name is ',fname,'.','Your age is ',age,'.');


// string formating

console.log(`Your name is ${fname} . Your age is ${age}`);
console.log("Your name is ${fname} . Your age is ${age}"); // wrong
console.log('Your name is ${fname} . Your age is ${age}'); // wrong


// console.log("this  // error
//      is java");

// console.log('this  // error
//      is java');


// multiline string
console.log(`this 
is java`);

console.log(`this 
    is java`);

var str = "radha krishna";
console.log(str);

//1 . length : property
console.log(str.length);

// 2. method
console.log(str.toUpperCase());
console.log(str.toLowerCase());

console.log(str.includes("rk"));

console.log(str.split());
console.log(str.split("")); // latter spaccing
console.log(str.split(" "));// word spaccing

var str2 = "java";
console.log(str2[2]);