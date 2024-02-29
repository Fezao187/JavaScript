"use strict";

//Practice exercise 6.6
//A function that checks id the value in it is 0
function chekNum(num)
{
    if(num === 0)
    {
        //if the value is equal to zero
        //Return 1
        return 1;
    }
    else
    {
        //Otherwise, return the arg mulplied by the function result
        return num * chekNum(--num);
    }
}

//Invoking a printing the result
console.log(chekNum(7));