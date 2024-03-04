"use strict";

//Practice exercise 7.1
//Creating a class for Person
class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

//Creating a varibale to assign a new pesron object
let friend1 = new Person("Amahle", "Mdletshe");
//Adding another friend onject
let friend2 = new Person("Kristine", "Wildheart");

//Output both friends to the console with a greeting
console.log("Hello", friend1.firstName, friend1.lastName + "!");
console.log("Hello", friend2.firstName, friend2.lastName + "!");