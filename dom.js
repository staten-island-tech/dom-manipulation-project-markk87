const DOMSelectors = {
    form: document.querySelector("#form"),
    firstName: document.querySelector(".first-name"),
    h2s: document.querySelectorAll("h2"),
    emailInput: document.querySelector(".electro-mail"),
};

function createCard(firstName, emailInput) {
    return { firstName, emailInput};
}




DOMSelectors.form.addEventListener("submit", function(event){
    event.preventDefault();
    console.log(DOMSelectors.firstName.value, DOMSelectors.emailInput.value);
    DOMSelectors.h2s.forEach((h2) => h2.textContent = DOMSelectors.firstName.value);
});





