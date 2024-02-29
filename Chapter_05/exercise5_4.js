"use strict";

//Practice exercise 5.4
let myTable = [],   //The array to hold the table data
    rows = 10,      //Number of rows
    cols = 10,      //Number of columns
    counter = 0;    //Variable to count the values of cells within the table

//Creating a loop wirh conditions to set the iteration
for(let r = 0; r < rows; r++)
{
    //Creating a temporary array
    let tempTable = [];
    //Second for loop for the columns
    for(let c = 0; c < cols; c++)
    {
        counter++;  //Count how may cells are created
        //Pushing the counter values to the temporary table
        tempTable.push(counter);
    }
    //Pushing the temp array to main table
    myTable.push(tempTable);
}
//Output to the console
console.table(myTable);