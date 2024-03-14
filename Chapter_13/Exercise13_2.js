"use strict";

//A promise function that resolves with a vlue of start counting
let somePromise = new Promise((resolve, reject) => {
    resolve("Start Counting");
});

//A counter function that gets one value
function counter(val) {
    //Output to the console
    console.log(val);
}

//Setting up the next promise with four then() instances
somePromise.then(val => { counter(val); return "one" })
    .then(val => { counter(val); return "two" })
    .then(val => { counter(val); return "three" })
    .then(val => { counter(val); });