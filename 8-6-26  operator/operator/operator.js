// ======= 1 . Arithmetic operators  ========

console.log("1 . Arithmetic operators : +  -  *  /  %  ++  --");
console.log(10 + 23);
console.log(10 - 23);
console.log(10 * 23);
console.log(10 / 23);
console.log(10 % 23); // reminder


// ======== 2 . Assignment operators  ========

console.log("2 . Assignment operators : +=  -=  *=  /=  %=  =");
var a = 10;
a += 18;
console.log(a);

let b = 12;
b -= 18;
console.log(b);

var c = 20;
c *= 10;
console.log(c);

var d = 26;
d /= 10;
console.log(d);

var e = 34;
e %= 10;
console.log(e);



//  ======== 3 . Comparison operators  ========

console.log("3 . Comparison operators : ==  !=  <  >  <=  >=  ===  !==");
var a1 = 12;
var b1 = 23;

console.log(a1 == b1); // datatype no chack kare value chack kare
console.log(a1 != b1);
console.log(a1 < b1);
console.log(a1 > b1);
console.log(a1 <= b1);
console.log(a1 >= b1);

var c1 = 10;
var d1 = "10";

console.log(c1,typeof c1);
console.log(d1,typeof d1);

console.log(c1 === d1); // pela datatype chack kare jo sachu hoy toj pachhi value chack kare
console.log(c1 !== d1);



// ======== 4 . Logical operators =======

console.log("4 . Logical operators : &&  ||  !");

// AND (&&) : return true/1 if Both Operation are true else return false/0 
// OR (||) : return false/0 if Both Operation are false else return true/1 
// NOT (!) : return true if Operation false else return false

console.log(12 < 18  &&  12 != 14);
console.log(12 > 18  ||  12 != 14);
console.log(12  ||  12); // last 12 print thay
console.log(!(12 > 15));



//truthy value :
// true , 1 , numbers , "sd" ,[] ,{}


//falsy value : 
// false , 0 , "" , null, undefined

console.log(Boolean({})); // aanathi chack karay truthy 6e ke falsy 6e aem



// conversion with console.log and innerHTML

console.log(10, typeof(10));
console.log(String(10), typeof String(10));

document.querySelector('h1').innerHTML = String(10);
document.querySelector('h1').innerHTML = 100;








