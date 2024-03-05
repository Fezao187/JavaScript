"use strict";

//Practice exercise 7.2
//Using the same class in 7.1 and adding a method
class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    //Adding a fullname method
    fullname(){
        return `First name :${this.firstName} \nLast name: ${this.lastName}`;
    }
}

//Creating person 1 and person 2
let person1 = new Person("Kristine", "Wildheart");
let person2 = new Person("Katlego", "Maredi");

//Printing both to the console
console.log(person1.fullname());
console.log(person2.fullname());