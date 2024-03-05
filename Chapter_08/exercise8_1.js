"use strict";

//Practice exercise 8.1
//Adding strings to the variable

let string1 = "How's%20it%20going%3F",
    string2 = "How's it going?";

//Encoding and decoding the strings
let decodedString1 = decodeURIComponent(string1),
    encodedString2 = encodeURIComponent(string2);

//Then output to the console
console.log(`Decoded (${string1}) is (${decodedString1})`);
console.log(`Encoded (${string2}) is (${encodedString2})`);

//Creating a web URI request
let uriWeb = "http://www.basescripts.com?=Hello World",

    //Encode web URI and output to the console
    encodedUriWeb = encodeURIComponent(uriWeb);
console.log(encodedUriWeb);