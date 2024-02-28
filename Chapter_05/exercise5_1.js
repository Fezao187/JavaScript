//Practice exercise 5.1
let maxNum = 5,
    randNum = Math.floor(Math.random() * maxNum) + 1,
    correctAns = false,
    userNum = 0,
    message = "";
// console.log(randNum);

while(randNum !== userNum)
{
    userNum = prompt("Enter a value between 1 and 5");
    userNum = parseInt(userNum);
    if(randNum === userNum)
    {
        correctAns = true;
        // message = "Guess war correct\n Well done!";
        break;
    }else if(userNum > randNum)
    {
        message = "Guess was higher\n Try again";
    }else if(userNum < randNum)
    {
        message = "Guess was lower\n Try again";
    }else
    {
        message = "Something went wrong.\n Try again";
        break;
    }
    alert(message);
}