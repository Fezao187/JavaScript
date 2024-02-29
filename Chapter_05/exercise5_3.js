"use strict";

//Practice exercise 5.3
let myWork = [], //Empty array that will store myWork
    tempObj = {};//Empty object that will store lesson number and status

//The loop will create values in the object
//And put them into the array
for(let i = 1; i < 10; i++)
{
        let blnVal = i % 2 ? true : false;
        tempObj = {
        name: `Lesson ${i}`, 
        status: blnVal
    }
    myWork.push(tempObj);
}
console.log(myWork);