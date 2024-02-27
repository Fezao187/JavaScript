//Practice exercise 4.2
let age = prompt("How old are you?");
//Converting to number
parseInt(age);
//Declaring a message variable
let message = "";
if(age >= 21)
{
    //If older or equal to 21, confirm entry and ability to by alcohol
    message = "Confirm entry to value and ability to purchase alcohol";
}else if(age >= 19){
    //If older or equal to 19, confirm entry but deny ability to by alcohol
    message = "Confirm entry to value and deny ability to purchase alcohol";
}else {
    //If nothing else true, deny everything
    message = "Deny entry";
}
//Output response
console.log(message);