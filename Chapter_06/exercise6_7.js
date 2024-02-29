"use strict";

//Practice exercise 6.7
//Creating the starting variable
let startVar = 10;

//A function that takes one argument
function countDown(num) {
    //Current value is output to the console
    console.log(num);
    //Check if the value is less than 1 and output it into the console
    if (num < 1) {
        //if it is, return the function
        return;
    }
    else if (!(num < 1)) {
        //if the number is not less than 1, call the function
        countDown(--num);
    }
}
countDown(startVar);

//Creating a second count down
function countDown2(num) {
    if (num > 0) {
        //If it is greater than 0, decrease the value by 1
        num--;
        return countDown2(num);
    }
}
countDown2(startVar);