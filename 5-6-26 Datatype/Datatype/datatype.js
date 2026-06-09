console.log("Data Type");

// typeof Operator : check type of Data  
    //  syntax : 1. typeof(data)    2. typeof data

// 1 . Number : int , float
console.log(12);
console.log(typeof(12));
console.log(typeof 12);

console.log(12.5);
console.log(typeof 12.5);


// 2 . string : char , string
console.log('R');
console.log(typeof 'R');

console.log("ram");
console.log(typeof "ram");


// 3 . Boolean : true , false
console.log(true);
console.log(typeof true);

console.log(false);
console.log(typeof false);


// 4 . object : Array , object , null
console.log([10 , 20 ,30]);
console.log(typeof [10 , 20 , 30]);

console.log({"fname" : "RAM"});
console.log(typeof {"fname" : "RAM"});

console.log(null);
console.log(typeof null);

// Array
// console.log(Array.isArray([10 , 20 ,30]));
// console.log(Array.isArray({"fname" : "RAM"}));


// 5 . Undefind : undefind
console.log(undefined);
console.log(typeof undefined);

// 6 . BigInt : number >
console.log(1234567890123456789);
console.log(typeof 1234567890123456789n);


// 7 . function
console.log(typeof console.log);