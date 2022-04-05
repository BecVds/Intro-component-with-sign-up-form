const CLAIM_BUTTON = document.getElementById("submitBtn");

const PASSWORD_ERROR_MESSAGE = document.getElementById("password");
const EMAIL_ERROR_MESSAGE = document.getElementById("email");
const LNAME_ERROR_MESSAGE = document.getElementById("lName");
const FNAME_ERROR_MESSAGE = document.getElementById("fName");

const PASSWORD_INPUT = document.getElementById("passwordBorder");
const EMAIL_INPUT = document.getElementById("emailBorder");
const LNAME_INPUT = document.getElementById("lnameBorder");
const FNAME_INPUT = document.getElementById("fnameBorder");


CLAIM_BUTTON.addEventListener("click", validate);

let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function validate(e){
    e.preventDefault();
    FNAME_ERROR_MESSAGE.classList.add("hidden");
    FNAME_INPUT.classList.remove("inputErrorBorder");
    LNAME_ERROR_MESSAGE.classList.add("hidden");
    LNAME_INPUT.classList.remove("inputErrorBorder");
    EMAIL_ERROR_MESSAGE.classList.add("hidden");
    EMAIL_INPUT.classList.remove("inputErrorBorder");
    PASSWORD_ERROR_MESSAGE.classList.add("hidden");
    PASSWORD_INPUT.classList.remove("inputErrorBorder");
    
    let inputField = document.querySelectorAll(".alertIcon");
    
    inputField.forEach(alertIcon => {
        alertIcon.remove();
      }
    );

    firstNameInputError();
    lastNameInputError();
    emailInputError();
    passwordInputError();
}

function firstNameInputError(){
    if  (FNAME_INPUT.value === ""){
        console.log("please provide your first name");
        FNAME_ERROR_MESSAGE.classList.remove("hidden");
        FNAME_INPUT.classList.add("inputErrorBorder");
        errorIconElement(FNAME_INPUT);
    }
}
function lastNameInputError(){
    if (LNAME_INPUT.value === ""){
        console.log("please provide your last name");
        LNAME_ERROR_MESSAGE.classList.remove("hidden");
        LNAME_INPUT.classList.add("inputErrorBorder");
        errorIconElement(LNAME_INPUT);
    }
    
}
function emailInputError(){
    if(!(EMAIL_INPUT.value.match(mailformat))){
        console.log("please provide a correct email");
        EMAIL_ERROR_MESSAGE.classList.remove("hidden");
        EMAIL_INPUT.classList.add("inputErrorBorder");
        errorIconElement(EMAIL_INPUT);
    }
}
function passwordInputError(){
    if(PASSWORD_INPUT.value === ""){
        console.log("please provide your password");
        PASSWORD_ERROR_MESSAGE.classList.remove("hidden");
        PASSWORD_INPUT.classList.add("inputErrorBorder");
        errorIconElement(PASSWORD_INPUT);
    }
}

function errorIconElement(inputField){
    let divElement = document.createElement("div");
    divElement.classList.add("alertIcon");
    let imageElement = document.createElement("img");
    imageElement.src = './images/icon-error.svg';
    divElement.appendChild(imageElement);
    inputField.after(divElement)
}