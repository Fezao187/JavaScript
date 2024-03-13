"use strict";

//Creating a function with one arguement
function tryCatchSomething(val)
{
    //Using try to check if a vlue is a number
    try
    {
        //If it is not a number, custom value
        if(isNaN(val))
        {
            throw val + " is not a number.";
        }
        else
        {
            console.log("Got a number");
        }
    }
    //Using catch to catch any error
    catch(e)
    {
        console.error(e);
    }
    //Output the value when done
    finally
    {
        console.log(val);
    }
}

//Creating a request to the function
tryCatchSomething(48);
tryCatchSomething("Twenty One");