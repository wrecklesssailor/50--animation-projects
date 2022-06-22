const container = document.
querySelector(".container");
const signUpButton = document.
querySelector(".primary-bg button");

signUpButton.addEventListener("click",()=>{
    container.classList.toggle("change");
});
