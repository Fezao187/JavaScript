"use strict";

//Practice exercise 6.3
//Setting variables to hold two numbers and operator(+,-)
//Getting them from the user
let num1 = parseInt(prompt("Enter the first value")), //first Number value
    opVal = prompt("Enter the operator (+,-,*,/"),  //Operator value
    num2 = parseInt(prompt("Enter the second value"));   //Second num value

//Function to calculate the two avlues accordingly
function calc()
{
    if(opVal === "+")
    {
        //If the operator is +, add the values
        return num1 + num2;
    }
    else if(opVal === "-")
    {
        //If the operator is -, subtract the values
        return num1 - num2;
    }
    else if(opVal === "*")
    {
        //If the operator is *, multiply the values
        return num1 * num2;
    }
    else if(opVal === "/")
    {
        //If the operator is /, multiply the values
        return num1 / num2;
    }
    else
    {
        //If they enter a operator that is neither, default to add 
        return num1 + num2;
    }
}

//Output the value
alert(`${num1} ${opVal} ${num2} = ${calc()}`)