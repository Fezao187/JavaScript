"use strict";

//Pratice exercise 8.4
//A string with diferent letters and cases
let str = "thIs will be capiTalized for each word";

//A function that gets string as arguement
function strFunction(strValue) {
    //Transforming everything to lower case values
    strValue = strValue.toLowerCase();
    
    //Empty array to hold the values of words when we capitalize them
    let newArr = [];

    //converting phrase into an array of words using split
    let arrStr = str.split(" ");

    //Using a foreach loop to loop through each word in the array
    arrStr.forEach(value => {
        //Using slice to covert first letter to capital
        let firstCapital = value.slice(0,1).toUpperCase() + value.slice(1);
        
        //Pushing the capitalized word into the new array
        newArr.push(firstCapital);
    });

    //Transforming the array to words
    let newStr = newArr.join(" ");

    //Returning the new string
    return newStr;
}

//Outputting to the console
console.log(strFunction(str));