"use strict";

//Practice exercise 6.4
//Setting up an empty array to store values to be calculated
let emArr = [];
//Creating a for loop that runs 10 times
for (let i = 0; i < 10; i++) {
    //Creating the two values
    let val1 = 0,
        val2 = 0;
    //The first one is the loop counter multiplied by 5
    val1 = i * 5;
    //The second value is the loop counter multiplied by itself
    val2 = i * i;
    //Calling the calculation function and storing its value
    let response = add(val1, val2);
    //Pushing the values to the array
    emArr.push(response);
}

//Function to add two values together
function add(v1, v2) {
    return v1 + v2;
}

//Output to the console
console.log(emArr);