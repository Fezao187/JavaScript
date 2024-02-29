"use strict";

//Practice exercise 6.2
//An array of descriptive words
let words = ["Ugly", "Cute", "Charming", "Sweet", "Sour", "Loud", "Quiet"];
//A function that prompts user for name
function getName() {
    return prompt("What is your Name?");
}
//Selecting a random value from the array
let randVal = Math.floor(Math.random(words) * words.length);
//Invoking the function and out put to the console
let yourName = getName();
console.log(`${yourName}, you are ${words[randVal]}`);