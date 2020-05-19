let products = [];

if(products[0]) {
    console.log("passed")
}

document.getElementById("btn").addEventListener("click", function() {
    window.location.hash = document.getElementById("inp").value;
    console.log(window.location.href)
});

