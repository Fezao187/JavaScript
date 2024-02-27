//Practice exercise 4.4
//Random number between 0 and 5
let randNum = Math.floor(Math.random()*5);
let yourQuestion = prompt("What is your question?");
let answer;     //Variable that will hold the response

switch(randNum)
{
    case 0:
        answer = "Certanly";
        break;
    case 1:
        answer = "Highly Likely";
        break;
    case 2:
        answer = "Likey";
        break;
    case 3:
        answer = "In Between";
        break;
    case 4:
        answer = "Unlikely";
        break;
    case 5:
        answer = "Highly Unlikely";
        break;
    case 6:
        answer = "Not likely";
        break;
    default:
        answer = "Sorry, something went wrong";
        break;
}
console.log("You asked '" + yourQuestion + "' and your response is " + answer);