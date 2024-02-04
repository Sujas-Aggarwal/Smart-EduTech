// Declaring Main Constants
const main = document.querySelector("main")
const startButton = document.querySelector("#sign-in-button")
const nextButton = document.querySelectorAll(".next-button")
const prevButton = document.querySelectorAll(".prev-button")
const nameInput = document.querySelector("#name")
const inputIcon = document.querySelector(".input-user-icon")
// Adding Page Move Logic
function NextPage(){
    main.style.transform = "translateX(-100vw)"
}
function PrevPage(){
    main.style.transform = "translateX(100vw)"
}
// Adding Input Logic
nameInput.onfocus = () => {
    inputIcon.style.opacity = "0.7"
    nameInput.placeholder = ""
}
nameInput.onblur = () => {
    inputIcon.style.opacity = "0.5"
    nameInput.placeholder = "Enter Your Name Here"
}
// Applying Logic and Input Validation
startButton.addEventListener("click", NextPage)
startButton.addEventListener("mouseover", () => {
    if (nameInput.value===""){
        startButton.disabled = true
        startButton.style.cursor = "not-allowed"
    }
    else{
        startButton.disabled = false
        startButton.style.cursor = "pointer"
    }
})
nextButton.forEach(button => button.addEventListener("click", NextPage))
prevButton.forEach(button => button.addEventListener("click", PrevPage))