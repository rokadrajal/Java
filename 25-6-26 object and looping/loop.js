var user = {
    fname : "ram",
    lname : "patel",
    age : 18,
    gender : "male",
    contactNo : 1234567890,
}
console.log(user);

//basic loop = array , for of = array , for in = array & object
// 1. object loop

for (const key in user) {
   console.log(key,user[key]);
}
console.log(" ");



// 2. computing object : []
var key1 = "fname";
var key2 = "lname";

var value1 = "radhe";
var value2 = "patel";

var obj1 = {  
    key1 : value1,
    key2 : value2,
}
console.log(obj1); // OUTPUT = key1 : radhe , key2 : patel


var obj2 = {
    [key1] : value1,
    [key2] : value2,
}

console.log(obj2); // OUTPUT = fname : radhe , lname : patel
console.log(" ");




// 3 . Nested object

var data = {
    fname : "ram",
    lname : "patel",
    age : 18,
    gender : "male",
    contactNo : 1234567890,

    address : {
        city : "rajkot",
        state : "Gujarat",
        nation : "India",
    }

}

console.log(data);

console.log(data.address);
console.log(data["address"]);

console.log(data.address.city);
console.log(data["address"].city);
console.log(data.address["city"]);
console.log(data["address"]["city"]);




var data1 = {
    fname : "ram",
    lname : "patel",
    age : 18,
    gender : "male",
    contactNo : 1234567890,
}

console.log(data1);

console.log(data1.address); // address is not available aetle undefind
console.log(data1["address"]);
console.log(" ");


// console.log(data1.address.city); // address is not available aetle undefind aetle city is not possiable aetle error
// console.log(data1["address"].city);
// console.log(data1.address["city"]);
// console.log(data1["address"]["city"]);



// 4.optional chaining :   Nested object error solve mate
// syntex : (?.)


console.log(data1?.address?.city); // address is not available aetle undefind pacchi te city pase jayj nay tyathij exit
console.log(data1?.["address"]?.city);
console.log(data1?.address?.["city"]);
console.log(data1?.["address"]?.["city"]);
console.log(" ");



// 5.Array in object

var product = {
    fname : "ram",
    lname : "patel",
    age : 18,
    gender : "male",
    contactNo : 1234567890,
    hobbies : ["design" , "play"],

}
console.log(product);
console.log(product.hobbies);
console.log(product.hobbies[0]);
console.log(" ");



// 6. object in array

var arr = [
    {"id":1 , "fname":"sita" , "weight":40},
    {"id":2 , "fname":"Ram" , "weight":50},
    {"id":3 , "fname":"hanuman" , "weight":60}
]

console.log(arr);
console.log(arr[1]);
console.log(" ");



// 7 . Array De-structuring

var arr = [12 , 7 , 23 , 120 , 67];
console.log(arr);
console.log(arr[2]);

var [,n1,,n2] = arr;
console.log(n1);
console.log(n2);


console.log(" ");


// 8 . Object De-structuring

var list = {
    fname : "ram",
    lname : "patel",
    age : 18,
    gender : "male",
    contactNo : 1234567890,
   
    address : {
        city : "rajkot",
        state : "Gujarat",
    }

}
console.log(list);
console.log(list.address.state);

var { address : {city} , fname : firstname} = list;
console.log(city);
console.log(firstname);
















