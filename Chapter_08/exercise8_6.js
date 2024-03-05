"use strict";

//Practice exercise 8.6
//Outputting PI to the console
console.log("PI = " + Math.PI);

//Getting the value of 5.7 in different ways and output to the console
//Math.ceil
console.log("Math.ceil = " + Math.ceil(5.7));

//Math.floor
console.log("Math.floor = " + Math.floor(5.7));

//Math.round
console.log("Math.round = " + Math.round(5.7));

//Output a random value to the console
console.log("Random value = " + Math.random());

//Using math.floor to get a random value:
//Between 0 and 10
console.log(Math.floor(Math.random()* 10));

//Between 1 and 10
console.log(Math.floor(Math.random()* 10) + 1);

//Between 1 and 100
console.log(Math.floor(Math.random()* 100) + 1);

//A function that generates a random number in a range
function ranNum(min, max)
{
    //Runs the function 100 times
    for(let i = 1; i < 101; i++)
    {
        console.log(`${i} ${Math.floor(Math.random()* max) + min}`);
    }
}

//Calling the function
ranNum(1,100);