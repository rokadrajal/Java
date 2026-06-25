// how to used Dot (.) notation and Bracket ([]) notation 
// property koy varible ma store thay tyare  [] notation thij access kari shaki 6i (.) notation thi nay
// property ma space and spical character hoy to [] notation thij access kari saki 6i (.) notation thi nay

var user = {
   // key : value = property
    fname : "Ram",
    lname : "raghukul",
    age : 18,
    gender : "male",

    "birth date" : "12-7-2000",
    "123number":12,
    "product-name" : "range rover",

    biodata : function(){ // method
        console.log("bio data is method");
        console.log(`my name is ${this.fname} my age is ${this.age}`)
    }
}
user.biodata();

var name = "fname"; // property store in variable 

console.log(user.name);
console.log(user[name]);

// console.log(user.birth date);
console.log(user["birth date"]); // space

console.log(user["123number"]); // start number

console.log(user["product-name"]); // (-) hyphen
