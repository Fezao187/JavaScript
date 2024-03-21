/*Synchronous programming is a way for computers
to do tasks one step at a in the order they are 
given. */

//An example of synchronous code:
// Define three functions
function firstTask() {
    console.log("Task 1");
}

function secondTask() {
    console.log("Task 2");
}

function thirdTask() {
    console.log("Task 3");
}

// Execute the functions
firstTask();
secondTask();
thirdTask();

//Synchronous programming can be problematic in certain situations
//especially when dealing with tasks that takes a signifanct amount of time
//to complete.

//Example
function someLongRunningFunction() {
    let start = Date.now();
    while (Date.now() - start < 5000) {
        // do nothing
    }
    return "Hello";
}

console.log('Starting...');

let result = someLongRunningFunction();
console.log(result);

console.log('...Finishing');

/* Asynchronous programming is a way for a computer program
to handle multiple tasks simultaneously, rather than executing
one at a time. It allows a program to continue working on other tasks 
while working on other tasks */

//Example
console.log("Start of script");

setTimeout(function () {
    console.log("First timeout completed");
}, 2000);

console.log("End of script");

/*A Callback function is a function that is passed as an argument to 
another fucntion and it is executed after the first function has finished 
running*/

// Declare function
function fetchData(callback) {
    setTimeout(() => {
        const data = { name: "John", age: 30 };
        callback(data);
    }, 3000);
}

// Execute function with a callback
fetchData(function (data) {
    console.log(data);
});

console.log("Data is being fetched...");

/*Call back hell, callbacks provide a useful way to handle
async operations. But, many callbacks are nested and that will 
make the code complex and hard to read.*/

//This happens when you chain multiple callbacks together, one after
//the other, creating a pyramid-like structure

//Example:
// getData(function (a) {
//     getMoreData(a, function (b) {
//         getEvenMoreData(b, function (c) {
//             getEvenEvenMoreData(c, function (d) {
//                 getFinalData(d, function (finalData) {
//                     console.log(finalData);
//                 });
//             });
//         });
//     });
// });

//To avaoid callback hell, you can use a more mordern way of
//handling anync operations, known as promises.

/* A promise is a way of handling ansync operations in a more organised way.
It works like a callback but offers many additional capabilities and a more 
readable syntax. A promise is a placeholder for a future value or action.*/

//Example of a promise
// Initialize a promise
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello from the promise!");
    }, 2000);
});
console.log(myPromise);

//How to consume a promise
//Obtain a reference to the promise
myPromise
    //Attach callbacks to the promise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });

//Wait for the promise to be fullfilled or rejected 

myPromise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    })

    //Finally method will be called after the promise is settled. This means that finally will be called invoked
    //whether the the promise is rejected or resolved
    .finally(() => {
        //code here will be executed regardless of the status
        //of a promise (fulfilled or rejected)
    });

//How to chain promises
/*Promise chaining is a patten that allows for a clear and easy to understand approach to handle async operations.
It involves connecting multiple promises in a sequence, where the output of one promise is passed as input to the next
promise. */

//Example
fetch('https://example.com/data')
    .then(response => response.json())
    .then(data => processData(data))
    .then(processedData => {
        // do something with the processed data
    })
    .catch(error => console.log(error))

//Error handling
/**When a promise is rejected, it will trigger the catch method, which handles errors. The catch method takes a single argument,
 * which the error is thrown.
 * You can also handle errors by using a try-catch block inside a then method.
 */

//Example
//Makes a request to the github api to fetc user data
fetch("https://api.github.com/users/octocat")
    .then((response) => response.json())
    .then((data) => {
        //Try-catch is used inside the second then method
        //To handle any errors that might occur
        try {
            //processing received data
            console.log(data);
        } catch (error) {
            //The inner catch will only catch erros that occure during processing
            console.log(error);
        }
    })
    //The outer catch will only catch erros that occure during request
    .catch((error) => console.log(error));

//Promise.all method
/**It takes an array of promises as an input and returns a single promise that is fulfilled when
 * all input promises have been fulfilled.
 * It can be used when you wait for multiple promises to be resolved before taking action
 */

//Example, when you want to fetch data from multiple URLs
let promise1 = fetch('https://jsonplaceholder.typicode.com/posts/1');
let promise2 = fetch('https://jsonplaceholder.typicode.com/posts/2');
let promise3 = fetch('https://jsonplaceholder.typicode.com/posts/3');

//Using promise.all method to wait for all the promises to be resolved before taking action
//Take an array of promises
Promise.all([promise1, promise2, promise3])
    //Then method is called on returned promise to log the resolved values
    .then((values) => {
        console.log(values);
    })

//How to use fetch api with promises
//Example of fetch api
//Fecth is used to make a request to the server
fetch('https://some-api.com/data')
    //Then consume the promise and extract json data from response
    .then(response => response.json())
    //Then log the extracted data to the console
    .then(data => {
        console.log(data);
    })
    //If any errors, they will be caught in the catch method
    .catch(error => {
        console.error('Error:', error);
    });

//Async and await
/**It allows you to write async code in a more synchronous readable
 * way.
 * async is used to declare functions and as asynchronous
 * await is used inside th async function to pause the execution until promise is resolved
 */
//Example
//getData is declared as an sync function
async function getData() {
    //Inside the async function, use await to wait for fetch to comple
    //and retrieve some data from the API
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    //Once the data is retrieved, use await to wait and parse the data to JSON
    const data = await response.json();
    //Then log data to con
    console.log(data);
}

getData();