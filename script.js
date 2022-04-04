const CLAIM_BUTTON = document.getElementById("submitBtn");

const INPUT_PASSWORD = document.getElementById("password");
const INPUT_EMAIL = document.getElementById("email");
const INPUT_LNAME = document.getElementById("lName");
const INPUT_FNAME = document.getElementById("fName");

const ERROR_PASSWORD = document.getElementById("passwordError");
const ERROR_EMAIL = document.getElementById("emailError");
const ERROR_LNAME = document.getElementById("lnameError");
const ERROR_FNAME = document.getElementById("fnameError");

const BORDER_PASSWORD = document.getElementById("passwordBorder");
const BORDER_EMAIL = document.getElementById("emailBorder");
const BORDER_LNAME = document.getElementById("lnameBorder");
const BORDER_FNAME = document.getElementById("fnameBorder");


CLAIM_BUTTON.addEventListener("click", validate);

function validate(e){
    e.preventDefault();
    INPUT_FNAME.classList.add("hidden");
    BORDER_FNAME.classList.remove("inputErrorBorder");
    INPUT_LNAME.classList.add("hidden");
    BORDER_LNAME.classList.remove("inputErrorBorder");
    INPUT_EMAIL.classList.add("hidden");
    BORDER_EMAIL.classList.remove("inputErrorBorder");
    INPUT_PASSWORD.classList.add("hidden");
    BORDER_PASSWORD.classList.remove("inputErrorBorder");
    
    ERROR_FNAME.classList.add("hidden");
    ERROR_LNAME.classList.add("hidden");
    ERROR_EMAIL.classList.add("hidden");
    ERROR_PASSWORD.classList.add("hidden");
    if(document.myForm.fName.value == ""){
        console.log("please provide your first name");
        INPUT_FNAME.classList.remove("hidden");
        BORDER_FNAME.classList.add("inputErrorBorder");
        ERROR_FNAME.classList.remove("hidden");
    }
    if(document.myForm.lName.value == ""){
        console.log("please provide your last name");
        INPUT_LNAME.classList.remove("hidden");
        BORDER_LNAME.classList.add("inputErrorBorder");
        ERROR_LNAME.classList.remove("hidden");
    }
    if(document.myForm.email.value == ""){
        console.log("please provide your email");
        INPUT_EMAIL.classList.remove("hidden");
        BORDER_EMAIL.classList.add("inputErrorBorder");
        ERROR_EMAIL.classList.remove("hidden");
    }
    if(document.myForm.password.value == ""){
        console.log("please provide your password");
        INPUT_PASSWORD.classList.remove("hidden");
        BORDER_PASSWORD.classList.add("inputErrorBorder");
        ERROR_PASSWORD.classList.remove("hidden");
    }
}