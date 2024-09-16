const PasswordBox = document.getElementById("Password");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbols = "!@#$%&*";

const allChar = upperCase + lowerCase + number + symbols;

function createPassword(){
    let Password = "";
    Password += upperCase[Math.floor(Math.random() * upperCase.length)];
    Password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    Password += number[Math.floor(Math.random() * number.length)];
    Password += symbols[Math.floor(Math.random() * symbols.length)];

    while(length > Password.length){
        Password += allChar[Math.floor(Math.random() * allChar.length)]
    }
    PasswordBox.value = Password;
}

function copyPasswor(){
    PasswordBox.select();
    document.execCommand("copy");
}