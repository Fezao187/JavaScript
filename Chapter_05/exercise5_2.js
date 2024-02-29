"use strict";

//Practice exercise 5.2
let counter = 0,    //Setting the counter to start at 0
    step = 2;   //The step variable to increase counter by

//A do while loop that increments the counter by step
//While the number is greater or equal to 100, increment until the value is greater or equal to 100 
do
{
    counter += step;
    console.log(counter);
}while(!(counter >= 100));