"use strict";

//Employee tracking app
//Creating a class containing employees
class Employees
{
    //Creating a constructor with names, years worked in the constructor
    constructor(firstName, lastName, nYearsWorked)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.nYearsWorked = nYearsWorked;
    }
}

//Creating employees
let employee1 = new Employees("Jerry", "Lewis", 4),
    employee2 = new Employees("Katlwgo", "Maredi", 1);

//Adding the employees to the array
let employeeArr = [];
employeeArr.push(employee1, employee2);

//A prototype to return details of employee
Employees.prototype.employeeDetails = function()
{
    return `First Name: ${this.firstName} \nLast Name: ${this.lastName} \nNumber of years worked: ${this.nYearsWorked}`;
}

//Iterate through the array and print results into the console
employeeArr.forEach((employee) => {
    console.log(employee.employeeDetails());
});