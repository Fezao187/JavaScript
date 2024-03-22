//Use the FormData API to access form values in JavaScript
// function handleSubmit(event) {
//     event.preventDefault();

//     const data = new FormData(event.target);

//     const value = data.get('email');

//     console.log({ value });
// }

// const form = document.querySelector('form');
// form.addEventListener('submit', handleSubmit);

//How to get all values from a form as a JSON object using the FormData API
// function handleSubmit(event) {
//     event.preventDefault();

//     const data = new FormData(event.target);

//     // Do a bit of work to convert the entries to a plain JS object
//     const value = Object.fromEntries(data.entries());

//     console.log({ value });
// }

// const form = document.querySelector('form');
// form.addEventListener('submit', handleSubmit);

//Get multi-select values like checkboxes as JSON with the FormData API
// function handleSubmit(event) {
//     event.preventDefault();

//     const data = new FormData(event.target);

//     const value = Object.fromEntries(data.entries());

//     value.topics = data.getAll("topics");

//     console.log({ value });
// }

// const form = document.querySelector("form");
// form.addEventListener("submit", handleSubmit);

//A full example of multiple input types with the FormData API
function handleFormSubmit(event) {
    event.preventDefault();

    const data = new FormData(event.target);

    const formJSON = Object.fromEntries(data.entries());

    // for multi-selects, we need special handling
    formJSON.snacks = data.getAll('snacks');

    const results = document.querySelector('.results pre');
    results.innerText = JSON.stringify(formJSON, null, 2);
}

const form = document.querySelector('.contact-form');
form.addEventListener('submit', handleFormSubmit);