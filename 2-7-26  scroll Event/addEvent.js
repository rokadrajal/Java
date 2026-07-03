// document.querySelector('button').onclick = function (){
//     console.log("welcome");
    
// }

// document.querySelector('button').addEventListener('click',function (){
//     console.log("btn");
// })



document.body.onclick = function (){
    window.a = 100;
    console.log("body Event Trigered");
}

document.querySelector('div').onclick = function (){
    console.log("Div Event Trigered");
}

document.querySelector('h1').onclick = function (){
    console.log("H1 Event Trigered");
    console.log(window.a);
    
}






// document.body.addEventListener('click',function (){
//     window.a = 100;
//     console.log("body Event Trigered");
// })

// document.querySelector('div').addEventListener('click',function (){
//     console.log("Div Event Trigered");
// })

// document.querySelector('h1').addEventListener('click',function (){
//     console.log("H1 Event Trigered");
//     console.log(window.a);
    
// })


// document.body.addEventListener('click',function (){
//     window.a = 100;
//     console.log("body Event Trigered");
// },true)

// document.querySelector('div').addEventListener('click',function (){
//     console.log("Div Event Trigered");
// },false)

// document.querySelector('h1').addEventListener('click',function (){
//     console.log("H1 Event Trigered");
//     console.log(window.a);
    
// },false)


// document.body.addEventListener('dblclick',function (){
//     window.a = 100;
//     console.log("body Event Trigered");
// },true)

// document.querySelector('div').addEventListener('dblclick',function (){
//     console.log("Div Event Trigered");
// },false)

// document.querySelector('h1').addEventListener('dblclick',function (){
//     console.log("H1 Event Trigered");
//     console.log(window.a);
    
// },false)

