const name = "radha";
const pwd = "r123@gmail.com";

document.querySelector('form').onsubmit = function (even){

    even.preventDefault(); // reloading stop karva

    // console.log(document.querySelectorAll('input')[0].value);
    // console.log(document.querySelectorAll('input')[1].value);

    if(document.querySelectorAll('input')[0].value == name)
    {
        if(document.querySelectorAll('input')[1].value == pwd)
        {
            console.log("Login Successfully !"); 
            
            location.href = "deshbord.html";
        }
        else
        {
            console.log("Password is not valid!");  
        }
    }
    else
    {
        console.log("User Doesn't Exist");  
    }
     

}