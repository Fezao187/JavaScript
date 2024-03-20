"use strict";

/* Window session (wondow.sessionStorage) object stores only one session of an opened
    tab, it persists only on one tab. It won't be erased when you reload
    the page, it will on be deleted when tab is closed */

/* The local storage object (wondow.localStorage), stores data that persists when users close 
their browser tab or window. 

It can only be deleted if: 
    1. When cleared throught JavaScript.
    2. When broswer cache is cleared.*/

/*Session and local storage are accessed by using the same technique
for accessing JS objects or using web built in storagaes*/

sessionStorage.bestColor = "Green";
sessionStorage["bestColor"] = "Green";
sessionStorage.setItem("bestColor", "Green");

/*In the code snippet above, all the statements do the same thing, 
they set bestcolors value to green */

/*  Web storages built in interfaces:
    setItem()
    key()
    getItem()
    length
    removeItem()
    clear()
*/

//setItem method.
//It stores its key and value arguements inside the specified web storage object
//Syntax
webStorageObject.setItem(key, value);

//Example 1: How to store data in the session storage object
// Store color: "Pink" inside the browser's session storage object:
//Invoke session storage
sessionStorage.setItem("color", "Pink");

// Log the session storage object to the console:
console.log(sessionStorage);

// The invocation above will return:
// {color: "Pink"}

//Example 2: How to store data in the local storage object
//Invoke the local storage's setItem method
// Store color: "Pink" inside the browser's local storage object:
localStorage.setItem("color", "Pink");

// Log the local storage object to the console:
console.log(localStorage);

// The invocation above will return:
// {color: "Pink"}

// Example 3: Browsers use "[object Object]" for non-serialized objects in the web storage
// Store myBio object inside the browser's session storage object:
sessionStorage.setItem("myBio", { name: "Oluwatobi" });

// Log the session storage object to the console:
console.log(sessionStorage);

// The invocation above will return:
// {myBio: "[object Object]", length: 1}

//Example 4: How to store serialized objects in the web storage
// Store myBio object inside the browser's session storage object:
sessionStorage.setItem("myBio", JSON.stringify({ name: "Oluwatobi" }));

// Log the session storage object to the console:
console.log(sessionStorage);

// The invocation above will return:
// {myBio: '{"name":"Oluwatobi"}', length: 1}

//Key method
//The key() method retrieves a specified web storage item’s name (key).
//syntax
webStorageObject.key(index);

//Example 1: How to get the name of an item in the session storage object
// Store carColor: "Pink" inside the browser's session storage object:
sessionStorage.setItem("carColor", "Pink");

// Store pcColor: "Yellow" inside the session storage object:
sessionStorage.setItem("pcColor", "Yellow");

// Store laptopColor: "White" inside the session storage object:
sessionStorage.setItem("laptopColor", "White");

// Get the name of the item at index 1:
sessionStorage.key(1);

//Example 2: How to get the name of an item in the local storage object
// Store carColor: "Pink" inside the browser's local storage object:
localStorage.setItem("carColor", "Pink");

// Store pcColor: "Yellow" inside the local storage object:
localStorage.setItem("pcColor", "Yellow");

// Store laptopColor: "White" inside the local storage object:
localStorage.setItem("laptopColor", "White");

// Get the name of the item at index 1:
localStorage.key(1);

//What is web storage’s getItem() method?
//The getItem() method retrieves the value of a specified web storage item.

//Syntax
webStorageObject.getItem(key);

//Example 1: How to get data from the session storage object
// Store color: "Pink" inside the browser's session storage object:
sessionStorage.setItem("color", "Pink");

// Get color's value from the session storage:
sessionStorage.getItem("color");

// The invocation above will return:
"Pink"

//Example 2: How to get data from the local storage object
// Store color: "Pink" inside the browser's local storage object:
localStorage.setItem("color", "Pink");

// Get color's value from the local storage:
localStorage.getItem("color");

// The invocation above will return:
"Pink"

/* What is web storage’s length property?
The length property returns the number of properties in the specified web storage.*/
//Syntax
webStorageObject.length;

//Example 1: How to verify the number of items in the session storage object
// Store carColor: "Pink" inside the browser's session storage object:
sessionStorage.setItem("carColor", "Pink");

// Store pcColor: "Yellow" inside the session storage object:
sessionStorage.setItem("pcColor", "Yellow");

// Store laptopColor: "White" inside the session storage object:
sessionStorage.setItem("laptopColor", "White");

// Verify the number of items in the session storage:
sessionStorage.length;

// The invocation above may return:
3

//Example 2: How to verify the number of items in the local storage object
// Store carColor: "Pink" inside the browser's local storage object:
localStorage.setItem("carColor", "Pink");

// Store pcColor: "Yellow" inside the local storage object:
localStorage.setItem("pcColor", "Yellow");

// Store laptopColor: "White" inside the local storage object:
localStorage.setItem("laptopColor", "White");

// Verify the number of items in the local storage:
localStorage.length;

// The invocation above may return:
3

/* What is web storage’s removeItem() method?
The removeItem() method removes a property from the specified web storage.*/
//Syntax
webStorageObject.removeItem(key);


// Example 1: How to remove data from the session storage object
// Store carColor: "Pink" inside the browser's session storage object:
sessionStorage.setItem("carColor", "Pink");

// Store pcColor: "Yellow" inside the session storage object:
sessionStorage.setItem("pcColor", "Yellow");

// Store laptopColor: "White" inside the session storage object:
sessionStorage.setItem("laptopColor", "White");

// Remove the pcColor item from the session storage:
sessionStorage.removeItem("pcColor");

// Confirm whether the pcColor item still exists in the session storage:
sessionStorage.getItem("pcColor");

// The invocation above will return:
null

//Example 2: How to remove data from the local storage object
// Store carColor: "Pink" inside the browser's local storage object:
localStorage.setItem("carColor", "Pink");

// Store pcColor: "Yellow" inside the local storage object:
localStorage.setItem("pcColor", "Yellow");

// Store laptopColor: "White" inside the local storage object:
localStorage.setItem("laptopColor", "White");

// Remove the pcColor item from the local storage:
localStorage.removeItem("pcColor");

// Confirm whether the pcColor item still exists in the local storage:
localStorage.getItem("pcColor");

// The invocation above will return:
null

/* What is web storage’s clear() method?
The clear() method clears (deletes) all the items in the specified web storage.*/
//Syntax
webStorageObject.clear();

// Example 1: How to clear all items from the session storage object
// Store carColor: "Pink" inside the browser's session storage object:
sessionStorage.setItem("carColor", "Pink");

// Store pcColor: "Yellow" inside the session storage object:
sessionStorage.setItem("pcColor", "Yellow");

// Store laptopColor: "White" inside the session storage object:
sessionStorage.setItem("laptopColor", "White");

// Clear all items from the session storage:
sessionStorage.clear();

// Confirm whether the session storage still contains any item:
console.log(sessionStorage);

// The invocation above will return:
// {length: 0}

//Example 2: How to clear all items from the local storage object
// Store carColor: "Pink" inside the browser's local storage object:
localStorage.setItem("carColor", "Pink");

// Store pcColor: "Yellow" inside the local storage object:
localStorage.setItem("pcColor", "Yellow");

// Store laptopColor: "White" inside the local storage object:
localStorage.setItem("laptopColor", "White");

// Clear all items from the local storage:
localStorage.clear();

// Confirm whether the local storage still contains any item:
console.log(localStorage);

// The invocation above will return:
// {length: 0}

