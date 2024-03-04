"use strict";

//Menu items price calculator
//Creating a class that contains prices of two menut items
class MenuItems {
    #item1 = 40;
    #item2 = 60;
    //Using the constructor to get argument values
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }

    //A method that returns the total cost of items, 
    //depending on how many of each item selected
    total() {
        let total1 = this.#item1 * this.num1,
            total2 = this.#item2 * this.num2;

        return total1 + total2;
    }

    //A getter to grab value that is ouput by total()
    get getTotal() {
        return this.total();
    }
}

//Creating objects with different comninations of menu selections
//and output to console
let obj1 = new MenuItems(3, 4),
    obj2 = new MenuItems(30, 40),
    obj3 = new MenuItems(3, 5),
    obj4 = new MenuItems(12, 4),
    obj5 = new MenuItems(0, 4),
    obj6 = new MenuItems(31, 1);

console.log(obj1.getTotal);
console.log(obj2.getTotal);
console.log(obj3.getTotal);
console.log(obj4.getTotal);
console.log(obj5.getTotal);
console.log(obj6.getTotal);