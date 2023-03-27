const empty = ""
const uCase = "ABCDEFGHIJKLMNOPQRSTUVWXY"
const lCase = "abcdefghijklmnopqrstuvwxy"
const number = "0123456789"
const symbol = "!@#$%^&*=-_";

const pLength = document.getElementById('p-length');
const upperCase = document.getElementById('p-uppercase');
const lowerCase = document.getElementById('p-lowercase');
const pnumber = document.getElementById('p-number');
const psymbols = document.getElementById('p-symbols');
const submit = document.getElementById('submit');
const password = document.getElementById('password');

submit.addEventListener("click", () => {
    let initialPassword = empty;
    (upperCase.checked) ? initialPassword +=uCase : "";
    (lowerCase.checked) ? initialPassword +=lCase : "";
    (pnumber.checked) ? initialPassword +=number : "";
    (psymbols.checked) ? initialPassword +=symbol : "";

    password.value = generatePassword(pLength.value,initialPassword)
});

function generatePassword(l,initialPassword){
    let pass = "";
    for(let i=0;i<l;i++){
        pass += initialPassword.charAt(Math.floor(Math.random()*initialPassword.length));
    }
    return pass;
}

//copy password to clipboard

const copy = document.getElementById("copy");
copy.addEventListener("click", () => {
    if(password.value == ""){
        alert("Please Generate a Password");
    }else{
        password.select();
        document.execCommand("copy");
        alert("Password hAs been copied to clipboard")
    }

})