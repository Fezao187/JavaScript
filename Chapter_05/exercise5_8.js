"use strict";

//Practice exercise 5.8
let output = "",    //A string variable that outputs
    skip = 5;       //A number variable

//A for loop that counts to 10
for(let i = 0; i < 10; i++)
{
    //Condotion to check if value is === skip
    if(i === skip)
    {
        //if true, continue to next value
        continue;
    }
    //Add new count after the last value
    output += i;
}
//Output to console
console.log(output);

//Same thing but with break
let output = "",    //A string variable that outputs
    skip = 5;       //A number variable

//A for loop that counts to 10
for(let i = 0; i < 10; i++)
{
    //Condotion to check if value is === skip
    if(i === skip)
    {
        //if true, break the loop here
        break;
    }
    //Add new count after the last value
    output += i;
}
//Output to console
console.log(output);