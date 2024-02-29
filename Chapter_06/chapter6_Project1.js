"use strict";

//Creating a recursive function
function funcCount(arg1)
{
    //Output the current value
    console.log(arg1);
    //While the value is less than 10, it will keep counting unti false
    if(arg1 < 10)
    {
        return funcCount(arg1 + 1);
    }
}

//Invoke the function
funcCount(1);