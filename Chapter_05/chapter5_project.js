"use strict";

//Chapter project: Math multiplication table
let mTable = [],    //Empty array for the table
    nVars = 10;      //The variable stores how many values to multiply with one another

//A loop to iterate through each row
for(let r = 0; r < nVars + 1; r++)
{
    let tempArr = [];   //Temporary array to store row values
    for(let c = 0; c < nVars + 1; c++)
    {
        //Push the multiplied rows and columns
        tempArr.push(r*c);
    }
    //pushing the temp array to the main array
    mTable.push(tempArr);
}
//Output the array to the console
console.table(mTable);