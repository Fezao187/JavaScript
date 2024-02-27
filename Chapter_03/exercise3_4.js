//Practice 3.4
//Creating anew object for a car
let myCar = {
    make: "Audi",
    model: "Rs6",
    year: 2021,
    forSale: true,
    isNew: false,
    isInGoodCondition: true,
    color: "Pink",
    price: 2300000
}

//Updating the color property
let newVar = myCar.color = "Purple";
//Updating the forsale object
newVar = myCar.forSale = false;
//Output make and model
console.log("The make of the car is: " + myCar["make"] + "\n The mode is: " + myCar["model"] + ".");
console.log("Is the car for sale: " + myCar.forSale);