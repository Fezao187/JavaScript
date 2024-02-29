//Practice exercise 5.1
let maxNum = 5, //Variable used to store a random number
    randNum = Math.floor(Math.random() * maxNum) + 1,   //Generating a random number
    correctAns = false,     //A varibale used to track if the value is true
    userNum = 0,
    message = "";
console.log(randNum);

while(randNum !== userNum)
{
    //Prompt the user to enter the value and convert it to number
    userNum = prompt("Enter a value between 1 and 5");
    userNum = parseInt(userNum);
    if(randNum === userNum)
    {
        correctAns = true;
        break;
    }else if(userNum > randNum)
    {
        message = "Guess was higher\n Try again";
    }else if(userNum < randNum)
    {
        message = "Guess was lower\n Try again";
    }else
    {
        break;
    }
    alert(message);
}