const password = "pass@123";
let result = null;

if(password >= 6) {
    console.log("Password is strong");
    result = "Password is strong";
} else if(password >= 4) {
    console.log('passoword is good');
    result = 'password is good';
} else {
    console.log("password is very weak");
    result = "password is very weak";
}

document.getElementById("printOut").innerHTML = result;