// What is an object ?
//It's a collaction of properties and methods.
// property = key + value


// How to create an object:
// 1. Using Object Literal : {}
var user = {}
console.log(user);


// 2 . using object class :
var user = new Object();
console.log(user);  


// 3. Using Object.create() Method : 
var user = Object.create({});
console.log(user);  


// 4. Using Object.assign() Method : 
var user = Object.assign({});
console.log(user); 


// 5. Using Function ()  



var user = {
   // key : value = property
    fname : "Ram",
    lname : "raghukul",
    age : 18,
    gender : "male",
    biodata : function(){ // method
        console.log("bio data is method");
        console.log(`my name is ${this.fname} my age is ${this.age}`)
    }
}
user.biodata();




// 1. How to Access Object
console.log(user);

// 2. How to Access Object Property Value 

// i . using Dot Notation
console.log(user.fname);

// ii . using Bracket Notation []
console.log(user["fname"]);
console.log(user['age']);
console.log(user[`gender`]);


// 3. How to Modify Object Property Value 

// i . using Dot Notation
user.fname = "sita";

// ii . using Bracket Notation []
user["gender"] = "Female";

console.log(user);


// 4. How to Add Object Property 

// i . using Dot Notation
user.contact = 1234567890;

// ii . using Bracket Notation []
user["weight"] = 40;

console.log(user);


// 5. How to remove Object Property  

// i . using Dot Notation
delete user.age;

// ii . using Bracket Notation []
delete user.gender;

console.log(user);


// 6 . How to user metod
user.biodata();










