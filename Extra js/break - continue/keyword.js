// break key word
let array = [1 , 2, 3 , 4 , 5];

for (let index = 0; index < array.length; index++) {
    if(index == 1){
        break;
    }
    console.log(index);
}


for(let i=0; i<3; i++)
{
    for(let j=0; j<3; j++)
    {
        if(j == 1)
        {
            break;
        }
        console.log(i,j);
    }

}

for(let i=0; i<3; i++)
{
    for(let j=0; j<3; j++)
    {
        if(j == 1)
        {
            continue;
        }
        console.log(i,j);
    }

}