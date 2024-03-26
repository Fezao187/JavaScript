//Getting the form
let form = document.getElementById("form");

//Create a function that will handle submission of the form
function handleSubmit() {
    //Get all the values of the form
    let nameOfUser = document.getElementById("name").value,
        username = document.getElementById("username").value,
        email = document.getElementById("email").value,
        createPassword = document.getElementById("createPassword").value,
        confirmPassword = document.getElementById("confirmPassword").value,
        usernameErr = document.querySelector(".usernameErr"),
        pwdErr = document.querySelectorAll(".pwdErr"),
        obj = {};

    //Get available user info for this username
    let tempObj = JSON.parse(localStorage.getItem(username)) || null;
    //Check if it exists
    if (tempObj === null) {
        if (createPassword === confirmPassword) {
            /**If our search for user returns nothing and passwords match, set the new
             * user info to object.
             */
            obj = {
                nameOfUser: nameOfUser,
                username: username,
                email: email,
                password: createPassword,
            }
            //Save to local storage
            localStorage.setItem(username, JSON.stringify(obj));
            alert("Account created successfully");

        }
        else {
            //Tell the user enter password again because they don't match
            pwdErr.forEach(element => {
                element.style.color = "red";
                element.style.height = "10px";
                element.style.fontSize = "8px";
                element.textContent = "Passwords don't match, please try again!!!";
            });
        }
    }
    else {
        usernameErr.style.color = "red";
        usernameErr.style.height = "10px";
        usernameErr.style.fontSize = "8px";
        usernameErr.textContent = "Username already exists";
    }
}

//Add an event listener to the form
form.addEventListener("submit", (eve) => {
    eve.preventDefault();
    handleSubmit();
});