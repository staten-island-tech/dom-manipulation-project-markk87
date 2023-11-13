const DOMSelectors = {
    form: document.querySelector("#form"),
    firstNameSubmit: document.querySelector("#submitname"),
    firstName: document.querySelector(".first-name"),
    emailInput: document.querySelector(".electro-mail"),
    gallery: document.querySelector('.gallery'),
    attributeInput: document.getElementById('obtainAtt')
};






DOMSelectors.form.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log('fart');
    function clearInputs() {
        DOMSelectors.firstName.value = "";
        DOMSelectors.emailInput.value = "";
        DOMSelectors.attributeInput.value = "";
    }
    function createFart() {
        DOMSelectors.gallery.insertAdjacentHTML('beforeend', `<div class=card><button class=remove>Clear</button><h2> ${DOMSelectors.firstName.value} : ${DOMSelectors.emailInput.value} :  </h2><img class="imginput" src=${DOMSelectors.attributeInput.value}/></div>`)
    }
    function removeFart(){
        const urmom = document.querySelectorAll(".remove");
        urmom.forEach((el) => {
            el.addEventListener('click', function(f){
                f.currentTarget.parentNode.remove();
            })
        })
     }
    
    createFart();
    removeFart();
    clearInputs();

    console.log(DOMSelectors.gallery)
})






