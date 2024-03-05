"use strict";

//Pratice exercise 8.7
//Date object and output to the console
let dateToday = new Date();
console.log(dateToday);

//Months of the year
let monthsOfTheYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

//Getting day from date object
let day = dateToday.getDate(),

    //Getting year
    year = dateToday.getFullYear(),

    //Getting month
    month = dateToday.getMonth();

    console.log(`Month ${month}`)
//Outputting the date
let theDate = `${day} ${monthsOfTheYear[month-1]} ${year}`;
console.log(theDate);