document.body.onscroll = function ()
{
    // document.body.style.backgroundColor = "lightpink";
    // document.querySelector('button').style.top = "0px";

    // 1.class thi
    // document.querySelector('button').classList.add('temp');

    // 2.style thi
    document.querySelector('button').style.top = "0px";
    document.querySelector('button').style.height = "50px";
    document.querySelector('button').style.left = "10px";
    document.querySelector('button').style.backgroundColor = "bisque";
    document.querySelector('button').style.border = "none";
    document.querySelector('button').style.borderRadius = "3px";

    document.body.style.transition = "all 1s";
    document.body.style.scrollBehavior = "smooth";



    
}