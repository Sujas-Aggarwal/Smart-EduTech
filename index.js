// Declaring Main Constants
let currentPage = 0;
let totalMarks = 0;
const main = document.querySelector("main");
const startButton = document.querySelector("#sign-in-button");
const nextButton = document.querySelectorAll(".next-button");
const prevButton = document.querySelectorAll(".prev-button");
const nameInput = document.querySelector("#name");
const inputIcon = document.querySelector(".input-user-icon");
const smallestOptions1 = document.querySelectorAll(
  "#smallest-num-question-1 span"
);
const smallestOptions2 = document.querySelectorAll(
  "#smallest-num-question-2 span"
);
let smallestAnswer1 = false;
let smallestAnswer2 = false;
main.style.transform = `translateX(-${currentPage}00vw)`;
// Adding Page Move Logic
function NextPage() {
  main.style.transform = `translateX(-${currentPage + 1}00vw)`;
  currentPage++;
}
function PrevPage() {
  main.style.transform = `translateX(-${currentPage - 1}00vw)`;
  currentPage--;
}
// Adding Input Logic
nameInput.onfocus = () => {
  inputIcon.style.opacity = "0.7";
  nameInput.placeholder = "";
};
nameInput.onblur = () => {
  inputIcon.style.opacity = "0.5";
  nameInput.placeholder = "Enter Your Name Here";
};
// Applying Logic and Input Validation
startButton.addEventListener("click", () => {
  if (nameInput.value) {
    NextPage();
    console.log("moved");
    console.log(currentPage);
  }
});
nextButton.forEach((button) => button.addEventListener("click", NextPage));
prevButton.forEach((button) => button.addEventListener("click", PrevPage));
smallestOptions1.forEach((option) =>
  option.addEventListener("click", (e) => {
    smallestOptions1.forEach((option) => {
      option.style.backgroundColor = "transparent";
      option.style.color = "black";
    });
    e.target.style.backgroundColor = "var(--dark-violet)";
    if (e.target.innerText=="23"){
        smallestAnswer1=true
    }
    else{
        smallestAnswer2= false
    }
    e.target.style.color = "white";
  })
);
smallestOptions2.forEach((option) =>
  option.addEventListener("click", (e) => {
    smallestOptions2.forEach((option) => {
      option.style.backgroundColor = "transparent";
      option.style.color = "black";
    });
    e.target.style.backgroundColor = "var(--dark-violet)";
    if (e.target.innerText=="12"){
        smallestAnswer2=true
    }
    else{
        smallestAnswer2= false
    }
    e.target.style.color = "white";
  })
);
