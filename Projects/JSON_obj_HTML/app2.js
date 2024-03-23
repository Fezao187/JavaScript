//Select the from element
const formElem = document.querySelector("form");

//Add an event listener to the form
formElem.addEventListener("submit", (e) => {
    //Prevent default behaviour of html from
    e.preventDefault();

    //Pass the form into the formdata object to get all from elements
    const formData = new FormData(formElem);

    //For of loop to iterate through the form data object
    for (item of formData) {
        console.log(item[0], item[1]);
    }
    //Coverting formData to json
    const jsObj = Object.fromEntries(formData);

    //To store to local storage convert it to string
    const jsonStr = JSON.stringify(jsObj, null, 2);
    //STore to JSON file
   const file = new Blob([jsonStr], {type:"text"});
   const anchor = document.createElement("a");
   anchor.href = URL.createObjectURL(file);
   anchor.download = "store.json";
   anchor.click();
})

