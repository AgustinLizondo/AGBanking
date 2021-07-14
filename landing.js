//Button
var button = document.getElementById("button");
var nav = document.getElementById("nav");
var bankInfo = document.querySelector(".bankInfo");
var transferBlock = document.querySelector(".transferBlock");

button.addEventListener("click", ()=>{
    nav.classList.toggle("shown");
    bankInfo.classList.toggle("notBlurred");
    bankInfo.classList.toggle("blurred");
})