"use strict";

//An array of allowed passwords
const allowedPass = ["346810", "Redlight", "Redragon", "AcerNitro"];

//Password check
function checkPass(pass) {
    //Using includes method to check the array for a value
    //And return bln value
    return allowedPass.includes(pass);
}

//A function that returns a promise
function func(password) {
    return new Promise((resolve, reject) => {
        //Indidctate the password validity
        if (checkPass(password)) {
            resolve({ status: true });
        }
        else {
            reject({ status: false });
        }
    });
}

//A function that checks password and sends to prevous function
function check(pass) {
    //Using then and catch to output to the console
    func(pass)
        .then(value => {
            console.log("Approve:");
            console.log(value);
        })
        .catch(value => {
            console.log("Reject:");
            console.log(value);
        })
}

//Testing to see if works
check("346810");
check("Redragon");
check("Katlego");
check("Something");