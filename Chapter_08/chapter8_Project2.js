"use strict";

//Countdown timer
//Creating an end date
let endDate = "December 9 2024";

//Creating a count down function
function countDown(){
    let theDate = Date.parse(endDate) - new Date(),
    //Getting the day
        day = Math.floor(theDate / (1000 * 60 * 60 * 24)),
        //Getting the hours
        hours = Math.floor((theDate / (1000 * 60 * 60)) % 24),
        //Getting the minutes
        minutes = Math.floor((theDate / 1000 / 60) % 60),
        //Getting the seconds
        seconds = Math.floor((theDate / 1000) % 60);

        //Returning all the objects
        return {day, hours, minutes, seconds};
}

//Creating a function to update every 1 000ms
function update() {
    //Temp variable to hold count down
    let tempVar = countDown();

    //Empty variable to create output values
    let outputVals = "";

    //Using a for in loop to get all the properties and 
    //values in the tepm variable
    for (let property in tempVar) {
        //Updating the output to contain property anem and property value
        outputVals += (`${property}: ${tempVar[property]}`);
    }

    //Printing to the console
    console.log(outputVals);
    //Setting timeput to 1000ms
    setTimeout(update, 1000);
}

//Calling the function
update();