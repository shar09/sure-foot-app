$(document).ready(function() {   
    let form = document.querySelector('.form');
    let name = document.querySelector('#name');
    let email = document.querySelector('#email');
    let message = document.querySelector('#message');
    
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        validate();
    })

    function validate() {
        let checkName = name.value.trim();
        let checkEmail = email.value.trim();
        let checkMessage = message.value.trim(); 
        if(!checkName) {
            let formControl = name.parentElement;
            let errorMessage = formControl.querySelector('.error-message');
            errorMessage.classList.add('show-error');
            errorMessage.textContent = "enter a valid name";
        }

        if(!validateEmail(checkEmail)) {
            let formControl = email.parentElement;
            let errorMessage = formControl.querySelector('.error-message');
            errorMessage.classList.add('show-error');
            errorMessage.textContent = "enter a valid email";
        }

        if(!checkMessage) {
            let formControl = message.parentElement;
            let errorMessage = formControl.querySelector('.error-message');
            errorMessage.classList.add('show-error');
            errorMessage.textContent = "please enter a message";
        }

        if(checkMessage.length > 300) {
            let formControl = message.parentElement;
            let errorMessage = formControl.querySelector('.error-message');
            errorMessage.classList.add('show-error');
            errorMessage.textContent = "please keep the message less than 300 characters";
        }

        function validateEmail(email) {
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        }
    }
});
