"use strict";

//Practice exercise 8.3
//Creating an array of numbers
let arrNums = [1, 4, 5, 6, 2, 2, 4, 5, 7, 9, 4, 7, 9];

//Using array map in an annonymus function 
let newArr = arrNums.map(function (x){
    //Multiply all numbers in an array by 2
    return x * 2;
});

//Outputting the reault into the console
console.log(newArr);

//Using array map in an arrow function
let newArr2 = arrNums.map((x) => x * 2);

//Output to the console
console.log(newArr2);