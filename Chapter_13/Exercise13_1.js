"use strict";

//Creating a function named greet, takes one arguement
function greet(fullName)
{
    //The arguement should be an array
    //output to the console
    console.log("Hi, " + fullName[0], fullName[1] + "!");
}

//A function that takes two args, fullname and callback
function secFunction(fname, callback)
{
    //Split the string into an array
    let fullname = fname.split(" ");
    //invoke the callback function
    callback(fullname);
}

//Send the fullname into the greet function
secFunction("Kristine Wildheart", greet);