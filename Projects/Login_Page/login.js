//Getting elements of the form
let form = document.getElementById("form");

//A function that will handle submission of form
function handleSubmit() {
    //Get all form elements
    let username = document.getElementById("username").value,
        password = document.getElementById("password").value;

    //Get user info
    let obj = JSON.parse(localStorage.getItem(username)) || {username: "Not Found"};
    console.log(obj);
    
    //Check if user info matches the one in storage
    if((obj.username === username) && obj.password === password)
    {
        /**TODO: Show th user they logged in (in a cool way),
         * for now just use an alert
         */
        alert("You have successfully logged in");
    }
    else{
        /**TODO: Tell the user enter login details again because they
         * don't match(In a cool way). For now just use an alert.
         */
        alert("Incorrect password or username\nPlease try again")
    }
}

//An event listener to call handlesubmit function
form.addEventListener("submit", (eve) => {
    eve.preventDefault();
    handleSubmit();
});