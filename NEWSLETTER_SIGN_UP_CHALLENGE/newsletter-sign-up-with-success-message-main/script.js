// Declare variables for the two containers and two buttons, and invalid label

let hideContainer = document.querySelector("#hide_container");
let revealButton = document.querySelector("#reveal_container");
let hideButton = document.querySelector("#hide");
let revealSuccessContainer = document.querySelector("#reveal_success_container");
let invalidLabel = document.querySelector("#invalid");

// Form validation declaration
let inputField = document.querySelector("#form_input");
let included =  inputField.value.includes("@");

// Regex declaration
let regex =  /^[a-zA-Z0-9]+@/g
let isRegex = false;
// Hide container if input field has content in it
function HideContainerWhenValid(){
   
    if((inputField.value.match(regex))) {
        isRegex = true; 
        revealSuccessContainer.style.visibility = "visible";
        hideContainer.style.visibility = "hidden"
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

function RevealContainerHideSuccess(){
    revealSuccessContainer.style.visibility = "hidden";
    hideContainer.style.visibility = "visible";
}
reveal_container.addEventListener("click", RevealContainerHideSuccess);



