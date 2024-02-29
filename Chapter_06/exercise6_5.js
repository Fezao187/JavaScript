"use strict";

//Practice exercise 6.5
//Creating a variable value
let varVal = "1000";

//Creating an IIFE to assign a new value
(()=>{
    let varVal = "21";
    console.log(varVal);
})();

//Creating an IIFE and assign it to result variable
let result = (()=>{
    let varVal = "48";
    return varVal;
})();
//Printing the result variable along with the first variable
console.log(result);
console.log(varVal);

//Creating an annonymus function that has a parameter
((varVal)=>{
    console.log(`I love ${varVal}.`);
})("Video games")