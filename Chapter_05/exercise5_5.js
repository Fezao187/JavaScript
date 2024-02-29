"use strict";
//Practice exercise 5.5

let grdArr = [], //Creating grid array avriable
    nCells = 64, //Create and set value for number of cells
    counter = 0, //Counter variable
    row = 0;     //A variable that will be used for the row array

//Creating a loop that will interate up to the number of cells
for(let i = 0; i < nCells + 1; i++)
{
    //If statement to check if counter is divisable by 8
    if(counter % 8 == 0)
    {
        //Check whether row is undefined or not
        if(row != undefined)
        {
            //if it is defined, add row to the main array
            grdArr.push(row);
        }
        //if counter is divisible by 8 thenclear the array
        row = [];
    }
    //Increase the counter by 1
    counter++;
    //Temporary varibale to hold count and push it to row array
    let tempVar = counter;
    row.push(tempVar);
    //Check if counter is equal to the total number of columns
    if(nCells === counter)
    {
        grdArr.push(row[i]);
    }
}
//Output the grid to the console
console.table(grdArr);