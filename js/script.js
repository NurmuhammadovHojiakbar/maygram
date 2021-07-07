let registerContainer = document.querySelector(".register-container");
let registerForm = document.querySelector(".register-form");
let userNameInput = document.getElementById("user-name");
let userName = document.querySelector(".chat-interface__user-name");
let userNumberInput = document.getElementById("user-number");
let userNumber = document.querySelector(".chat-interface__user-number");

registerForm.addEventListener("submit", function(evt){
    evt.preventDefault();
    userName.textContent = userNameInput.value 
    userNumber.textContent = "Num: " + userNumberInput.value
    
    registerContainer.style.display = "none"
})
