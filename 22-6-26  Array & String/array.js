// Array : Array is collection of element which same datatype / different datatype
// index : start 0
// syntax : []

var arr = [];
console.log(arr);

var arr = [10 , 11 , 12];
console.log(arr);

var arr = ["sita","ram"];
console.log(arr);

var arr = [10 , 20 ,"sita","ram",true , undefined , null];
console.log(arr);

var arr = [10 , 11 , 12 , 15 , 18];
console.log(arr.length);
console.log(arr[2]);


// 1 . push
// add a new element in last index
// return : new length

arr.push(100);
console.log(arr);

var data = arr.push(200);
console.log(data);  


// 2 . pop
// remove element in last index
// return : remove element

arr.pop();
console.log(arr);

var data2 = arr.pop();
console.log(data2);



// 3 . unshift
// add a new Element  : 0 index
// return : new length

arr.unshift(100,true);
console.log(arr);




// 4. shift
// remove element in 0 index
// return : remove element

arr.shift();
console.log(arr);


// 5 . splice
// arr.splice(0); // array empty thay jay
// console.log(arr);

arr.splice(0,2); // 0-index , 2 number of element
console.log(arr);

