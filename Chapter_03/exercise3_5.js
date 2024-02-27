//Practice exercise 3.5
//Creating the object friend
let people = {
    friends: []
}

//Three variables that contain friends' details
let friend1 = {
    firstName: "Anele",
    lastName: "Dlamini",
    id: 122334453335
}

let friend2 = {
    firstName: "Siyabonga",
    lastName: "Mahlangu",
    id: 3993726625677
}

let friend3 = {
    firstName: "Anele",
    lastName: "Meyiwa",
    id: 3344566377899
}

//Adding objects to the array
people.friends.push(friend1, friend2, friend3);
//Out put the people object
console.log(people);