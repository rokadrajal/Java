// keybord Event
// 1.onkeydown
// 2.onkeyup
// 3.onkeypress

// // 1.onkeydown
// document.body.onkeydown = function (){
//     console.log("on key down");
// }

// document.body.onkeydown = function (event){
//     console.log(event);
//     console.log(event.key);
// }

// // 2.onkeyup
// document.body.onkeyup = function (){
//     console.log("on key up");
// }

// document.body.onkeypress = function (){
//     console.log("on key press");
// }



var typing = document.querySelector('div').innerHTML;

document.querySelector('div').innerHTML = " ";

for (const i in typing) {

    // console.log(mydata[i]);

    document.querySelector('div').innerHTML += `<span>${typing[i]}</span>`;

}

var index = 0;
var True = 0;
var False = 0;
var space = 0;


document.querySelector('.a').innerHTML = True;
document.querySelector('.b').innerHTML = False;
document.querySelector('.c').innerHTML = space;



document.body.onkeypress = function (event) {

    if(event.key == " ")
    {
        space++;

    }

    else if (event.key == typing[index]) {
        // console.log(event.key,"MACH");

        document.querySelectorAll('span')[index].style.color = "lime";
        True++;
    }
    

    else {
        // console.log(event.key,"NOT MACH");
        document.querySelectorAll('span')[index].style.color = "red";
        False++;
    }
    index++;

    document.querySelector('.a').innerHTML = True;
    document.querySelector('.b').innerHTML = False;
    document.querySelector('.c').innerHTML = space;

}
