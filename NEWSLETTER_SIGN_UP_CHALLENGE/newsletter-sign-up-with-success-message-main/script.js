// Declare variables for the two containers and two buttons
/*
let hideContainer = document.querySelector("#hide_container");
let revealButton = document.querySelector("#reveal_container");
let hideButton = document.querySelector("#hide");
let revealSuccessContainer = document.querySelector("#reveal_success_container");

// Hide / Reveal container functions
function HideContainerRevealSuccess(){
    hideContainer.style.visibility = "hidden";
    revealSuccessContainer.style.visibility = "visible";
}

hide.addEventListener("click", HideContainerRevealSuccess);

function RevealContainerHideSuccess(){
    revealSuccessContainer.style.visibility = "hidden";
    hideContainer.style.visibility = "visible";
}
reveal_container.addEventListener("click", RevealContainerHideSuccess);

// Form validation declaration
*/

let inputEmailByUser = document.forms["sub_form"]["input_form"].value;
let inputField = document.querySelector("form_input");

// Form validation function

function FormValidation(){
    if(inputEmailByUser === ""){
        inputField.style.border = "1px solid red";
    }
}
hide.addEventListener("click", FormValidation);
