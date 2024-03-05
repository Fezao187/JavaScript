"use strict";

//Word scrambler
//A string that will hold the word
let strWord = "Kristine";

//Function that takes a parameter of the string value
function wordFunction(strVal)
{
    //Getting the length of the array
    let lengthOfWord = strVal.length;

    //Creating an empty string to hold the new word
    let tempStr = "";

    //A loop that will iterate the number of letters is reached
    for(let i = 0; i < lengthOfWord; i++)
    {
        //A variable that will randomly select on letter
        let randVal = Math.floor(Math.random()*strVal.length);

        //Adding new letter to the string
        tempStr += strVal[randVal];

        //Updating the original string by selecting substring
        strVal = strVal.substr(0, randVal) + strVal.substr(randVal + 1);

        //A countdown as we loop through each word
        console.log(strVal.length);
        //Showing the remaining letters of the original string
        console.log(strVal);
    }

    //Returning the new string
    return tempStr;
}

//Calling the function and output to the console
console.log(wordFunction(strWord));