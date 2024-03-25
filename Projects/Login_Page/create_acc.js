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
        obj = {};

    //Check if password match
    if (createPassword !== confirmPassword) {
        /**TODO: Tell the user enter password again because they
         * don't match(In a cool way). For now just use an alert.
         */
        alert("Passwords dont match, please try again!!!");
    }
    else {
        //Get available user info for this username
        let tempObj = JSON.parse(localStorage.getItem(username)) || null;
        //Check if it exists
        if(tempObj === null)
        {
            /**If our search for user returns nothing, set the new
             * user info to object.
             */
            obj = {
                nameOfUser: nameOfUser,
                username: username,
                email: email,
                createPassword: createPassword,
                confirmPassword: confirmPassword
            }

            //Save to local storage
            localStorage.setItem(username, JSON.stringify(obj));
        }
        else
        {
            alert("username already exists");
        }
    }
    console.log(obj);
}

//Add an event listener to the form
form.addEventListener("submit", (eve) => {
    eve.preventDefault();
    handleSubmit();
});