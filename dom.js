const DOMSelectors = {
    form: document.querySelector("#form"),
    firstName: document.querySelector(".first-name"),
    h2: document.querySelectorAll("h2"),
    emailInput: document.querySelector(".electro-mail"),
};



function makeCard() {
    const card = {
        primeronombre: firstName,
        primeroemail: emailInput,
    }
}

function addCard(primeroemail, primeronombre) {
    primeroemail.forEach((el) => el.textContent = DOMSelectors.emailInput.value)
}





DOMSelectors.form.addEventListener("submit", function(event){
    event.preventDefault();
    console.log(DOMSelectors.firstName.value, DOMSelectors.emailInput.value);
    DOMSelectors.h2.forEach((el) => el.textContent = DOMSelectors.firstName.value),
    el.textContent = DOMSelectors.emailInput.value;
});





