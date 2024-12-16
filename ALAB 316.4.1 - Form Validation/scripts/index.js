let regEl = document.querySelector("#registration");
let regUsernameEl = regEl.elements["username"];
let regEmailEl = regEl.elements["email"];
let regPasswordEl = regEl.elements["password"];
let regPasswordCheckEl = regEl.elements["passwordCheck"];
let loginEl = document.querySelector("#login");
let loginUsernameEl = loginEl.elements["username"];
let loginPasswordEl = loginEl.elements["password"];
let errorEl = document.querySelector("#errorDisplay");
let errorMessage = "";

regEl.addEventListener("submit", (e) => {
    e.preventDefault();
    let isUsernameValid = validateUsername(regUsernameEl.value);
    console.log(errorMessage);
    console.log(isUsernameValid);
});

const validateUsername = function(username) {
    if (username.length === 0) {
        errorMessage = "Username cannot be blank!";
        return false;
    }
    else if (username.length < 4) {
        errorMessage = "Username must have 4 or more characters!";
        return false;
    }
    else if (/^([a-zA-Z0-9]).*?\1|(.)(?!.*\2)(?=.*.)$/.test(username)) {
        errorMessage = "Username must contain 2 unique characters.";
        return false;
    }
    else if (!/^[a-zA-Z0-9]+$/.test(username)) {
        errorMessage = "Username must not contain special characters or white space!";
        return false;
    }
    else
        return true;
};

const validateEmail = function(email) {
    if (email.split('@')[1] !== "example.com") {
        errorMessage = "Email domain is NOT example.com!";
        return false;
    }
    else {
        
        return email;
    }
};

const validatePassword = function(password) {
    if (password.length < 12) {
        errorMessage = "Password MUST be 12 characters long!";
        return false;
    }
    else if (password.toLowerCase() === password) {
        errorMessage = "Password must have at least one upper case and one lower case letter.";
        return false;
    }
    else
        return true;
};