// Logical operators OR || and AND && 

const password = document.getElementById("passwordValue").value;
console.log(password)
// console.log(password.search("@"));

if(password.length >= 12 && password.includes("@")) {
    document.getElementById("passChecker").style.width = "100px";
    document.getElementById("passChecker").style.height = "100px";
    document.getElementById("passChecker").style.background = "green";
    document.getElementById("passChecker").innerHTML = "Your password is way too strong";
} else if(password.length >= 8 || password.indexOf("@") && password.length >= 8) {
    document.getElementById("passChecker").style.width = "100px";
    document.getElementById("passChecker").style.height = "100px";
    document.getElementById("passChecker").style.background = "yellow";
    document.getElementById("passChecker").innerHTML = "Your password is still very strong";
} else {
    document.getElementById("passChecker").style.width = "100px";
    document.getElementById("passChecker").style.height = "100px";
    document.getElementById("passChecker").style.background = "red";
    document.getElementById("passChecker").innerHTML = "Your password is weak";
}