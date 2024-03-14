"use strict";

//A global variable for counter
let counter = 0;

//A function that takes one arguement
function newFunction(val)
{
    //Return new promise
    return new Promise(resolve =>{
        //Setting a timeout function
        setTimeout(() => {
            //Increment the counter by adding one every second
            counter++;
            //Resolve function with value of the counter and variable
            resolve("x: " + val + ", counter:" + counter);
        }, 1000);
    });
}

//An asynchronous function that outputs to the console
async function sFunction(val)
{
    console.log("Ready: " + val + ", Counter: " + counter);
    //A variable to capture the resolved value from the await
    let resVal = await newFunction(val);
    //Output to the console
    console.log(resVal);
}

//A loop to iterate 10 times
for(let i = 1; i < 11; i++)
{
    sFunction(i);
}