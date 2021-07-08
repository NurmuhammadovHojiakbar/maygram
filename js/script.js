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


let messageListUser = document.querySelector(".message-list__user")
let messageListRobot= document.querySelector(".message-list__robot")
let messageInputUser= document.getElementById("user-message")
let messageInputRobot= document.getElementById("robot-message")


document.querySelector(".user-form").onsubmit = function(a){
    a.preventDefault();

    let newUserMessage = document.createElement("li")

    newUserMessage.textContent = messageInputUser.value
    
    newUserMessage.classList.add("message-item")
    newUserMessage.classList.add("message-item__left")
    
    messageListUser.append(newUserMessage)
    
    let newRobotMessage = document.createElement("li")
    
    newRobotMessage.textContent = messageInputUser.value
    
    newRobotMessage.classList.add("message-item")
    newRobotMessage.classList.add("message-item__left")
    
    messageListRobot.append(newRobotMessage)
    messageInputUser.value = ""
}

document.querySelector(".robot-form").onsubmit = function(a){
    a.preventDefault();

    let newUserMessage = document.createElement("li")

    newUserMessage.textContent = messageInputRobot.value
    
    newUserMessage.classList.add("message-item")
    newUserMessage.classList.add("message-item__right")
    
    messageListUser.append(newUserMessage)
    
    let newRobotMessage = document.createElement("li")
    
    newRobotMessage.textContent = messageInputRobot.value
    
    newRobotMessage.classList.add("message-item")
    newRobotMessage.classList.add("message-item__right")
    
    messageListRobot.append(newRobotMessage)
    messageInputRobot.value = ""
}