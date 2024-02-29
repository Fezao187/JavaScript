"use strict";

//Set timeout order
//An arrow function with values 1 - 2
let val1 = () => console.log("one"),
    val2 = () => console.log("two"),
    //Third function with value 3 and invokes the first 2
    val3 = () => {
        console.log("three")
        val1();
        val2();
    },
    //Fourth function that outputs value 4 to the console
    val4 = () => {
        console.log("four");
        //Using the timeout value to invoke the first function first
        setTimeout(val1, 0);
        //Invoke the third function
        val3();
    };

//Output to the console
val4();