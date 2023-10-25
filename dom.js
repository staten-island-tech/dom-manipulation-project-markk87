const DOMSelectors = {
    form: document.querySelector("#form"),
    firstNameSubmit: document.querySelector("#submitname"),
    firstName: document.querySelector(".first-name"),
    h2s: document.querySelectorAll("h2"),
    emailInput: document.querySelector(".electro-mail"),
    gallery: document.querySelector('.gallery')
};



DOMSelectors.form.addEventListener('submit', function(e){
    e.preventDefault();
    console.log('fart')
    function createFart() {
        DOMSelectors.gallery.insertAdjacentHTML('beforeend', `<div class=card><h2> ${DOMSelectors.firstName.value} : ${DOMSelectors.emailInput.value}</h2></div>`)
    }
    createFart();
    console.log(DOMSelectors.gallery)
})






