
// Implementing Dark Mode

let toggleDarkMode = document.querySelector("#dark");
let containerDarkMode = document.querySelector(".container");
let containerToggleDarkMode = document.querySelector(".container_toggle");
let screenDarkMode = document.querySelectorAll(".screen");
let containerButtonDarkMode = document.querySelector(".container_button");
let buttonsDarkMode = document.querySelectorAll(".buttons");
let iconsDarkMode = document.querySelectorAll(".path");
let toggleDarkBg = document.querySelectorAll(".toggle");


function DarkMode(){
containerDarkMode.style.backgroundColor = "var(--clr-dm-primary)";
containerToggleDarkMode.style.backgroundColor = "var(--clr-dm-secondary)";
containerButtonDarkMode.style.backgroundColor = "var(--clr-dm-accent)";
screenDarkMode.forEach(item=>{
    item.style.backgroundColor = "var(--clr-dm-primary)";
});
buttonsDarkMode.forEach(item=>{
    item.style.backgroundColor = "var(--clr-dm-secondary)";
   })
iconsDarkMode.forEach(item=>{
    item.style.color = "var(--clr-dm-primary)";
})
toggleDarkBg.forEach(item=>{
    item.style.backgroundColor = "var(--clr-dm-secondary)";
})
}
dark.addEventListener("click",DarkMode);

// Implementing Light Mode

let toggleLightMode = document.querySelector("#light");

function LightMode(){
    containerDarkMode.style.backgroundColor = "var(--clr-primary)";
    containerToggleDarkMode.style.backgroundColor = "var(--clr-secondary)";
    containerButtonDarkMode.style.backgroundColor = "var(--clr-accent)";
    screenDarkMode.forEach(item=>{
        item.style.backgroundColor = "var(--clr-primary)";
    });
    buttonsDarkMode.forEach(item=>{
        item.style.backgroundColor = "var(--clr-secondary)";
       })
    iconsDarkMode.forEach(item=>{
        item.style.color = "var(--clr-primary)";
    })
    toggleDarkBg.forEach(item=>{
        item.style.backgroundColor = "var(--clr-secondary)";
    })
}
light.addEventListener("click", LightMode);

// Clear data function
let clearData = document.querySelector("#ac");
let topScreen = document.querySelector("#screenTopInput");

clearData.addEventListener("click", function(e){
    topScreen.value = " ";
})

// Basic math functions

// Add function

