//Chapter 3 project: Manipulating array
const theList = ['Laurence', 'Svekis', true, 35, null, undefined, 
{test: 'one', score: 55}, ['one', 'two']];
//Removing the first item and the last item
theList.pop();
theList.shift();
//Adding first to the stsrt of the array
theList.unshift("FIRST");
//Assign hello world to the fourth item value
theList.splice(3, 4, "Hello World");
//Assign middle to the third index item
theList.splice(2, 1, "MIDDLE");
//Add last to the last position
theList.push("LAST");
//Out put to the console
console.log(theList);

//Company product catalog
//An arry that can hold inventory
let invent = [];
let item1 = {
    name: "Acer",
    model: "Niro 5",
    cost: 17000,
    quantity: 78
}

let item2 = {
    name: "ROG",
    model: "Strix",
    cost: 28000,
    quantity: 106
}

let item3 = {
    name: "Razer",
    model: "Blade 15",
    cost: 35000,
    quantity: 336
}

//Add objects to the main array
invent.push(item1, item2, item3);
console.log(invent);
//Access quantity of third element and output to console
console.log("Quantity of third element is: " + invent[2].quantity);