//Pratice exercise 4.5
//Creating a bariable called prize and prompt user to set value
let prize = prompt("Enter the value between 0 and 10");
//Convert to number
parseInt(prize);
//Creating message variable
let message = "My Selection: ";
switch (prize)
{
    case '2':
        console.log(message + prize + "\n You have won R1 000.");
        break;
    case '5':
        console.log(message + prize + "\n You have won a BMW M3");
        break;
    case '8':
        console.log(message + prize + "\n You have won R1.");
        break;
    default:
        console.log(message + prize + "\n Sorry, did not win anything");
        break;
}