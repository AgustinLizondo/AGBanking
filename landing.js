var button = document.getElementById("button");
var nav = document.getElementById("nav");
var bankInfo = document.querySelector(".bankInfo");

button.addEventListener("click", ()=>{
    nav.classList.toggle("shown");
    bankInfo.classList.toggle("blurred");
})

