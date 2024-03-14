"use strict";

//JS object with JSON formatted data
let jsObj = [{
    "name": "Katlego",
    "lastName": "Maredi"
    },
    {
    "name": "Kristine",
    "lastName": "Wildheart"
    }
];

//Invoke the function
output();

//A function that will loop through each item amd output item in to the console
function output(){
    jsObj.forEach((elem) =>{
        console.log(elem.name, elem.lastName);
    });
}