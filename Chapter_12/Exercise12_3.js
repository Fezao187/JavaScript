"use strict";

//A function without parameters
function loopArgs() {
    //A variable with a blamk value
    let lastOne = "";
    //Creating a loop to iterate through the argumenst
    for (let i = 0; i < arguments.length; i++) {
        //As we loop through the array, set the value to in
        lastOne = arguments[i];
    }
    //Returning last one value
    return lastOne;
}

//Output to the console
console.log(loopArgs("Value1", "TWO", "Three", "Four", "Five", "Six", "Oi", "Something"));