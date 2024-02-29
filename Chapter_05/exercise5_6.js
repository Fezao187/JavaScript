"use strict";
//Practice exercise 5.6

let emArray = [],      //Creating an empty array
    counter = 0;       //Count the number of times the loop ran

//Using a while loop to add values to the array
//While the value is less than 10, it will ad values to the array
while(counter < 10)
{
    //Increment each time
    counter++;
    //Push incrementing value to the array
    emArray.push(counter);
}
//Output the array to the console
console.log(emArray);

//Using a for loop to iterate through the array
for(let i = 0; i < emArray.length; i++)
{
    //Output to the console
    console.log(emArray[i]);
}

//Using for loop to output the value to the console
for(let val of emArray)
{
    console.log(val);
}