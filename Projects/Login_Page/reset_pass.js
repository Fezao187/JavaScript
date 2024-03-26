//get the form element from html
let form = document.getElementById("form");

//A function to handle the submit
function handleSubmit() {
    //Get all form elements
    let email = document.getElementById("email").value,
        username = document.getElementById("username").value,
        newPassword = document.getElementById("newPassword").value,
        confirmPassword = document.getElementById("confirmPassword").value,
        //Get user info from localstorage
        obj = JSON.parse(localStorage.getItem(username)) || { username: "Not Found" };

    //Check if username exists
    if (obj.username == username) {
        /**If user exists, check if username and email match, then
         * let user change password.
         */
        if (obj.username === username && obj.email === email) {
            /**Then check if passwords match then let user change
             */
            if (newPassword === confirmPassword) {
                //set new password
                obj.password = confirmPassword;
                //Save to localstorage
                localStorage.setItem(username, JSON.stringify(obj));
                alert("Password changed successfully");
            }
            else {
                alert("Passwords don't match, try again");
            }
        }
        else {
            alert("User name and email don't match");
        }
    }
    else {
        //If doesnt exist ouput message
        alert("Username does not exist");
    }


}

//An event listser to call the function
form.addEventListener("submit", (eve) => {
    //Prevent form submission
    eve.preventDefault();
    //Call the function
    handleSubmit();
})