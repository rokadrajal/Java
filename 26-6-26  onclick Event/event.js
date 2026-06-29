// function printData()
// {
//     console.log("welcome to js");
// }


document.querySelector('button').onclick = function () {
    console.log("welcome to js");
    console.log("This is second line");
}


document.querySelector('button').onclick = function (){
    // how to chech class list
    console.log(document.querySelector('h1').classList);

    // how to add new class
    // document.querySelector('h1').classList.add("show");

    // how to remove class
    // document.querySelector('h1').classList.remove("show");


    // how to add Toggle : add + remove
    document.querySelector('h1').classList.toggle('show');

}