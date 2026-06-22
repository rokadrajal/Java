function inner() {
    console.log("inner function");
}

function outer(inner) {
    console.log("outer function");
    inner();
}
outer(inner);



function main(print)
{
    print("Enter the number :");
    console.log("hello");

}
main(prompt); // perameter and argument nu name diffrent rakhi saki 6i