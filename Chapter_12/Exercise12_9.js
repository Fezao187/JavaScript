"use strict";

//An object with several items and objects
let jsObj = [{
    "name": "Katlego",
    "lastName": "Maredi"
    },
    {
    "name": "Kristine",
    "lastName": "Wildheart"
    }
];

//Convert to a string
let newStr = JSON.stringify(jsObj),
//Convert back to JSON
newObj = JSON.parse(newStr);

//Iterate through it and output to the console
newObj.forEach(element => {
    console.log(element);
});