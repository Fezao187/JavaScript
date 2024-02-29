"use strict";

//Practice exercise 5.7
let pcSpecs = {             
    cpu: "Intel core i5",
    ram: "8GB",
    gpu: "RTX 3050"
}   //Object contains specifications for a laptop

//Using a for in loop to output property names and values
//Outputting property names
for(let spec in pcSpecs)
{
    console.log(spec);
}
//Outputting property values
for(let spec in pcSpecs)
{
    console.log(pcSpecs[spec]);
}

//Creating an array and output the values to the console(using for loop)
let arr = ["CPU", "RAM", "GPU"];
for(let i = 0; i < arr.length; i++)
{
    console.log(arr[i]);
}