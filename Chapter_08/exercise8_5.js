"use strict";

//Pratice exercise 8.5
//Creating astring
let str = "I love JavaScript",

    //Creating a vowel array
    vowelsArr = ["a", "e", "i", "o", "u"];

//Converting to lowercase
str = str.toLowerCase();

//Loop though each element and out put to the console
vowelsArr.forEach(element => {
    //Output to the conosle to see progress
    console.log(element);
    str = str.replaceAll(element, vowelsArr.indexOf(element));
});

//Output the result to the console
console.log(str);