//Exercise 3.2

//creating an empty array
let shoppingList = [];
//Push elements to the list
shoppingList.push("Milk", "Bread", "Apple");
//Update bread with bananas and eggs
shoppingList.splice(1, 1, "Bananas", "Eggs");
//Removing the last element and output it on the console
console.log("Last element of the array is " + shoppingList.pop());
//Sorting the list alphabetically
shoppingList.sort();
//Find and output index value of Milk
console.log("Index of Milk is " + shoppingList.indexOf("Milk"));
//Adding carrots and lettuce after banana
shoppingList.splice(1, 0, "Carrots", "Lettuce");
//Creating a new list
let newArr = ["Juice", "Pop"];
//Combining two elements, adding the last one twice
shoppingList = shoppingList.concat(newArr);
shoppingList = shoppingList.concat(newArr);
//Last index of pop and output to console
console.log("The last index of Pop is: " + shoppingList.lastIndexOf("Pop"));
//Final list
console.log(shoppingList);