"use strict";

//Practice exercise 6.1
//A function that takes two paarameters and adds them
function addNums(var1, var2) {
    return var1 + var2;
}

//setting up two variables to be added
let num1 = 4,
    num2 = 7;

//using the two variables in the fuction
console.log(`${num1} + ${num2} is equal to ${addNums(num1, num2)}`);
//Calling the function again
console.log(`45 + 64 is equal to ${addNums(45, 64)}`);