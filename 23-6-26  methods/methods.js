var arr = [11 , 45 , 8 , 24 , 56 , 21 , 8 , 7];
console.log(arr);

// length : property
// return element number of element
console.log(" length : ");
console.log(arr.length);
console.log(" ");

// indexOf :

console.log(" indexOf : ");
console.log(arr.indexOf(24));
console.log(arr.indexOf(8));
console.log(" ");


// LastindexOf :

console.log("lastindexOf : ");
console.log(arr.lastIndexOf(8));
console.log(arr.lastIndexOf(21));

console.log(" ");


// include :
// return true/false

console.log("include : ");
console.log(arr.includes(8));
console.log(" ");



// forEach :
// not return

console.log("forEach : ");
arr.forEach((element)=>{
    console.log(element);
});

var num = arr.forEach((element)=>{
    return element;
});
console.log(num);


console.log(" ");



// map :
// return is defind
// modify thay
// condition is not allow

console.log("map : ");
var num2 = arr.map((element)=>{
   return element*2; // modify
})
console.log(num2);

var num2 = arr.map((element)=>{   // arrow function
   return element>10;
})
console.log(num2);

var num2 = arr.map(function (element){  // expression function
   return element>50;
})
console.log(num2);

console.log(" ");




// filter :
// return is defind
// not modify 
// condition is allow

console.log("filter : ");

var num3 = arr.filter((element)=>{
   return element*2; // modify
})
console.log(num3);

var num3 = arr.filter((element)=>{  // arrow function
   return element>30;
})
console.log(num3);



var num3 = arr.filter(function (element){  // expression function
   return element>10;
})
console.log(num3);

console.log(" ");


// every : true/false
// && operator jevu
 
var num4 = arr.every((element)=>{  // arrow function
    return element<100;
});
console.log(num4);

var num4 = arr.every(function (element){  // expression function
    return element>100;
});
console.log(num4);

console.log(" ");




// some :
// || operator jevu

var num5 = arr.some((element)=>{   // arrow function
    console.log(element);
    return element>50;
})
console.log(num5);

var num5 = arr.some(function (element){  // expression function
    console.log(element);
    return element<50;
})
console.log(num5);



// sort :

var arr2 = [12 , 7 , 21 , 8 , 12 , 6];

var num6 = arr2.sort((a , b)=>{   // arrow function
    return a - b; // ascending olrder
});
console.log(num6);

var num6 = arr2.sort(function (a , b){  // expression function
    return b - a; // descending olrder
});
console.log(num6);












