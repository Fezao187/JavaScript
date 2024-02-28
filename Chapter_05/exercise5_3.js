"use strict"

//Practice exercise 5.3
let myWork = [],
    tempObj = {};

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