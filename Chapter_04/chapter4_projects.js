//Chapter 4 projects
//Evaluating a number game
// let number = prompt("Please enter a number.");
// let dynNumber = 4;  //Var that store randum number
// let result = "";
// if(number > dynNumber)
// {
//     result = number + " is greater than " + dynNumber;
// }else if(number == dynNumber)
// {
//     result = number + " is equal to " + dynNumber;
// }else if(number < dynNumber)
// {
//     result = number + " is less than " + dynNumber;
// }

// console.log(result);
// //Friend checker game
// //Ask user to enter name
// let friendName = prompt("Enter your friends name.");
// let answer = false;

// switch(friendName)
// {
//     case 'John':
//         answer = true;
//         break;
//     case 'Kristine':
//         answer = true;
//         break;
//     case 'Clement':
//         answer = true;
//         break;
//     default:
//         answer;
//         break;
// }

// //Output to console
// console.log("Is " + friendName + " your friend?: " + answer);

//Rock paper scissors game
//Array that contains RPS
let arrGame = ["Rock", "Paper", "Scissors"];
//Random number for player and cpu
let randComp = Math.floor(Math.random()*3);
let randPlayer = Math.floor(Math.random()*3);
let response = "";

if(randComp === randPlayer)
{
    response = "It's a tie";
}else if(randComp === 0 && randPlayer === 1)
{
    response = "Player wins";
}else if(randComp === 0 && randPlayer === 2)
{
    response = "Computer wins";
}else if(randComp === 1 && randPlayer === 0)
{
    response = "Computer wins";
}else if(randComp === 1 && randPlayer === 2)
{
    response = "Player wins";
}else if(randComp === 2 && randPlayer === 0)
{
    response += "Player wins";
}else if(randComp === 2 && randPlayer === 1)
{
    response = "Computer wins";
}
console.log(response);