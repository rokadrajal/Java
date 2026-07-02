console.log(document.querySelector('input'));

document.querySelector('input').onfocus = function () {
    console.log("focus");
}

// document.querySelector('input').onchange = function (event){
//     console.log(event);
//     document.querySelector('span').innerHTML = event.target.value;  
// }

document.querySelector('form').onsubmit = function (event){
    event.preventDefault();
    document.querySelector('span').innerHTML =  document.querySelector('input').value;
}
