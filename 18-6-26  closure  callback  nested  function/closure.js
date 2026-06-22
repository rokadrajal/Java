function main()
{
    var a = 100;
    return function ()
    {
        return a;
    }
}

var result = main();
console.log(result());
