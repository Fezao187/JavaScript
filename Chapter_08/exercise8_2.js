"use strict";

//Practice exercise 8.2
//Starting array

let startArr = ["Laurence", "Mike", "Larry", "Kim", "Joanne", "Laurence", "Mike",
    "Laurence", "Mike", "Laurence", "Mike"];

//Assigning arguements within an annonymus function
let anonFunction = (value, index, array) => {
    //Adding a console.log call to return current index and value
    console.log(index, value);
    //Using index of to check for duplicates
    return startArr.indexOf(value) === index;
}

//Using filter method to assign each value of the array
let filteredArr = startArr.filter(anonFunction);

//Outputting the new array into the console
console.log(filteredArr);