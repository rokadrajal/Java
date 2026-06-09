console.log("what is variables understanding data types declaring and initialization variables");

// declaration
// in c language
// intger  int a;
// char    char b;

// in c++ 
// intger int a;
// string string b;

// in JS
// var , let , char


var a = 10;
console.log(a);
console.log(typeof a);

var a1 = 'Ram';
console.log(a1);
console.log(typeof a1);


let b = 20;
console.log(b);
console.log(typeof b);

let b1 = "sita";
console.log(b1);
console.log(typeof b1);


const c = 30;
console.log(c);
console.log(typeof c);

let c1 = "hanuman";
console.log(c1);
console.log(typeof c1);



// 1 . var
// var v;             // we can declare without initialization
var v = 10;
console.log(v);
v = 100;              // we can modify after initialization
var v = 1000;         // Re-declaration allowed
console.log(v);        



// 2 . let
// let d;             // we can declare without initialization
let d = 20;
console.log(d);
d = 200;              // we can modify after initialization
let d = 2000;         // Re-declaration not allowed
console.log(d);


// 3 . const
// const co;          // we cann't declare without initialization
const co = 30;
console.log(co);
// co = 300;          // we cann't modify after initialization
const co = 3000;      // Re-declaration not allowed
console.log(co);

