// Declare variables for the two containers, two buttons, invalid label and email

let hideContainer = document.querySelector("#hide_container");
let revealButton = document.querySelector("#reveal_container");
let hideButton = document.querySelector("#hide");
let revealSuccessContainer = document.querySelector("#reveal_success_container");
let invalidLabel = document.querySelector("#invalid");
let inputEmail = document.querySelector("#text__email")

// Form validation declaration
let inputField = document.querySelector("#form_input");

// Regex declaration
let regex =  /^[a-zA-Z0-9]+@/g
let isRegex = false;

// If input field's content is valid, proceed to success container. If not, error msg and color change of input field.
function HideContainerWhenValid(){
   
    if((inputField.value.match(regex))) {
        isRegex = true; 
        revealSuccessContainer.style.visibility = "visible";
        hideContainer.style.visibility = "hidden"
        inputEmail.innerHTML = inputField.value;
    }

    else if(isRegex == false){
        inputField.style.border = "1px solid red";
        inputField.style.backgroundColor = "rgb(255,232,230)";
        invalidLabel.style.visibility = "visible";
    }

    else if(inputField.value == ""){
        inputField.style.border = "1px solid red";
        inputField.style.backgroundColor = "rgb(255,232,230)";
        invalidLabel.style.visibility = "visible";
    }
    
    console.log(inputField.value);
}

hide.addEventListener("click", HideContainerWhenValid);

// When clicked on dismiss msg, get back to container

function RevealContainerHideSuccess(){
    revealSuccessContainer.style.visibility = "hidden";
    hideContainer.style.visibility = "visible";
    invalidLabel.style.visibility = "hidden";
}
reveal_container.addEventListener("click", RevealContainerHideSuccess);



