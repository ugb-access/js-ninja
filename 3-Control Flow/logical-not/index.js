// Use of not operator in if statements
 
let user = false;

document.getElementById("btn").innerHTML = user;
// document.getElementsByTagName("body").style.backgroundColor = "yellow";
document.getElementById("btn").addEventListener("click", function() {
        user = !user
        console.log(user);
        document.getElementById("btn").innerHTML = user;
        if(!user) {
            document.getElementsByTagName("body")[0].style.backgroundColor = "yellow";
        } else {
            document.getElementsByTagName("body")[0].style.backgroundColor = "green";
        }
})